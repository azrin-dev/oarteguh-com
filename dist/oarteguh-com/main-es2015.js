(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-message/admin-message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-message/admin-message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  admin-message works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__post-edit-form\">\n\n   <mat-card *ngIf=\"post\">\n      \n      <mat-card-title class=\"lm__text-title-primary mat-elevation-z8\">\n         Edit Post\n      </mat-card-title>\n      \n      <mat-card-content>      \n         <form [formGroup]=\"formPost\" >\n\n            <div class=\"form\" *ngIf=\"!sidebar\">\n\n               <div class=\"lm__form\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n\n                  <!-- Image -->\n                  <div class=\"lm__form-button-container upload\" fxLayout=\"column\"> \n                     <input class=\"lm__input-hidden upload__item\" type=\"file\" #image (change)=\"selectedFile($event)\">\n                     <button  class=\"lm__form-button-upload upload__item\" \n                              type=\"button\" \n                              mat-icon-button [color]=\"uploading ? 'accent' : 'primary'\" \n                              (click)=\"image.click()\"\n                              matTooltip=\"Upload Post Image\"\n                     >\n                        <mat-icon>add_a_photo</mat-icon>\n                     </button>\n\n                     <div class=\"lm__form-progress-bar-title upload__item\" *ngIf=\"selectedImage\">\n                        File name: {{ selectedImage.name }} <br>\n                        File size: {{ selectedImage.size/(1*10e2) | number:'2.0-0'}} kB\n                     </div>\n                        \n                     <div fxFlex=\"40\" class=\"lm__form-progress-bar-button upload__item\" *ngIf=\"selectedImage\">\n                        <button  mat-raised-button class=\"lm__form-button-upload\" \n                                 (click)=\"uploadFile()\" \n                                 [color]=\"uploading ? 'accent' : 'primary'\" \n                                 [disabled]=\"uploaded\"\n                        >\n                           Upload Picture \n                        </button>    \n                     </div> \n\n                     <div class=\"lm__form-progress-bar-button upload__item\" *ngIf=\"selectedImage\">\n                        {{ uploadPct }} %   \n                     </div>\n\n                     <mat-progress-bar\n                        class=\"upload__item\"\n                        *ngIf=\"selectedImage\"\n                        [color]=\"uploading\"\n                        mode=\"determinate\"\n                        [value]=\"uploadPct\" >\n                     </mat-progress-bar>          \n                        \n                  </div>\n\n                  <!-- Title -->\n                  <mat-form-field>\n                     <input matInput #title placeholder=\"Title\" formControlName=\"title\" (change)=\"createSlug()\" (keyup)=\"updateTitleSource()\">\n                     <mat-hint>Title: Click to edit</mat-hint>\n                  </mat-form-field>\n\n                  <!-- Subtitle -->\n                  <mat-form-field>\n                     <input matInput placeholder=\"Subtitle\" formControlName=\"subtitle\" (keyup)=\"updateSubtitleSource()\">\n                     <mat-hint>Subtitle: Click to edit</mat-hint>\n                  </mat-form-field>\n                  \n                  <!-- Categories -->\n                  <div class=\"lm__form-item\">\n                     <app-chip-categories></app-chip-categories>\n                  </div>\n                  \n                  <!-- Content --> \n                  <label class=\"lm__form-div-label\">HTML Content</label>\n                  <div  contenteditable=\"true\"\n                        (keyup)=\"updateContentSource($event)\"\n                        class=\"lm__form-div-content\"     \n                        [innerHTML]=\"post.content\"                   \n                  >\n                  </div> \n                  \n                  <!-- Tags -->\n                  <app-chip-tags class=\"lm__form-tags\"></app-chip-tags>\n\n                  <!-- Slug -->\n                  <mat-form-field>\n                     <input matInput placeholder=\"Slug\" formControlName=\"slug\">\n                  </mat-form-field>  \n\n               </div>\n\n               <!-- Submit Button  -->\n               <div class=\"lm__form-button-submit\" fxLayout fxLayoutAlign=\"center center\">\n                  <button fxFlex=\"40\" mat-raised-button color=\"primary\"\n                     (click)=\"updatePost()\">\n                     Update Post\n                  </button>\n               </div>\n\n            </div>           \n\n         </form>\n      </mat-card-content>  \n\n   </mat-card> \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div  class=\"lm__post-card\"\n      *ngIf=\"post\"         \n>\n\n   <mat-card   class=\"shadow__png-ac-right\" \n   >   \n      \n      <!-- Owner  -->\n      <div class=\"lm__post-card-header\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n         <div fxFlex=\"5\" fxFlexAlign=\"start\">\n            <!-- Profile Image -->\n            <img mat-card-avatar id=\"{{ post.image }}\" class=\"lm__avatar\" src=\"assets/images/uploads/{{ post.owner.image }}\" >\n         </div>\n         <div class=\"lm__profile-info\" fxFlexAlign=\"start\">    \n            <!-- Profile Name  -->\n            <mat-card-title class=\"lm__profile-title\">\n               <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                  routerLink=\"user/profile/{{ post.owner.name }}/{{ post.owner.id }}\"\n               >                  \n                  {{ post.owner.name | titlecase }}\n               </a>\n            </mat-card-title>                                   \n            <!-- Profile Motto -->\n            <mat-card-subtitle class=\"lm__post-card-owner-subtitle\">\n               \"{{ post.owner.country | titlecase | slice:0:50 }}\"\n               <br>\n               <!-- Post Date  -->\n               <em>Posted on: {{ post.created| date:'d/M/y, h:mm:ss a' }}</em> \n            </mat-card-subtitle>\n         </div>\n      </div>\n\n      <!-- Card Image  -->\n      <div  id=\"{{ post.image }}\"\n            *ngIf=\"post.image ? true : elseBlock\"                                 \n      >\n         <img  mat-card-image   \n               *ngIf=\"!previewExist\"\n               src=\"assets/images/uploads/{{ post.image }}\" \n               alt=\"{{ post.image | titlecase }}\"                  \n         >   \n         <img  mat-card-image\n               *ngIf=\"previewExist\"\n               src=\"{{ imagePreview }}\"\n         >                                   \n      </div> \n      <ng-template #elseBlock >\n         <div id=\"{{ post.image }}\" \n            *ngIf=\"post.image\"\n         >\n            <img mat-card-image  \n               src=\"{{ post.image }}\" \n               alt=\"{{ post.image | titlecase }}\"               \n            > \n         </div>\n      </ng-template> \n\n      <!-- Post Title  -->\n      <mat-card-title class=\"lm__post-card-title shadow__text-right\" color=\"primary\">\n         {{ title || post.title | titlecase }}\n      </mat-card-title>\n\n      <!-- Post Subtitle  -->\n      <mat-card-subtitle class=\"lm__post-card-subtitle shadow__text-right\" color=\"accent\">\n         {{ subtitle || post.subtitle | titlecase }}\n      </mat-card-subtitle>\n      \n      <mat-card-content class=\"lm__post-card-content\">\n\n         <!-- Post Categories  -->\n         <div class=\"lm__post-card-categories\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n            <span class=\"lm__post-chip-categories\">Categories: </span>\n            <mat-chip-list>\n               <mat-chip \n                  *ngFor=\"let chip of categories || post.categories\" \n                  color=\"primary\" \n                  selected\n                  routerLink=\"/post/tags/tag/{{ chip.categories | lowercase }}\"\n                  matTooltip=\"Go to this Category\"\n               >\n                  {{ chip | titlecase }}\n               </mat-chip>\n            </mat-chip-list>\n         </div>\n\n         <!-- Contents  -->\n         <div id=\"{{ post.id }}\">                                             \n            \n            <div class=\"lm__post-card-content lm__text-capitalize\" [innerHTML]=\"safeContent || post.content\"> \n            </div>     \n            \n            <!-- Post Tags  -->\n            <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"start center\">\n               <span class=\"lm__post-chip-categories\">Tags: </span>\n               <mat-chip-list>\n                  <mat-chip class=\"lm__mat-chip-list\" \n                     *ngFor=\"let tag of tags || post.tags\" \n                     color=\"accent\" \n                     selected\n                     routerLink=\"/post/tags/tag/{{ tag.tags | lowercase }}\"\n                     matTooltip=\"Go to this tag\"\n                  >\n                     {{ tag | titlecase }}\n                  </mat-chip>\n               </mat-chip-list>\n            </div>\n\n            <div class=\"lm__post-divider\">\n               <mat-divider></mat-divider>\n            </div>\n            \n         </div>\n      </mat-card-content>\n   </mat-card>\n\n</div>  \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  fxLayout=\"row\" \n      fxLayoutAlign=\"center\"\n>\n\n   <div  class=\"lm__post-edit-preview\"\n         fxFlex=\"40%\"\n   >\n      <app-admin-post-edit-preview></app-admin-post-edit-preview>\n   </div>\n\n   <div class=\"lm__post-edit-form\"\n         fxFlex=\"60%\"\n   >\n         <app-admin-post-edit-form></app-admin-post-edit-form>\n   </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-min70vh-hidden\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center\">   \n\n   <div fxFlex=\"40\" class=\"lm__post-form-preview\" >\n      <app-preview-post></app-preview-post>\n   </div>\n\n   <div fxFlex=\"60\" class=\"lm__post-form\">      \n      <app-form-post></app-form-post>         \n   </div> \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n   <mat-chip-list #chipList aria-label=\"Post selection\">\n      <mat-chip *ngFor=\"let category of categories\" [selectable]=\"selectable\"\n         [removable]=\"removable\" (removed)=\"remove(category)\" \n         color=\"primary\" selected  >\n         {{ category | titlecase }}\n         <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"Select, add or remove category\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"add($event)\">\n      \n   </mat-chip-list>\n   <mat-hint>Categories: Add a new category followed by a comma</mat-hint>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n   <mat-chip-list #chipList aria-label=\"Post selection\">\n      <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\"\n         [removable]=\"removable\" (removed)=\"remove(tag)\" \n         color=\"accent\" selected  >\n         {{ tag | titlecase }}\n         <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input placeholder=\"Select, add or remove tag\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"add($event)\">      \n   </mat-chip-list>\n   <mat-hint>Tags: Add a new tag followed by a comma</mat-hint>\n</mat-form-field>\n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/form-post.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/form-post.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\n\n   <mat-card>\n      \n      <mat-card-title class=\"lm__text-title-primary mat-elevation-z8\">\n         Create New Post\n      </mat-card-title>\n      \n      <mat-card-content>      \n         <form [formGroup]=\"formNewPost\" >\n\n            <div class=\"form\" *ngIf=\"!sidebar\">\n\n               <div class=\"lm__form\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n\n                  <!-- Image -->\n                  <div class=\"lm__form-button-container upload\" fxLayout=\"column\"> \n                     <input class=\"lm__input-hidden upload__item\" type=\"file\" #image (change)=\"selectedFile($event)\">\n                     <button  class=\"lm__form-button-upload upload__item\" \n                              type=\"button\" \n                              mat-icon-button [color]=\"uploading ? 'accent' : 'primary'\" \n                              (click)=\"image.click()\"\n                              matTooltip=\"Upload Post Image\"\n                     >\n                        <mat-icon>add_a_photo</mat-icon>\n                     </button>\n\n                     <div class=\"lm__form-progress-bar-title upload__item\" *ngIf=\"selectedImage\">\n                        File name: {{ selectedImage.name }} <br>\n                        File size: {{ selectedImage.size/(1*10e2) | number:'2.0-0'}} kB\n                     </div>\n                        \n                     <div fxFlex=\"40\" class=\"lm__form-progress-bar-button upload__item\" *ngIf=\"selectedImage\">\n                        <button  mat-raised-button class=\"lm__form-button-upload\" \n                                 (click)=\"uploadFile()\" \n                                 [color]=\"uploading ? 'accent' : 'primary'\" \n                                 [disabled]=\"uploaded\"\n                        >\n                           Upload Picture \n                        </button>    \n                     </div> \n\n                     <div class=\"lm__form-progress-bar-button upload__item\" *ngIf=\"selectedImage\">\n                        {{ uploadPct }} %   \n                     </div>\n\n                     <mat-progress-bar\n                        class=\"upload__item\"\n                        *ngIf=\"selectedImage\"\n                        [color]=\"uploading\"\n                        mode=\"determinate\"\n                        [value]=\"uploadPct\" >\n                     </mat-progress-bar>          \n                        \n                  </div>\n\n                  <!-- Title -->\n                  <mat-form-field>\n                     <input matInput #title placeholder=\"Title\" formControlName=\"title\" (change)=\"createSlug()\" (keyup)=\"updateTitleSource($event)\">\n                     <mat-hint>Title: Click to edit</mat-hint>\n                  </mat-form-field>\n\n                  <!-- Subtitle -->\n                  <mat-form-field>\n                     <input matInput placeholder=\"Subtitle\" formControlName=\"subtitle\" (keyup)=\"updateSubtitleSource($event)\">\n                     <mat-hint>Subtitle: Click to edit</mat-hint>\n                  </mat-form-field>\n                  \n                  <!-- Categories -->\n                  <div class=\"lm__form-item\">\n                     <app-chip-categories></app-chip-categories>\n                  </div>\n                  \n                  <!-- Content --> \n                  <label class=\"lm__form-div-label\">HTML Content</label>\n                  <div  contenteditable=\"true\"\n                        (keyup)=\"updateContentSource($event)\"\n                        class=\"lm__form-div-content\"\n                  >\n                  </div> \n                  \n                  <!-- Tags -->\n                  <app-chip-tags class=\"lm__form-tags\"></app-chip-tags>\n\n                  <!-- Slug -->\n                  <mat-form-field>\n                     <input matInput placeholder=\"Slug\" formControlName=\"slug\">\n                  </mat-form-field>  \n\n               </div>\n\n               <!-- Submit Button  -->\n               <div class=\"lm__form-button-submit\" fxLayout fxLayoutAlign=\"center center\">\n                  <button fxFlex=\"40\" mat-raised-button color=\"primary\"\n                     (click)=\"submitPost()\">\n                     Submit Post\n                  </button>\n               </div>\n\n            </div>           \n\n         </form>\n      </mat-card-content>  \n\n   </mat-card> \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/preview-post/preview-post.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/preview-post/preview-post.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__card-pre\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"contentExist\">\n\n   <mat-card>\n\n      <!-- Poster Profile -->\n      <mat-card-header>\n         <div  *ngIf=\"profile\" fxLayout=\"row\" fxLayoutAlign=\"center startr\">\n            <div class=\"lm__preview-header\">\n               <img class=\"lm__preview-header-profile-avatar\" mat-card-avatar src=\"assets/images/{{ profile.image }}.png\">\n            </div>\n            <div class=\"lm__preview-header-profile-details\" fxLayout=\"column\">\n               <mat-card-title class=\"lm__profile-title\">\n                  <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                  >                  \n                     {{ profile.name | titlecase }}\n                  </a>\n               </mat-card-title>\n            \n               <mat-card-subtitle>\n                  \"{{ profile.name || 'Motto' | titlecase }}\"\n               </mat-card-subtitle>\n            </div>\n         </div>\n      </mat-card-header>\n\n      <div class=\"lm__card-pre-image\" *ngIf=\"imagePreview; else elseImage\">\n         <img mat-card-image [src]=\"imagePreview\">\n      </div>\n      <ng-template #elseImage>\n         <img mat-card-image src=\"assets/images/banner.jpg\">\n      </ng-template>\n      \n\n      <!-- User Action -->\n       <mat-card-content>\n         <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n            <div class=\"lm__icon-badge\">\n               <mat-icon color=\"accent\" matBadgeColor=\"accent\"\n                  matTooltip=\"Like and Dislike\"\n               >\n                  thumb_up\n               </mat-icon>\n            </div>\n            <div class=\"lm__icon-badge\">\n               <mat-icon color=\"accent\" matBadgeColor=\"accent\"\n                  matTooltip=\"Like and Dislike\"\n               >\n                  thumb_down\n               </mat-icon>\n            </div>\n            <div class=\"lm__icon-badge\">\n               <mat-icon color=\"accent\" matBadgeColor=\"accent\"\n                  matTooltip=\"Comments\"\n               >\n                  share\n               </mat-icon>\n            </div>\n         </div>\n      </mat-card-content>\n\n      <!-- Post Title -->\n      <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n         <a class=\"lm__a\" matTooltip=\"Go to this post\">\n            {{ title || 'Title' | titlecase }}\n         </a>\n      </mat-card-title>\n\n      <!-- Post Subtitle -->\n      <mat-card-subtitle>\n         {{ subtitle || 'Subtitle' | titlecase }}\n      </mat-card-subtitle>\n\n      <!-- Categories  -->\n      <mat-chip-list>\n         <mat-chip *ngFor=\"let category of categories\" color=\"primary\" selected>\n            {{ category || 'Categories'}}\n         </mat-chip>\n      </mat-chip-list>\n      \n      <!-- Content  -->\n      <mat-card-content > \n         <div class=\"lm__form-div-label\">HTML Contents</div>\n         <div class=\"lm__form-div-content-preview\" *ngIf=\"safeContent ? true : false\">            \n            <div [innerHTML]=\"safeContent\"></div>\n         </div>\n      </mat-card-content>\n\n\n\n      <!--\n      <mat-card-subtitle>{{ row.post.subtitle | titlecase }}</mat-card-subtitle>\n      <mat-card-content>                \n         {{ row.post.content | slice:0:200 }} ...\n         <button class=\"lm__a-button\" mat-button color=\"accent\" routerLink=\"{{ row.post.slug }}\">Read More</button>\n      </mat-card-content>\n      <mat-card-content>\n         <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"center center\">\n            <mat-chip-list aria-label=\"Fish selection\">\n               <mat-chip class=\"lm__mat-chip-list\" \n                  *ngFor=\"let tag of row.post.tags\" \n                  color=\"accent\" \n                  selected\n                  routerLink=\"/posts/tags/tag/{{ tag.tag | lowercase }}\"\n                  matTooltip=\"Go to this tag\"\n               >\n                  {{ tag.tag | titlecase }}\n               </mat-chip>\n            </mat-chip-list>\n         </div>\n      </mat-card-content>\n      <mat-card-actions>\n         <div class=\"lm__card-actions\" \n            fxLayout=\"row\"                    \n            fxLayoutAlign=\"center center\" \n            @iconButtonEnter \n            *ngIf=\"postId === row.post.id\"     \n         >\n            <button                            \n               class=\"lm__card-button x-button-enter\" \n               mat-raised-button color=\"primary\"\n               matTooltip=\"Go to this post\"\n               routerLink=\"{{ row.post.slug }}\"\n            >\n               <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n               Read More\n            </button>\n         </div>\n      </mat-card-actions>\n      </div>   -->\n   \n\n   </mat-card>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-posts/admin-posts.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-posts/admin-posts.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__posts\">\n   <div class=\"lm__posts_list\" fxLayout=\"column\" fLayoutAlign=\"center center\">\n      <mat-list fxFlex=\"80%\">\n         <mat-list-item *ngFor=\"let post of posts\">\n            <mat-icon mat-list-icon>book</mat-icon>\n            <h4 mat-line>{{ post.title | titlecase }}</h4>\n            <p mat-line>{{ post.subtitle | titlecase }}</p>\n            <button class=\"lm__posts-list-icon\" mat-icon-button color=\"accent\" matTooltip=\"Edit Post\" routerLink=\"/admin/posts/post/edit/{{ post._id }}\"><mat-icon>edit</mat-icon></button>\n            <button class=\"lm__posts-list-icon\" mat-icon-button color=\"warn\" matTooltip=\"Delete Post\"><mat-icon>delete</mat-icon></button>\n            <mat-divider></mat-divider>\n         </mat-list-item>\n      </mat-list>\n   </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"table\">\n\n   <div class=\"title__start\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n      Serial Number List \n   </div>\n\n   <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n         \n      <div class=\"table__actions-menu\" fxLayout fxLayoutAlign=\"center center\">\n         <button type=\"button\" mat-icon-button [color]=\"deleteColor\" (click)=\"selectAction()\" \n            matTooltip=\"Open check box to select all serial nos or select serial no to delete\">\n               <mat-icon>delete</mat-icon>\n         </button>\n         <button type=\"button\" mat-icon-button [color]=\"filterColor\" (click)=\"filterAction()\" \n            matTooltip=\"Filter all serial no information.\">\n               <mat-icon>find_in_page</mat-icon>\n         </button>\n      </div>\n      \n      <div class=\"table__actions-submit\" fxLayout fxLayoutAlign=\"start\"*ngIf=\"editMode\">\n         <button type=\"button\" mat-icon-button [color]=\"selectAllColor\" (click)=\"selectAll()\"\n            matTooltip=\"Select all serial nos to delete\">\n               <mat-icon>select_all</mat-icon>\n         </button>\n         <button mat-icon-button color=\"primary\"  type=\"submit\" [disabled]=\"!f.form.valid\"\n            matTooltip=\"Delete serial nos, deletion is permanent.\">\n               <mat-icon>delete_forever</mat-icon>\n         </button>\n      </div>\n\n      <div class=\"table__filter-input\" *ngIf=\"filter\">\n         <mat-form-field>\n            <input class=\"table__filter\" \n               type=\"text\" \n               matInput \n               (keyup)=\"filterTable($event.target.value)\"\n               placeholder=\"Filter Table\"\n            >\n         </mat-form-field>\n      </div>\n\n      <div class=\"table__table\">\n         <div class=\"mat-elevation-z8\">\n            <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\" [dataSource]=\"dataSource\">\n\n               <div class=\"table__check\" *ngIf=\"editMode\">\n                     <ng-container matColumnDef=\"check\">\n                        <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Select</th>\n                        <td class=\"table__td\" mat-cell *matCellDef=\"let row\">\n                           <mat-checkbox #serial color=\"primary\" [(indeterminate)]=\"indeterminate\" [labelPosition]=\"labelPosition\" \n                              [(checked)]=\"checked\" [(ngModel)]=\"serial.checked\" name=\"{{row.id}}\">\n                           </mat-checkbox>\n                     </ng-container>           \n               </div>\n\n               <ng-container matColumnDef=\"serial\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Serial No</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">{{row.serial | uppercase}}</td>\n               </ng-container>\n\n               <ng-container matColumnDef=\"market\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>For Market</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">{{row.market | titlecase}}</td>\n               </ng-container>\n\n               <ng-container matColumnDef=\"delete\">\n                  <th class=\"table__th\" mat-header-cell *matHeaderCellDef mat-sort-header>Delete</th>\n                  <td class=\"table__td\" mat-cell *matCellDef=\"let row\">\n                     <button mat-icon-button type=\"button\" color=\"warn\" (click)=\"deleteASerialNo(row)\">\n                        <mat-icon>clear</mat-icon>\n                     </button>\n                  </td>\n               </ng-container>\n\n               <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n               <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            </table>\n\n            <div *ngIf=\"dataSource\">\n            <mat-paginator #paginator \n                  [length]=\"dataSource?.data.length\"\n                  [pageIndex]=\"0\"\n                  [pageSize]=\"25\"\n                  [pageSizeOptions]=\"[25, 50, 100, 250]\">\n            </mat-paginator>\n            </div>\n         </div>\n      </div>\n\n      <div class=\"table__actions-submit\" fxLayout fxLayoutAlign=\"start\"*ngIf=\"editMode\">\n         <button mat-icon-button (click)=\"selectAll()\"><mat-icon>select_all</mat-icon></button>\n         <button mat-icon-button type=\"submit\" ><mat-icon>delete_forever</mat-icon></button>\n      </div>\n\n   </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" id=\"top\">\n\n   <div class=\"content__100vh\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <div class=\"card\">\n         <mat-card>\n            <mat-card-title>\n               Serial Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"serial__form\">\n\n                  <form [formGroup]=\"serialForm\" (ngSubmit)=\"submitSerialForm()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Serial 1</mat-label>\n                           <input matInput placeholder=\"Serial 1\" #serial1 formControlName=\"serial1\" minlength=\"2\" maxlength=\"2\" required>\n                           <mat-icon matSuffix color=\"primary\">input</mat-icon>\n                           <mat-hint>Ex: AZ</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('required')\">\n                              Serial 1 is <strong>required</strong>\n                           </mat-error>     \n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('minlength')\">\n                              Please enter only <strong>2 digits</strong> alphabet\n                           </mat-error>   \n                           <mat-error *ngIf=\"serialForm.get('serial1').hasError('maxlength')\">\n                              Please enter max <strong>2 digits</strong> alphabet\n                           </mat-error>                   \n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <span matPrefix class=\"serial__form-prefix\" *ngIf=\"serial1.value\">{{ serial1.value }} - </span>\n                           <mat-label>Serial 2</mat-label>\n                           <input matInput type=\"number\" placeholder=\"Serial 2\" formControlName=\"serial2\" min=\"6\" max=\"6\" required>\n                           <mat-icon matSuffix color=\"primary\">input</mat-icon>\n                           <mat-hint>Ex: 300200</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('required')\">\n                              Serial 2 is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('minlength')\">\n                              Please enter only <strong>6 digits</strong> alphabet\n                           </mat-error>   \n                           <mat-error *ngIf=\"serialForm.get('serial2').hasError('maxlength')\">\n                              Please enter max <strong>6 digits</strong> alphabet\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Volume</mat-label>\n                           <input matInput type=\"number\" placeholder=\"Volume\" formControlName=\"volume\" required>\n                           <mat-icon matSuffix color=\"primary\">ballot</mat-icon>\n                           <mat-hint>Ex: 100 (Will register AZ300200 - AZ300300)</mat-hint>\n                           <mat-error *ngIf=\"serialForm.get('volume').hasError('required')\">\n                              Volume is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"serial__input\" appearance=\"fill\">\n                           <mat-label>Market</mat-label>\n                           <mat-select formControlName=\"market\">\n                             <mat-option *ngFor=\"let market of markets\" [value]=\"market.area\">\n                                 {{ market.area }}\n                             </mat-option>\n                           </mat-select>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"serial__form-button\" type=\"submit\" [disabled]=\"serialForm.invalid\" color=\"primary\">\n                           <mat-icon>check_circle</mat-icon>\n                           Generate Serial No\n                        </button>\n\n                     </div>\n\n                  </form>\n               </div>\n            \n            </mat-card-content>\n         </mat-card>\n      </div>\n\n   </div>\n\n   <div class=\"content_100pct\" *ngIf=\"serials\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"card\">\n\n         <mat-card>\n            <mat-card-title>SERIAL NUMBER GENERATED</mat-card-title>\n            <mat-card-content>\n               <div class=\"serial__save-result\" >\n                  <mat-list>\n                     <mat-list-item *ngFor=\"let result of newSerials\">\n                        <mat-icon mat-list-icon>view_list</mat-icon>\n                        <h4 mat-line>{{ result.serial | titlecase }}</h4>\n                        <p mat-line> {{ result.market | titlecase }} </p>\n                     </mat-list-item>\n                  </mat-list>\n               </div>\n            </mat-card-content>\n         </mat-card>\n      \n      </div>               \n   </div>\n\n   <mat-divider></mat-divider>\n\n   <div class=\"content_100pct\">\n      <app-admin-serial-table></app-admin-serial-table>\n   </div>\n   \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  admin works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<app-navigations></app-navigations>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"lm__comments-wrapper\"\n>\n\n   <div  class=\"lm__comments-title\"\n         fxLayout=\"column\" fxLayoutAlign=\"center\"\n   >\n         <h3>Comments</h3>\n   </div>\n\n   <div class=\"lm__comments-new\"\n         *ngIf=\"profile ? true : false\"   \n         fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\"\n   >\n      <img mat-card-avatar class=\"lm__comment-image\" src=\"assets/images/uploads/{{ profile.image }}\">     \n      <mat-form-field class=\"lm__form-input\">\n         <textarea matInput rows=\"2\"  placeholder=\"type your comment here\"></textarea> \n      </mat-form-field>      \n   </div>\n\n   <div class=\"lm__post-comments\" *ngIf=\"post.comments ? true : false\">\n      <mat-list>\n         <mat-list-item *ngFor=\"let comment of post.comments\">\n            <img matListAvatar src=\"assets/images/uploads/{{ comment.owner.image }}\" alt=\"\">\n         </mat-list-item>\n      </mat-list>\n   </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n   <mat-toolbar class=\"lm__footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <span class=\"lm__footer-text\">\n         Copyright \n      </span>\n      <span>\n         <mat-icon color=\"primary\" class=\"lm__footer-icon\">copyright</mat-icon>\n      </span>\n      <span class=\"lm__footer-text\">\n         2016,  www.oarteguh.com\n      </span>\n   </mat-toolbar>\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-what/about-what.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-what/about-what.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__container-light-bg\">\n\n      <div class=\"lm__cards\">\n   \n         <div class=\"lm__cards-title mat-elevation-z8\">\n            WHAT I DO\n         </div>\n   \n         <div class=\"lm__cards-container mat-elevation-z8\" \n               fxLayout=\"row wrap\"\n               fxLayoutAlign=\"space-evenly center\"\n               fxLayoutGap=\"10px\"\n         >\n            <mat-card   class=\"shadow__png-ac-right\"\n                        *ngFor=\"let what of descriptions\"\n                        fxFlex=\"20\"\n                        fxFlex.sm=\"50\"\n                        fxFlex.xs=\"100\"\n                        fxLayout=\"column\"\n                        fxLayoutAlign=\"center center\"\n            >\n               <img  class=\"shadow__png-ac-right\"\n                     mat-card-sm-image \n                     src=\"assets/icons/{{ what.image }}\" \n                     alt=\"{{ what.title }}\"\n               > \n               <mat-card-title>\n                  {{ what.title }}\n               </mat-card-title>\n   \n            </mat-card>\n         </div>\n   \n      </div>\n      \n   </div>\n   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-who/about-who.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-who/about-who.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__container-light-bg\">\n\n   <div class=\"lm__cards\">\n\n      <div class=\"lm__cards-title mat-elevation-z8\">\n         WHO AM I\n      </div>\n\n      <div class=\"lm__cards-container mat-elevation-z8\" \n            fxLayout=\"row wrap\"\n            fxLayoutAlign=\"space-evenly center\"\n            fxLayoutGap=\"10px\"\n      >\n         <mat-card   class=\"shadow__png-ac-right\"\n                     *ngFor=\"let who of descriptions\"\n                     fxFlex=\"20\"\n                     fxFlex.sm=\"50\"\n                     fxFlex.xs=\"100\"\n                     fxLayout=\"column\"\n                     fxLayoutAlign=\"center center\"\n         >\n            <img  class=\"shadow__png-ac-right\"\n                  mat-card-sm-image \n                  src=\"assets/icons/{{ who.image }}\" \n                  alt=\"{{ who.title }}\"\n            >\n            <mat-card-title>\n               {{ who.title }}\n            </mat-card-title>\n            <mat-card-content>\n               {{ who.description }}\n            </mat-card-content>\n\n         </mat-card>\n      </div>\n\n   </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/banner-full/banner-full.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/banner-full/banner-full.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"lm__container-100vh-padding-top\" \n      fxLayout=\"column\"\n      fxLayoutAlign=\" center\"\n>\n   <div  class=\"lm__text-intro\" \n         fxFlexAlign=\"start\"\n         @banner1Enter\n         (@banner1Enter.done)=\"banner1Done($event)\"\n   >\n      <div class=\"shadow__text-right banner1-enter\"  \n      >\n         Thank you for making the ...\n      </div>\n   </div>\n\n   <div  class=\"lm__text-intro\" \n         fxFlexAlign=\"start\"\n         @banner2Enter\n         *ngIf=\"banner1AnimationDone\"\n         (@banner2Enter.done)=\"banner2Done($event)\"\n   >\n      <div class=\"lm__text-intro-accent shadow__text-right banner2-enter\">\n         right choice in visiting ...\n      </div>\n   </div>\n\n   <div  class=\"lm__img-intro\"\n         fxLayout=\"column\"    \n         fxLayoutAlign=\"center center\"        \n   >\n      <div  class=\"banner3\"\n            fxLayout=\"column\"    \n            fxLayoutAlign=\"center center\" \n            *ngIf=\"banner2AnimationDone\"\n            @banner3Enter   \n            (@banner3Enter.done)=\"banner3Done($event)\"\n      >\n         <img  class=\"lm__img-profile shadow__png-ac-right banner3-enter\" \n               src=\"assets/images/azrin.jpg\" \n               alt=\"Azrin Amin\"\n\n         >\n      </div>\n      <div  class=\"banner4\"\n            fxLayout=\"column\"    \n            fxLayoutAlign=\"center center\"  \n            *ngIf=\"banner3AnimationDone\"\n            @banner4Enter   \n            (@banner4Enter.done)=\"banner4Done($event)\"\n      >\n         <img  class=\"lm__img-logo shadow__png-ac-right banner4-enter\"\n               src=\"assets/images/logo.png\" \n               alt=\"Azrin Amin Logo\"\n         >\n      </div>\n   \n      <div  *ngIf=\"banner4AnimationDone\"\n            @banner5Enter  \n      >\n         <div  class=\"lm__text-intro-subtitle shadow__text-right banner5-enter\"\n               fxLayout=\"column\"    \n               fxLayoutAlign=\"center center\" \n         >\n            Freelance Consultant & Application Developer\n            <br>\n            <button  class=\"lm__banner-button\" \n                     mat-raised-button color=\"accent\"\n                     fxLayout=\"column\"    \n                     fxLayoutAlign=\"center center\" \n            >\n               <mat-icon>info</mat-icon>\n               Further Info\n            </button>\n         </div>      \n      </div>\n   \n   </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem-light/logo2rem-light.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem-light/logo2rem-light.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__logo-2rem-light\">\n   azrin.dev\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem/logo2rem.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem/logo2rem.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__logo-2rem\">\n   azrin.dev\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo4rem/logo4rem.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo4rem/logo4rem.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <img  class=\"lm__logo\"\n         alt=\"\"\n         src=\"assets/logo_icons/logo-azrin-dev.png\" \n   >\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/main-logo/main-logo.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logo/main-logo/main-logo.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <img  class=\"lm__logo shadow__png-ac-right\"\n         alt=\"\"\n         src=\"{{ logo }}\" \n   >\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigations/navigations.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigations/navigations.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__container-100vh\">\n\n   <div class=\"nav\">\n\n      <div class=\"lm__nav\">\n         <mat-toolbar class=\"lm__nav-toolbar\">  \n            <span class=\"lm__nav-toolbar-logo\" [ngClass]=\"{ 'shadow__text-left': !(isHandset$|async), 'shadow__text-center': (isHandset$|async) }\"                routerLink=\"/\" matTooltip=\"Back to Home Page\"\n            >\n               <app-main-logo></app-main-logo>\n            </span>\n            <span class=\"lm__menu-span-filler\" fxHide.xs></span>\n            <span class=\"lm__menu-span-buttons\" fxHide.xs>\n               <button mat-icon-button  class=\"lm__menu-span-button shadow__text-right\" *ngFor=\"let link of links.public\" routerLink=\"{{ link.path }}\" matTooltip=\"{{ link.data.tooltip }}\">\n                  <mat-icon class=\"lm__menu-span-button-icon\">\n                     {{ link.data.icon }}\n                  </mat-icon>\n               </button>\n            </span>\n            <span class=\"lm__nav-toolbar-icon\" fxHide.xs>\n               <button mat-icon-button  class=\"lm__menu-span-button shadow__text-right\" *ngIf=\"profile\" matTooltip=\"Profile\" routerLink=\"/user/profile\">\n                  <mat-icon class=\"lm__menu-span-button-icon\">\n                     account_circle\n                  </mat-icon>\n               </button>\n               <button mat-icon-button  class=\"lm__menu-span-button shadow__text-right\" *ngIf=\"profile\" matTooltip=\"Logout\" (click)=\"logout()\">\n                  <mat-icon class=\"lm__menu-span-button-icon\">\n                     person_add_disabled\n                  </mat-icon>\n               </button>\n            </span>\n         </mat-toolbar> \n      </div> \n\n      <div class=\"nav__sidenav\">\n         <mat-sidenav-container hasBackdrop=\"false\"> \n\n            <mat-sidenav #drawer class=\"lm__nav-drawer\"    \n               [ngClass]=\"{ 'nav__drawer-open': !sideNavIcon }\"          \n               fixedInViewport\n               attr.role=\"navigation\" \n               [@fadeOut]=\"sideNavIcon\"                 \n               mode=\"over\"\n               [opened]=\"opened\"\n            >       \n               <div class=\"lm__nav-drawer-menu\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                     <div *ngIf=\"sideNavIcon\">\n                        <button mat-icon-button color=\"primary\" (click)=\"toggleSidenav()\">\n                           <mat-icon>chevron_right</mat-icon>\n                        </button>\n                     </div>\n                     <div class=\"lm__nav-drawer-menu-item\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                        <div fxFlex=\"80\" *ngIf=\"!sideNavIcon\"><h2>Menu</h2></div>\n                        <div fxFlex=\"20\" *ngIf=\"!sideNavIcon\">\n                           <button mat-icon-button (click)=\"toggleSidenav()\">\n                              <mat-icon  color=\"primary\">close</mat-icon>\n                           </button>\n                        </div>\n                     </div>\n               </div>  \n\n               <!-- Public menu -->\n               <mat-nav-list class=\"lm__nav-drawer-menu-items\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n\n                  <div class=\"nav__drawer-link\" *ngFor=\"let link of links.public\">\n                     <a mat-list-item class=\"list\" routerLink=\"{{link.path}}\" matTooltip=\"{{ link.data.tooltip }}\" (click)=\"itemClicked()\">\n                        <mat-icon class=\"lm__nav-item-icon\" color=\"primary\">\n                           {{ link.data.icon }}\n                        </mat-icon>\n                        <div class=\"lm__nav-item-link\" *ngIf=\"!sideNavIcon\">\n                           {{ link.data.name }}\n                        </div>                        \n                     </a> \n                  </div>\n                  <div *ngIf=\"!profile\">\n                     <div class=\"nav__drawer-link\" *ngFor=\"let link of links.auth\" >\n                        <a mat-list-item class=\"list\" routerLink=\"{{link.path}}\" matTooltip=\"{{ link.data.tooltip }}\" (click)=\"itemClicked()\">\n                           <mat-icon class=\"lm__nav-item-icon\" color=\"primary\">\n                              {{ link.data.icon }}\n                           </mat-icon>\n                           <div class=\"lm__nav-item-link\" *ngIf=\"!sideNavIcon\">\n                              {{ link.data.name }}\n                           </div>                        \n                        </a> \n                     </div>\n                  </div>\n\n                  <!-- <mat-divider *ngIf=\"sideNavIcon\"></mat-divider>\n\n                  <div class=\"nav__drawer-link\" *ngIf=\"sideNavIcon\">\n                     <button class=\"nav__drawer-link-menu-button\" mat-icon-button [matMenuTriggerFor]=\"menuSettings\" color=\"primary\">\n                        <mat-icon class=\"nav__drawer-menu-link-icon\" >\n                           account_circle\n                        </mat-icon>\n                     </button>\n                     <mat-menu #menuSettings=\"matMenu\" >\n                           <button mat-menu-item *ngFor=\"let link of links.user\" routerLink=\"{{ link.path }}\">\n                              <mat-icon color=\"primary\">\n                                 {{ link.data.icon }}\n                              </mat-icon>\n                              {{ link.data.name }}\n                           </button>\n                     </mat-menu>\n                  </div>\n\n                  <mat-divider *ngIf=\"sideNavIcon\"></mat-divider> -->\n\n                  <div *ngIf=\"profile && profile.admin\">\n                     <div class=\"nav__drawer-link\" *ngIf=\"sideNavIcon\">\n                        <button class=\"nav__drawer-link-menu-button\" mat-icon-button [matMenuTriggerFor]=\"menuSettings\" color=\"primary\" >\n                           <mat-icon class=\"lm__nav-item-icon\" color=\"primary\">\n                              settings\n                           </mat-icon>\n                        </button>\n                        <mat-menu #menuSettings=\"matMenu\" >\n                              <button mat-menu-item *ngFor=\"let link of links.admin\"   routerLink=\"{{ link.path }}\">\n                                 <mat-icon color=\"primary\">\n                                    {{ link.data.icon }}\n                                 </mat-icon>\n                                 {{ link.data.name }}\n                              </button>\n                        </mat-menu>\n                     </div>\n                  </div>\n\n               </mat-nav-list>\n\n               <mat-divider></mat-divider>\n\n               <!-- User menu -->\n               <!-- <mat-expansion-panel *ngIf=\"!sideNavIcon\">\n                  <mat-expansion-panel-header >\n                     <mat-panel-title>\n                        <mat-icon class=\"lm__icon\" color=\"primary\">settings</mat-icon>\n                        <span>Settings</span>\n                     </mat-panel-title>\n                  </mat-expansion-panel-header>                  \n                  <mat-nav-list >\n                     <div class=\"links\" *ngFor=\"let link of links.user\">\n                        <a mat-list-item routerLink=\"{{link.path}}\" >\n                           <mat-icon class=\"lm__icon\" color=\"primary\">{{ link.data.icon }}</mat-icon>\n                           <div class=\"text\" *ngIf=\"!sideNavIcon\">{{ link.data.name }}</div>                        \n                        </a> \n                     </div>\n                     <div class=\"links\" *ngIf=\"sideNavIcon\">\n                        <a mat-list-item >\n                           <mat-icon class=\"lm__icon\" color=\"primary\">settings</mat-icon>                       \n                        </a> \n                     </div>\n                  </mat-nav-list>             \n               </mat-expansion-panel> -->\n\n               <!-- Logout -->\n               <mat-nav-list class=\"lm__nav-item-link\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                  <div *ngIf=\"profile\">\n                     <div class=\"lm__nav-item-link\">\n                        <a mat-list-item class=\"list\" (click)=\"logout()\">\n                           <mat-icon class=\"lm__nav-item-icon\" color=\"primary\">\n                              person_add_disabled\n                           </mat-icon>\n                           <div class=\"lm__nav-item-link\" *ngIf=\"!sideNavIcon\">\n                              Logout\n                           </div>                        \n                        </a> \n                     </div>\n                  </div>\n               </mat-nav-list>\n\n            </mat-sidenav>\n\n            <mat-sidenav-content role=\"main\" class=\"nav__sidenav-content\"[@fadeOut]=\"!sideNavIcon\">               \n               <!-- Add Content Here -->\n               <app-layout></app-layout>            \n            </mat-sidenav-content>\n\n         </mat-sidenav-container>\n      </div>  \n\n   </div>\n   \n   <app-footer></app-footer>\n   \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages-user/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages-user/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__timeline\" fxLayout=\"column\">\n\n   <mat-card>\n      <mat-card-content>\n\n         <div class=\"container-text-area\" fxLayout=\"column\">        \n            <mat-form-field fxFlex=\"100%\" appearance=\"outline\" color=\"#d2b7ed\">\n               <textarea   matInput \n                           placeholder=\"Write your post here ..\" \n                           rows=\"5\" #postVar\n                           [formControl]=\"post\"\n                           (keyup)=\"postContent($event)\"\n               >\n               </textarea>\n            </mat-form-field>  \n            <div class=\"lm__post-control\" fxLayout=\"row\" fxLayoutAlign=\"space-between cente\">  \n               <mat-hint>{{ 500 - postVar.textLength }} characters left</mat-hint>\n               <button mat-raised-button color=\"primary\">Submit</button>\n            </div>\n                      \n         </div>\n\n      </mat-card-content>\n   </mat-card>\n      \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-form/contact-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-form/contact-form.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"lm__form-card\" fxFlex=\"60\" fxFlex.lt-md=\"100\" *ngIf=\"useForm\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n        <mat-card *ngIf=\"!contact\">\n\n            <app-main-logo></app-main-logo>\n\n            <mat-card-title>\n                Contact Form\n            </mat-card-title>\n\n            <mat-card-content>\n                <form [formGroup]=\"contactForm\">\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n                        <mat-form-field appearance=\"fill\" color=\"accent\">\n                            <mat-label>Name</mat-label>\n                            <input matInput placeholder=\"Enter Name\" formControlName=\"name\" required>\n                            <mat-icon matSuffix color=\"accent\">contacts</mat-icon>\n                            <mat-hint>Ex: Severus Snape</mat-hint>\n                            <mat-error *ngIf=\"name.invalid\">\n                                Name is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"fill\" color=\"accent\">\n                            <mat-label>Phone No</mat-label>\n                            <input matInput placeholder=\"Enter Phone No\" formControlName=\"phone\" type=\"number\" required>\n                            <mat-icon matSuffix color=\"accent\">contact_phone</mat-icon>\n                            <mat-hint>Ex: 111111111</mat-hint>\n                            <mat-error *ngIf=\"phone.invalid\">\n                                Phone no is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"fill\" color=\"accent\">\n                            <mat-label>Email</mat-label>\n                            <input matInput type=\"email\" placeholder=\"Enter email\" formControlName=\"email\" required>\n                            <mat-icon matSuffix color=\"accent\">contact_mail</mat-icon>\n                            <mat-hint>Ex: snape@hogwarts.com</mat-hint>\n                            <mat-error *ngIf=\"email.invalid\">\n                                Email is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field appearance=\"fill\" color=\"accent\">\n                            <textarea matInput formControlName=\"comment\" placeholder=\"Leave a comment\" required></textarea>\n                            <mat-icon matSuffix color=\"accent\">contact_mail</mat-icon>\n                            <mat-error *ngIf=\"comment.invalid\">\n                                Comment is <strong>required</strong>\n                            </mat-error>\n                        </mat-form-field>\n\n                        <!-- Recaptcha  -->\n                        <div id=\"html_element\"></div>\n\n                        <!-- Submit Button  -->\n                        <div class=\"card__review-button\" fxLayout fxLayoutAlign=\"center center\">\n                            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"contactForm.invalid ? true : false\" (click)=\"submitContact()\">Submit Contact</button>\n                        </div>\n\n                    </div>\n                </form>\n            </mat-card-content>\n\n        </mat-card>\n\n        <div class=\"lm__contact-success\" *ngIf=\"contact\">\n            <mat-card class=\"lm__contact-success-card\">\n                <mat-card-content>\n                    <div class=\"lm__contact-success-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                        <div class=\"lm__contact-success-title\">Thank you!</div>\n                        <div class=\"lm__contact-success-content\">\n                            Your request has been submitted, our local representative will contact you back as soon as possible.\n                        </div>\n                    </div>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-raised-button routerLink=\"/\">\n                     Back to Home\n                     <mat-icon>undo</mat-icon>\n                  </button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n    </div>\n</div>\n\n\n<script src=\"https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit\" async defer></script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"lm__timeline\">\n   <div class=\"lm__timeline-cards\">\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/oarteguh.jpg\" alt=\"Logo OAR Teguh\">\n         <mat-card-title>\n            Selamat datang ke laman web OAR Teguh\n         </mat-card-title>\n         <mat-card-subtitle>\n            Tentang Kami\n         </mat-card-subtitle>\n         <mat-card-content>\n            <p><span class=\"lm__text-highlight\">OAR TEGUH SDN BHD</span> (OAR) telah ditubuhkan di malaysia menjalankan aktiviti pemasaran & aktiviti latihan teknikal, termasuk pemasaran dalam talian dan pengedaran produk kesihatan, kecantikan & kosmetik.</p>            \n         </mat-card-content>\n      </mat-card>\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/img-dept/admin.jpg\" alt=\"Admin Department\" matTooltip=\"Admin Department\">\n         <mat-card-content>\n            <p><span class=\"lm__text-highlight\">OAR TEGUH SDN BHD</span> mula beroperasi pada 10 Mei 2016 dan dimiliki sepenuhnya oleh usahawan Bumiputera.</p>\n         </mat-card-content>        \n      </mat-card>\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/img-dept/sales-marketing.jpg\" alt=\"Sales Department\" matTooltip=\"Sales & Marketing Department\">\n         <mat-card-content>\n            <p><span class=\"lm__text-highlight\">OAR TEGUH SDN BHD</span> merupakan sebuah syarikat penghasilan, perdagangan &  komersial di dalam semua jenis perniagaan berkaitan kesihatan kecantikan & kosmetik.Menyediakan kontrak, perjanjian dan susunan dengan rakan perniagaan, koperasi, usahasama.</p>\n         </mat-card-content>         \n      </mat-card>\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/img-dept/finance.jpg\" alt=\"Finance Department\" matTooltip=\"Finance Department\">\n         <mat-card-subtitle>VISI SYARIKAT</mat-card-subtitle>   \n         <mat-card-content>\n            <p>Menjadi  syarikat pemasaran bumiputera yang berdaya saing dipasaran tempatan dan antarabangsa.</p>\n         </mat-card-content>\n      </mat-card>\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/img-dept/art-creative.jpg\" alt=\"Art & Creative Department\" matTooltip=\"Art & Creative Department\">\n         <mat-card-subtitle>MISI SYARIKAT</mat-card-subtitle>   \n         <mat-card-content>\n            <div fxLayout=\"row\">\n               <mat-icon fxFlex=\"5\" color=\"accent\">trending_up</mat-icon> <span>Mencipta lebih ramai rakan niaga dalam perniagaan pemasaran dalam talian.</span>\n            </div>            \n         </mat-card-content>\n      </mat-card>\n\n      <mat-card class=\"lm__timeline-card\">\n         <img mat-card-image src=\"assets/images/img-dept/store-logistic.jpg\" alt=\"Store & Logistic\" matTooltip=\"Store & Logistic\">\n         <mat-card-content>\n            <div fxLayout=\"row\">\n               <mat-icon fxFlex=\"5\" color=\"accent\">trending_up</mat-icon> Menyediakan platform kepada rakan niaga yang ingin menceburkan diri dalam bidang pemasaran dalam talian.\n            </div>\n            <div fxLayout=\"row\">\n               <mat-icon fxFlex=\"5\" color=\"accent\">trending_up</mat-icon> Menyediakan pelan pemasaran yang mudah dan senang dicapai dan memberi pulangan yang adil serta lumayan.\n            </div>\n         </mat-card-content>\n      </mat-card>\n\n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/layout.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n    <div class=\"lm__page-content-main\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\">\n\n   <h2 class=\"lm__page-title\">Privacy Policy</h2>\n\n   <p> This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from oarteguh.com (the “Site”).</p>\n\n   <h4>PERSONAL INFORMATION WE COLLECT</h4>\n   <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p> \n\n   <p> We collect Device Information using the following technologies:</p>\n\n   <p>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</p>\n\n   <p>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p> \n\n   <p>“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.\n   “JWT token” are data files that are placed on your device or computer browser and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit  https://jwt.io/</p>\n\n   <p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, ip address, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information.</p> \n\n   <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>\n\n   <h4>HOW DO WE USE YOUR PERSONAL INFORMATION?</h4>\n   <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:\n   Communicate with you;</p>\n   \n   <p>Screen our orders for potential risk or fraud; and\n   When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>\n\n   <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>\n\n   <h4>SHARING YOUR PERSONAL INFORMATION</h4>\n   <p>We share your Personal Information with third parties i.e. Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p>\n\n  <p> Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>\n\n   <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>\n\n   <p>You can opt out of targeted advertising by:</p>\n\n   FACEBOOK – https://www.facebook.com/settings/?tab=ads\n   GOOGLE – https://www.google.com/settings/ads/anonymous\n   Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: http://optout.aboutads.info/.\n\n   <h4>DO NOT TRACK</h4>\n   <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>\n\n   <h4>YOUR RIGHTS</h4>\n   <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>\n\n   <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>\n\n   <h4>DATA RETENTION</h4>\n   <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>\n\n   <h4>MINORS</h4>\n   <p>The Site is not intended for individuals under the age of 15.</p>\n\n   <h4>CHANGES</h4>\n   <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>\n\n   <h4>CONTACT US</h4>\n   <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at me@oarteguh.com or by mail using the details provided below:</p>\n</div>\n\n<app-contact-form></app-contact-form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-comments/post-comments.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-comments/post-comments.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion class=\"example-headers-align\">\n\n   <mat-expansion-panel [expanded]=\"step === 0\" \n                        (opened)=\"setStep(0)\" \n                        hideToggle\n                        *ngFor=\"let comment of post.comments\"\n   >\n     <mat-expansion-panel-header>\n       <mat-panel-title fxLayout=\"row\" \n                        fxLayoutAlign=\"start center\"\n       >\n          <img    class=\"lm__post-comment-avatar\"\n                  mat-card-avatar src=\"assets/images/uploads/{{ comment.owner.image }}\" \n                  alt=\"{{ comment.owner.name }}\"\n         >\n         {{ comment.owner.name | titlecase }}\n       </mat-panel-title>\n       <mat-panel-description>\n         {{ comment.created }}\n         <mat-icon>account_circle</mat-icon>\n       </mat-panel-description>\n     </mat-expansion-panel-header>\n \n     <mat-form-field>\n       <input matInput placeholder=\"First name\">\n     </mat-form-field>\n \n     <mat-form-field>\n       <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n     </mat-form-field>\n \n     <mat-action-row>\n       <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n     </mat-action-row>\n   </mat-expansion-panel>\n\n</mat-accordion>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"lm__post-container-bg-light\"\n      fxLayout=\"column\"\n      fxLayoutAlign=\"center center\"  \n>\n   <div  class=\"lm__post-card\"\n         *ngIf=\"post\"         \n   >\n\n      <mat-card   class=\"shadow__png-ac-right\" \n                  fxFlex=\"60vw\"\n                  fxFlex.xs=\"100\"\n      >   \n         \n         <!-- Owner  -->\n         <div class=\"lm__post-card-header\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n            <div fxFlex=\"5\" fxFlexAlign=\"start\">\n               <!-- Profile Image -->\n               <img mat-card-avatar id=\"{{ post.image }}\" class=\"lm__avatar\" src=\"assets/images/uploads/{{ post.owner.image }}\" >\n            </div>\n            <div class=\"lm__profile-info\" fxFlexAlign=\"start\">    \n               <!-- Profile Name  -->\n               <mat-card-title class=\"lm__profile-title\">\n                  <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                     routerLink=\"user/profile/{{ post.owner.name }}/{{ post.owner.id }}\"\n                  >                  \n                     {{ post.owner.name | titlecase }}\n                  </a>\n               </mat-card-title>                                   \n               <!-- Profile Motto -->\n               <mat-card-subtitle class=\"lm__post-card-owner-subtitle\">\n                  \"{{ post.owner.country | titlecase | slice:0:50 }}\"\n                  <br>\n                  <!-- Post Date  -->\n                  <em>Posted on: {{ post.created| date:'d/M/y, h:mm:ss a' }}</em> \n               </mat-card-subtitle>\n            </div>\n         </div>\n\n         <!-- Card Image  -->\n         <div  id=\"{{ post.image }}\"\n               *ngIf=\"post.image ? true : elseBlock\"                                 \n         >\n            <img  mat-card-image                                      \n                  class=\"\" \n                  src=\"assets/images/uploads/{{ post.image }}\" \n                  alt=\"{{ post.image | titlecase }}\"                  \n            >                                      \n         </div> \n         <ng-template #elseBlock >\n            <div id=\"{{ post.image }}\" \n               *ngIf=\"post.image\"\n            >\n               <img mat-card-image  \n                  src=\"{{ post.image }}\" \n                  alt=\"{{ post.image | titlecase }}\"               \n               > \n            </div>\n         </ng-template> \n\n         <!-- Post Title  -->\n         <mat-card-title class=\"lm__post-card-title shadow__text-right\" color=\"primary\">\n            {{ post.title | titlecase }}\n         </mat-card-title>\n\n         <!-- Post Subtitle  -->\n         <mat-card-subtitle class=\"lm__post-card-subtitle shadow__text-right\" color=\"accent\">\n            {{ post.subtitle | titlecase }}\n         </mat-card-subtitle>\n       \n         <mat-card-content class=\"lm__post-card-content\">\n\n            <!-- Post Categories  -->\n            <div class=\"lm__post-card-categories\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n               <span class=\"lm__post-chip-categories\">Categories: </span>\n               <mat-chip-list>\n                  <mat-chip \n                     *ngFor=\"let chip of post.categories\" \n                     color=\"primary\" \n                     selected\n                     routerLink=\"/post/tags/tag/{{ chip.categories | lowercase }}\"\n                     matTooltip=\"Go to this Category\"\n                  >\n                     {{ chip | titlecase }}\n                  </mat-chip>\n               </mat-chip-list>\n            </div>\n\n            <!-- Contents  -->\n            <div id=\"{{ post.id }}\">                                             \n               \n               <!-- Post Content  -->\n               <div class=\"lm__post-card-content lm__text-capitalize\" innerHTML=\"{{ post.content }}\">          \n                  \n               </div>     \n               \n               <!-- Post Tags  -->\n               <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"start center\">\n                  <span class=\"lm__post-chip-categories\">Tags: </span>\n                  <mat-chip-list>\n                     <mat-chip class=\"lm__mat-chip-list\" \n                        *ngFor=\"let tag of post.tags\" \n                        color=\"accent\" \n                        selected\n                        routerLink=\"/post/tags/tag/{{ tag.tags | lowercase }}\"\n                        matTooltip=\"Go to this tag\"\n                     >\n                        {{ tag | titlecase }}\n                     </mat-chip>\n                  </mat-chip-list>\n               </div>\n\n               <div class=\"lm__post-divider\">\n                  <mat-divider></mat-divider>\n               </div>\n\n               <!-- Post Social -->\n               <div class=\"lm__post-card-social\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n\n                  <!-- Liked  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon matBadge=\"{{ post.vote.length }}\"             \n                        matBadgeColor=\"accent\"\n                        matTooltip=\"Like Post\"\n                        (click)=\"likePost($event)\"\n                     >\n                        thumb_up\n                     </mat-icon>\n                  </div>\n\n                  <!-- Post Shared  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon matBadge=\"{{ post.shared }}\"             \n                        matBadgeColor=\"accent\"\n                        matTooltip=\"Share Post\"\n                     >\n                        share\n                     </mat-icon>\n                  </div>\n\n                  <!-- Post Comment  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon   matBadge=\"{{ post.comments.length }}\" \n                                 matBadgeColor=\"accent\"\n                                 matTooltip=\"Comment Post\"\n                                 (click)=\"commentPost($event)\"\n                     >\n                        comment\n                     </mat-icon>\n                  </div>\n                  \n               </div> \n\n               <div  class=\"lm__post-card-comment-form\" \n                     fxLayout=\"row\"\n                     fxLayoutAlign=\"start center\"\n                     fxLayoutGap=\"20px\"\n               >\n                  <mat-form-field>\n                     <textarea   matInput \n                                 cols=\"80\" \n                                 rows=\"1\" \n                                 placeholder=\"Say something here. Enter or Click to submit.\"\n                                 [formControl]=\"commentCtrl\"   \n                                 (keyup.enter)=\"submitComment()\"                              \n                     >\n                     </textarea>\n                  </mat-form-field>\n                  <button  mat-mini-fab \n                           color=\"primary\"\n                           fxLayout\n                           fxLayoutAlign=\"center center\"\n                           matTooltip=\"Submit Comment\"\n                           (click)=\"submitComment()\"\n                  >\n                     <mat-icon class=\"lm__post-comment-button-icon\">\n                        send\n                     </mat-icon>\n                  </button>\n               </div>\n\n               <app-post-comments></app-post-comments>\n\n            </div>\n         </mat-card-content>\n\n      </mat-card>\n\n   </div>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\">\n\n   <div class=\"lm__posts\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <h2>LATEST POSTS</h2>\n\n      <mat-card *ngFor=\"let row of posts\">   \n         \n         <!-- Owner  -->\n         <div class=\"lm__posts-card-header\" fxLayout=\"row\" fxLayoutAlign=\"start\">\n            <div fxFlex=\"5\" fxFlexAlign=\"start\">\n               <!-- Profile Image -->\n               <img mat-card-avatar id=\"{{ row.image }}\" class=\"lm__avatar\" src=\"assets/images/uploads/{{ row.owner.image }}\" >\n            </div>\n            <div class=\"lm__profile-info\" fxFlexAlign=\"start\">    \n               <!-- Profile Name  -->\n               <mat-card-title class=\"lm__profile-title\">\n                  <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                     routerLink=\"user/profile/{{ row.owner.name }}/{{ row.owner.id }}\"\n                  >                  \n                     {{ row.owner.name | titlecase }}\n                  </a>\n               </mat-card-title>                                   \n               <!-- Profile Motto -->\n               <mat-card-subtitle>\n                  \"{{ row.owner.country | titlecase | slice:0:50 }}\"\n                  <br>\n                  <!-- Post Date  -->\n                  <em>Posted on: {{ row.created| date:'d/M/y, h:mm:ss a' }}</em> \n               </mat-card-subtitle>\n            </div>\n         </div>\n\n         <!-- Card Image  -->\n         <div  id=\"{{ row.image }}\"\n               @imageEnter\n               *ngIf=\"row.image ? true : elseBlock\"                                 \n         >\n            <img mat-card-image                                      \n               class=\"image-enter lm__card-image\" \n               src=\"assets/images/uploads/{{ row.image }}\" \n               alt=\"{{ row.image | titlecase }}\" \n               (mouseout)=\"mouseLeaveImage($event)\"                  \n            >                                      \n         </div> \n         <ng-template #elseBlock >\n            <div id=\"{{ row.image }}\" \n               *ngIf=\"row.image\"\n               (mouseenter)=\"mouseEnterImage($event)\" \n            >\n               <img mat-card-image  \n                  src=\"{{ row.image }}\" \n                  alt=\"{{ row.image | titlecase }}\"               \n               > \n            </div>\n         </ng-template> \n\n         <!-- Post Title  -->\n         <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n            <a [@xEnter]=\"postsExist\" class=\"lm__a\" matTooltip=\"Go to this post\"\n               routerLink=\"{{ row.slug }}\"\n            >\n               {{ row.title | titlecase }}\n            </a>\n         </mat-card-title>\n\n         <!-- Post Subtitle  -->\n         <mat-card-subtitle>{{ row.subtitle | titlecase }}</mat-card-subtitle>\n\n         <!-- Post Categories  -->\n         <mat-card-content>\n            <div class=\"lm__mat-chip\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\n               <span class=\"lm__post-chip-categories\">Categories: </span>\n               <mat-chip-list>\n                  <mat-chip \n                     *ngFor=\"let chip of row.categories\" \n                     color=\"primary\" \n                     selected\n                     routerLink=\"/posts/tags/tag/{{ chip.categories | lowercase }}\"\n                     matTooltip=\"Go to this Category\"\n                  >\n                     {{ chip | titlecase }}\n                  </mat-chip>\n               </mat-chip-list>\n            </div>\n         </mat-card-content> \n\n         <!-- Contents  -->\n         <div id=\"{{ row.id }}\" (mouseenter)=\"mouseEnterCard($event)\" >                  \n\n            <!-- Post Social -->\n            <mat-card-content>\n               <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n\n                  <!-- Liked  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon matBadge=\"{{ row.vote.length }}\"             \n                        matBadgeColor=\"accent\"\n                        matTooltip=\"Like and Dislike\"\n                     >\n                        thumbs_up_down\n                     </mat-icon>\n                  </div>\n\n                  <!-- Post Shared  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon matBadge=\"{{ row.shared }}\"             \n                        matBadgeColor=\"accent\"\n                        matTooltip=\"Shared\"\n                     >\n                        share\n                     </mat-icon>\n                  </div>\n\n                  <!-- Post Comment  -->\n                  <div class=\"lm__icon-badge\">\n                     <mat-icon matBadge=\"{{ row.comments.length }}\" \n                        matBadgeColor=\"accent\"\n                        matTooltip=\"Comments\"\n                     >\n                        comment\n                     </mat-icon>\n                  </div>\n                  \n               </div>                           \n               \n               <!-- Post Content  -->\n               <div class=\"lm__posts-content lm__text-capitalize\">          \n                  {{ row.content | slice:0:300 }} ...\n                  <button  class=\"lm__a-button\" \n                           mat-button color=\"accent\" \n                           routerLink=\"/post/{{ row.owner.name }}/{{ row.id }}/{{ row.title }}\"\n                  >\n                     Read More\n                  </button>\n               </div>     \n               \n               <!-- Post Tags  -->\n               <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"start center\">\n                  <span class=\"lm__post-chip-categories\">Tags: </span>\n                  <mat-chip-list>\n                     <mat-chip class=\"lm__mat-chip-list\" \n                        *ngFor=\"let tag of row.tags\" \n                        color=\"accent\" \n                        selected\n                        routerLink=\"/posts/tags/tag/{{ tag.tags | lowercase }}\"\n                        matTooltip=\"Go to this tag\"\n                     >\n                        {{ tag | titlecase }}\n                     </mat-chip>\n                  </mat-chip-list>\n               </div>\n            </mat-card-content>\n            \n            <!-- Post Link  -->\n            <mat-card-actions>\n               <div class=\"lm__card-actions\" \n                  fxLayout=\"row\"                    \n                  fxLayoutAlign=\"center center\" \n                  @iconButtonEnter \n                  *ngIf=\"postId === row.id\"     \n               >\n                  <button class=\"lm__card-button x-button-enter\" \n                     mat-raised-button color=\"primary\"\n                     matTooltip=\"Go to this post\"\n                     routerLink=\"/post/{{ row.owner.name }}/{{ row.id }}/{{ row.title }}\"\n                  >\n                     <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                     Read More\n                  </button>\n               </div>\n            </mat-card-actions>\n         </div> \n\n      </mat-card>\n      \n   </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-container\">\n   <mat-tab-group color=\"accent\">\n\n      <mat-tab label=\"Produk\"> \n         <div class=\"lm__sidebar-items\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n            <div class=\"lm__sidebar-item\" *ngFor=\"let item of items\" fxFlex=\"40\">\n               <img class=\"lm__sidebar-img shadow-png-ac-right\" src=\"{{ item.img }}\" alt=\"{{ item.alt }}\">\n            </div>\n         </div>\n      </mat-tab>\n\n      <mat-tab label=\"Terkini\"> \n         Content 2 \n      </mat-tab>\n\n   </mat-tab-group>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-100p profile\" fxLayout=\"row\" fxLayout.xs=\"column\">\n\n   <div fxFlex=\"60\" fxFlex.xs=\"100\" class=\"timeline\">\n\n      <div class=\"posts\" *ngFor=\"let row of posts\" >\n         <div [@xEnter]=\"postsExist\">\n            <mat-card  fxLayout=\"column\" class=\"lm__card timeline__card x-enter\">   \n               \n               <!-- Card Image  -->\n               <div  id=\"{{ row.post.image }}\"\n                     @imageEnter\n                     *ngIf=\"row.post.image == imagePost; else elseBlock\"                        \n               >\n                  <img mat-card-image                                      \n                     class=\"image-enter lm__card-image\" \n                     src=\"{{ row.post.image }}\" \n                     alt=\"{{ row.poster.name | titlecase }}\" \n                     (mouseout)=\"mouseLeaveImage($event)\"                    \n                  >                                      \n               </div> \n               <ng-template #elseBlock>\n                  <div id=\"{{ row.post.image }}\"\n                     (mouseenter)=\"mouseEnterImage($event)\" \n                  >\n                     <img mat-card-image  \n                        src=\"{{ row.post.image }}\" \n                        alt=\"{{ row.poster.name | titlecase }}\"                     \n                     > \n                  </div>\n               </ng-template> \n\n               <div id=\"{{ row.post.id }}\" (mouseenter)=\"mouseEnterCard($event)\" >\n                  <mat-card-header>\n                     <img mat-card-avatar id=\"{{ row.post.image }}\" class=\"lm__avatar\" src=\"{{ row.poster.avatar || 'assets/images/man.png'}}\" >\n                     <mat-card-title class=\"lm__profile-title\">\n                        <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                           routerLink=\"{{ row.poster.slug }}\"\n                        >                  \n                           {{ row.poster.name | titlecase }}\n                        </a>\n                     </mat-card-title>\n                     <mat-card-subtitle>\n                        \"{{ row.poster.about | titlecase | slice:0:50 }}\"\n                     </mat-card-subtitle>\n                     <mat-card-subtitle>Posted on: {{ row.post.date | date:'d/M/y, h:mm:ss a' }} </mat-card-subtitle>\n                  </mat-card-header>\n                  <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n                     <a [@xEnter]=\"postsExist\" class=\"lm__a\" matTooltip=\"Go to this post\"\n                        routerLink=\"/post/{{ row.post.slug }}\"\n                     >\n                        {{ row.post.title | titlecase }}\n                     </a>\n                  </mat-card-title>\n                  <mat-card-content>\n                     <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.liked.length }}\" matBadgeColor=\"accent\">\n                              thumbs_up_down\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\"></div>\n                           <mat-icon matBadge=\"{{ row.post.comment.length }}\" matBadgeColor=\"accent\">\n                              comment\n                           </mat-icon>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-subtitle>{{ row.post.subtitle | titlecase }}</mat-card-subtitle>\n                  <mat-card-content>                \n                     {{ row.post.content | slice:0:200 }} ...\n                     <button class=\"lm__a\" mat-button color=\"accent\" routerLink=\"{{ row.post.slug }}\">Read More</button>\n                  </mat-card-content>\n                  <mat-card-content>\n                     <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"center center\">\n                        <mat-chip-list aria-label=\"Fish selection\">\n                           <mat-chip class=\"lm__mat-chip-list\" \n                              *ngFor=\"let tag of row.post.tags\" \n                              color=\"accent\" \n                              selected\n                              routerLink=\"/posts/tags/tag/{{ tag.tag | lowercase }}\"\n                              matTooltip=\"Go to this tag\"\n                           >\n                              {{ tag.tag | titlecase }}\n                           </mat-chip>\n                        </mat-chip-list>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                     <div class=\"lm__card-actions\" fxLayout=\"row\" fxLayoutAlign=\"center center\" @iconButtonEnter *ngIf=\"postId === row.post.id\">\n                        <button class=\"lm__card-button x-button-enter\" routerLink=\"{{ row.post.slug }}\" mat-raised-button color=\"primary\">\n                           <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                           Read More\n                        </button>\n                     </div>\n                  </mat-card-actions>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n\n   <div fxFlex=\"40\" fxFlex.xs=\"100\" class=\"sidebar\">\n      <div>   \n         \n      </div> \n   </div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   \n   <div class=\"lm__card\" (mouseenter)=\"mouseEnterCard($event)\" (mouseleave)=\"mouseLeaveCard($event)\">\n      \n      <mat-card>\n         <app-main-logo></app-main-logo>\n         <mat-card-title class=\"lm__card-title\">\n            Email Authentication\n         </mat-card-title>\n         <mat-card-content>\n\n            <p>If you agree to the <span><button mat-button class=\"auth__tnc-button\" color=\"accent\">Terms and Conditions</button></span> of our website, please click the authentication button below;</p>\n\n            <div @iconClickButton *ngIf=\"mouseEnter; else elseBlock\" class=\"auth__button\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n               <button class=\"x-button-enter\" mat-raised-button color=\"primary\" (click)=\"agreeTnc()\">\n                  <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                  I agree to the Terms and Conditions \n               </button>\n            </div>\n            <ng-template #elseBlock>\n               <div @iconClickButton class=\"auth__button\" fxLayout=\"column\" fxLayoutAlign=\"center center\">            \n                  <button class=\"x-button-enter\" mat-raised-button color=\"primary\" (click)=\"agreeTnc()\">\n                     <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                     I agree to the Terms and Conditions \n                  </button>\n               </div>\n            </ng-template>\n\n         </mat-card-content>\n      </mat-card>\n   </div>\n\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-min70vh-hidden\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n   <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      <app-main-logo></app-main-logo>\n\n      <div class=\"card\">\n         <mat-card>\n\n            <mat-card-title>\n               Forgot Password \n            </mat-card-title>\n\n            <mat-card-content>\n               <div class=\"lm__form\">\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"login__input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input   matInput class=\"lm__form-input\" \n                                    placeholder=\"Email\" \n                                    #email \n                                    formControlName=\"email\" \n                                    required autocomplete=\"email\"\n                           >\n                           <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"lm__form-button\" type=\"submit\" [disabled]=\"loginForm.invalid\" color=\"primary\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Submit\n                        </button>\n\n                     </div>\n\n                     {{ loginForm.errors }}\n\n                  </form>\n               </div>  \n            </mat-card-content>\n\n            <mat-card-actions fxLayout=\"rows\" fxLayoutAlign=\"center\">\n               <div class=\"lm__form-footer\">\n                  <mat-divider></mat-divider>\n                  <button mat-button routerLink=\"/user/login\">\n                     Login\n                  </button>\n                  <span> | </span>\n                  <button mat-button routerLink=\"/user/register\">\n                     Register\n                  </button>\n               </div>\n            </mat-card-actions>\n\n         </mat-card>\n      </div>\n   </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/callback/callback.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/callback/callback.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  callback works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/linkedin/linkedin.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/linkedin/linkedin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__linkedin\" *ngIf=\"userLinkedin\">\n\n  {{ userLinkedin.localizedFirstName }} {{ userLinkedin.localizedLastName }}\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n   <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n      \n\n      <div class=\"card\">\n         <mat-card>\n            <app-main-logo></app-main-logo>\n            <mat-card-title>\n               Login Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"login__form\">\n\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"lm__form-input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input   matInput                                     \n                                    placeholder=\"Email\" \n                                    #email \n                                    formControlName=\"email\" \n                                    required autocomplete=\"email\"\n                           >\n                           <mat-icon matSuffix color=\"primary\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"loginForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"lm__form-input\" appearance=\"fill\">\n                           <mat-label>Password</mat-label>\n                           <input   matInput                                     \n                                    type=\"password\" \n                                    placeholder=\"Password\" \n                                    formControlName=\"password\" \n                                    required \n                                    autocomplete=\"password\"\n                           >\n                           <mat-icon matSuffix color=\"primary\">vpn_key</mat-icon>\n                           <mat-hint>Enter password here</mat-hint>\n                           <mat-error *ngIf=\"loginForm.get('password').hasError('required')\">\n                              Password is <strong>required</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"lm__form-button\" type=\"submit\" [disabled]=\"loginForm.invalid\" color=\"primary\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Login\n                        </button>\n\n                     </div>\n\n                     {{ loginForm.errors }}\n\n                  </form>\n\n               </div>               \n\n            </mat-card-content>\n\n            <!-- <mat-card-actions>\n               <button mat-button class=\"lm__form-button-linkedin\" (click)=\"signInLinkedin()\">\n                     (click)=\"signInLinkedin()\"\n                  <img src=\"assets/logo_icons/Sign-In-Small---Default.png\" alt=\"\">\n               </button>\n            </mat-card-actions> -->\n\n            <mat-card-footer>\n               <mat-divider></mat-divider>\n               <button mat-button routerLink=\"/user/forgot-password\">Forgot Password</button>\n               <span> | </span>\n               <button mat-button routerLink=\"/user/register\">Register</button>\n            </mat-card-footer>\n         </mat-card>\n      </div>\n   </div>\n   \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-full\" id=\"top\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n   <div fxLayout=\"column\" fxLayoutAlign=\"center center\">         \n\n      <div class=\"card\">\n         <mat-card>\n            <app-main-logo></app-main-logo>\n            <mat-card-title>\n               Register Form \n            </mat-card-title>\n            <mat-card-content>\n\n               <div>\n\n                  <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n\n                        <mat-form-field class=\"register__input\" appearance=\"fill\">\n                           <mat-label>Email</mat-label>\n                           <input matInput placeholder=\"Email\" #email formControlName=\"email\" required autocomplete=\"email\">\n                           <mat-icon matSuffix color=\"accent\">alternate_email</mat-icon>\n                           <mat-hint>Enter email here</mat-hint>\n                           <mat-error *ngIf=\"registerForm.get('email').hasError('required')\">\n                              Email is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"registerForm.get('email').hasError('email')\">\n                              Please enter a valid <strong>email</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <mat-form-field class=\"register__input\" appearance=\"fill\">\n                           <mat-label>Password</mat-label>\n                           <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" required autocomplete=\"password\">\n                           <mat-icon matSuffix color=\"accent\">vpn_key</mat-icon>\n                           <mat-hint>Enter password here</mat-hint>\n                           <mat-error *ngIf=\"registerForm.get('password').hasError('required')\">\n                              Password is <strong>required</strong>\n                           </mat-error>\n                           <mat-error *ngIf=\"registerForm.get('password').hasError('minlength')\">\n                              Minimum password is <strong>{{ registerForm.get('password').errors.minlength.requiredLength }}</strong> characters. Now you entered only <strong>{{ registerForm.get('password').errors.minlength.actualLength }}</strong>\n                           </mat-error>\n                        </mat-form-field>\n\n                        <button mat-raised-button class=\"register__form-button\" type=\"submit\" [disabled]=\"registerForm.invalid\" color=\"accent\" >\n                           <mat-icon>check_circle</mat-icon>\n                           Register\n                        </button>\n\n                     </div>\n\n                     {{ registerForm.errors }}\n\n                  </form>\n\n               </div>\n\n            </mat-card-content>\n\n            <mat-card-actions>\n               <mat-divider></mat-divider>\n               <span>If you have already registered:</span>\n               <button mat-button routerLink=\"/user/login\">Login</button>\n            </mat-card-actions>\n            \n         </mat-card>\n      </div>\n   </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lm__page-container\" fxLayout=\"row\" fxLayout.xs=\"column\">\n\n   <div fxFlex=\"60\" fxFlex.xs=\"100\" class=\"timeline\">\n\n      <div class=\"posts\" *ngFor=\"let row of posts\" >\n         <div [@xEnter]=\"postsExist\">\n            <mat-card  fxLayout=\"column\" class=\"lm__card timeline__card x-enter\">  \n               <app-main-logo></app-main-logo> \n               \n               <!-- Card Image  -->\n               <div  id=\"{{ row.post.image }}\"\n                     @imageEnter\n                     *ngIf=\"row.post.image == imagePost; else elseBlock\"                        \n               >\n                  <img mat-card-image                                      \n                     class=\"image-enter lm__card-image\" \n                     src=\"{{ row.post.image }}\" \n                     alt=\"{{ row.poster.name | titlecase }}\" \n                     (mouseout)=\"mouseLeaveImage($event)\"                    \n                  >                                      \n               </div> \n               <ng-template #elseBlock >\n                  <div id=\"{{ row.post.image }}\" \n                     *ngIf=\"row.post.image\"\n                     (mouseenter)=\"mouseEnterImage($event)\" \n                  >\n                     <img mat-card-image  \n                        src=\"{{ row.post.image }}\" \n                        alt=\"{{ row.poster.name | titlecase }}\"                     \n                     > \n                  </div>\n               </ng-template> \n\n               <div id=\"{{ row.post.id }}\" (mouseenter)=\"mouseEnterCard($event)\" >\n                  <mat-card-header>\n                     <img mat-card-avatar id=\"{{ row.post.image }}\" class=\"lm__avatar\" src=\"{{ row.poster.avatar || 'assets/images/man.png'}}\" >\n                     <mat-card-title class=\"lm__profile-title\">\n                        <a class=\"lm__a\" matTooltip=\"Go to this user profile\"\n                           routerLink=\"{{ row.poster.slug }}\"\n                        >                  \n                           {{ row.poster.name | titlecase }}\n                        </a>\n                     </mat-card-title>\n                     <mat-card-subtitle>\n                        \"{{ row.poster.about | titlecase | slice:0:50 }}\"\n                     </mat-card-subtitle>\n                     <mat-card-subtitle>Posted on: {{ row.post.date | date:'d/M/y, h:mm:ss a' }} </mat-card-subtitle>\n                  </mat-card-header>\n                  <mat-card-title color=\"primary\" class=\"lm__a-primary\">\n                     <a [@xEnter]=\"postsExist\" class=\"lm__a\" matTooltip=\"Go to this post\"\n                        routerLink=\"/post/{{ row.post.slug }}\"\n                     >\n                        {{ row.post.title | titlecase }}\n                     </a>\n                  </mat-card-title>\n                  <mat-card-content>\n                     <div class=\"lm__icons\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.liked.length }}\"             matBadgeColor=\"accent\"\n                              matTooltip=\"Like and Dislike\"\n                           >\n                              thumbs_up_down\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.comments.length }}\"             matBadgeColor=\"accent\"\n                              matTooltip=\"Like and Dislike\"\n                           >\n                              share\n                           </mat-icon>\n                        </div>\n                        <div class=\"lm__icon-badge\">\n                           <mat-icon matBadge=\"{{ row.post.shared.length }}\" matBadgeColor=\"accent\">\n                              comment\n                           </mat-icon>\n                        </div>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-subtitle>{{ row.post.subtitle | titlecase }}</mat-card-subtitle>\n                  <mat-card-content>                \n                     {{ row.post.content | slice:0:200 }} ...\n                     <button class=\"lm__a-button\" mat-button color=\"accent\" routerLink=\"{{ row.post.slug }}\">Read More</button>\n                  </mat-card-content>\n                  <mat-card-content>\n                     <div class=\"lm__mat-chip\" fxLayout fxLayoutAlign=\"center center\">\n                        <mat-chip-list aria-label=\"Fish selection\">\n                           <mat-chip class=\"lm__mat-chip-list\" \n                              *ngFor=\"let tag of row.post.tags\" \n                              color=\"accent\" \n                              selected\n                              routerLink=\"/posts/tags/tag/{{ tag.tag | lowercase }}\"\n                              matTooltip=\"Go to this tag\"\n                           >\n                              {{ tag.tag | titlecase }}\n                           </mat-chip>\n                        </mat-chip-list>\n                     </div>\n                  </mat-card-content>\n                  <mat-card-actions>\n                     <div class=\"lm__card-actions\" \n                        fxLayout=\"row\"                    \n                        fxLayoutAlign=\"center center\" \n                        @iconButtonEnter \n                        *ngIf=\"postId === row.post.id\"     \n                     >\n                        <button                            \n                           class=\"lm__card-button x-button-enter\" \n                           mat-raised-button color=\"primary\"\n                           matTooltip=\"Go to this post\"\n                           routerLink=\"{{ row.post.slug }}\"\n                        >\n                           <mat-icon class=\"y-icon-enter\">touch_app</mat-icon>\n                           Read More\n                        </button>\n                     </div>\n                  </mat-card-actions>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n\n   <div fxFlex=\"40\" fxFlex.xs=\"100\" class=\"sidebar\">\n      <div>   \n         <mat-card class=\"sidebar__card\">\n            <mat-card-title class=\"lm__card-title\">\n               You might like\n            </mat-card-title>\n            <mat-card-content>\n\n               <div class=\"lm__card-tab\">\n                  <mat-tab-group *ngFor=\"let category of categoriesPosts\">\n                     <mat-tab label=\"{{ category | titlecase }}\">\n                        <div class=\"posts\" fxLayout=\"column\">\n                           <mat-list role=\"list\">\n                              <mat-list-item role=\"listitem\" *ngFor=\"let row of posts\">\n                                 <a class=\"lm__a-small\" matTooltip=\"Go to this post\"\n                                    routerLink=\"/post/{{ row.post.slug }}\"\n                                 >\n                                    {{ row.post.title | titlecase }}\n                                 </a>\n                              </mat-list-item>\n                           </mat-list> \n                        </div> \n                     </mat-tab>\n                     <mat-tab label=\"Second\"> Content 2 </mat-tab>\n                     <mat-tab label=\"Third\"> Content 3 </mat-tab>\n                  </mat-tab-group>\n               </div>\n                        \n            </mat-card-content>\n         </mat-card>\n      </div> \n   </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-message/admin-message.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-message/admin-message.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLW1lc3NhZ2UvYWRtaW4tbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin-message/admin-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-message/admin-message.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMessageComponent", function() { return AdminMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminMessageComponent = class AdminMessageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-message/admin-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-message.component.scss */ "./src/app/admin/admin-message/admin-message.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminMessageComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvYWRtaW4tcG9zdC1lZGl0L2FkbWluLXBvc3QtZWRpdC1mb3JtL2FkbWluLXBvc3QtZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AdminPostEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostEditFormComponent", function() { return AdminPostEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








let AdminPostEditFormComponent = class AdminPostEditFormComponent {
    constructor(route, postService, snackBar) {
        this.route = route;
        this.postService = postService;
        this.snackBar = snackBar;
        this.uploading = false;
        this.uploaded = false;
        this.formPost = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((response) => {
            if (response.params.id) {
                this.getPost(response.params.id);
            }
            else {
                this.snackBar.open('Unable to get post, please refresh browser and try again', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        });
        this.postService.postCats.subscribe((response) => {
            this.categories = response;
        });
        this.postService.postTags.subscribe((response) => {
            this.tags = response;
        });
    }
    selectedFile(event) {
        const file = event.target.files[0];
        this.postService.imageSource.next(file);
        this.selectedImage = file;
    }
    uploadFile() {
        const file = this.selectedImage;
        const upload = this.postService.uploadFileToDb(file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(event => this.getEventMessage(event, file)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(event => event), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["last"])())
            .subscribe((response) => {
            console.log(response);
            if (response && response.image) {
                this.uploaded = true;
                this.formPost.get('image').setValue({ image: response.image });
                this.uploading = true;
                this.snackBar.open('Picture successfully uploaded.', 'X', { duration: 10000, panelClass: 'pink-style' });
            }
            else {
                this.snackBar.open('Unable to upload picture, please try again.', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        }, (error => {
            this.snackBar.open('Error during upoload: ' + error, 'X', { duration: 10000, panelClass: 'red-style' });
        }));
    }
    /** Return distinct message for sent, upload progress, & response events */
    getEventMessage(event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                const progress = {
                    loaded: event.loaded,
                    total: event.total
                };
                this.uploadPct = event.loaded / event.total * 100;
                return progress;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                return event.body;
        }
    }
    getPost(id) {
        this.postService.getPost(id).subscribe((response) => {
            console.log(response);
            this.formPost.setValue({
                title: response.title,
                subtitle: response.subtitle,
                content: response.content,
                image: response.image,
                slug: response.slug
            });
            this.post = response;
        });
    }
    updateTitleSource() {
        const title = this.formPost.get('title').value;
        this.postService.titleSource.next(title);
    }
    updateSubtitleSource() {
        const subtitle = this.formPost.get('subtitle').value;
        this.postService.subtitleSource.next(subtitle);
    }
    updateContentSource(event) {
        this.formPost.get('content').setValue(event.target.innerText);
        this.postService.contentSource.next(event.target.innerText);
    }
    createSlug() {
        const post = this.post;
        const slug = `post/${post.owner.name}/${post.id}/${post.title}`
            .split(' ')
            .join('-');
        this.formPost.setValue({
            slug
        });
    }
    updatePost() {
        const post = this.formPost.value;
        post.categories = this.categories;
        post.tags = this.tags;
        post._id = this.post._id;
        this.postService.updatePost(post).subscribe((response) => {
            console.log(response);
        });
    }
};
AdminPostEditFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AdminPostEditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-post-edit-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-post-edit-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-post-edit-form.component.scss */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], AdminPostEditFormComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvYWRtaW4tcG9zdC1lZGl0L2FkbWluLXBvc3QtZWRpdC1wcmV2aWV3L2FkbWluLXBvc3QtZWRpdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AdminPostEditPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostEditPreviewComponent", function() { return AdminPostEditPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");




let AdminPostEditPreviewComponent = class AdminPostEditPreviewComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
        this.previewExist = false;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((response) => {
            const postId = response.params.id;
            this.postService.getPost(postId).subscribe((response) => {
                if (response && response._id) {
                    this.postService.postCard.subscribe((post) => {
                        this.post = post;
                    });
                }
            });
        });
        this.postService.postImage.subscribe((response) => {
            console.log(response);
            if (response && response.name) {
                // Image preview
                const reader = new FileReader();
                reader.onload = () => {
                    this.imagePreview = reader.result;
                };
                reader.readAsDataURL(response);
                this.previewExist = true;
            }
            else {
                this.imagePreview = null;
            }
        });
        this.postService.postContent.subscribe((response) => {
            this.safeContent = response;
        });
        this.postService.titleCard.subscribe((response) => {
            this.title = response;
        });
        this.postService.subtitleCard.subscribe((response) => {
            this.subtitle = response;
        });
        this.postService.postCats.subscribe((response) => {
            this.categories = response;
        });
        this.postService.postTags.subscribe((response) => {
            this.tags = response;
        });
    }
};
AdminPostEditPreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
AdminPostEditPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-post-edit-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-post-edit-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-post-edit-preview.component.scss */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
], AdminPostEditPreviewComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvYWRtaW4tcG9zdC1lZGl0L2FkbWluLXBvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminPostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostEditComponent", function() { return AdminPostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");




