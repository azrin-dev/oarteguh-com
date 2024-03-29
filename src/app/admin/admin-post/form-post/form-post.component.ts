import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';
import { User } from 'src/app/configurations/interface/user';
import { MatSnackBar } from '@angular/material';
import { HttpClient, HttpUploadProgressEvent, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, last, catchError } from 'rxjs/operators';
import { Category } from './chip-categories/chip-categories.component';
import { editorConfig } from 'src/app/configurations/services/post-service/editor-config';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';



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
   uploadImage = false;
   uploading = false;
   uploadPct = 0;
   uploaded = false;
   categories: Post['categories'];
   tags: Post['tags'];
   sidebar = false;
   rawContent: string;

   content: any;

  constructor(

      private profileService: ProfileService,
      private postService: PostService,
      public snackBar: MatSnackBar,
      private sanitizer: DomSanitizer

  ) {
         const profile = this.profileService.profile.subscribe(
            (response: User) => {
               if (response && response.id) { this.profile = response; } else { this.profile = null; }
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

  get titleCtrl() { return this.formNewPost.get('title'); }
  get subtitleCtrl() { return this.formNewPost.get('subtitle'); }
  get contentCtrl() { return this.formNewPost.get('content'); }
  get imageCtrl() { return this.formNewPost.get('image'); }
  get slugCtrl() { return this.formNewPost.get('slug'); }

   createSlug() {
      const title = this.titleCtrl.value.toLowerCase().split(' ').join('-');
      const date = Date.now();
      const name = this.profile.name.toLowerCase().split(' ').join('-');
      const slug = `/${name}/${date}/${title}`;
      this.slugCtrl.setValue(slug);
   }

   updateTitleSource(event) {
      const value = event.target.value;
      this.postService.titleSource.next(value);
   }

   updateSubtitleSource(event) {
         const value = event.target.value;
         this.postService.subtitleSource.next(value);
      }

   updateContentSource(event) {
      const content = event.target.innerText;
      this.rawContent = content;
      const safeContent = this.sanitizer.bypassSecurityTrustHtml(content) as SafeHtml;
      this.content = safeContent;
      this.postService.contentSource.next(safeContent);
   }

   enterEvent(event) {
      if (event.keyCode === 13) {

         const selection = document.getSelection();

         // Get range from selection which specify anchorOffset and focusOffset value
         const ranges: Range[] = [];
         for (let i = 0; i < selection.rangeCount; i++) {
            ranges[i] = selection.getRangeAt(i);
         }
         const range = ranges[0];
         const newElement = document.createElement('p') as HTMLElement;
         range.insertNode(newElement);

      }
   }

   selectedFile(event) {
      const file = event.target.files[0];

      if (file && file.name) {
         this.uploading = true;
         this.uploaded = false;
         this.uploadPct = 0;
         const fileExt = file.name.split('.');
         if (fileExt[1] === 'jpg' || 'png' || 'jpeg' ) {
               this.selectedImage = file;
               this.postService.imageSource.next(file);
            } else { this.snackBar.open('Please select an image file with png or jpg or jpeg extension', 'X', { duration: 10000, panelClass: 'red-theme' }); }
      }
   }

   uploadFile() {
      const file = this.selectedImage;
      const upload = this.postService.uploadFileToDb(file)
         .pipe(
            map(event => this.getEventMessage(event, file)),
            tap(event => event),
            last()
         )
         .subscribe(
            (response: any) => {
               if (response && response.image) {
                  this.uploaded = true;
                  this.imageCtrl.setValue(response.image);
                  this.uploading = true;
                  this.snackBar.open('Picture successfully uploaded.', 'X', { duration: 10000, panelClass: 'pink-style'});
               } else { this.snackBar.open('Unable to upload picture, please try again.', 'X', { duration: 10000, panelClass: 'red-style'}); }

            },
            (error => {
                  this.snackBar.open('Error during upoload: ' + error, 'X', { duration: 10000, panelClass: 'red-style'});
               })
         );
   }

   /** Return distinct message for sent, upload progress, & response events */
   private getEventMessage(event: HttpEvent<any>, file: File) {
      switch (event.type) {

         case HttpEventType.UploadProgress:
            const progress = {
               loaded: event.loaded,
               total: event.total
            };
            this.uploadPct = event.loaded / event.total * 100;
            return progress;

         case HttpEventType.Response:
            return event.body;

      }
   }

   showProgress(message) {
      return message;
   }

   submitPost() {
      const form = this.formNewPost.value;
      form.categories = this.categories;
      form.owner = this.profile._id;
      form.tags = this.tags;
      form.content = this.rawContent;
      this.postService.newPost(form).subscribe(
         (response: Post) => {
            if (response && response._id) { this.snackBar.open('Post submission is successfull.', 'X', {duration: 10000, panelClass: 'pink-style'}); } else { this.snackBar.open('Post submission fail. Please try again', 'X', {duration: 10000, panelClass: 'red-style'}); }
         },
         error => this.snackBar.open('Post submission error: ' + error, 'X', {duration: 10000, panelClass: 'red-style'})
      );

   }





}
