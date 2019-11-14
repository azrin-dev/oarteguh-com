import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthService } from './configurations/services/auth/auth.service';
import { AuthGuardService } from './configurations/services/auth-guard/auth-guard.service';
import { AdminAuthGuardService } from './configurations/services/admin-auth-guard/admin-auth-guard.service';
import { APP_BASE_HREF } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSerialComponent } from './admin/admin-serial/admin-serial.component';
import { AdminSerialTableComponent, BottomSheetConfirm } from './admin/admin-serial/admin-serial-table/admin-serial-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MAT_CHECKBOX_CLICK_ACTION, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationsComponent } from './navigations/navigations.component';
import { TagsComponent } from './tags/tags.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthRegisterComponent } from './user/auth-register/auth-register.component';
import { AdminPostComponent } from './admin/admin-post/admin-post.component';
import { FormPostComponent } from './admin/admin-post/form-post/form-post.component';
import { ChipCategoriesComponent } from './admin/admin-post/form-post/chip-categories/chip-categories.component';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ChipTagsComponent } from './admin/admin-post/form-post/chip-tags/chip-tags.component';
import { PreviewPostComponent } from './admin/admin-post/form-post/preview-post/preview-post.component';
import { PostComponent } from './post/post.component';
import { AboutWhoComponent } from './home/about-who/about-who.component';
import { AboutWhatComponent } from './home/about-what/about-what.component';
import { PostsComponent } from './posts/posts.component';
import { BannerFullComponent } from './home/banner-full/banner-full.component';
import { PostCommentsComponent } from './post/post-comments/post-comments.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminPostEditComponent } from './admin/admin-post/admin-post-edit/admin-post-edit.component';
import { AdminPostEditPreviewComponent } from './admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component';
import { AdminPostEditFormComponent } from './admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { MainLogoComponent } from './logo/main-logo/main-logo.component';
import { CallbackComponent } from './user/login/callback/callback.component';
import { LinkedinComponent } from './user/login/linkedin/linkedin.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ProfileComponent } from './pages-user/profile/profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { DashboardAdminComponent } from './pages-admin/dashboard-admin/dashboard-admin.component';
import { PostsAdminComponent } from './pages-admin/posts-admin/posts-admin.component';
import { PostAdminComponent } from './pages-admin/posts-admin/post-admin/post-admin.component';


export function tokenGetter() {
   return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminSerialComponent,
    AdminSerialTableComponent,
    BottomSheetConfirm,
    ContactFormComponent,
    AdminMessageComponent,
    NavigationsComponent,
    TagsComponent,
    HomeComponent,
    AuthRegisterComponent,
    AdminPostComponent,
    FormPostComponent,
    ChipCategoriesComponent,
    ChipTagsComponent,
    PreviewPostComponent,
    PostComponent,
    AboutWhoComponent,
    AboutWhatComponent,
    PostsComponent,
    BannerFullComponent,
    PostCommentsComponent,
    AdminPostsComponent,
    AdminPostEditComponent,
    AdminPostEditPreviewComponent,
    AdminPostEditFormComponent,
    ForgotPasswordComponent,
    MainLogoComponent,
    CallbackComponent,
    LinkedinComponent,
    LayoutComponent,
    SidebarComponent,
    TermsComponent,
    ProfileComponent,
    DashboardAdminComponent,
    PostsAdminComponent,
    PostAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},
    {provide: MAT_CHIPS_DEFAULT_OPTIONS, useValue: {separatorKeyCodes: [ENTER, COMMA]}},
    AuthService,
    AuthGuardService,
    AdminAuthGuardService
  ],
  entryComponents: [
     BottomSheetConfirm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
