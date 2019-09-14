import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { PostService } from '../services/post-service/post-service.service';
import { Post } from '../interface/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   posts = [
      {
         poster: { 
            name: 'Azrin Amin', 
            slug: '/user/profile/azrin-amin',
            avatar: 'assets/images/man.png',
            about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
         },
         post: {
            id: '1234',
            date: Date.now(),
            category: 'rutrum',
            slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
            image: 'assets/images/banner.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
            tags: [{tag: 'Sed'}, {tag: 'tincidunt'}, {tag: 'arcu'}, {tag: 'dolor'}, {tag: 'placerat'}],
            liked: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
            comment: [
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               }
            ]
         }
      },
      {
         poster: { 
            name: 'Azrin Amin', 
            slug: '/user/profile/azrin-amin',
            avatar: '',
            about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
         },
         post: {
            id: '1235',
            date: Date.now(),
            category: 'iaculis',
            slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
            image: null,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
            tags: [{tag: 'Sed'}, {tag: 'tincidunt'}, {tag: 'arcu'}, {tag: 'dolor'}, {tag: 'placerat'}],
            liked: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
            comment: [
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               }
            ]
         }
      },
      {
         poster: { 
            name: 'Azrin Amin', 
            slug: '/user/profile/azrin-amin',
            avatar: '',
            about: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
         },
         post: {
            id: '1236',
            date: Date.now(),
            category: 'iaculis',
            slug: '/post/azrin/1562746011101/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
            image: null,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
            tags: [{tag: 'Sed'}, {tag: 'tincidunt'}, {tag: 'arcu'}, {tag: 'dolor'}, {tag: 'placerat'}],
            liked: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
            comment: [
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               },
               {
                  user: 'user_id',
                  date: Date.now(),
                  content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                  vote_up: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}],
                  vote_down: [ {user: 'user_id'}, {user: 'user_id'}, {user: 'user_id'}]
               }
            ]
         }
      }
   ];
   titlePosts: Post;
   categoriesPosts: Post[];
  constructor(
     private postService: PostService
  ) { }

  ngOnInit() {

   // Get categories
   var posts = this.posts;
   let ctgs = posts.reduce((acc, value) => {
         if(value.post.category) acc.push(value.post.category);
         return acc;
      }, []);
   let spreadCtgs = [...new Set(ctgs)];
   var newCtgs = spreadCtgs.map((c) => { return c });
   // console.log(newCtgs);

   this.filterPosts(posts, newCtgs)


   this.postService.postCard.subscribe(
      (response: Post) => {
         this.titlePosts = response;
      }
   )
  }

  filterPosts(posts, categories)
  {   
     var postsByCat = categories.map((category) => {
         let catObj = [{ category: category, posts: []}];
         return catObj;
     });
     console.log(postsByCat);

      let filteredPosts = posts.reduce(( acc, value) => {
         acc = postsByCat.foreach((pBC) => {
            if(value.post.category = pBC.category){
               pBC.posts.push(value);
            }
         });

         return acc;
      });
      
      console.log(filteredPosts);

  }
}






@Directive({ 
   selector: 'div[id]'
})
export class PostCards{   
   
   constructor(
      private _bottomSheet: MatBottomSheet,
      private _postService: PostService
   ){}

   @HostListener ('mouseenter', ['$event'])
   onMouseEnter(event: any)
   {  
      let title: Post['title'] = event.target.id;
      this._postService.setPostSourceValue(title);
      // this._bottomSheet.open(BottomSheetGoToPost);
   }
}


@Component({
   selector: 'post-bottom-sheet',
   templateUrl: './user-bottomsheet.component.html',
   styleUrls: ['./user.component.scss']

})
export class BottomSheetGoToPost{
   constructor(
      private _bottomSheetRef: MatBottomSheetRef<BottomSheetGoToPost>
   ){}


}