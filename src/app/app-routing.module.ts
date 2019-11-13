import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './posts/posts.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
  { path: 'articles', component: PostsComponent, data: { name: 'Articles', icon: 'menu_book', tooltip: 'Articles', type: 'public' } },
  { path: 'terms', component: TermsComponent, data: { name: 'Terms', icon: 'policy', tooltip: 'Terms', type: 'public' } },
  { path: 'contact', component: ContactFormComponent, data: { name: 'Contact Us', icon: 'alternate_email', tooltip: 'Contact Us', type: 'public' }},
  { path: '**', component: HomeComponent, data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } }
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { anchorScrolling: 'enabled'} )
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