let AdminPostEditComponent = class AdminPostEditComponent {
    constructor(route, postService) {
        this.route = route;
        this.postService = postService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((response) => {
            const postId = response.params.id;
            this.postService.getPost(postId).subscribe((response) => {
                if (response && response._id) {
                    this.postService.postCard.subscribe((post) => {
                        this.post = post;
                    });
                }
            });
        });
    }
};
AdminPostEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
AdminPostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-post-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-post-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-post-edit.component.scss */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
], AdminPostEditComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/admin-post.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvYWRtaW4tcG9zdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/admin-post/admin-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-post/admin-post.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostComponent", function() { return AdminPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPostComponent = class AdminPostComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AdminPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/admin-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-post.component.scss */ "./src/app/admin/admin-post/admin-post.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminPostComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvZm9ybS1wb3N0L2NoaXAtY2F0ZWdvcmllcy9jaGlwLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChipCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipCategoriesComponent", function() { return ChipCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");




let ChipCategoriesComponent = class ChipCategoriesComponent {
    constructor(postService) {
        this.postService = postService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
    }
    ngOnInit() {
        this.postService.getCategories().subscribe((response) => {
            if (response) {
                this.categories = response;
            }
            else {
                this.categories = null;
            }
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.categories.push(value);
            this.updateCatSource();
        }
        if (input) {
            input.value = '';
        }
    }
    remove(category) {
        const index = this.categories.indexOf(category);
        if (index >= 0) {
            this.categories.splice(index, 1);
            this.updateCatSource();
        }
    }
    updateCatSource() {
        const categories = this.categories;
        this.postService.catSource.next(categories);
    }
};
ChipCategoriesComponent.ctorParameters = () => [
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
ChipCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chip-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chip-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chip-categories.component.scss */ "./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], ChipCategoriesComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvZm9ybS1wb3N0L2NoaXAtdGFncy9jaGlwLXRhZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChipTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipTagsComponent", function() { return ChipTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");




let ChipTagsComponent = class ChipTagsComponent {
    constructor(postService) {
        this.postService = postService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        this.tags = [];
    }
    ngOnInit() {
        this.postService.getTags().subscribe((response) => {
            if (response) {
                this.tags = response;
            }
            else {
                this.tags = null;
            }
        });
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.tags.push(value);
            this.updateSource();
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(tag) {
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
            this.updateSource();
        }
    }
    updateSource() {
        const tags = this.tags;
        this.postService.tagsSource.next(tags);
    }
};
ChipTagsComponent.ctorParameters = () => [
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
ChipTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chip-tags',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chip-tags.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chip-tags.component.scss */ "./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
], ChipTagsComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/form-post/form-post.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/form-post.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload {\n  margin-top: 5vh;\n}\n.upload__item {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.divider {\n  padding-bottom: 5vh;\n}\nsvg {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvYWRtaW4vYWRtaW4tcG9zdC9mb3JtLXBvc3QvZm9ybS1wb3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1wb3N0L2Zvcm0tcG9zdC9mb3JtLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxlQUFBO0FDQ0g7QURDRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREdBO0VBQ0csbUJBQUE7QUNBSDtBREdBO0VBQ0csV0FBQTtBQ0FIIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tcG9zdC9mb3JtLXBvc3QvZm9ybS1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZHtcbiAgIG1hcmdpbi10b3A6IDV2aDtcblxuICAgJl9faXRlbXtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufVxuXG4uZGl2aWRlcntcbiAgIHBhZGRpbmctYm90dG9tOiA1dmg7XG59XG5cbnN2Z3tcbiAgIGNvbG9yOiAjZmZmO1xufSIsIi51cGxvYWQge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG4udXBsb2FkX19pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRpdmlkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNXZoO1xufVxuXG5zdmcge1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-post/form-post/form-post.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/form-post.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPostComponent", function() { return FormPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");









let FormPostComponent = class FormPostComponent {
    constructor(profileService, postService, snackBar, sanitizer) {
        this.profileService = profileService;
        this.postService = postService;
        this.snackBar = snackBar;
        this.sanitizer = sanitizer;
        this.created = Date.now();
        this.uploadImage = false;
        this.uploading = false;
        this.uploadPct = 0;
        this.uploaded = false;
        this.sidebar = false;
        const profile = this.profileService.profile.subscribe((response) => {
            if (response && response.id) {
                this.profile = response;
            }
            else {
                this.profile = null;
            }
        });
        this.formNewPost = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.postService.postCats.subscribe((response) => {
            this.categories = response;
        });
        this.postService.postTags.subscribe((response) => {
            this.tags = response;
        });
    }
    ngOnInit() {
    }
    get titleCtrl() { return this.formNewPost.get('title'); }
    get subtitleCtrl() { return this.formNewPost.get('subtitle'); }
    get contentCtrl() { return this.formNewPost.get('content'); }
    get imageCtrl() { return this.formNewPost.get('image'); }
    get slugCtrl() { return this.formNewPost.get('slug'); }
    createSlug() {
        const title = this.titleCtrl.value.toLowerCase().split(' ').join('-');
        const date = Date.now();
        const name = this.profile.name.toLowerCase().split(' ').join('-');
        const slug = `/${name}/${date}/${title}`;
        this.slugCtrl.setValue(slug);
    }
    updateTitleSource(event) {
        const value = event.target.value;
        this.postService.titleSource.next(value);
    }
    updateSubtitleSource(event) {
        const value = event.target.value;
        this.postService.subtitleSource.next(value);
    }
    updateContentSource(event) {
        const content = event.target.innerText;
        this.rawContent = content;
        const safeContent = this.sanitizer.bypassSecurityTrustHtml(content);
        this.content = safeContent;
        this.postService.contentSource.next(safeContent);
    }
    enterEvent(event) {
        if (event.keyCode === 13) {
            const selection = document.getSelection();
            // Get range from selection which specify anchorOffset and focusOffset value
            const ranges = [];
            for (let i = 0; i < selection.rangeCount; i++) {
                ranges[i] = selection.getRangeAt(i);
            }
            const range = ranges[0];
            const newElement = document.createElement('p');
            range.insertNode(newElement);
        }
    }
    selectedFile(event) {
        const file = event.target.files[0];
        if (file && file.name) {
            this.uploading = true;
            this.uploaded = false;
            this.uploadPct = 0;
            const fileExt = file.name.split('.');
            if (fileExt[1] === 'jpg' || 'png' || 'jpeg') {
                this.selectedImage = file;
                this.postService.imageSource.next(file);
            }
            else {
                this.snackBar.open('Please select an image file with png or jpg or jpeg extension', 'X', { duration: 10000, panelClass: 'red-theme' });
            }
        }
    }
    uploadFile() {
        const file = this.selectedImage;
        const upload = this.postService.uploadFileToDb(file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(event => this.getEventMessage(event, file)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(event => event), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["last"])())
            .subscribe((response) => {
            if (response && response.image) {
                this.uploaded = true;
                this.imageCtrl.setValue(response.image);
                this.uploading = true;
                this.snackBar.open('Picture successfully uploaded.', 'X', { duration: 10000, panelClass: 'pink-style' });
            }
            else {
                this.snackBar.open('Unable to upload picture, please try again.', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        }, (error => {
            this.snackBar.open('Error during upoload: ' + error, 'X', { duration: 10000, panelClass: 'red-style' });
        }));
    }
    /** Return distinct message for sent, upload progress, & response events */
    getEventMessage(event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress:
                const progress = {
                    loaded: event.loaded,
                    total: event.total
                };
                this.uploadPct = event.loaded / event.total * 100;
                return progress;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].Response:
                return event.body;
        }
    }
    showProgress(message) {
        return message;
    }
    submitPost() {
        const form = this.formNewPost.value;
        form.categories = this.categories;
        form.owner = this.profile._id;
        form.tags = this.tags;
        form.content = this.rawContent;
        this.postService.newPost(form).subscribe((response) => {
            if (response && response._id) {
                this.snackBar.open('Post submission is successfull.', 'X', { duration: 10000, panelClass: 'pink-style' });
            }
            else {
                this.snackBar.open('Post submission fail. Please try again', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        }, error => this.snackBar.open('Post submission error: ' + error, 'X', { duration: 10000, panelClass: 'red-style' }));
    }
};
FormPostComponent.ctorParameters = () => [
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
FormPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/form-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-post.component.scss */ "./src/app/admin/admin-post/form-post/form-post.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
        src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
], FormPostComponent);



/***/ }),

/***/ "./src/app/admin/admin-post/form-post/preview-post/preview-post.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/preview-post/preview-post.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3QvZm9ybS1wb3N0L3ByZXZpZXctcG9zdC9wcmV2aWV3LXBvc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-post/form-post/preview-post/preview-post.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/admin-post/form-post/preview-post/preview-post.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PreviewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPostComponent", function() { return PreviewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PreviewPostComponent = class PreviewPostComponent {
    constructor(postService, profileService, sanitizer) {
        this.postService = postService;
        this.profileService = profileService;
        this.sanitizer = sanitizer;
        this.contentExist = false;
        this.sidebar = true;
        this.profileService.profile.subscribe((response) => { this.profile = response; });
        this.postService.postImage.subscribe((response) => {
            if (response && response.name) {
                // Image preview
                const reader = new FileReader();
                reader.onload = () => {
                    this.imagePreview = reader.result;
                };
                reader.readAsDataURL(response);
                this.contentExist = true;
            }
            else {
                this.imagePreview = null;
            }
        });
        // this.avatar = `assets/images/${this.profile.image}.png`;
        this.postService.titleCard.subscribe((response) => {
            this.title = response;
            this.contentExist = true;
        });
        this.postService.subtitleCard.subscribe((response) => {
            this.subtitle = response;
            this.contentExist = true;
        });
        this.postService.postCats.subscribe((response) => {
            this.categories = response;
            this.contentExist = true;
        });
        this.postService.postContent.subscribe((response) => {
            console.log(response);
            if (response === undefined) {
                this.safeContent = 'HTML content is displayed here';
            }
            else {
                this.safeContent = response;
                this.contentExist = true;
            }
        });
    }
    ngOnInit() {
    }
};
PreviewPostComponent.ctorParameters = () => [
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
PreviewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preview-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preview-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-post/form-post/preview-post/preview-post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preview-post.component.scss */ "./src/app/admin/admin-post/form-post/preview-post/preview-post.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
        src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
], PreviewPostComponent);



/***/ }),

/***/ "./src/app/admin/admin-posts/admin-posts.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-posts/admin-posts.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBvc3RzL2FkbWluLXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin-posts/admin-posts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-posts/admin-posts.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostsComponent", function() { return AdminPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");



let AdminPostsComponent = class AdminPostsComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.postService.getAllPost().subscribe((response) => {
            console.log(response);
            this.posts = response;
        });
    }
};
AdminPostsComponent.ctorParameters = () => [
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
AdminPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-posts/admin-posts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-posts.component.scss */ "./src/app/admin/admin-posts/admin-posts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], AdminPostsComponent);



/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table {\n  margin-top: 10vh;\n}\n.table__actions-submit {\n  margin: 0;\n  padding: 0;\n}\n.full-width-table {\n  width: 100%;\n}\n.bottom-sheet {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: #f44336;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC10YWJsZS9hZG1pbi1zZXJpYWwtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLXNlcmlhbC9hZG1pbi1zZXJpYWwtdGFibGUvYWRtaW4tc2VyaWFsLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7QUNDSDtBRENHO0VBQ0csU0FBQTtFQUNBLFVBQUE7QUNDTjtBREdBO0VBQ0UsV0FBQTtBQ0FGO0FER0E7RUFDRyxxSEFBQTtFQUNGLG1CQUFBO0VBQ0EsV0FBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC10YWJsZS9hZG1pbi1zZXJpYWwtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XG4gICBtYXJnaW4tdG9wOiAxMHZoO1xuXG4gICAmX19hY3Rpb25zLXN1Ym1pdHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICB9XG59XG5cbi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b20tc2hlZXR7XG4gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cdGJhY2tncm91bmQ6ICNmNDQzMzY7XG5cdGNvbG9yOiAjZmZmXG59XG4iLCIudGFibGUge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xufVxuLnRhYmxlX19hY3Rpb25zLXN1Ym1pdCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbS1zaGVldCB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AdminSerialTableComponent, BottomSheetConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSerialTableComponent", function() { return AdminSerialTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetConfirm", function() { return BottomSheetConfirm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/serial-no/serial-auth.service */ "./src/app/configurations/services/serial-no/serial-auth.service.ts");




let AdminSerialTableComponent = class AdminSerialTableComponent {
    constructor(serialService, snackBar, bottomSheet) {
        this.serialService = serialService;
        this.snackBar = snackBar;
        this.bottomSheet = bottomSheet;
        this.deleteColor = 'primary';
        this.filterColor = 'primary';
        this.selectAllColor = 'primary';
        // Checkbox settings
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.editMode = false;
        this.filter = false;
        this.displayedColumns = ['serial', 'market', 'delete'];
        this.serials = [];
        this.toDeleteData = {};
        this.toDeleteList = [];
        this.datasToDelete = [];
        this.length = 0;
        this.index = [];
        this.dataTableUpdate();
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    } //
    dataTableUpdate() {
        this.serialService.serials.subscribe((response) => this.dataSource.data = response, error => this.snackBar.open(`There is a problem getting data from the server. Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-theme' }));
    } //
    selectAction() {
        this.editMode ?
            (this.editMode = false, this.displayedColumns = ['serial', 'market', 'delete'], this.deleteColor = 'primary') :
            (this.editMode = true, this.displayedColumns = ['check', 'serial', 'market', 'delete'], this.deleteColor = 'accent');
    }
    filterAction() {
        this.filter ? (this.filter = false, this.filterColor = 'primary') : (this.filter = true, this.filterColor = 'accent');
    }
    filterTable(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteASerialNo(serial) {
        this.length = 1;
        this.toDeleteData = serial;
        // Open bottom sheet for user confirmation
        this.openBottomSheet();
    }
    selectAll() {
        this.checked ? (this.checked = false, this.selectAllColor = 'primary') : (this.checked = true, this.selectAllColor = 'accent');
    }
    onSubmit(datas) {
        if (datas) {
            /* Convert objects from ngFor checkbox to array, objects example: { {"abc100": true}, {"abc101" false}, {"abc102": false}, ...}, to {{"abc100": true}, undefined, undefined, ...} then convert it with map to [{id: "abc100"}, undefined, undefined, ...] */
            const datasToDelete = Object.keys(datas).map((key) => {
                if (datas[key]) {
                    return { id: key };
                }
                else {
                    return;
                }
            })
                // Further chain it to reduce method with array initializer to rebuild the array and exclude undefined data
                .reduce((acc, val) => {
                if (val) {
                    acc.push(val);
                }
                return acc;
            }, []);
            this.datasToDelete = datasToDelete;
            this.length = datasToDelete.length;
            this.openBottomSheet();
        }
        else {
            return;
        }
    }
    openBottomSheet() {
        let bottomSheetRef;
        const length = this.length;
        // Test and open bottomSheet and send data
        const data = { length, delete: false };
        if (length >= 1) {
            const openBottomSheet = this.bottomSheet.open(BottomSheetConfirm, { data, panelClass: 'red-theme' });
            bottomSheetRef = openBottomSheet;
        }
        // If the user confirm deletion, deleteManyReq function to delete from db
        bottomSheetRef.afterDismissed().subscribe((confirm) => {
            if (confirm && confirm.delete && length == 1) {
                // delete in db
                this.deleteASerialNoInDb();
            }
            else if (confirm && confirm.delete && length > 1) {
                // delete in db
                this.deleteManyReqInDb();
            }
        });
    }
    deleteASerialNoInDb() {
        const serial = this.toDeleteData;
        this.serialService.deleteASerialNo(serial).subscribe((response) => {
            if (response && response.id) {
                const currDatas = this.dataSource.data;
                const index = currDatas.findIndex((serial) => serial.id == response.id);
                currDatas.splice(index, 1);
                this.dataSource.data = currDatas;
                this.snackBar.open('Serial number is successfully deleted from database.', 'X', { duration: 10000, panelClass: 'gold-theme' });
            }
            else {
                this.snackBar.open('Error deleting serial number from database. Please reload page and try again', 'X', { duration: 10000, panelClass: 'red-theme' });
            }
        }, //
        //
        error => this.snackBar.open('Error deleting serial number from database. Error: ' + error, 'X', { duration: 10000, panelClass: 'red-theme' }));
    } //
    deleteManyReqInDb() {
        this.serialService.deleteSerialNos(this.datasToDelete).subscribe((response) => {
            if (response.ok == 1) {
                this.deleteFromDataSource();
            }
            else {
                this.snackBar.open(`Error deleting file from the server. Please try again`, 'X', { duration: 10000, panelClass: 'red-theme' });
            }
        }, error => {
            this.snackBar.open(`Error deleting file from the server. Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-theme' });
            this.deletedInDb = false;
        });
    } //
    deleteFromDataSource() {
        const currData = this.dataSource.data;
        const datasToDelete = this.datasToDelete;
        const dataSource = datasToDelete.reduce((acc, val) => {
            if (val) {
                const index = currData.findIndex((serial) => serial.id === val.id);
                currData.splice(index, 1);
            }
            acc = currData;
            return acc;
        }, []);
        this.dataSource.data = dataSource;
        this.selectAction;
        this.checked = false;
        this.snackBar.open('Serial numbers are successfully deleted from database.', 'X', { duration: 10000, panelClass: 'gold-theme' });
    }
}; //
AdminSerialTableComponent.ctorParameters = () => [
    { type: src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], AdminSerialTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], AdminSerialTableComponent.prototype, "sort", void 0);
AdminSerialTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-serial-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-serial-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-serial-table.component.scss */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
], AdminSerialTableComponent);

