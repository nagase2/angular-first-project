(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\n\n<nav class=\"navbar navbar-expand navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item \" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"profile\">profile<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"switch\">switch<span class=\"sr-only\">(current)</span></a>\n\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active current\">\n        <a class=\"nav-link\" routerLink=\"followers\" [queryParams]=\"{ page: 1, order: 'asc'}\">follower</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet>\n</router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/post.service */ "./src/app/common/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _cources_cources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cources/cources.component */ "./src/app/cources/cources.component.ts");
/* harmony import */ var _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp/favorite/favorite.component */ "./src/app/comp/favorite/favorite.component.ts");
/* harmony import */ var _title_case_title_case_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./title-case/title-case.component */ "./src/app/title-case/title-case.component.ts");
/* harmony import */ var _title_case_title_case_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./title-case/title-case.pipe */ "./src/app/title-case/title-case.pipe.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/panel/panel.component.ts");
/* harmony import */ var _comp_like_like_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comp/like/like.component */ "./src/app/comp/like/like.component.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _for_for_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./for/for.component */ "./src/app/for/for.component.ts");
/* harmony import */ var _comp_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comp/signup-form/signup-form.component */ "./src/app/comp/signup-form/signup-form.component.ts");
/* harmony import */ var _comp_new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comp/new-course-form/new-course-form.component */ "./src/app/comp/new-course-form/new-course-form.component.ts");
/* harmony import */ var _comp_post_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comp/post/post.component */ "./src/app/comp/post/post.component.ts");
/* harmony import */ var _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comp/my-followers/my-followers.component */ "./src/app/comp/my-followers/my-followers.component.ts");
/* harmony import */ var _common_my_follower_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/my-follower.service */ "./src/app/common/my-follower.service.ts");
/* harmony import */ var _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./switch-parents/switch-parents.component */ "./src/app/switch-parents/switch-parents.component.ts");
/* harmony import */ var _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./comp/my-profile/my-profile.component */ "./src/app/comp/my-profile/my-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_8__["AuthorsComponent"],
                _cources_cources_component__WEBPACK_IMPORTED_MODULE_9__["CourcesComponent"],
                _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteComponent"],
                _title_case_title_case_component__WEBPACK_IMPORTED_MODULE_11__["TitleCaseComponent"],
                _title_case_title_case_pipe__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"],
                _panel_panel_component__WEBPACK_IMPORTED_MODULE_13__["PanelComponent"],
                _comp_like_like_component__WEBPACK_IMPORTED_MODULE_14__["LikeComponent"],
                _switch_switch_component__WEBPACK_IMPORTED_MODULE_15__["SwitchComponent"],
                _for_for_component__WEBPACK_IMPORTED_MODULE_16__["ForComponent"],
                _comp_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_17__["SignupFormComponent"],
                _comp_new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_18__["NewCourseFormComponent"],
                _comp_post_post_component__WEBPACK_IMPORTED_MODULE_19__["PostComponent"],
                _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_20__["MyFollowersComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"],
                _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_22__["SwitchParentsComponent"],
                _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_23__["MyProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', component: _comp_like_like_component__WEBPACK_IMPORTED_MODULE_14__["LikeComponent"] },
                    { path: 'switch', component: _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_22__["SwitchParentsComponent"] },
                    { path: 'followers/:id/:username', component: _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_23__["MyProfileComponent"] },
                    { path: 'followers', component: _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_20__["MyFollowersComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] }
                ])
            ],
            providers: [_common_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _common_my_follower_service__WEBPACK_IMPORTED_MODULE_21__["MyFollowerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authors/authors.component.html":
/*!************************************************!*\
  !*** ./src/app/authors/authors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{countAuthor()}} Authors\n</p>\n\n  <ul *ngFor=\"let author of authors\">\n    <li>{{author}}</li>\n  </ul>"

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var _common_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/list.service */ "./src/app/common/list.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorsComponent = /** @class */ (function () {
    function AuthorsComponent(listService) {
        this.authors = listService.authors;
    }
    AuthorsComponent.prototype.countAuthor = function () {
        return this.authors.length;
    };
    AuthorsComponent.prototype.ngOnInit = function () {
    };
    AuthorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authors',
            template: __webpack_require__(/*! ./authors.component.html */ "./src/app/authors/authors.component.html"),
            styles: [__webpack_require__(/*! ./authors.component.css */ "./src/app/authors/authors.component.css")]
        }),
        __metadata("design:paramtypes", [_common_list_service__WEBPACK_IMPORTED_MODULE_0__["ListService"]])
    ], AuthorsComponent);
    return AuthorsComponent;
}());



