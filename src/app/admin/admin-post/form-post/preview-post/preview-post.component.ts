import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/configurations/interface/post';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { ProfileService } from 'src/app/configurations/services/profile-service/profile-service.service';
import { User } from 'src/app/configurations/interface/user';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

   profile: User;
   contentExist = false;
   sidebar = true;
   imagePreview;
   avatar;
   title: Post['title'];
   subtitle: Post['subtitle'];
   categories: Post['categories'];
   safeContent: string ;


  constructor(
     private postService: PostService,
     private profileService: ProfileService,
     private sanitizer: DomSanitizer
  ) {
         this.profileService.profile.subscribe(
            (response) => { this.profile = response; }
         );

         this.postService.postImage.subscribe(
            (response: any) => {
               if (response && response.name) {
                  // Image preview
                  const reader = new FileReader();
                  reader.onload = () => {
                     this.imagePreview = reader.result;
                  };
                  reader.readAsDataURL(response);
                  this.contentExist = true;
               } else { this.imagePreview = null; }
         });

         // this.avatar = `assets/images/${this.profile.image}.png`;

         this.postService.titleCard.subscribe(
            (response) => {
               this.title = response;
               this.contentExist = true;
            }
         );

         this.postService.subtitleCard.subscribe(
            (response) => {
               this.subtitle = response;
               this.contentExist = true;
            }
         );

         this.postService.postCats.subscribe(
            (response) => {
               this.categories = response;
               this.contentExist = true;

            }
         );

         this.postService.postContent.subscribe(
            (response: any) => {
               console.log(response);
               if (response === undefined) { this.safeContent = 'HTML content is displayed here'; } else {
                  this.safeContent = response as string;
                  this.contentExist = true;
               }
            }
         );

   }

  ngOnInit() {



  }



}