let BottomSheetConfirm = class BottomSheetConfirm {
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        this.dataLength = 0;
    }
    ngOnInit() {
        this.dataLength = this.data.length;
    }
    delete(action) {
        this.data.delete = action;
        this.bottomSheetRef.dismiss(this.data);
    }
};
BottomSheetConfirm.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
BottomSheetConfirm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bottom-sheet-confirm',
        template: `
                  <div fxLayout="column" fxLayoutAlign="center center" >
                        <mat-card-title class="card__title">Confirm Delete</mat-card-title>
                        <mat-card-content>

                           <div class="mb__warning" fxLayout="column" fxLayoutAlign="center center">
                              Are you sure you want to delete these serial numbers?

                              <h2>{{ dataLength }} serial numbers</h2>
                           </div>

                        </mat-card-content>
                        <mat-card-actions>
                           <div class="bsheet__button-cancel" fxLayout="row" fxLayoutAlign="center center" >
                              <button mat-raised-button (click)="delete(false)" color="accent" >Cancel</button>
                              <button mat-raised-button (click)="delete(true)" color="primary" >Delete</button>
                           </div>
                        </mat-card-actions>
                  </div>
   `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-serial-table.component.scss */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], Object])
], BottomSheetConfirm);



/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".serial__input {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.serial__form-button {\n  width: 100%;\n}\n.serial__form-prefix {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tc2VyaWFsL2FkbWluLXNlcmlhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRE47QURJRztFQUNHLFdBQUE7QUNGTjtBREtHO0VBQ0csbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXNlcmlhbC9hZG1pbi1zZXJpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VyaWFse1xuXG4gICAmX19pbnB1dHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG5cbiAgICZfX2Zvcm0tYnV0dG9ue1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgICZfX2Zvcm0tcHJlZml4e1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgIH1cbn0iLCIuc2VyaWFsX19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlcmlhbF9fZm9ybS1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZXJpYWxfX2Zvcm0tcHJlZml4IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-serial/admin-serial.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-serial/admin-serial.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminSerialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSerialComponent", function() { return AdminSerialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/serial-no/serial-auth.service */ "./src/app/configurations/services/serial-no/serial-auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let AdminSerialComponent = class AdminSerialComponent {
    constructor(serialService, snackBar) {
        this.serialService = serialService;
        this.snackBar = snackBar;
        this.serialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            serial1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]),
            serial2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6)]),
            volume: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            market: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.markets = [
            { area: 'Malaysia' },
            { area: 'Singapore' }
        ];
    }
    ngOnInit() {
    }
    submitSerialForm() {
        this.serialService.generateSerialNo(this.serialForm.value).subscribe((response) => {
            if (response.code) {
                this.snackBar.open(`Bulk serial number generation error: ${response.name}`, 'X', { duration: 10000, panelClass: 'primary' });
            }
            else {
                this.serialService.updateSerials();
                this.snackBar.open('Bulk serial number generation is successfull', 'X', { duration: 10000, panelClass: 'primary' });
            }
        });
    }
};
AdminSerialComponent.ctorParameters = () => [
    { type: src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
AdminSerialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-serial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-serial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-serial/admin-serial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-serial.component.scss */ "./src/app/admin/admin-serial/admin-serial.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_serial_no_serial_auth_service__WEBPACK_IMPORTED_MODULE_3__["SerialAuthService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], AdminSerialComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-form/contact-form.component */ "./src/app/pages/contact-form/contact-form.component.ts");







