import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post-service/post-service.service';
import { Post } from 'src/app/interface/post';
import { ProfileService } from 'src/app/services/profile-service/profile-service.service';
import { User } from 'src/app/interface/user';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpUploadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, last, catchError } from 'rxjs/operators';
import { Category } from './chip-categories/chip-categories.component';



@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {

   formNewPost: FormGroup;
   profile: User;
   created: number = Date.now();
   titleSlug: string;
   
   fileName: string;
   selectedImage;
   uploadImage: boolean = false;
   uploading = 'accent';
   uploadPct = 0;
   uploaded: boolean = false;
   categories: Post['categories'];
   tags: Post['tags'];

  constructor(

      private profileService: ProfileService,
      private postService: PostService,
      public snackBar: MatSnackBar

  ) {

         const profile = this.profileService.profile.subscribe(
            (response: User) => {
               if(response && response.id) this.profile = response;
               else this.profile = null;
            }
         );

         this.formNewPost = new FormGroup({
            title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            subtitle: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            content: new FormControl('', [ Validators.required ]),
            image: new FormControl(''),
            slug: new FormControl('', [ Validators.required ])
         });

         this.postService.postCats.subscribe(
            (response: any) => {                          
               this.categories = response;               
         } );

         this.postService.postTags.subscribe(
            (response: any) => {                       
               this.tags = response;                   
         } );
   }

  ngOnInit() {
  }

  get titleCtrl(){ return this.formNewPost.get('title') };
  get subtitleCtrl(){ return this.formNewPost.get('subtitle') };
  get contentCtrl(){ return this.formNewPost.get('content') };
  get imageCtrl(){ return this.formNewPost.get('image') };
  get slugCtrl(){ return this.formNewPost.get('slug') };

  createSlug(){
     let title = this.titleCtrl.value.toLowerCase().split(' ').join('-');
     let date = Date.now();
     let name = this.profile.name.toLowerCase().split(' ').join('-');

     let slug = `/${name}/${date}/${title}`;
     this.slugCtrl.setValue(slug);
  }

  selectedFile(event){
     const file = event.target.files[0];
     
     if(file && file.name){
        this.uploading = 'accent';
        this.uploaded = false;
        this.uploadPct = 0;
         let fileExt = file.name.split('.');
         if(fileExt[1] === 'jpg' || 'png' || 'jpeg' ){
            this.selectedImage = file;
         }
         else this.snackBar.open('Please select an image file with png or jpg or jpeg extension', 'X', { duration: 10000, panelClass: 'red-theme' });
     }
  }

  uploadFile(){
     let file = this.selectedImage;
     const upload = this.postService.uploadFileToDb(file)
         .pipe(
            map(event => this.getEventMessage(event, file)),
            tap(event => { return event }),
            last()
         )
         .subscribe(
            (response: any) => {
               if(response && response.image){
                  this.uploaded = true;
                  this.imageCtrl.setValue(response.image);
                  this.uploading = 'primary';
                  this.snackBar.open('Picture successfully uploaded.', 'X', { duration: 10000, panelClass: 'pink-style'});
               }
               else this.snackBar.open('Unable to upload picture, please try again.', 'X', { duration: 10000, panelClass: 'red-style'});

            },
            (error => {
                  this.snackBar.open('Error during upoload: ' + error, 'X', { duration: 10000, panelClass: 'red-style'})
               })
         )
   }

   /** Return distinct message for sent, upload progress, & response events */
   private getEventMessage(event: HttpEvent<any>, file: File) {
      switch (event.type) {

         case HttpEventType.UploadProgress:
            let progress = {
               loaded: event.loaded,
               total: event.total
            };
            this.uploadPct = event.loaded / event.total * 100;
            return progress;

         case HttpEventType.Response:
            return event.body;

      }
   }

   showProgress(message){
      return message;
   }

   submitPost(){
      let form = this.formNewPost.value;
      form.categories = this.categories;
      form.owner = this.profile._id;
      form.tags = this.tags;
      this.postService.newPost(form).subscribe(
         (response: Post) => {
            console.log(response);
         }
      )

   }
  



  
}
