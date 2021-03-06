import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../configurations/services/post-service/post-service.service';
import { Post } from '../configurations/interface/post';
import { MatSnackBar } from '@angular/material';
import { ProfileService } from '../configurations/services/profile-service/profile-service.service';
import { User } from '../configurations/model/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

   post: Post;
   profile: User;
   addComment = false;
   commentCtrl: FormControl;


  constructor(
     private router: ActivatedRoute,
     private postService: PostService,
     private profileService: ProfileService,
     public snackBar: MatSnackBar
  ) {
         this.commentCtrl = new FormControl('', [ Validators.required, Validators.maxLength(200) ]);
  }

  ngOnInit() {

      this.router.paramMap.subscribe(
         (response: any) => {
            const postId = response.params.id;
            if (postId) { this.getPost(postId); } else { this.snackBar.open('Post does not exist', 'X', { duration: 10000, panelClass: 'red-style'}); }
         }
      );

      this.profileService.profile.subscribe(
         (response: User) => {
            if (response && response._id) { this.profile = response; } else { this.profile = null; }
         }
      );
  }

  getPost(id) {
     this.postService.getPost({ id }).subscribe(
        (response: Post) => {
           console.log(response);
           this.post = response;
        }
     );
  }

  likePost(event) {
     const profile = this.profile;
     if (profile && profile._id) {
     } else { this.snackBar.open('Please Login to Like post', 'X', { duration: 10000, panelClass: 'red-style' }); }
  }

  commentPost(event) {
      const profile = this.profile;
      if (profile && profile._id) {
         this.addComment = true;
      } else { this.snackBar.open('Please Login to Comment on post', 'X', { duration: 10000, panelClass: 'red-style' }); }
   }

   submitComment() {
      const comment = {
         content  :  this.commentCtrl.value,
         owner    :  this.profile._id,
         post     :  this.post.id
      };

      this.postService.newPostComment(comment).subscribe(
         (response: Post) => {
            if (response && response._id) { this.post = response; } else { this.snackBar.open('Saving comment fail. Please refresh browser and try again', 'X', { duration: 10000, panelClass: 'red-style' }); }
         },
         error => {
            this.snackBar.open(`Error saving comment. Please refresh browser and try again. Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-style' });
         }
      );
   }

}