const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { name: 'Home', icon: 'home', tooltip: 'Home Page', type: 'public' } },
    { path: 'articles', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], data: { name: 'Articles', icon: 'menu_book', tooltip: 'Articles', type: 'public' } },
    { path: 'terms', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"], data: { name: 'Terms', icon: 'policy', tooltip: 'Terms', type: 'public' } },
    { path: 'contact', component: _pages_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["ContactFormComponent"], data: { name: 'Contact Us', icon: 'alternate_email', tooltip: 'Contact Us', type: 'public' } },
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
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { name: 'Back to Home', icon: 'dashboard', type: 'wildcard' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".layout {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDUSxnQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5sYXlvdXR7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG59IiwiLmxheW91dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'strong-arrow';
        this.init = false;
    }
    ngAfterContentInit() {
        this.init = true;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _configurations_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configurations/services/auth/auth.service */ "./src/app/configurations/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin-serial/admin-serial.component */ "./src/app/admin/admin-serial/admin-serial.component.ts");
/* harmony import */ var _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-serial/admin-serial-table/admin-serial-table.component */ "./src/app/admin/admin-serial/admin-serial-table/admin-serial-table.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-message/admin-message.component */ "./src/app/admin/admin-message/admin-message.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navigations/navigations.component */ "./src/app/navigations/navigations.component.ts");
/* harmony import */ var _tags_tags_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tags/tags.component */ "./src/app/tags/tags.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _user_auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/auth-register/auth-register.component */ "./src/app/user/auth-register/auth-register.component.ts");
/* harmony import */ var _admin_admin_post_admin_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin-post/admin-post.component */ "./src/app/admin/admin-post/admin-post.component.ts");
/* harmony import */ var _admin_admin_post_form_post_form_post_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin-post/form-post/form-post.component */ "./src/app/admin/admin-post/form-post/form-post.component.ts");
/* harmony import */ var _logo_logo4rem_logo4rem_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./logo/logo4rem/logo4rem.component */ "./src/app/logo/logo4rem/logo4rem.component.ts");
/* harmony import */ var _logo_logo2rem_logo2rem_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./logo/logo2rem/logo2rem.component */ "./src/app/logo/logo2rem/logo2rem.component.ts");
/* harmony import */ var _admin_admin_post_form_post_chip_categories_chip_categories_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin/admin-post/form-post/chip-categories/chip-categories.component */ "./src/app/admin/admin-post/form-post/chip-categories/chip-categories.component.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _admin_admin_post_form_post_chip_tags_chip_tags_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin/admin-post/form-post/chip-tags/chip-tags.component */ "./src/app/admin/admin-post/form-post/chip-tags/chip-tags.component.ts");
/* harmony import */ var _logo_logo2rem_light_logo2rem_light_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logo/logo2rem-light/logo2rem-light.component */ "./src/app/logo/logo2rem-light/logo2rem-light.component.ts");
/* harmony import */ var _admin_admin_post_form_post_preview_post_preview_post_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-post/form-post/preview-post/preview-post.component */ "./src/app/admin/admin-post/form-post/preview-post/preview-post.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _home_about_who_about_who_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./home/about-who/about-who.component */ "./src/app/home/about-who/about-who.component.ts");
/* harmony import */ var _home_about_what_about_what_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home/about-what/about-what.component */ "./src/app/home/about-what/about-what.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _home_banner_full_banner_full_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/banner-full/banner-full.component */ "./src/app/home/banner-full/banner-full.component.ts");
/* harmony import */ var _post_post_comments_post_comments_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./post/post-comments/post-comments.component */ "./src/app/post/post-comments/post-comments.component.ts");
/* harmony import */ var _admin_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/admin-posts/admin-posts.component */ "./src/app/admin/admin-posts/admin-posts.component.ts");
/* harmony import */ var _admin_admin_post_admin_post_edit_admin_post_edit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin/admin-post/admin-post-edit/admin-post-edit.component */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit.component.ts");
/* harmony import */ var _admin_admin_post_admin_post_edit_admin_post_edit_preview_admin_post_edit_preview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-preview/admin-post-edit-preview.component.ts");
/* harmony import */ var _admin_admin_post_admin_post_edit_admin_post_edit_form_admin_post_edit_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component */ "./src/app/admin/admin-post/admin-post-edit/admin-post-edit-form/admin-post-edit-form.component.ts");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _logo_main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./logo/main-logo/main-logo.component */ "./src/app/logo/main-logo/main-logo.component.ts");
/* harmony import */ var _user_login_callback_callback_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./user/login/callback/callback.component */ "./src/app/user/login/callback/callback.component.ts");
/* harmony import */ var _user_login_linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./user/login/linkedin/linkedin.component */ "./src/app/user/login/linkedin/linkedin.component.ts");
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/layout/layout.component */ "./src/app/pages/layout/layout.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages-user/profile/profile.component */ "./src/app/pages-user/profile/profile.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _pages_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/contact-form/contact-form.component */ "./src/app/pages/contact-form/contact-form.component.ts");
























