/***/ }),

/***/ "./src/app/common/list.service.ts":
/*!****************************************!*\
  !*** ./src/app/common/list.service.ts ***!
  \****************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListService = /** @class */ (function () {
    function ListService() {
        this.authors = ['thomas', 'mike', 'jeff', 'nagase'];
    }
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/common/my-follower.service.ts":
/*!***********************************************!*\
  !*** ./src/app/common/my-follower.service.ts ***!
  \***********************************************/
/*! exports provided: MyFollowerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFollowerService", function() { return MyFollowerService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/catch';
var MyFollowerService = /** @class */ (function () {
    //posts: any[];
    function MyFollowerService(http) {
        this.http = http;
        this.url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    MyFollowerService.prototype.getFollowers = function () {
        return this.http.get(this.url);
    };
    MyFollowerService.prototype.deleteFollowers = function (follower) {
        return this.http.delete(this.url + '/' + follower.id);
    };
    MyFollowerService.prototype.updateFollowers = function (follower) {
        return this.http.patch(this.url + '/' + follower.id, JSON.stringify({ isRead: true }));
    };
    MyFollowerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], MyFollowerService);
    return MyFollowerService;
}());



/***/ }),

/***/ "./src/app/common/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/common/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/catch';
var PostService = /** @class */ (function () {
    //posts: any[];
    function PostService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.url);
    };
    PostService.prototype.deletePost = function (post) {
        return this.http.delete(this.url + '/' + post.id);
    };
    PostService.prototype.updatePost = function (post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/comp/favorite/favorite.component.css":
/*!******************************************************!*\
  !*** ./src/app/comp/favorite/favorite.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-star{\n    color: red\n}\n.fa-star-o{\n    color:green\n}\nh3{\n    color: yellowgreen\n}"

/***/ }),

/***/ "./src/app/comp/favorite/favorite.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/favorite/favorite.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<h3>favorite</h3>\n<i class=\"fa fa-2x\" \n  [class.fa-star]=\"isFavorite\"\n  [class.fa-star-o]=\"!isFavorite\"\n(click)=\"onClick()\" aria-hidden=\"true\">\n</i>\n\n\n<br>\n<span class=\"fa-stack fa-lg\">\n  <i class=\"fa fa-star fa-stack-1x\"></i>\n  <i [ngClass]=\"{'fa fa-ban fa-stack-2x text-danger': isFavorite}\"\n     [ngStyle]=\"{'color': isFavorite ? 'green' : 'red' }\"\n  ></i>\n</span>\n\n\n  "

/***/ }),

/***/ "./src/app/comp/favorite/favorite.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/comp/favorite/favorite.component.ts ***!
  \*****************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        // tslint:disable-next-line:no-output-rename
        this.change2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // this.isFavorite = true;
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.onClick = function () {
        this.isFavorite = !this.isFavorite;
        this.change2.emit({ newValue: this.isFavorite });
        // console.log('クリックされたよ' + this.isFavorite);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isFavorite'),
        __metadata("design:type", Boolean)
    ], FavoriteComponent.prototype, "isFavorite", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('change1'),
        __metadata("design:type", Object)
    ], FavoriteComponent.prototype, "change2", void 0);
    FavoriteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! ./favorite.component.html */ "./src/app/comp/favorite/favorite.component.html"),
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/comp/favorite/favorite.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/comp/like/like.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/like/like.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart{\n    color: #ccc;\n    cursor: pointer;\n}\n.liked{\n    color: deeppink;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/comp/like/like.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/like/like.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>like component</h3>\n<i class=\"fa fa-heart fa-2x\" \n[ngClass]=\"{'liked ':youLiked}\"\naria-hidden=\"true\" (click)=\"likeButtonClicked()\"></i>\n{{likeCount}}"

/***/ }),

