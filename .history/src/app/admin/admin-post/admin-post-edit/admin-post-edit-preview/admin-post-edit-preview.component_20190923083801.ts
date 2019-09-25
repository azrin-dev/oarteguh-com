import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-post-edit-preview',
  templateUrl: './admin-post-edit-preview.component.html',
  styleUrls: ['./admin-post-edit-preview.component.scss']
})
export class AdminPostEditPreviewComponent implements OnInit {

   post: Post;
   title: Post['title'];
   subtitle: Post['subtitle'];
   safeContent: string;

  constructor(
   private route: ActivatedRoute,
   private postService: PostService,
   private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

   this.route.paramMap.subscribe(
      (response: any) => {
         let postId = response.params.id;
         this.postService.getPost(postId).subscribe(
            (response: Post) => {
               if(response && response._id){
                  this.postService.postCard.subscribe(
                     (post: Post) => {
                        this.post = post;
                     })}})}
   )

   this.postService.postContent.subscribe(
      (response: any) => {
         this.safeContent = response as string;
      }
   )

   this.postService.titleCard.subscribe(
      (response: any) => {
         this.title = response;
      }
   )

   this.postService.subtitleCard.subscribe(
      (response: any) => {
         this.subtitle = response;
      }
   )

  }

}
