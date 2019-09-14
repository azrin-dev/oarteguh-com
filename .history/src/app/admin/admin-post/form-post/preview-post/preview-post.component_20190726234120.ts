import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss']
})
export class PreviewPostComponent implements OnInit {

   sidebar: boolean = true;

   @Input('formNewPost') post: Post;
  constructor() { }

  ngOnInit() {
  }

}