/***/ "./src/app/comp/like/like.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/like/like.component.ts ***!
  \*********************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
    }
    LikeComponent.prototype.ngOnInit = function () {
    };
    LikeComponent.prototype.likeButtonClicked = function () {
        this.likeCount += (this.youLiked) ? -1 : +1;
        this.youLiked = !this.youLiked;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LikeComponent.prototype, "likeCount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LikeComponent.prototype, "youLiked", void 0);
    LikeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-like',
            template: __webpack_require__(/*! ./like.component.html */ "./src/app/comp/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.css */ "./src/app/comp/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/comp/my-followers/my-followers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/comp/my-followers/my-followers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avator{\n    width:80px;\n    height:80px;\n    border-radius: 100%;\n}\n"

/***/ }),

/***/ "./src/app/comp/my-followers/my-followers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/comp/my-followers/my-followers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"component-title\">followers component</h4>\n<div class=\"media\" *ngFor=\"let follower of followers\">\n  <img class=\"mr-3 avator\" src=\"{{follower.avatar_url}}\" alt=\"Generic placeholder image\">\n  <div class=\"media-body\">\n    <h5 class=\"mt-0\">\n      <a [routerLink]=\"['/followers',follower.id,follower.login]\">{{follower.login}}...</a></h5>\n    <a href=\"{{follower.html_url}}\">{{follower.html_url}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/my-followers/my-followers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/comp/my-followers/my-followers.component.ts ***!
  \*************************************************************/
/*! exports provided: MyFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFollowersComponent", function() { return MyFollowersComponent; });
/* harmony import */ var _common_my_follower_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/my-follower.service */ "./src/app/common/my-follower.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyFollowersComponent = /** @class */ (function () {
    function MyFollowersComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    MyFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //何度も同ページを移動する場合はobservableを利用する。
        this.route.queryParamMap.subscribe(function (param) {
            console.log(param);
        });
        //他で値を利用しない場合はこちら
        console.log("this is id " + this.route.snapshot.queryParamMap.get('page'));
        this.service.getFollowers().subscribe(function (response) {
            _this.followers = response.json();
            //console.log(this.followers);
        });
    };
    MyFollowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-followers',
            template: __webpack_require__(/*! ./my-followers.component.html */ "./src/app/comp/my-followers/my-followers.component.html"),
            styles: [__webpack_require__(/*! ./my-followers.component.css */ "./src/app/comp/my-followers/my-followers.component.css")]
        }),
        __metadata("design:paramtypes", [_common_my_follower_service__WEBPACK_IMPORTED_MODULE_0__["MyFollowerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MyFollowersComponent);
    return MyFollowersComponent;
}());



/***/ }),

/***/ "./src/app/comp/my-profile/my-profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/comp/my-profile/my-profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/my-profile/my-profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/comp/my-profile/my-profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/comp/my-profile/my-profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/comp/my-profile/my-profile.component.ts ***!
  \*********************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(route) {
        this.route = route;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.route.paramMap.subscribe(function (params) {
            console.log(params.get('id'));
        });
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/comp/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.css */ "./src/app/comp/my-profile/my-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/comp/new-course-form/new-course-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comp/new-course-form/new-course-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/new-course-form/new-course-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/comp/new-course-form/new-course-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>new cource form component</h3>\n<form>\n  <input type=\"text\" class=\"form-control\" (keyup.enter)=\"addTopic(topic)\" #topic>\n  <ul class=\"list-group\">\n    <li\n      *ngFor=\"let topic of topics.controls\"\n      (click)=\"removeTopic(topic)\"\n      class=\"list-group-item\">{{topic.value}}</li>\n  </ul>\n</form>\n\n"

/***/ }),