function tokenGetter() {
    return localStorage.getItem('access_token');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
            _user_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _user_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
            _admin_admin_serial_admin_serial_component__WEBPACK_IMPORTED_MODULE_17__["AdminSerialComponent"],
            _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_18__["AdminSerialTableComponent"],
            _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_18__["BottomSheetConfirm"],
            _pages_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_55__["ContactFormComponent"],
            _admin_admin_message_admin_message_component__WEBPACK_IMPORTED_MODULE_20__["AdminMessageComponent"],
            _navigations_navigations_component__WEBPACK_IMPORTED_MODULE_22__["NavigationsComponent"],
            _tags_tags_component__WEBPACK_IMPORTED_MODULE_23__["TagsComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
            _user_auth_register_auth_register_component__WEBPACK_IMPORTED_MODULE_25__["AuthRegisterComponent"],
            _admin_admin_post_admin_post_component__WEBPACK_IMPORTED_MODULE_26__["AdminPostComponent"],
            _admin_admin_post_form_post_form_post_component__WEBPACK_IMPORTED_MODULE_27__["FormPostComponent"],
            _logo_logo4rem_logo4rem_component__WEBPACK_IMPORTED_MODULE_28__["Logo4remComponent"],
            _logo_logo2rem_logo2rem_component__WEBPACK_IMPORTED_MODULE_29__["Logo2remComponent"],
            _admin_admin_post_form_post_chip_categories_chip_categories_component__WEBPACK_IMPORTED_MODULE_30__["ChipCategoriesComponent"],
            _admin_admin_post_form_post_chip_tags_chip_tags_component__WEBPACK_IMPORTED_MODULE_32__["ChipTagsComponent"],
            _logo_logo2rem_light_logo2rem_light_component__WEBPACK_IMPORTED_MODULE_33__["Logo2remLightComponent"],
            _admin_admin_post_form_post_preview_post_preview_post_component__WEBPACK_IMPORTED_MODULE_34__["PreviewPostComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_35__["PostComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_36__["CommentsComponent"],
            _home_about_who_about_who_component__WEBPACK_IMPORTED_MODULE_37__["AboutWhoComponent"],
            _home_about_what_about_what_component__WEBPACK_IMPORTED_MODULE_38__["AboutWhatComponent"],
            _posts_posts_component__WEBPACK_IMPORTED_MODULE_39__["PostsComponent"],
            _home_banner_full_banner_full_component__WEBPACK_IMPORTED_MODULE_40__["BannerFullComponent"],
            _post_post_comments_post_comments_component__WEBPACK_IMPORTED_MODULE_41__["PostCommentsComponent"],
            _admin_admin_posts_admin_posts_component__WEBPACK_IMPORTED_MODULE_42__["AdminPostsComponent"],
            _admin_admin_post_admin_post_edit_admin_post_edit_component__WEBPACK_IMPORTED_MODULE_43__["AdminPostEditComponent"],
            _admin_admin_post_admin_post_edit_admin_post_edit_preview_admin_post_edit_preview_component__WEBPACK_IMPORTED_MODULE_44__["AdminPostEditPreviewComponent"],
            _admin_admin_post_admin_post_edit_admin_post_edit_form_admin_post_edit_form_component__WEBPACK_IMPORTED_MODULE_45__["AdminPostEditFormComponent"],
            _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_46__["ForgotPasswordComponent"],
            _logo_main_logo_main_logo_component__WEBPACK_IMPORTED_MODULE_47__["MainLogoComponent"],
            _user_login_callback_callback_component__WEBPACK_IMPORTED_MODULE_48__["CallbackComponent"],
            _user_login_linkedin_linkedin_component__WEBPACK_IMPORTED_MODULE_49__["LinkedinComponent"],
            _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_50__["LayoutComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_51__["SidebarComponent"],
            _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_52__["TermsComponent"],
            _pages_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_53__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            //  JwtModule.forRoot({config: { tokenGetter }}),
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_54__["MatFormFieldModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_19__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' },
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_19__["MAT_CHIPS_DEFAULT_OPTIONS"], useValue: { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_31__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_31__["COMMA"]] } },
            // {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
            _configurations_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        ],
        entryComponents: [
            _admin_admin_serial_admin_serial_table_admin_serial_table_component__WEBPACK_IMPORTED_MODULE_18__["BottomSheetConfirm"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comments/comments.component.scss":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");




let CommentsComponent = class CommentsComponent {
    constructor(profileService, postService) {
        this.profileService = profileService;
        this.postService = postService;
    }
    ngOnInit() {
        this.profileService.profile.subscribe((response) => {
            this.profile = response;
        });
        this.postService.postCard.subscribe((response) => {
            this.post = response;
        });
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/comments/comments.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
        _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
], CommentsComponent);



/***/ }),

/***/ "./src/app/configurations/animations/anim-fn.ts":
/*!******************************************************!*\
  !*** ./src/app/configurations/animations/anim-fn.ts ***!
  \******************************************************/
/*! exports provided: xEnter, yEnter, leftEnter, imageEnter, imageEnterDrop, imageLeave, iconButtonEnter, primaryButtonClick, xMouseEnter, banner1Enter, banner2Enter, banner3Enter, banner4Enter, banner5Enter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xEnter", function() { return xEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yEnter", function() { return yEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftEnter", function() { return leftEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageEnter", function() { return imageEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageEnterDrop", function() { return imageEnterDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageLeave", function() { return imageLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconButtonEnter", function() { return iconButtonEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryButtonClick", function() { return primaryButtonClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xMouseEnter", function() { return xMouseEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner1Enter", function() { return banner1Enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner2Enter", function() { return banner2Enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner3Enter", function() { return banner3Enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner4Enter", function() { return banner4Enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner5Enter", function() { return banner5Enter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const xEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateX(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('xEnter', [
         transition(':enter', [
            useAnimation(xEnter)
   ]) ]) ]
*/
const yEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.y-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateY(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'rotate(-10deg)' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('yEnter', [
         transition(':enter', [
            useAnimation(yEnter)
   ]) ]) ]
*/
const leftEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.left-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.5,
            transform: 'translateX(400px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5.0s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('leftEnter', [
         transition(':enter', [
            useAnimation(leftEnter)
   ]) ]) ]
