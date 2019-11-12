import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminAuthGuardService } from './configurations/services/admin-auth-guard/admin-auth-guard.service';
import { AuthGuardService } from './configurations/services/auth-guard/auth-guard.service';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './user/register/register.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthRegisterComponent } from './user/auth-register/auth-register.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { PreviewPostComponent } from './admin/admin-post/form-post/preview-post/preview-post.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminPostEditComponent } from './admin/admin-post/admin-post-edit/admin-post-edit.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { CallbackComponent } from './user/login/callback/callback.component';
import { LinkedinComponent } from './user/login/linkedin/linkedin.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProfileComponent } from './pages-user/profile/profile.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
  { path: 'articles', component: PostsComponent, data: { name: 'Articles', icon: 'menu_book', tooltip: 'Articles', type: 'public' } },
  { path: 'terms', component: TermsComponent, data: { name: 'Terms', icon: 'policy', tooltip: 'Terms', type: 'public' } },
  { path: 'contact', component: ContactFormComponent, data: { name: 'Contact Us', icon: 'alternate_email', tooltip: 'Contact Us', type: 'public' }},

  /*
  { path: 'user/profile', component: ProfileComponent, data: { name: 'Name', icon: 'account_circle', tooltip: 'Profile Page', type: 'user' } },
  { path: 'posts/tags/tag/:tag', component: TagsComponent, data: { name: 'Tag', icon: 'dashboard', tooltip: 'Tag Page', type: 'user' } },
  { path: 'user/login', component: LoginComponent, data: { name: 'Login', icon: 'person', tooltip: 'Login Page', type: 'auth' } },
  { path: 'user/login/linkedin', component: LinkedinComponent, data: { name: 'Linkedin', icon: 'person', tooltip: 'Linkedin Callback Page', type: 'admin' } },
  { path: 'user/forgot-password', component: ForgotPasswordComponent, data: { name: 'Forgot Password', icon: 'person', tooltip: 'Forgot Password', type: 'admin' } },
  { path: 'post/:user/:id/:title', component: PostComponent, data: { name: 'Post', icon: 'menu_book', tooltip: 'Post', type: 'admin' } },
  { path: 'user/register', component: RegisterComponent, data: { name: 'Register', icon: 'person_add', tooltip: 'Register Page', type: 'auth' } },
  { path: 'user/register/token/:authToken', component: AuthRegisterComponent, data: { name: 'Register', icon: 'person_add', tooltip: 'Authentication Register Page', type: 'admin' } },

  // User routes
  { path: 'user/profile', component: UserComponent, canActivate: [AuthGuardService], data: { name: 'Profile', icon: 'person', tooltip: 'Profile Page', type: 'user' } },

  // Admin routes
  { path: 'admin/message', component: AdminMessageComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Message',icon: 'dashboard', type: 'admin'  } },
  { path: 'admin/posts/post/new', component: AdminPostComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Post', icon: 'book', type: 'admin'  } },
  { path: 'admin/posts/post/edit/:id', component: AdminPostEditComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Post', icon: 'book', type: 'admin'  } },
  { path: 'admin/posts', component: AdminPostsComponent, canActivate: [AuthGuardService, AdminAuthGuardService], data: { name: 'Posts', icon: 'book', type: 'admin'  } },
   */

  // Wildcard routes
  { path: '**', component: HomeComponent, data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } },
];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, { anchorScrolling: 'enabled'} )
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