/***/ "./src/app/comp/new-course-form/new-course-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comp/new-course-form/new-course-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewCourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCourseFormComponent", function() { return NewCourseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewCourseFormComponent = /** @class */ (function () {
    // formbuilderを使ったときの書き方
    function NewCourseFormComponent(fb) {
        this.form = fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact: fb.group({
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength],
                phone: ['']
            }),
            topics: fb.array([])
        });
    }
    NewCourseFormComponent.prototype.addTopic = function (topic) {
        console.log('add topic called.' + topic.value);
        if (topic.value.length > 0) {
            this.topics.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](topic.value));
        }
        topic.value = '';
    };
    /**
     * delete selected item from list
     */
    NewCourseFormComponent.prototype.removeTopic = function (topic) {
        var index = this.topics.controls.indexOf(topic);
        //
        this.topics.removeAt(index);
    };
    Object.defineProperty(NewCourseFormComponent.prototype, "topics", {
        get: function () {
            return this.form.get('topics');
        },
        enumerable: true,
        configurable: true
    });
    NewCourseFormComponent.prototype.ngOnInit = function () {
    };
    NewCourseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-course-form',
            template: __webpack_require__(/*! ./new-course-form.component.html */ "./src/app/comp/new-course-form/new-course-form.component.html"),
            styles: [__webpack_require__(/*! ./new-course-form.component.css */ "./src/app/comp/new-course-form/new-course-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], NewCourseFormComponent);
    return NewCourseFormComponent;
}());



/***/ }),

/***/ "./src/app/comp/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/post/post.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/post/post.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/post/post.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>post component </h3>\n<input (keyup.enter)=\"createPost(title)\" #title type=\"text\" class=\"form-control\">\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    　<button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"updatePost(post)\">Update</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"deletePost(post)\">delete</button>\n    {{post.id}}:{{post.title}}\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/comp/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _common_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/post.service */ "./src/app/common/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(postService) {
        this.postService = postService;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (response) {
            _this.posts = response.json();
            //console.log(response.json());
        }, function (error) {
            alert('an unexpected error happend');
            console.log(error);
        });
    };
    PostComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        this.postService.getPosts().subscribe(function (x) {
            // リクエストの戻り値をpostに設定
            post['id'] = x.json().id;
            // postsの最初に登録した値を追加する。
            _this.posts.splice(0, 0, post);
            // console.log(x.json());
        }, function (error) {
            if (error.status === 400) {
                // this.form.setErrors(error.json));
            }
            else {
                alert('an unexpected error occurred.');
                console.log(error);
            }
        });
    };
    PostComponent.prototype.updatePost = function (post) {
        this.postService.updatePost(post)
            // this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
            .subscribe(function (x) {
            console.log(x.json());
        });
    };
    PostComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.postService.deletePost(post).subscribe(function (response) {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        }, function (error) {
            if (error.status === 404) {
                alert('this post has already been deteled.');
            }
            else {
                alert('An unexpected error occurred.');
            }
            console.log(error);
        });
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/comp/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/comp/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_common_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/comp/signup-form/signup-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/comp/signup-form/signup-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comp/signup-form/signup-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/comp/signup-form/signup-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"myform\" (ngSubmit)=\"login()\">\n\n    <div *ngIf=\"myform.errors\" class=\"alert alert-danger\">username or password is invalid</div>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input formControlName=\"username\" id=\"username\" type=\"text\" class=\"form-control\">\n\n        <div *ngIf=\"username.pending\">checking ....</div>\n        <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"this.myform.get('username').errors.required\">Username is required.</div>\n            <div *ngIf=\"username.errors?.minlength\">user name should be more than\n                {{username.errors.minlength.requiredLength}}.</div>\n            <div *ngIf=\"username.errors.maxlength\">user name should be less than\n                {{username.errors.maxlength.requiredLength}}</div>\n            <div *ngIf=\"username.errors.cannotContainSpace\">can not contain space in username.</div>\n            <div *ngIf=\"username.errors.cannotContainAAA\">can not contain AAA.</div>\n            <div *ngIf=\"username.errors['shouldBeUnique']\">use id should be uniquie.</div>\n        </div>\n        \n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input formControlName=\"password\" id=\"password\" type=\"text\" class=\"form-control\">\n        <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">\n            <div *ngIf=\"password?.errors['required']\">Username is required.</div>\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/comp/signup-form/signup-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/comp/signup-form/signup-form.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _username_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./username.validators */ "./src/app/comp/signup-form/username.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        //throw new Error("Method not implemented.");
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                _username_validators__WEBPACK_IMPORTED_MODULE_2__["UsernameValidators"].cannotContainSpace,
                _username_validators__WEBPACK_IMPORTED_MODULE_2__["UsernameValidators"].cannotContainAAA,
                //これを有効にするとうまく動かないので、一旦コメントアウトする。
                // UsernameValidators.shouldBeUnique,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        /**
         * get username from myform property
         */
        get: function () {
            return this.myform.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFormComponent.prototype, "password", {
        get: function () {
            return this.myform.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent.prototype.login = function () {
        this.myform.setErrors({
            invalidLogin: true
        });
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/comp/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/comp/signup-form/signup-form.component.css")]
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/comp/signup-form/username.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/comp/signup-form/username.validators.ts ***!
  \*********************************************************/
/*! exports provided: UsernameValidators, UniqueUserValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidators", function() { return UsernameValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUserValidator", function() { return UniqueUserValidator; });
/**
 * this is custom valdator class..
 * 何も継承しなくてもいいのか？
 */
var UsernameValidators = /** @class */ (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidators.cannotContainAAA = function (control) {
        if (control.value.indexOf('AAA') >= 0) {
            return { cannotContainAAA: true };
        }
        return null;
    };
    /**
     * 非同期バリデーションサンプル
     * @param control
     */
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'naga') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsernameValidators;
}());

var UniqueUserValidator = /** @class */ (function () {
    function UniqueUserValidator() {
    }
    UniqueUserValidator.prototype.validate = function (c) {
        throw new Error("Method not implemented.");
    };
    UniqueUserValidator.prototype.registerOnValidatorChange = function (fn) {
        throw new Error("Method not implemented.");
    };
    return UniqueUserValidator;
}());



/***/ }),