*/
const imageEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.0s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'scaleX(1.2)'
            }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('imageEnter', [
         transition(':enter', [
            useAnimation(imageEnter)
   ]) ]) ]
*/
const imageEnterDrop = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter-drop', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.5s cubic-bezier(.31,-0.91,0,1.31)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'translateY(10px)'
            }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('imageEnter', [
         transition(':enter', [
            useAnimation(imageEnter)
   ]) ]) ]
*/
const imageLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.image-enter-leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.03,.79,.9,.38)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   trigger('imageEnter', [
         transition(':enter', [
            useAnimation(imageEnter)
      ]) ]) ]
*/
const iconButtonEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.y-icon-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateY(50px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ], { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-button-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.9,
            transform: 'scale(0.9, 0.9)',
            'background-color': '#fb002d'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ])
]); //
/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/
const primaryButtonClick = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-button-click', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.9,
            transform: 'scale(0.9, 0.9)',
            'background-color': '#fb002d'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.18,-0.47,.39,1.36)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                opacity: 1,
                transform: 'none'
            }))
        ])
    ])
]); //
/*   Usage  *
   animations: [
      trigger('y-mouse-enter', [
         transition(':enter', [
            useAnimation(yMouseEnter)
   ]) ]) ]
*/
const xMouseEnter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.x-mouse-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateX(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2.5s cubic-bezier(.55,-0.64,.24,2)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('iconButtonEnter', [
         transition(':enter', [
            useAnimation(iconButtonEnter)
   ]) ]) ]
