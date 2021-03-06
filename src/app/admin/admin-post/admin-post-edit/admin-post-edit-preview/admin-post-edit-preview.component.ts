import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';

@Component({
  selector: 'app-admin-post-edit-preview',
  templateUrl: './admin-post-edit-preview.component.html',
  styleUrls: ['./admin-post-edit-preview.component.scss']
})
export class AdminPostEditPreviewComponent implements OnInit {

   post: Post;
   imagePreview;
   previewExist = false;
   categories: Post['categories'];
   title: Post['title'];
   subtitle: Post['subtitle'];
   safeContent: string;
   tags: Post['tags'];

  constructor(
   private route: ActivatedRoute,
   private postService: PostService
  ) { }

  ngOnInit() {

   this.route.paramMap.subscribe(
      (response: any) => {
         const postId = response.params.id;
         this.postService.getPost(postId).subscribe(
            (response: Post) => {
               if (response && response._id) {
                  this.postService.postCard.subscribe(
                     (post: Post) => {
                        this.post = post;
                     }); }}); }
   );

   this.postService.postImage.subscribe(
      (response: any) => {
         console.log(response);
         if (response && response.name) {
            // Image preview
            const reader = new FileReader();
            reader.onload = () => {
               this.imagePreview = reader.result;
            };
            reader.readAsDataURL(response);
            this.previewExist = true;
         } else { this.imagePreview = null; }
      }
   );

   this.postService.postContent.subscribe(
      (response: any) => {
         this.safeContent = response as string;
      }
   );

   this.postService.titleCard.subscribe(
      (response: any) => {
         this.title = response;
      }
   );

   this.postService.subtitleCard.subscribe(
      (response: any) => {
         this.subtitle = response;
      }
   );

   this.postService.postCats.subscribe(
      (response: any) => {
         this.categories = response;
      }
   );

   this.postService.postTags.subscribe(
      (response: any) => {
         this.tags = response;
      }
   );

  }

}