/***/ "./src/app/cources/cources.component.css":
/*!***********************************************!*\
  !*** ./src/app/cources/cources.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cources/cources.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cources/cources.component.ts ***!
  \**********************************************/
/*! exports provided: CourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourcesComponent", function() { return CourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourcesComponent = /** @class */ (function () {
    function CourcesComponent() {
        this.isActive = true;
    }
    CourcesComponent.prototype.onSave = function ($event) {
        console.log($event);
        console.log('x座標:' + $event.clientX);
    };
    CourcesComponent.prototype.onKeyUp = function () {
        console.log("enter was pressed.");
    };
    CourcesComponent.prototype.ngOnInit = function () {
    };
    CourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cources',
            template: "<h3>cources</h3>\n    <button class=\"btn btn-primary\" [class.active]=\"isActive\">\u306A\u3093\u306B\u3082\u30DC\u30BF\u30F3</button>\n    <button\n    (click)=\"onSave($event)\"\n    class=\"btn btn-primary\"  [class.active]=\"isActive\"\n     [style.backgroundColor]=\"isActive?'green':'white'\">\u30A4\u30D9\u30F3\u30C8\u30DC\u30BF\u30F3</button>\n     ",
            styles: [__webpack_require__(/*! ./cources.component.css */ "./src/app/cources/cources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CourcesComponent);
    return CourcesComponent;
}());



/***/ }),

/***/ "./src/app/for/for.component.css":
/*!***************************************!*\
  !*** ./src/app/for/for.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/for/for.component.html":
/*!****************************************!*\
  !*** ./src/app/for/for.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>for component</h3>\n  \n  <ul class=\"fa-ul\">\n      <li *ngFor=\"let item of items; index as i\">\n        <i class=\"fa-li fa fa-check-square\"></i>{{item.id}}. {{item.name}}\n      </li>\n    </ul>\n  "

/***/ }),