*/
const banner1Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner1-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateX(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('banner1Enter', [
         transition(':enter', [
            useAnimation(banner1Enter)
   ]) ]) ]
*/
const banner2Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner2-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateX(200px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.42,.14,.93,.53)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
   ]) ]) ]
*/
const banner3Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner3-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateY(-100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('3s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'none' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
   ]) ]) ]
*/
const banner4Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner4-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.3,
            transform: 'translateY(100px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.58,-0.36,0,1.91)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-40px)' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
   ]) ]) ]
*/
const banner5Enter = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('.banner5-enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(-30, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s cubic-bezier(.39,-0.41,0,1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, transform: 'translateY(-40px)' }))
        ])
    ], { optional: true })
]); //
/*   Usage  *
   animations: [
      trigger('banner2Enter', [
         transition(':enter', [
            useAnimation(banner2Enter)
   ]) ]) ]
*/


/***/ }),

/***/ "./src/app/configurations/services/auth/auth.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/configurations/services/auth/auth.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    login(credentials) {
        console.log(credentials);
        return this.http.post('/api/user/login', credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    }
    get currentUser() {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        if (token) {
            return this.jwtHelper.decodeToken(token);
        }
    }
    isLoggedIn() {
        const token = localStorage.getItem('token');
        const tokenExpired = this.jwtHelper.isTokenExpired(token);
        if (!tokenExpired) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
], AuthService);



/***/ }),

/***/ "./src/app/configurations/services/contact/contact.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/configurations/services/contact/contact.service.ts ***!
  \********************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ContactService = class ContactService {
    constructor(http) {
        this.http = http;
    }
    saveContact(form) {
        return this.http.post('/api/contact/form/save', form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
};
ContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ContactService);



/***/ }),

/***/ "./src/app/configurations/services/httpOptions.ts":
/*!********************************************************!*\
  !*** ./src/app/configurations/services/httpOptions.ts ***!
  \********************************************************/
/*! exports provided: jwtToken, httpOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtToken", function() { return jwtToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpOptions", function() { return httpOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


const jwtToken = localStorage.getItem('token');
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        jwtoken: jwtToken
    })
};


/***/ }),

/***/ "./src/app/configurations/services/post-service/post-service.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/configurations/services/post-service/post-service.service.ts ***!
  \******************************************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _httpOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../httpOptions */ "./src/app/configurations/services/httpOptions.ts");






