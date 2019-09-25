import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/configurations/services/post-service/post-service.service';
import { Post } from 'src/app/configurations/interface/post';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-post-edit-form',
  templateUrl: './admin-post-edit-form.component.html',
  styleUrls: ['./admin-post-edit-form.component.scss']
})
export class AdminPostEditFormComponent implements OnInit {

   post: Post;
   formPost: FormGroup

  constructor(
   private route: ActivatedRoute,
   private postService: PostService
  ) { 

         this.formPost = new FormGroup({
            title: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            subtitle: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
            content: new FormControl('', [ Validators.required ]),
            image: new FormControl(''),
            slug: new FormControl('', [ Validators.required ])
         });
  }

  ngOnInit() {

      this.route.paramMap.subscribe(
         (response: any) => {
            if(response.params.id) this.getPost(response.params.id);
         }
      )
  }

  getPost(id){
     this.postService.getPost(id).subscribe(
        (response: Post) => {
           console.log(response);
           this.formPost.setValue({ 
              title: response.title,
              subtitle: response.subtitle,
              content: response.content,
              image: response.image,
              slug: response.slug
            });
        }
     )
  }

}