/***/ "./src/app/for/for.component.ts":
/*!**************************************!*\
  !*** ./src/app/for/for.component.ts ***!
  \**************************************/
/*! exports provided: ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForComponent = /** @class */ (function () {
    function ForComponent() {
        this.items = [
            { id: 1, name: 'one' }, { id: 2, name: 'two' },
            { id: 3, name: 'three' }, { id: 4, name: 'four' }
        ];
    }
    ForComponent.prototype.ngOnInit = function () {
    };
    ForComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-for',
            template: __webpack_require__(/*! ./for.component.html */ "./src/app/for/for.component.html"),
            styles: [__webpack_require__(/*! ./for.component.css */ "./src/app/for/for.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForComponent);
    return ForComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/panel/panel.component.css":
/*!*******************************************!*\
  !*** ./src/app/panel/panel.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/panel/panel.component.html":
/*!********************************************!*\
  !*** ./src/app/panel/panel.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>panel</h3>\n\n<div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-header\">\n      <ng-content select=\".heading\"></ng-content>\n    </div>\n    <div class=\"card-body\">\n        <ng-content select=\".body\"></ng-content>\n    </div>\n    <div class=\"card-footer\">xxx</div>\n</div>\n"

/***/ }),

/***/ "./src/app/panel/panel.component.ts":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/switch-parents/switch-parents.component.css":
/*!*************************************************************!*\
  !*** ./src/app/switch-parents/switch-parents.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch-parents/switch-parents.component.html":
/*!**************************************************************!*\
  !*** ./src/app/switch-parents/switch-parents.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-switch>\n  <div class=\"tab1\">\n    <app-new-course-form></app-new-course-form>\n    <app-favorite [isFavorite]=\"post.isFavorite\">\n    </app-favorite>\n\n    <app-like [likeCount]=\"post.likeCount\" [youLiked]=\"false\"></app-like>\n    <app-for></app-for>\n  </div>\n  <div class=\"tab2\">\n    <app-title-case></app-title-case>\n    <app-cources></app-cources>\n    <app-panel>\n      <div class=\"heading\">head...</div>\n      <div class=\"body\">\n        <h2>title</h2>\n        <p>thisi is body article</p>\n      </div>\n    </app-panel>\n  </div>\n  <div class=\"tab3\">\n    <app-signup-form></app-signup-form>\n\n  </div>\n  <div class=\"tab4\">\n    <app-post></app-post>\n  </div>\n  <div class=\"tab5\">\n    <app-my-followers></app-my-followers>\n  </div>\n\n</app-switch>"

/***/ }),

/***/ "./src/app/switch-parents/switch-parents.component.ts":
/*!************************************************************!*\
  !*** ./src/app/switch-parents/switch-parents.component.ts ***!
  \************************************************************/
/*! exports provided: SwitchParentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchParentsComponent", function() { return SwitchParentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchParentsComponent = /** @class */ (function () {
    function SwitchParentsComponent() {
        this.post = {
            title: 'my title',
            isFavorite: false,
            likeCount: 5,
            isLiked: false
        };
    }
    SwitchParentsComponent.prototype.ngOnInit = function () {
    };
    SwitchParentsComponent.prototype.onFavoriteChanged = function (newValues) {
        console.log(newValues);
    };
    SwitchParentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-switch-parents',
            template: __webpack_require__(/*! ./switch-parents.component.html */ "./src/app/switch-parents/switch-parents.component.html"),
            styles: [__webpack_require__(/*! ./switch-parents.component.css */ "./src/app/switch-parents/switch-parents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchParentsComponent);
    return SwitchParentsComponent;
}());



/***/ }),