let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.postSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.post);
        this.postCard = this.postSource;
        this.titleSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.title);
        this.titleCard = this.titleSource;
        this.subtitleSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.subtitle);
        this.subtitleCard = this.subtitleSource;
        this.catSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.categories);
        this.postCats = this.catSource;
        this.contentSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.content);
        this.postContent = this.contentSource;
        this.tagsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.tags);
        this.postTags = this.tagsSource;
        this.imageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.image);
        this.postImage = this.imageSource;
    }
    setPostSourceValue(id) {
        this.postSource.next(id);
    }
    getCategories() {
        return this.http.get('/api/posts/categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((categories) => {
            this.catSource.next(categories);
            return categories;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    getTags() {
        return this.http.get('/api/posts/tags')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((tags) => {
            this.tagsSource.next(tags);
            return tags;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    uploadFileToDb(file) {
        const form = new FormData;
        form.set('name', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('POST', '/api/posts/post/image/upload', form, {
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    newPost(post) {
        return this.http.post('/api/posts/post/new', post, _httpOptions__WEBPACK_IMPORTED_MODULE_5__["httpOptions"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    getAllPost() {
        return this.http.get('/api/posts')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    getPost(id) {
        return this.http.post('/api/posts/post', { id }, _httpOptions__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(post => {
            this.postSource.next(post);
            return post;
        }));
    }
    newPostComment(comment) {
        return this.http.post('/api/posts/post/comment/new', comment, _httpOptions__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(post => {
            this.postSource.next(post);
            return post;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    updatePost(post) {
        return this.http.post('/api/posts/post/update', post, _httpOptions__WEBPACK_IMPORTED_MODULE_5__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], PostService);



/***/ }),

/***/ "./src/app/configurations/services/profile-service/profile-service.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/configurations/services/profile-service/profile-service.service.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _httpOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../httpOptions */ "./src/app/configurations/services/httpOptions.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









let ProfileService = class ProfileService {
    constructor(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.decodedToken = false;
        this.loggedIn = false;
        this.locSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.country);
        this.location = this.locSource;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.user);
        this.profile = this.userSource;
    }
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            this.getUserSource(token);
        }
        else {
            return null;
        }
    }
    getLocation() {
        this.http.post('/api/user/location', { location: '' }).subscribe((response) => this.locSource.next(response.country), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    checkAuthToken(authToken) {
        return this.http.post('/api/user/register/authenticate', { authToken }).subscribe((response) => {
            if (response && response.id) {
                const token = response.token;
                localStorage.setItem('token', token);
                this.userSource.next(response);
                this.snackBar.open('Your registration is successful, thank you for registering', 'X', { duration: 10000, panelClass: 'red-theme' });
                this.router.navigate(['/profile']);
            }
            else {
                this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', { duration: 10000, panelClass: 'red-theme' });
            }
        }, error => this.snackBar.open('We encountered a problem with your registration, it might be that your token have expired. Please register again.', 'X', { duration: 10000, panelClass: 'red-theme' }));
    }
    getUserSource(jwtToken) {
        if (jwtToken) {
            this.http.get('/api/user/profile', _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).subscribe((response) => {
                const user = response[0];
                if (user && user._id) {
                    this.userSource.next(user);
                }
                else {
                    this.userSource = null;
                }
            }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
        }
        else {
            this.userSource.next(null);
        }
    } //
    register(formValue) {
        this.http.post('/api/user/register', formValue)
            .subscribe((response) => {
            if (response && response._id) {
                this.userSource.next(response);
                this.snackBar.open('Your registration is successfull. Please check your email for authentication', 'X', { duration: 10000, panelClass: 'red-theme' });
            }
        }, error => this.snackBar.open(error, 'X', { duration: 10000, panelClass: 'red-theme' }));
    } //
    login(credentials) {
        return this.http.post('/api/user/login', credentials).subscribe((response) => {
            if (response && response.id) {
                this.userSource.next(response);
                localStorage.setItem('token', response.token);
                this.snackBar.open('Congratulation, your login is successful.', 'X', { duration: 10000, panelClass: 'pink-style' });
                this.router.navigateByUrl('/');
            }
            else {
                this.snackBar.open('Your login is not successful. Please check your email or password', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        }, error => this.snackBar.open('We encountered a problem with your login: error.', 'X', { duration: 10000, panelClass: 'red-style' }));
    }
    getLoggedStatus() {
        const token = localStorage.getItem('token');
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
        const expired = helper.isTokenExpired(token);
        const user = helper.decodeToken(token);
        if (!expired && user) {
            return { expired, user };
        }
        else {
            this.snackBar.open('You are not authorized to acces this page, please Login', 'X', { duration: 10000, panelClass: 'red-theme' });
            this.router.navigate(['']);
        }
    } //
    getCities(value) {
        return this.http.post('/api/user/profile/autocomplete/cities', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    getStates(value) {
        return this.http.post('/api/user/profile/autocomplete/states', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    getCountries(value) {
        return this.http.post('/api/user/profile/autocomplete/countries', value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    updateStateCountryByCity(data) {
        return this.http.post('/api/user/profile/update/autocomplete/city/state-country', data, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    updateCountryByState(state) {
        return this.http.post('/api/user/profile/update/autocomplete/state/country', state, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    updateUser(userData) {
        return this.http.post('/api/user/profile/update', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    updatePhoneCode(userData) {
        return this.http.post('/api/user/profile/update/autocomplete/country', userData, _httpOptions__WEBPACK_IMPORTED_MODULE_6__["httpOptions"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    forgotPassword(email) {
        return this.http.post('/api/user/forgot-password', { email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    startLinkedin() {
        return this.http.get('/api/user/linkedin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    approvedLinkedin(params) {
        return this.http.post('/api/user/linkedin/approved', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error)));
    }
    logout() {
        localStorage.removeItem('token');
        this.userSource.next(null);
        this.router.navigate(['/']);
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
], ProfileService);



/***/ }),

/***/ "./src/app/configurations/services/serial-no/serial-auth.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/configurations/services/serial-no/serial-auth.service.ts ***!
  \**************************************************************************/
/*! exports provided: SerialAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialAuthService", function() { return SerialAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let SerialAuthService = class SerialAuthService {
    constructor(http) {
        this.http = http;
        // Serial Table Datasource Behaviour Subject
        this.serialSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.newSerials);
        this.serials = this.serialSource;
        this.getExistingSerialNos();
    } //
    updateSerials() { this.getExistingSerialNos(); } //
    getExistingSerialNos() {
        this.http.get('/api/products/serials')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)))
            .subscribe((response) => this.serialSource.next(response));
    } //
    authenticateSerial(serial) {
        return this.http.post('/api/product/authentication', { serial }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
    saveReview(review) {
        return this.http.post('/api/product/review', review).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
    generateSerialNo(serials) {
        return this.http.post('/api/product/serial/generate', serials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
    getSerialNos() {
        return this.http.get('/api/products/serials').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
    deleteASerialNo(serial) {
        return this.http.post('/api/product/serial/rm', serial).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
    deleteSerialNos(serials) {
        return this.http.post('/api/product/serials/rm', serials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error)));
    } //
};
SerialAuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SerialAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SerialAuthService);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/home/about-what/about-what.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/about-what/about-what.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQtd2hhdC9hYm91dC13aGF0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/about-what/about-what.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/about-what/about-what.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutWhatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWhatComponent", function() { return AboutWhatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutWhatComponent = class AboutWhatComponent {
    constructor() {
        this.descriptions = [
            {
                title: 'Browser Based Application Solutions',
                image: 'code.png'
            },
            {
                title: 'Online Business Advertisement Solutions',
                image: 'shopping-cart.png'
            },
            {
                title: 'Business Development Solutions',
                image: 'line-chart.png'
            },
            {
                title: 'Cost Saving Initiative Solutions',
                image: 'analytics.png'
            }
        ];
    }
    ngOnInit() {
    }
};
AboutWhatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-what',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-what.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-what/about-what.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-what.component.scss */ "./src/app/home/about-what/about-what.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutWhatComponent);



/***/ }),

/***/ "./src/app/home/about-who/about-who.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/about-who/about-who.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQtd2hvL2Fib3V0LXdoby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/about-who/about-who.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/about-who/about-who.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutWhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWhoComponent", function() { return AboutWhoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutWhoComponent = class AboutWhoComponent {
    constructor() {
        this.descriptions = [
            {
                title: 'Inventor',
                image: 'trophy.png',
                description: 'With multi winning awards, which includes prestigious MWA awards, you can rest assured that I will do my best in helping you.'
            },
            {
                title: 'Guide',
                image: 'strategy.png',
                description: 'I will be your guide to technological jargons and complications in this digital age. I will untangle, simplify and make it easy for you.'
            },
            {
                title: 'Trainer',
                image: 'target.png',
                description: 'I do not only create, I train and follow your progress. We will discuss, advice and consult your company.'
            },
            {
                title: 'Partner',
                image: 'business-partnership.png',
                description: 'As your partner, I am aiming for the best for us. We jump while you jump, not after. We are one in the essence.'
            }
        ];
    }
    ngOnInit() {
    }
};
AboutWhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-who',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-who.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/about-who/about-who.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-who.component.scss */ "./src/app/home/about-who/about-who.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutWhoComponent);



/***/ }),

/***/ "./src/app/home/banner-full/banner-full.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/banner-full/banner-full.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmFubmVyLWZ1bGwvYmFubmVyLWZ1bGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/banner-full/banner-full.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/banner-full/banner-full.component.ts ***!
  \***********************************************************/
/*! exports provided: BannerFullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerFullComponent", function() { return BannerFullComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configurations/animations/anim-fn */ "./src/app/configurations/animations/anim-fn.ts");




let BannerFullComponent = class BannerFullComponent {
    constructor() {
        this.banner1AnimationDone = false;
        this.banner2AnimationDone = false;
        this.banner3AnimationDone = false;
        this.banner4AnimationDone = false;
    }
    ngOnInit() {
    }
    banner1Done(event) {
        console.log(event);
        if (event.phaseName === 'done') {
            this.banner1AnimationDone = true;
        }
    }
    banner2Done(event) {
        if (event.phaseName === 'done') {
            this.banner2AnimationDone = true;
        }
    }
    banner3Done(event) {
        if (event.phaseName === 'done') {
            this.banner3AnimationDone = true;
        }
    }
    banner4Done(event) {
        if (event.phaseName === 'done') {
            this.banner4AnimationDone = true;
        }
    }
};
BannerFullComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner-full',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner-full.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/banner-full/banner-full.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('banner1Enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["banner1Enter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('banner2Enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["banner2Enter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('banner3Enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["banner3Enter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('banner4Enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["banner4Enter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('banner5Enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["banner5Enter"])
                ])
            ]),
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner-full.component.scss */ "./src/app/home/banner-full/banner-full.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BannerFullComponent);



/***/ }),

/***/ "./src/app/logo/logo2rem-light/logo2rem-light.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/logo/logo2rem-light/logo2rem-light.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nbzJyZW0tbGlnaHQvbG9nbzJyZW0tbGlnaHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/logo/logo2rem-light/logo2rem-light.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/logo/logo2rem-light/logo2rem-light.component.ts ***!
  \*****************************************************************/
/*! exports provided: Logo2remLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo2remLightComponent", function() { return Logo2remLightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Logo2remLightComponent = class Logo2remLightComponent {
    constructor() { }
    ngOnInit() {
    }
};
Logo2remLightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo2rem-light',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo2rem-light.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem-light/logo2rem-light.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo2rem-light.component.scss */ "./src/app/logo/logo2rem-light/logo2rem-light.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Logo2remLightComponent);



/***/ }),

/***/ "./src/app/logo/logo2rem/logo2rem.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/logo/logo2rem/logo2rem.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nbzJyZW0vbG9nbzJyZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/logo/logo2rem/logo2rem.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/logo/logo2rem/logo2rem.component.ts ***!
  \*****************************************************/
/*! exports provided: Logo2remComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo2remComponent", function() { return Logo2remComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Logo2remComponent = class Logo2remComponent {
    constructor() { }
    ngOnInit() {
    }
};
Logo2remComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo2rem',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo2rem.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo2rem/logo2rem.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo2rem.component.scss */ "./src/app/logo/logo2rem/logo2rem.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Logo2remComponent);



/***/ }),

/***/ "./src/app/logo/logo4rem/logo4rem.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/logo/logo4rem/logo4rem.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nbzRyZW0vbG9nbzRyZW0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/logo/logo4rem/logo4rem.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/logo/logo4rem/logo4rem.component.ts ***!
  \*****************************************************/
/*! exports provided: Logo4remComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo4remComponent", function() { return Logo4remComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Logo4remComponent = class Logo4remComponent {
    constructor() { }
    ngOnInit() {
    }
};
Logo4remComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo4rem',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo4rem.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo4rem/logo4rem.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo4rem.component.scss */ "./src/app/logo/logo4rem/logo4rem.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Logo4remComponent);



/***/ }),

/***/ "./src/app/logo/main-logo/main-logo.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/logo/main-logo/main-logo.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbWFpbi1sb2dvL21haW4tbG9nby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/logo/main-logo/main-logo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/logo/main-logo/main-logo.component.ts ***!
  \*******************************************************/
/*! exports provided: MainLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLogoComponent", function() { return MainLogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainLogoComponent = class MainLogoComponent {
    constructor() {
        this.logo = 'assets/images/logo.png';
    }
    ngOnInit() {
    }
};
MainLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/main-logo/main-logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-logo.component.scss */ "./src/app/logo/main-logo/main-logo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainLogoComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");


// Angular Material Modules

































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"]
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTreeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_27__["MatBadgeModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__["MatDividerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__["MatProgressSpinnerModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_34__["MatBottomSheetModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/navigations/navigations.component.scss":
/*!********************************************************!*\
  !*** ./src/app/navigations/navigations.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\n  position: relative;\n}\n.nav__toolbar {\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  height: 64px;\n  border-bottom: 3px solid #272529;\n}\n.nav__sidenav {\n  background-color: transparent;\n}\n.nav__sidenav-content {\n  background-color: transparent;\n  padding-top: 69px;\n  padding-right: 5px;\n  padding-left: 49px;\n}\n.nav__drawer {\n  padding-top: 64px;\n}\n.nav__drawer-open {\n  width: 250px;\n}\n.nav__drawer-menu {\n  background-color: #303030;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.nav__drawer-link-icon {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .nav__toolbar {\n    height: 56px;\n  }\n  .nav__sidenav-content {\n    padding-top: 61px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvbmF2aWdhdGlvbnMvbmF2aWdhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb25zL25hdmlnYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ1I7QURDSTtFQUNJLDZCQUFBO0FDQ1I7QURBUTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVo7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURBUTtFQUNJLFlBQUE7QUNFWjtBREFRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRVo7QURBUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBREdBO0VBRVE7SUFDSSxZQUFBO0VDRFY7RURJVTtJQUNJLGlCQUFBO0VDRmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb25zL25hdmlnYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vY29uZmlndXJhdGlvbnMvc2Nzcy9jb2xvci1jb25maWcuc2Nzcyc7XG4ubmF2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJl9fdG9vbGJhciB7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkZGFyay1iZztcbiAgICB9XG4gICAgJl9fc2lkZW5hdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAmLWNvbnRlbnQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjlweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19kcmF3ZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICAgICAgJi1vcGVuIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgICAmLW1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi1saW5rLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5uYXYge1xuICAgICAgICAmX190b29sYmFyIHtcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgfVxuICAgICAgICAmX19zaWRlbmF2IHtcbiAgICAgICAgICAgICYtY29udGVudCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXZfX3Rvb2xiYXIge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI3MjUyOTtcbn1cbi5uYXZfX3NpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5uYXZfX3NpZGVuYXYtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogNjlweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ5cHg7XG59XG4ubmF2X19kcmF3ZXIge1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5uYXZfX2RyYXdlci1vcGVuIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLm5hdl9fZHJhd2VyLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubmF2X19kcmF3ZXItbGluay1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZfX3Rvb2xiYXIge1xuICAgIGhlaWdodDogNTZweDtcbiAgfVxuICAubmF2X19zaWRlbmF2LWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA2MXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/navigations/navigations.component.ts":
/*!******************************************************!*\
  !*** ./src/app/navigations/navigations.component.ts ***!
  \******************************************************/
/*! exports provided: NavigationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationsComponent", function() { return NavigationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");








let NavigationsComponent = class NavigationsComponent {
    constructor(breakpointObserver, router, profileService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.profileService = profileService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches));
        this.sideNavIcon = true;
        this.opened = true;
        this.profile = null;
    }
    ngOnInit() {
        this.profileService.profile.subscribe((response) => {
            if (response && response._id) {
                this.profile = response;
            }
        }, (error => console.log('Error : ' + error)));
        const pages = _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routes"].reduce((acc, value) => {
            if (value.data.type === 'public') {
                acc.public.push(value);
            }
            else if (value.data.type === 'auth') {
                acc.auth.push(value);
            }
            else if (value.data.type === 'user') {
                acc.user.push(value);
            }
            else if (value.data.type === 'admin') {
                acc.admin.push(value);
            }
            return acc;
        }, { public: [], auth: [], user: [], admin: [] });
        this.links = pages;
    }
    toggleSidenav() {
        this.sideNavIcon ? this.sideNavIcon = false : this.sideNavIcon = true;
    }
    itemClicked() {
        this.sideNavIcon = true;
    }
    backToHome() {
        this.router.navigate([''], { fragment: 'top' });
    }
    logout() {
        this.profileService.logout();
    }
};
NavigationsComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] }
];
NavigationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigations/navigations.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0.5 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(2000))
            ]) // end trigger
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigations.component.scss */ "./src/app/navigations/navigations.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]])
], NavigationsComponent);



/***/ }),

/***/ "./src/app/pages-user/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages-user/profile/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzLXVzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages-user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages-user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ProfileComponent = class ProfileComponent {
    constructor() {
        this.post = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    ngOnInit() {
    }
    postContent(event) {
        const char = event.target.textLength;
        console.log(char);
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages-user/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages-user/profile/profile.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/contact-form/contact-form.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-form/contact-form.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/contact-form/contact-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-form/contact-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_configurations_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/contact/contact.service */ "./src/app/configurations/services/contact/contact.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ContactFormComponent = class ContactFormComponent {
    constructor(contactService, snackBar) {
        this.contactService = contactService;
        this.snackBar = snackBar;
        this.useForm = true;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    get name() { return this.contactForm.get('name'); }
    get phone() { return this.contactForm.get('phone'); }
    get email() { return this.contactForm.get('email'); }
    get comment() { return this.contactForm.get('comment'); }
    submitContact() {
        this.contactService.saveContact(this.contactForm.value).subscribe((response) => {
            this.contact = response;
            this.snackBar.open('Contact form successfully submitted.', 'X', { panelClass: 'lm__panel-primary', duration: 10000 });
        }, //
        //
        error => this.snackBar.open('Form submission error, please try again', 'X', { duration: 10000, panelClass: 'lm__panel-warn' }));
    }
};
ContactFormComponent.ctorParameters = () => [
    { type: src_app_configurations_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact-form/contact-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/pages/contact-form/contact-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_contact_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ContactFormComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/layout/layout.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/layout/layout.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/layout/layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.scss */ "./src/app/pages/layout/layout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/pages/terms/terms.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/terms/terms.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terms.component.scss */ "./src/app/pages/terms/terms.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TermsComponent);



/***/ }),

/***/ "./src/app/post/post-comments/post-comments.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/post/post-comments/post-comments.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC1jb21tZW50cy9wb3N0LWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/post/post-comments/post-comments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/post/post-comments/post-comments.component.ts ***!
  \***************************************************************/
/*! exports provided: PostCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentsComponent", function() { return PostCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");



let PostCommentsComponent = class PostCommentsComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.postService.postCard.subscribe((response) => {
            if (response && response._id) {
                console.log(response);
                this.post = response;
            }
        });
    }
};
PostCommentsComponent.ctorParameters = () => [
    { type: src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
PostCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post-comments/post-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comments.component.scss */ "./src/app/post/post-comments/post-comments.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
], PostCommentsComponent);



/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let PostComponent = class PostComponent {
    constructor(router, postService, profileService, snackBar) {
        this.router = router;
        this.postService = postService;
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.addComment = false;
        this.commentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(200)]);
    }
    ngOnInit() {
        this.router.paramMap.subscribe((response) => {
            const postId = response.params.id;
            if (postId) {
                this.getPost(postId);
            }
            else {
                this.snackBar.open('Post does not exist', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        });
        this.profileService.profile.subscribe((response) => {
            if (response && response._id) {
                this.profile = response;
            }
            else {
                this.profile = null;
            }
        });
    }
    getPost(id) {
        this.postService.getPost({ id }).subscribe((response) => {
            console.log(response);
            this.post = response;
        });
    }
    likePost(event) {
        const profile = this.profile;
        if (profile && profile._id) {
        }
        else {
            this.snackBar.open('Please Login to Like post', 'X', { duration: 10000, panelClass: 'red-style' });
        }
    }
    commentPost(event) {
        const profile = this.profile;
        if (profile && profile._id) {
            this.addComment = true;
        }
        else {
            this.snackBar.open('Please Login to Comment on post', 'X', { duration: 10000, panelClass: 'red-style' });
        }
    }
    submitComment() {
        const comment = {
            content: this.commentCtrl.value,
            owner: this.profile._id,
            post: this.post.id
        };
        this.postService.newPostComment(comment).subscribe((response) => {
            if (response && response._id) {
                this.post = response;
            }
            else {
                this.snackBar.open('Saving comment fail. Please refresh browser and try again', 'X', { duration: 10000, panelClass: 'red-style' });
            }
        }, error => {
            this.snackBar.open(`Error saving comment. Please refresh browser and try again. Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-style' });
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] },
    { type: _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
        _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], PostComponent);



/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configurations/services/post-service/post-service.service */ "./src/app/configurations/services/post-service/post-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../configurations/animations/anim-fn */ "./src/app/configurations/animations/anim-fn.ts");






let PostsComponent = class PostsComponent {
    constructor(profileService, postService) {
        this.profileService = profileService;
        this.postService = postService;
        this.postsExist = true;
        this.imageEntered = false;
        this.readMoreClick = false;
    }
    ngOnInit() {
        this.profileService.profile.subscribe((response) => {
            if (response && response.id) {
                this.profile = response;
            }
            else {
                this.profile = null;
            }
        });
        this.postService.getAllPost().subscribe((response) => {
            console.log(response);
            this.posts = response;
        });
    }
    mouseEnterCard(event) {
        this.postId = event.target.id;
    }
    mouseEnterImage(event) {
        this.imagePost = event.target.id;
        this.imageEntered = true;
    }
    mouseLeaveImage() {
        this.imageEntered = false;
    }
};
PostsComponent.ctorParameters = () => [
    { type: _configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }
];
PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('xEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_5__["xEnter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('iconButtonEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_5__["iconButtonEnter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('imageEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_5__["imageEnter"])
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
        _configurations_services_post_service_post_service_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]])
], PostsComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() {
        this.items = [
            { img: 'assets/images/products/123.jpg', alt: '123' },
            { img: 'assets/images/products/124.jpg', alt: '124' },
            { img: 'assets/images/products/125.jpg', alt: '125' },
            { img: 'assets/images/products/126.jpg', alt: '126' },
            { img: 'assets/images/products/127.jpg', alt: '127' },
            { img: 'assets/images/products/128.jpg', alt: '128' },
            { img: 'assets/images/products/129.jpg', alt: '129' },
            { img: 'assets/images/products/130.jpg', alt: '130' }
        ];
    }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/tags/tags.component.scss":
/*!******************************************!*\
  !*** ./src/app/tags/tags.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n.timeline {\n  min-height: 400px;\n  height: 85vh;\n  padding: 7px 5px 20px 5px;\n}\n\n.timeline__card {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWdzL3RhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0g7O0FEQ0c7RUFDRyxtQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdGFncy90YWdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGV7XG4gICBvdmVyZmxvdzogYXV0bzsgICBcbiAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZXtcbiAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgaGVpZ2h0OiA4NXZoOyAgXG4gICBwYWRkaW5nOiA3cHggNXB4IDIwcHggNXB4OyBcblxuICAgJl9fY2FyZHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG59XG5cbiIsIi5wcm9maWxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7XG59XG4udGltZWxpbmVfX2NhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tags/tags.component.ts":
/*!****************************************!*\
  !*** ./src/app/tags/tags.component.ts ***!
  \****************************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TagsComponent = class TagsComponent {
    constructor() {
        this.posts = [
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
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
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
                    image: 'assets/images/banner_2.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
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
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comment: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ]
                }
            }
        ];
        this.postsExist = true;
        this.imageEntered = false;
    }
    ngOnInit() {
    }
    mouseEnterCard(event) {
        this.postId = event.target.id;
    }
    mouseEnterImage(event) {
        this.imagePost = event.target.id;
        this.imageEntered = true;
    }
    mouseLeaveImage() {
        this.imageEntered = false;
    }
};
TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tags',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tags.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tags/tags.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tags.component.scss */ "./src/app/tags/tags.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TagsComponent);



/***/ }),

/***/ "./src/app/user/auth-register/auth-register.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/auth-register/auth-register.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth__tnc-button:hover {\n  transform: scale(1.2, 1.2);\n}\n.auth__button {\n  padding-top: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvdXNlci9hdXRoLXJlZ2lzdGVyL2F1dGgtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvYXV0aC1yZWdpc3Rlci9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlNO0VBQ0csMEJBQUE7QUNIVDtBRFFHO0VBQ0csZ0JBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYXV0aC1yZWdpc3Rlci9hdXRoLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XG5cbiAgICZfX3RuY3sgICAgIFxuXG4gICAgICAmLWJ1dHRvbjpob3ZlcntcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xuICAgICAgfVxuICAgfVxuXG5cbiAgICZfX2J1dHRvbntcbiAgICAgIHBhZGRpbmctdG9wOiA1dmg7XG5cbiAgIH1cbn0iLCIuYXV0aF9fdG5jLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xufVxuLmF1dGhfX2J1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA1dmg7XG59Il19 */");

/***/ }),

/***/ "./src/app/user/auth-register/auth-register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/auth-register/auth-register.component.ts ***!
  \***************************************************************/
/*! exports provided: AuthRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRegisterComponent", function() { return AuthRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/animations/anim-fn */ "./src/app/configurations/animations/anim-fn.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");






let AuthRegisterComponent = class AuthRegisterComponent {
    constructor(activatedRoute, profileService) {
        this.activatedRoute = activatedRoute;
        this.profileService = profileService;
        this.mouseEnter = false;
    }
    ngOnInit() {
    }
    mouseEnterCard(event) {
        this.mouseEnter = event.returnValue;
    }
    mouseLeaveCard(event) {
        this.mouseEnter = !event.returnValue;
    }
    agreeTnc() {
        this.activatedRoute.params.subscribe((params) => {
            const authToken = params.authToken;
            this.authToken = authToken;
            this.sendAuthToken(authToken);
        });
    }
    sendAuthToken(authToken) {
        this.profileService.checkAuthToken(authToken);
    }
};
AuthRegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
];
AuthRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/auth-register/auth-register.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconClickButton', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(src_app_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["iconButtonEnter"])
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-register.component.scss */ "./src/app/user/auth-register/auth-register.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
], AuthRegisterComponent);



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(profileService, snackBar) {
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    }
    ngOnInit() {
    }
    login() {
        const email = this.loginForm.get('email').value;
        this.profileService.forgotPassword(email).subscribe((response) => console.log(response), 
        // this.snackBar.open('A password reset link has been emailed to your registered email.', 'X', { duration: 10000, panelClass: 'pink-style' }),
        (error => this.snackBar.open(`Error: ${error}`, 'X', { duration: 10000, panelClass: 'red-style' })));
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/user/forgot-password/forgot-password.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/user/login/callback/callback.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/login/callback/callback.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vY2FsbGJhY2svY2FsbGJhY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/login/callback/callback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/login/callback/callback.component.ts ***!
  \***********************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CallbackComponent = class CallbackComponent {
    constructor() { }
    ngOnInit() {
    }
};
CallbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-callback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/callback/callback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./callback.component.scss */ "./src/app/user/login/callback/callback.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CallbackComponent);



/***/ }),

/***/ "./src/app/user/login/linkedin/linkedin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/login/linkedin/linkedin.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbGlua2VkaW4vbGlua2VkaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/login/linkedin/linkedin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/login/linkedin/linkedin.component.ts ***!
  \***********************************************************/
/*! exports provided: LinkedinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedinComponent", function() { return LinkedinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");




let LinkedinComponent = class LinkedinComponent {
    constructor(route, profileService) {
        this.route = route;
        this.profileService = profileService;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe((response) => {
            if (response.params.code && response.params.state) {
                this.profileService.approvedLinkedin(response.params).subscribe((response) => {
                    console.log(response);
                    this.userLinkedin = response;
                });
            }
        });
    }
};
LinkedinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
LinkedinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-linkedin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./linkedin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/linkedin/linkedin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./linkedin.component.scss */ "./src/app/user/login/linkedin/linkedin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
], LinkedinComponent);



/***/ }),

/***/ "./src/app/user/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.login__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSIsIi5sb2dpbl9faW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luX19mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");








let LoginComponent = class LoginComponent {
    constructor(profileService, snackBar, sanitizer, router) {
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.sanitizer = sanitizer;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    login() {
        this.profileService.login(this.loginForm.value);
    }
    signInLinkedin() {
        this.profileService.startLinkedin().subscribe((response) => {
            window.location.href = response;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginComponent.prototype, "isLoggedIn", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0.5 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(7000))
            ]) // end trigger
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/user/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/user/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register__input {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.register__form-button {\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRztFQUNHLGdCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREtHO0VBQ0csV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG5cbiAgICZfX2lucHV0e1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgIH1cblxuICAgJl9fZm9ybS1idXR0b257XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgfVxufSIsIi5yZWdpc3Rlcl9faW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnJlZ2lzdGVyX19mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/configurations/services/profile-service/profile-service.service */ "./src/app/configurations/services/profile-service/profile-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let RegisterComponent = class RegisterComponent {
    constructor(profileService, snackBar, router) {
        this.profileService = profileService;
        this.snackBar = snackBar;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
    }
    ngOnInit() {
    }
    register() {
        this.profileService.register(this.registerForm.value);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/user/register/register.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_configurations_services_profile_service_profile_service_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n.timeline {\n  min-height: 400px;\n  height: 85vh;\n  padding: 7px 5px 20px 5px;\n}\n\n.timeline__card {\n  margin-bottom: 10px;\n}\n\n.sidebar {\n  overflow: hidden;\n  top: 3px;\n  position: sticky;\n  position: -webkit-sticky;\n  padding: 5px 7px 5px 5px;\n}\n\n.sidebar__card {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6cmluL0RvY3VtZW50cy9HaXRIdWIvb2FyLXRlZ3VoL3NyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxjQUFBO0VBQ0EsbUJBQUE7QUNDSDs7QURFQTtFQUNHLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0g7O0FEQ0c7RUFDRyxtQkFBQTtBQ0NOOztBREdBO0VBQ0csZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0FDQUg7O0FERUc7RUFDRyxZQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcbiAgIG92ZXJmbG93OiBhdXRvOyAgIFxuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRpbWVsaW5le1xuICAgbWluLWhlaWdodDogNDAwcHg7XG4gICBoZWlnaHQ6IDg1dmg7ICBcbiAgIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7IFxuXG4gICAmX19jYXJke1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIH1cbn1cblxuLnNpZGViYXJ7XG4gICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgIHRvcDogM3B4O1xuICAgcG9zaXRpb246IHN0aWNreTtcbiAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgXG4gICBwYWRkaW5nOiA1cHggN3B4IDVweCA1cHg7ICAgXG5cbiAgICZfX2NhcmR7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICB9XG59XG5cbiIsIi5wcm9maWxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50aW1lbGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBoZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDdweCA1cHggMjBweCA1cHg7XG59XG4udGltZWxpbmVfX2NhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogM3B4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDVweDtcbn1cbi5zaWRlYmFyX19jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configurations/animations/anim-fn */ "./src/app/configurations/animations/anim-fn.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let UserComponent = class UserComponent {
    constructor(router) {
        this.router = router;
        this.posts = [
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
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
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
                    image: 'assets/images/banner_2.jpg',
                    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                    subtitle: 'Morbi tellus est, vulputate eu felis nec, finibus tempus diam.',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet diam eget eros iaculis semper in sit amet metus. Cras leo enim, ultricies a ullamcorper at, porta eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie dolor augue, sed gravida lectus venenatis et. Etiam at venenatis nisl. Fusce est ante, porttitor at dui ut, vestibulum luctus eros. Etiam sollicitudin, odio sagittis posuere luctus, enim ante ultricies ligula, vel sagittis eros metus quis lorem. Aenean vel porta orci, nec lobortis orci. Phasellus nec volutpat mauris. Donec sit amet leo sed metus porta suscipit pharetra pretium mauris. Nulla rhoncus ut leo eget lacinia. Phasellus sollicitudin pellentesque elit, vitae rutrum arcu ultricies ac. Aenean sagittis condimentum nulla, cursus iaculis enim posuere a. Morbi tellus est, vulputate eu felis nec, finibus tempus diam. Mauris tincidunt tincidunt felis, a tempor urna semper nec.',
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
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
                    tags: [{ tag: 'Sed' }, { tag: 'tincidunt' }, { tag: 'arcu' }, { tag: 'dolor' }, { tag: 'placerat' }],
                    liked: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                    comments: [
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        },
                        {
                            user: 'user_id',
                            date: Date.now(),
                            content: 'Aenean egestas est eu urna ultricies, nec tempor ipsum gravida. Proin egestas ultrices lectus, ac maximus lectus ultrices quis. Fusce quam velit, hendrerit quis scelerisque at, maximus et sem. Phasellus et cursus lectus, quis auctor nulla. Etiam dignissim lacinia tellus, non fermentum odio elementum ac.',
                            vote_up: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }],
                            vote_down: [{ user: 'user_id' }, { user: 'user_id' }, { user: 'user_id' }]
                        }
                    ],
                    shared: [
                        {
                            user: 'user_id',
                            date: Date.now()
                        },
                        {
                            user: 'user_id',
                            date: Date.now()
                        }
                    ]
                }
            }
        ];
        this.postsExist = true;
        this.imageEntered = false;
        this.readMoreClick = false;
    }
    ngOnInit() {
    }
    mouseEnterCard(event) {
        this.postId = event.target.id;
    }
    mouseEnterImage(event) {
        this.imagePost = event.target.id;
        this.imageEntered = true;
    }
    mouseLeaveImage() {
        this.imageEntered = false;
    }
};
UserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('xEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["xEnter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('iconButtonEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["iconButtonEnter"])
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('imageEnter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["useAnimation"])(_configurations_animations_anim_fn__WEBPACK_IMPORTED_MODULE_3__["imageEnter"])
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], UserComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azrin/Documents/GitHub/oar-teguh/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map