/***/ "./src/app/switch/switch.component.css":
/*!*********************************************!*\
  !*** ./src/app/switch/switch.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/switch/switch.component.html":
/*!**********************************************!*\
  !*** ./src/app/switch/switch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"component-title\">switch component\n</h3>\n\n\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [class.active]=\"viewMode=='one'\" href=\"javascript:void(0)\" (click)=\"changeMode('one')\">one</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active ':viewMode=='two'}\" href=\"javascript:void(0)\" (click)=\"changeMode('two')\">two</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active ':viewMode=='three'}\" href=\"javascript:void(0)\" (click)=\"changeMode('three')\">three</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active ':viewMode=='four'}\" href=\"javascript:void(0)\" (click)=\"changeMode('four')\">four</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"{'active ':viewMode=='five'}\" href=\"javascript:void(0)\" (click)=\"changeMode('five')\">five</a>\n  </li>\n</ul>\n<div [ngSwitch]=\"viewMode\">\n  <div *ngSwitchCase=\"'one'\">\n    <ng-content select=\".tab1\"></ng-content>\n  </div>\n  <div *ngSwitchCase=\"'two'\">\n    <ng-content select=\".tab2\"></ng-content>\n  </div>\n  <div *ngSwitchCase=\"'three'\">\n    <ng-content select=\".tab3\"></ng-content>\n  </div>\n  <div *ngSwitchCase=\"'four'\">\n    <ng-content select=\".tab4\"></ng-content>\n  </div>\n  <div *ngSwitchCase=\"'five'\">\n    <ng-content select=\".tab5\"></ng-content>\n  </div>\n  <div *ngSwitchDefault>this is default content</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/switch/switch.component.ts":
/*!********************************************!*\
  !*** ./src/app/switch/switch.component.ts ***!
  \********************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
    }
    SwitchComponent.prototype.ngOnInit = function () {
        //ここで初期ページを切り替え
        this.viewMode = 'one';
    };
    SwitchComponent.prototype.changeMode = function (mode) {
        console.log(mode + "が選択されました");
        this.viewMode = mode;
    };
    SwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.css */ "./src/app/switch/switch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/title-case/title-case.component.css":
/*!*****************************************************!*\
  !*** ./src/app/title-case/title-case.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/title-case/title-case.component.html":
/*!******************************************************!*\
  !*** ./src/app/title-case/title-case.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>title case</h3>\n<input type=\"text\" [(ngModel)]=\"title\" ><br>\n{{title | titleCase}}"

/***/ }),

/***/ "./src/app/title-case/title-case.component.ts":
/*!****************************************************!*\
  !*** ./src/app/title-case/title-case.component.ts ***!
  \****************************************************/
/*! exports provided: TitleCaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCaseComponent", function() { return TitleCaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleCaseComponent = /** @class */ (function () {
    function TitleCaseComponent() {
        this.title = 'title';
    }
    TitleCaseComponent.prototype.ngOnInit = function () {
    };
    TitleCaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title-case',
            template: __webpack_require__(/*! ./title-case.component.html */ "./src/app/title-case/title-case.component.html"),
            styles: [__webpack_require__(/*! ./title-case.component.css */ "./src/app/title-case/title-case.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleCaseComponent);
    return TitleCaseComponent;
}());



/***/ }),

/***/ "./src/app/title-case/title-case.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/title-case/title-case.pipe.ts ***!
  \***********************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = /** @class */ (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (value) {
        if (!value) {
            return null;
        }
        var words = value.split(' ');
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (i > 0 && this.isPreposition(word)) {
                words[i] = word.toLowerCase();
            }
            else {
                words[i] = this.toTitleCase(word);
            }
        }
        return words.join(' ');
    };
    TitleCasePipe.prototype.toTitleCase = function (word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    };
    TitleCasePipe.prototype.isPreposition = function (word) {
        var prepositions = [
            'of',
            'the',
            'nagase'
        ];
        return prepositions.includes(word.toLowerCase());
    };
    TitleCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'titleCase'
        })
    ], TitleCasePipe);
    return TitleCasePipe;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nagase/git-repository/angular-first-project/part1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map