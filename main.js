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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.active {\n    color: red;\n    font-size: 20px;\n}\n\n.current {\n    background: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmN1cnJlbnQge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top></app-top>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.title = 'Inverness';
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                console.log(event);
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());

;


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
/* harmony import */ var _jwt_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt/auth.guard */ "./src/app/jwt/auth.guard.ts");
/* harmony import */ var _jwt_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt/service/jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/post.service */ "./src/app/common/post.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material-modules */ "./src/app/material-modules.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _comp_cources_cources_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comp/cources/cources.component */ "./src/app/comp/cources/cources.component.ts");
/* harmony import */ var _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comp/favorite/favorite.component */ "./src/app/comp/favorite/favorite.component.ts");
/* harmony import */ var _comp_title_case_title_case_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./comp/title-case/title-case.component */ "./src/app/comp/title-case/title-case.component.ts");
/* harmony import */ var _comp_title_case_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./comp/title-case/title-case.pipe */ "./src/app/comp/title-case/title-case.pipe.ts");
/* harmony import */ var _comp_panel_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./comp/panel/panel.component */ "./src/app/comp/panel/panel.component.ts");
/* harmony import */ var _comp_like_like_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./comp/like/like.component */ "./src/app/comp/like/like.component.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _comp_for_for_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comp/for/for.component */ "./src/app/comp/for/for.component.ts");
/* harmony import */ var _comp_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./comp/signup-form/signup-form.component */ "./src/app/comp/signup-form/signup-form.component.ts");
/* harmony import */ var _comp_new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./comp/new-course-form/new-course-form.component */ "./src/app/comp/new-course-form/new-course-form.component.ts");
/* harmony import */ var _comp_post_post_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./comp/post/post.component */ "./src/app/comp/post/post.component.ts");
/* harmony import */ var _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./comp/my-followers/my-followers.component */ "./src/app/comp/my-followers/my-followers.component.ts");
/* harmony import */ var _common_my_follower_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/my-follower.service */ "./src/app/common/my-follower.service.ts");
/* harmony import */ var _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./switch-parents/switch-parents.component */ "./src/app/switch-parents/switch-parents.component.ts");
/* harmony import */ var _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./comp/my-profile/my-profile.component */ "./src/app/comp/my-profile/my-profile.component.ts");
/* harmony import */ var _comp_md_forms_md_forms_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./comp/md-forms/md-forms.component */ "./src/app/comp/md-forms/md-forms.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./top/top.component */ "./src/app/top/top.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./comp/dialog/dialog.component */ "./src/app/comp/dialog/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _experiment_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./experiment/responsive/responsive.component */ "./src/app/experiment/responsive/responsive.component.ts");
/* harmony import */ var _experiment_nav_nav_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./experiment/nav/nav.component */ "./src/app/experiment/nav/nav.component.ts");
/* harmony import */ var _experiment_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./experiment/bootstrap/bootstrap.component */ "./src/app/experiment/bootstrap/bootstrap.component.ts");
/* harmony import */ var _flat_menu_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./flat-menu-nav/main-nav.component */ "./src/app/flat-menu-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _jwt_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./jwt/user-register/user-register.component */ "./src/app/jwt/user-register/user-register.component.ts");
/* harmony import */ var _jwt_jwt_login_jwt_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./jwt/jwt-login/jwt-login.component */ "./src/app/jwt/jwt-login/jwt-login.component.ts");
/* harmony import */ var _jwt_event_event_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./jwt/event/event.component */ "./src/app/jwt/event/event.component.ts");
/* harmony import */ var _jwt_special_events_special_events_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./jwt/special-events/special-events.component */ "./src/app/jwt/special-events/special-events.component.ts");
/* harmony import */ var _jwt_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./jwt/service/token-interceptor.service */ "./src/app/jwt/service/token-interceptor.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _authors_authors_component__WEBPACK_IMPORTED_MODULE_19__["AuthorsComponent"],
                _comp_cources_cources_component__WEBPACK_IMPORTED_MODULE_20__["CourcesComponent"],
                _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_21__["FavoriteComponent"],
                _comp_title_case_title_case_component__WEBPACK_IMPORTED_MODULE_22__["TitleCaseComponent"],
                _comp_title_case_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"],
                _comp_panel_panel_component__WEBPACK_IMPORTED_MODULE_24__["PanelComponent"],
                _comp_like_like_component__WEBPACK_IMPORTED_MODULE_25__["LikeComponent"], _switch_switch_component__WEBPACK_IMPORTED_MODULE_26__["SwitchComponent"],
                _comp_for_for_component__WEBPACK_IMPORTED_MODULE_27__["ForComponent"],
                _comp_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_28__["SignupFormComponent"],
                _comp_new_course_form_new_course_form_component__WEBPACK_IMPORTED_MODULE_29__["NewCourseFormComponent"],
                _comp_post_post_component__WEBPACK_IMPORTED_MODULE_30__["PostComponent"],
                _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_31__["MyFollowersComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_33__["SwitchParentsComponent"],
                _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_34__["MyProfileComponent"],
                _comp_md_forms_md_forms_component__WEBPACK_IMPORTED_MODULE_35__["MdFormsComponent"],
                _top_top_component__WEBPACK_IMPORTED_MODULE_36__["TopComponent"],
                _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_38__["DialogComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_40__["AuthComponent"],
                _experiment_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_41__["ResponsiveComponent"],
                _experiment_nav_nav_component__WEBPACK_IMPORTED_MODULE_42__["NavComponent"],
                _experiment_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_43__["BootstrapComponent"],
                _flat_menu_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_44__["MainNavComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_46__["WelcomeComponent"],
                _jwt_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_47__["UserRegisterComponent"],
                _jwt_jwt_login_jwt_login_component__WEBPACK_IMPORTED_MODULE_48__["JwtLoginComponent"],
                _jwt_event_event_component__WEBPACK_IMPORTED_MODULE_49__["EventComponent"],
                _jwt_special_events_special_events_component__WEBPACK_IMPORTED_MODULE_50__["SpecialEventsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _material_modules__WEBPACK_IMPORTED_MODULE_17__["MaterialModules"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: 'xxx', redirectTo: '/auth', pathMatch: 'full' },
                    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_46__["WelcomeComponent"] },
                    { path: 'jwt/login', component: _jwt_jwt_login_jwt_login_component__WEBPACK_IMPORTED_MODULE_48__["JwtLoginComponent"] },
                    { path: 'jwt/register', component: _jwt_user_register_user_register_component__WEBPACK_IMPORTED_MODULE_47__["UserRegisterComponent"] },
                    { path: 'jwt/events', component: _jwt_event_event_component__WEBPACK_IMPORTED_MODULE_49__["EventComponent"] },
                    {
                        path: 'jwt/special', component: _jwt_special_events_special_events_component__WEBPACK_IMPORTED_MODULE_50__["SpecialEventsComponent"],
                        canActivate: [_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
                    },
                    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_40__["AuthComponent"] },
                    { path: 'md-forms', component: _comp_md_forms_md_forms_component__WEBPACK_IMPORTED_MODULE_35__["MdFormsComponent"] },
                    { path: 'bootstrap', component: _experiment_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_43__["BootstrapComponent"] },
                    { path: 'switch', component: _switch_parents_switch_parents_component__WEBPACK_IMPORTED_MODULE_33__["SwitchParentsComponent"] },
                    { path: 'followers/:id/:username', component: _comp_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_34__["MyProfileComponent"] },
                    { path: 'followers', component: _comp_my_followers_my_followers_component__WEBPACK_IMPORTED_MODULE_31__["MyFollowersComponent"] },
                    { path: 'courses', component: _comp_cources_cources_component__WEBPACK_IMPORTED_MODULE_20__["CourcesComponent"] },
                    { path: 'responsive', component: _experiment_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_41__["ResponsiveComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
                ]),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_45__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_39__["MatListModule"]
            ],
            providers: [_jwt_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"], _common_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _common_my_follower_service__WEBPACK_IMPORTED_MODULE_32__["MyFollowerService"], _jwt_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: _jwt_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_51__["TokenInterceptorService"],
                    multi: true
                },
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestore"],
                {
                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_37__["MAT_DATE_LOCALE"],
                    useValue: 'ja-JP'
                }],
            entryComponents: [
                // If you want to use component in the dialog, need to be written the name of the dialog here.
                _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_21__["FavoriteComponent"],
                _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_38__["DialogComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-subtitle>\n    using google account\n  </mat-card-subtitle>\n  <div *ngIf=\"afAuth.user | async as user; else showLogin\">\n    <h1>Auth Component {{ user.displayName }}!</h1>\n    {{ user.email }}\n    <br><br>\n\n    <button (click)=\"logout()\">Logout</button>\n  </div>\n\n  <ng-template #showLogin>\n    <p>Please login....</p>\n    <button (click)=\"login()\">Login with Google</button>\n  </ng-template>\n</mat-card>\n<br>\n\n<mat-card>\n  <mat-card-title>\n    Create and login\n  </mat-card-title>\n  <input matInput placeholder=\"username\" type=\"text\" name=\"email\" #email />\n  <input matInput placeholder=\"password\" type=\"password\" name=\"password\" #password />\n  <br>\n  <button (click)=\"createUser(email, password)\" color=\"primary\" mat-raised-button matTooltip=\"ユーザを作成します。\"\n    matTooltipPosition=\"right\">\n    createUser\n  </button>\n  &nbsp;\n  <button (click)=\"loginWithEmail(email,password)\" color=\"primary\" mat-raised-button matTooltip=\"emailアドレスでログインします。認証情報はFireStoreにあります。\"\n    matTooltipPosition=\"right\">\n    loginWithEmail\n  </button>&nbsp;\n</mat-card>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};



var AuthComponent = /** @class */ (function () {
    function AuthComponent(afAuth) {
        this.afAuth = afAuth;
    }
    AuthComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        //this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
    };
    AuthComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthComponent.prototype.createUser = function (email, password) {
        this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email.value, password.value)
            .catch(function (error) {
            console.log('エラーです。', error.code);
            console.log('めっせ', error.message);
        });
    };
    AuthComponent.prototype.loginWithEmail = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(email.value);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value)
                                .catch(function (error) {
                                // Handle Errors here.
                                // var errorCode = error.code;
                                // var errorMessage = error.message;
                                console.log(error.message);
                                // ...
                            })];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html")
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcnMvYXV0aG9ycy5jb21wb25lbnQuY3NzIn0= */"

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

/***/ "./src/app/common/count.service.ts":
/*!*****************************************!*\
  !*** ./src/app/common/count.service.ts ***!
  \*****************************************/
/*! exports provided: CountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountService", function() { return CountService; });
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

var CountService = /** @class */ (function () {
    function CountService() {
        this.count = 0;
    }
    CountService.prototype.addCount = function () {
        this.count++;
    };
    CountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CountService);
    return CountService;
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

/***/ "./src/app/comp/cources/cources.component.css":
/*!****************************************************!*\
  !*** ./src/app/comp/cources/cources.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvY291cmNlcy9jb3VyY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comp/cources/cources.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comp/cources/cources.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cources works!\n</p>\n\n<mat-form-field class=\"example-full-width\">\n  <input ngModel #itemValue=\"ngModel\" name=\"itemValue\" matInput placeholder=\"itemValue\">\n  <mat-hint>please input value here!</mat-hint>\n</mat-form-field>\n<button (click)=\"addItemValue(itemValue)\" color=\"accent\" mat-raised-button>追加</button>\n\n&nbsp;\n<mat-form-field class=\"example-full-width\">\n    <input ngModel #itemValue=\"ngModel\" name=\"itemValue\" matInput placeholder=\"itemValue\">\n    <mat-hint>please input serarch condition here!</mat-hint>\n  </mat-form-field>\n<button (click)=\"getByItemName('aaa')\" color=\"warn\" mat-raised-button>検索</button>\n<ul>\n  <li *ngFor=\"let item of items | async\">\n    {{item|json}}\n  </li>\n</ul>\n\n\n"

/***/ }),

/***/ "./src/app/comp/cources/cources.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comp/cources/cources.component.ts ***!
  \***************************************************/
/*! exports provided: CourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourcesComponent", function() { return CourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFirestore } from '@angular/fire/firestore';


var CourcesComponent = /** @class */ (function () {
    function CourcesComponent(afs, fireAuth) {
        this.afs = afs;
        this.isActive = true;
        this.itemCollection = this.afs.collection('items');
        this.items = afs.collection('items', function (ref) { return ref.where('value', '==', 'aaa'); }).valueChanges();
        // this.startDate$ = new BehaviorSubject(new Date('2018-10-27'))
        // this.searchName$ = new BehaviorSubject("aaa")
        // this.items$ = this.searchName$.pipe(
        //   switchMap(date => this.fireStore
        //     .collection<Item>(`Item`, ref => {
        //       ref.where('startDate', '==', date))
        //     .valueChanges()
        //   )
        // )
        //var itemRef = fireStore.collection('Items')
        // var query = itemRef.
        // fireStore.collection('items', (ref) => {
        //   ref.where('name', '==', 'nagase')
        // })
        //     var citiesRef = db.collection('cities');
        // var query = citiesRef.where('capital', '==', true).get()
        //   .then(snapshot => {
        //     snapshot.forEach(doc => {
        //       console.log(doc.id, '=>', doc.data());
        //     });
        //   })
        //   .catch(err => {
        //     console.log('Error getting documents', err);
        //   });
        //afs.collection('items', ref => ref.where('size', '==', 'large'))
    }
    CourcesComponent.prototype.getByItemName = function (itemName) {
        this.itemCollection = this.afs.collection('items', function (ref) { return ref.where('value', '==', itemName); });
        console.log("★");
        console.log(this.itemCollection);
    };
    CourcesComponent.prototype.addItemValue = function (itemValue) {
        console.log(itemValue.value);
        this.afs.collection('items').add({ 'value': itemValue.value }).then(function (docRef) {
            console.log("" + docRef);
        }).catch(function (error) {
            console.log(error);
        });
    };
    CourcesComponent.prototype.findOneItem = function () {
    };
    CourcesComponent.prototype.onSave = function ($event) {
        console.log($event);
        console.log('x座標:' + $event.clientX);
    };
    CourcesComponent.prototype.onKeyUp = function () {
        console.log('enter was pressed.');
    };
    CourcesComponent.prototype.ngOnInit = function () {
    };
    CourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cources',
            template: __webpack_require__(/*! ./cources.component.html */ "./src/app/comp/cources/cources.component.html"),
            styles: [__webpack_require__(/*! ./cources.component.css */ "./src/app/comp/cources/cources.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], angularfire2__WEBPACK_IMPORTED_MODULE_2__["FirebaseApp"]])
    ], CourcesComponent);
    return CourcesComponent;
}());

// here is sample code
//https://medium.com/avocoders/getting-started-with-angularfirestore-1a2cef8aa394


/***/ }),

/***/ "./src/app/comp/dialog/dialog.component.css":
/*!**************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comp/dialog/dialog.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3></h3>dialog works!\n<p>\n\n  {{receivedData.message}}\n</p>\n\n<button matTooltip=\"Yes\" mat-dialog-close=\"yes\" mat-raised-button matTooltipPosition=\"above\" color=\"primary\">\n  <mat-icon>check</mat-icon> yes\n</button>\n&nbsp;\n<button matTooltip=\"No\" mat-dialog-close=\"no\" mat-raised-button matTooltipPosition=\"above\" color=\"warn\">\n  <mat-icon>close</mat-icon> No\n</button>"

/***/ }),

/***/ "./src/app/comp/dialog/dialog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.ts ***!
  \*************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    //MEMO: to receive value from caller, MAT_DIALOG_DATA have to be injected here.
    // this is the simple form of injection token. 
    function DialogComponent(myData) {
        console.log('data', myData);
        this.receivedData = myData;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/comp/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/comp/dialog/dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/comp/favorite/favorite.component.css":
/*!******************************************************!*\
  !*** ./src/app/comp/favorite/favorite.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-star{\n    color: red\n}\n.fa-star-o{\n    color:green\n}\nh3{\n    color: yellowgreen\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1zdGFye1xuICAgIGNvbG9yOiByZWRcbn1cbi5mYS1zdGFyLW97XG4gICAgY29sb3I6Z3JlZW5cbn1cbmgze1xuICAgIGNvbG9yOiB5ZWxsb3dncmVlblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/comp/favorite/favorite.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/favorite/favorite.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>favorite</h3>\n<i class=\"fa fa-2x\" [class.fa-star]=\"isFavorite\" [class.fa-star-o]=\"!isFavorite\" (click)=\"onClick()\" aria-hidden=\"true\">\n</i>\n\n<span class=\"fa-stack fa-lg\">\n  <i class=\"fa fa-star fa-stack-1x\"></i>\n  <i [ngClass]=\"{'fa fa-ban fa-stack-2x text-danger': isFavorite}\" [ngStyle]=\"{'color': isFavorite ? 'green' : 'red' }\"></i>\n</span>"

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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
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
    function FavoriteComponent(overlayContainer) {
        // tslint:disable-next-line:no-output-rename
        this.change2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
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
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/comp/for/for.component.css":
/*!********************************************!*\
  !*** ./src/app/comp/for/for.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZm9yL2Zvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/comp/for/for.component.html":
/*!*********************************************!*\
  !*** ./src/app/comp/for/for.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>for component</h3>\n  \n  <ul class=\"fa-ul\">\n      <li *ngFor=\"let item of items; index as i\">\n        <i class=\"fa-li fa fa-check-square\"></i>{{item.id}}. {{item.name}}\n      </li>\n    </ul>\n  "

/***/ }),

/***/ "./src/app/comp/for/for.component.ts":
/*!*******************************************!*\
  !*** ./src/app/comp/for/for.component.ts ***!
  \*******************************************/
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
            template: __webpack_require__(/*! ./for.component.html */ "./src/app/comp/for/for.component.html"),
            styles: [__webpack_require__(/*! ./for.component.css */ "./src/app/comp/for/for.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForComponent);
    return ForComponent;
}());



/***/ }),

/***/ "./src/app/comp/like/like.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/like/like.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart{\n    color: #ccc;\n    cursor: pointer;\n}\n.liked{\n    color: deeppink;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9saWtlL2xpa2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2xpa2UvbGlrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWhlYXJ0e1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saWtlZHtcbiAgICBjb2xvcjogZGVlcHBpbms7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

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

/***/ "./src/app/comp/md-forms/md-forms.component.css":
/*!******************************************************!*\
  !*** ./src/app/comp/md-forms/md-forms.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 40px;\n}\n\n.mat-radio-outer-circle {\n    padding-left: 10px;\n}\n\n.mat-radio-button {\n    padding-right: 20px;\n}\n\nmat-icon.alert {\n    color: purple;\n}\n\nmat-icon.orange {\n    color: orange;\n}\n\nmat-icon.red {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9tZC1mb3Jtcy9tZC1mb3Jtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcC9tZC1mb3Jtcy9tZC1mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxubWF0LWljb24uYWxlcnQge1xuICAgIGNvbG9yOiBwdXJwbGU7XG59XG5cbm1hdC1pY29uLm9yYW5nZSB7XG4gICAgY29sb3I6IG9yYW5nZTtcbn1cblxubWF0LWljb24ucmVkIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comp/md-forms/md-forms.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/md-forms/md-forms.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>material forms</h2>\n\n<section class=\"first-section\">\n  <mat-checkbox class=\"first-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n  <mat-checkbox id=\"x\" class=\"first-margin\" [(ngModel)]=\"indeterminate\" (change)=onchange(ind) #ind>Indeterminate</mat-checkbox>\n</section>\n\n<mat-radio-group>\n  <mat-radio-button value=\"1\">Male</mat-radio-button>\n  <mat-radio-button value=\"2\">Female</mat-radio-button>\n</mat-radio-group>\n\n<br>\n\n<mat-form-field>\n  <mat-select placeholder=\"Favorite food\" [formControl]=\"foodControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"foodControl.hasError('required')\">Please choose an animal</mat-error>\n\n  <mat-hint>{{foodControl.value?.viewValue}}</mat-hint>\n\n</mat-form-field>\n\n<form class=\"example-form\">\n  <span class=\"headline\">you can define input field this way</span><br>\n  <mat-form-field class=\"example-full-width\">\n    <input ngModel #username=\"ngModel\" name=\"username\" matInput placeholder=\"username\" required>\n    <mat-hint>please input username here!</mat-hint>\n    <span matPrefix>prefix_</span>\n    <span matSuffix>_suffix</span>\n\n    <mat-error *ngIf=\"username.invalid && username.errors.required\">\n      user name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  And this way too. (this one seems sofisticated because it copied form official site... )\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  date picker\n  <mat-form-field>\n    <input type=\"text\" matInput [matDatepicker]=\"birthdate\">\n    <mat-datepicker-toggle matSuffix [for]=\"birthdate\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <mat-datepicker #birthdate></mat-datepicker>\n  <br>\n  pass to dialog this value\n  <mat-form-field>\n    <textarea #comment matInput matTextareaAutosize rows=\"2\">inputed value</textarea>\n  </mat-form-field><br>\n\n\n  <button (click)=\"openDialog(comment.value)\" color=\"primary\" mat-raised-button matTooltip=\"ダイアログを開きます。上のInputフィールドに入力した値をダイアログに渡します。\"\n    matTooltipPosition=\"right\">\n    open dialog\n  </button>&nbsp;\n\n  <button (click)=\"openFavoriteInDialog()\" color=\"accent\" mat-raised-button>open favorite</button>&nbsp;\n  <button (click)=\"incrementCount()\" color=\"warn\" mat-raised-button>count {{countService.count}}</button>&nbsp;\n  <button matTooltip=\"これはツールチップです。ここに機能の説明などを書くことができます。太字はできる？\" matTooltipPosition=\"right\" color=\"primary\" mat-fab>\n    <mat-icon>face</mat-icon>\n  </button>\n  result : {{dialogResultValue}}\n  <br>\n  <mat-chip-list>\n    <mat-chip selected=\"true\" color=\"accent\">one</mat-chip>\n    <mat-chip *ngFor=\"let category of categories\" (click)=\"selectedCategory(category)\" [selected]=\"category.selected\">\n      {{category.name}}\n    </mat-chip>\n  </mat-chip-list>\n  <br>\n\n</form>\n\n<mat-icon class=\"alert\">add_alert</mat-icon>\n<mat-icon class=\"orange\">face</mat-icon>\n<mat-icon class=\"red\">gif</mat-icon>\n<mat-icon class=\"alert\">watch</mat-icon>\n\n<mat-grid-list cols=\"5\" rowHeight=\"2:2\" gutterSize=\"50px\">\n  <mat-grid-tile width=\"100px\">1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n  <mat-grid-tile>5</mat-grid-tile>\n  <mat-grid-tile>6</mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/comp/md-forms/md-forms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/comp/md-forms/md-forms.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, MdFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdFormsComponent", function() { return MdFormsComponent; });
/* harmony import */ var _common_count_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../common/count.service */ "./src/app/common/count.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../comp/favorite/favorite.component */ "./src/app/comp/favorite/favorite.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../comp/dialog/dialog.component */ "./src/app/comp/dialog/dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var MdFormsComponent = /** @class */ (function () {
    function MdFormsComponent(dialog, countService) {
        this.dialog = dialog;
        this.countService = countService;
        // for checkbox
        this.checked = false;
        this.indeterminate = true;
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        //for selector
        this.foodControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza', isDisabled: true },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        //for email input
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
        //for chip
        this.categories = [
            { name: 'begginer' },
            { name: 'Intermediate' },
            { name: 'Advanced' }
        ];
        // this.countService = countService;
    }
    /**
     * dialogを開きます。戻り値を受け取ってログに出します。
     */
    MdFormsComponent.prototype.openDialog = function (comment) {
        var _this = this;
        this.dialog.open(_comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], {
            data: { couseId: 1, message: comment }
        })
            .afterClosed().subscribe(function (result) {
            console.log(result);
            _this.dialogResultValue = result;
        });
    };
    MdFormsComponent.prototype.openFavoriteInDialog = function () {
        this.dialog.open(_comp_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_4__["FavoriteComponent"]);
    };
    MdFormsComponent.prototype.ngOnInit = function () {
        console.log("on init" + this.indeterminate);
    };
    MdFormsComponent.prototype.ngOnDestroy = function () {
        console.log('on destoroy');
    };
    MdFormsComponent.prototype.onchange = function (ind) {
        console.log(ind.checked);
        this.indeterminate = ind.checked;
    };
    /* for chips */
    MdFormsComponent.prototype.selectedCategory = function (category) {
        this.categories.filter(function (c) { return c !== category; })
            .forEach(function (c) { return c['selected'] = false; });
        category.selected = !category.selected;
    };
    MdFormsComponent.prototype.incrementCount = function () {
        this.countService.addCount();
    };
    MdFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-md-forms',
            template: __webpack_require__(/*! ./md-forms.component.html */ "./src/app/comp/md-forms/md-forms.component.html"),
            providers: [
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"], useValue: 'ja-JP' },
            ],
            styles: [__webpack_require__(/*! ./md-forms.component.css */ "./src/app/comp/md-forms/md-forms.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _common_count_service__WEBPACK_IMPORTED_MODULE_0__["CountService"]])
    ], MdFormsComponent);
    return MdFormsComponent;
}());



/***/ }),

/***/ "./src/app/comp/my-followers/my-followers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/comp/my-followers/my-followers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avator{\n    width:80px;\n    height:80px;\n    border-radius: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9teS1mb2xsb3dlcnMvbXktZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvbXktZm9sbG93ZXJzL215LWZvbGxvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRvcntcbiAgICB3aWR0aDo4MHB4O1xuICAgIGhlaWdodDo4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iXX0= */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvbmV3LWNvdXJzZS1mb3JtL25ldy1jb3Vyc2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

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

/***/ "./src/app/comp/panel/panel.component.css":
/*!************************************************!*\
  !*** ./src/app/comp/panel/panel.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvcGFuZWwvcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/comp/panel/panel.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/panel/panel.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>panel</h3>\n\n<div class=\"card\" style=\"width: 20rem;\">\n    <div class=\"card-header\">\n      <ng-content select=\".heading\"></ng-content>\n    </div>\n    <div class=\"card-body\">\n        <ng-content select=\".body\"></ng-content>\n    </div>\n    <div class=\"card-footer\">xxx</div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/panel/panel.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/panel/panel.component.ts ***!
  \***********************************************/
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
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/comp/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.css */ "./src/app/comp/panel/panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/comp/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/comp/post/post.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

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

/***/ "./src/app/comp/title-case/title-case.component.css":
/*!**********************************************************!*\
  !*** ./src/app/comp/title-case/title-case.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvdGl0bGUtY2FzZS90aXRsZS1jYXNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/comp/title-case/title-case.component.html":
/*!***********************************************************!*\
  !*** ./src/app/comp/title-case/title-case.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>title case</h3>\n<input type=\"text\" [(ngModel)]=\"title\" ><br>\n{{title | titleCase}}"

/***/ }),

/***/ "./src/app/comp/title-case/title-case.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/comp/title-case/title-case.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./title-case.component.html */ "./src/app/comp/title-case/title-case.component.html"),
            styles: [__webpack_require__(/*! ./title-case.component.css */ "./src/app/comp/title-case/title-case.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleCaseComponent);
    return TitleCaseComponent;
}());



/***/ }),

/***/ "./src/app/comp/title-case/title-case.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/comp/title-case/title-case.pipe.ts ***!
  \****************************************************/
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

/***/ "./src/app/experiment/bootstrap/bootstrap.component.css":
/*!**************************************************************!*\
  !*** ./src/app/experiment/bootstrap/bootstrap.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaW1lbnQvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experiment/bootstrap/bootstrap.component.html":
/*!***************************************************************!*\
  !*** ./src/app/experiment/bootstrap/bootstrap.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n  Launch demo modal\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        ...\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Dropdown button\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n    </div>\n  </div>\n\n  <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Tooltip on top\">\n      Tooltip on top\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">\n      Tooltip on right\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">\n      Tooltip on bottom\n    </button>\n    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Tooltip on left\">\n      Tooltip on left\n    </button>\n\n    <span class=\"d-inline-block\" tabindex=\"0\" data-toggle=\"tooltip\" title=\"Disabled tooltip\">\n        <button class=\"btn btn-primary\" style=\"pointer-events: none;\" type=\"button\" disabled>Disabled button</button>\n      </span>"

/***/ }),

/***/ "./src/app/experiment/bootstrap/bootstrap.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/experiment/bootstrap/bootstrap.component.ts ***!
  \*************************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
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

var BootstrapComponent = /** @class */ (function () {
    function BootstrapComponent() {
    }
    BootstrapComponent.prototype.ngOnInit = function () {
    };
    BootstrapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bootstrap',
            template: __webpack_require__(/*! ./bootstrap.component.html */ "./src/app/experiment/bootstrap/bootstrap.component.html"),
            styles: [__webpack_require__(/*! ./bootstrap.component.css */ "./src/app/experiment/bootstrap/bootstrap.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })


/***/ }),

/***/ "./src/app/experiment/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/experiment/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaW1lbnQvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experiment/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/experiment/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     \n\n\n    <nav color=\"primary\" class=\"navbar navbar-expand navbar-light bg-light\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n          aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n  \n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item \" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"md-forms\">Md forms<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"courses\">courses<br>(Firebase)<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item \" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"profile\">profile<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"switch\">switch<span class=\"sr-only\">(current)</span></a>\n  \n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active current\">\n              <a class=\"nav-link\" routerLink=\"followers\" [queryParams]=\"{ page: 1, order: 'asc'}\">follower</a>\n            </li>\n          </ul>\n        </div>\n      </nav>"

/***/ }),

/***/ "./src/app/experiment/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/experiment/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/experiment/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/experiment/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/experiment/responsive/responsive.component.css":
/*!****************************************************************!*\
  !*** ./src/app/experiment/responsive/responsive.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaW1lbnQvcmVzcG9uc2l2ZS9yZXNwb25zaXZlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/experiment/responsive/responsive.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/experiment/responsive/responsive.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<style>\n* {\n  box-sizing: border-box;\n}\n.menu {\n  float:left;\n  width:20%;\n  text-align:center;\n}\n.menu a {\n  background-color:#e5e5e5;\n  padding:8px;\n  margin-top:7px;\n  display:block;\n  width:100%;\n  color:black;\n}\n.main {\n  float:left;\n  width:60%;\n  padding:0 20px;\n}\n.right {\n  background-color:#e5e5e5;\n  float:left;\n  width:20%;\n  padding:15px;\n  margin-top:7px;\n  text-align:center;\n}\n\n@media only screen and (max-width:620px) {\n  /* For mobile phones: */\n  .menu, .main, .right {\n    width:100%;\n  }\n}\n</style>\n</head>\n<body style=\"font-family:Verdana;color:#aaaaaa;\">\n\n<div style=\"background-color:#e5e5e5;padding:15px;text-align:center;\">\n  <h1>Hello World</h1>\n</div>\n\n<div style=\"overflow:auto\">\n  <div class=\"menu\">\n    <a href=\"#\">Link 1</a>\n    <a href=\"#\">Link 2</a>\n    <a href=\"#\">Link 3</a>\n    <a href=\"#\">Link 4</a>\n  </div>\n\n  <div class=\"main\">\n    <h2>Lorum Ipsum</h2>\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\n  </div>\n\n  <div class=\"right\">\n    <h2>About</h2>\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>\n  </div>\n</div>\n\n<div style=\"background-color:#e5e5e5;text-align:center;padding:10px;margin-top:7px;\">© copyright w3schools.com</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/experiment/responsive/responsive.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/experiment/responsive/responsive.component.ts ***!
  \***************************************************************/
/*! exports provided: ResponsiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveComponent", function() { return ResponsiveComponent; });
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

var ResponsiveComponent = /** @class */ (function () {
    function ResponsiveComponent() {
    }
    ResponsiveComponent.prototype.ngOnInit = function () {
    };
    ResponsiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responsive',
            template: __webpack_require__(/*! ./responsive.component.html */ "./src/app/experiment/responsive/responsive.component.html"),
            styles: [__webpack_require__(/*! ./responsive.component.css */ "./src/app/experiment/responsive/responsive.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponsiveComponent);
    return ResponsiveComponent;
}());



/***/ }),

/***/ "./src/app/flat-menu-nav/main-nav.component.css":
/*!******************************************************!*\
  !*** ./src/app/flat-menu-nav/main-nav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n    height: 100%;\n}\n\n.sidenav {}\n\n.short-sidenav {\n    width: 50px;\n}\n\n.sidenav .mat-toolbar {\n    background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: 50px;\n    padding-left: 8px;\n    font-size: 25px;\n}\n\n.clear {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxhdC1tZW51LW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRCxXQUFXOztBQUVYO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0kseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZsYXQtbWVudS1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7fVxuXG4uc2hvcnQtc2lkZW5hdiB7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jbGVhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flat-menu-nav/main-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/flat-menu-nav/main-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  Inverness\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\" [hasBackdrop]=\"false\" autosize>\n  <mat-sidenav #drawer class=\"sidenav\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'side' : 'side'\"\n    [opened]=\"true\" [fixedInViewport]=\"false\">\n\n    <mat-nav-list>\n      <a mat-list-item href=\"#\" matTooltip=\"show item list\" matTooltipPosition=\"right\">\n        <mat-icon>list_alt</mat-icon>\n        <div *ngIf=\"!(isHandset$ | async)\">&nbsp;Item List</div>\n      </a>\n      <a mat-list-item href=\"#\">\n        <mat-icon matTooltip=\"search items form list\" matTooltipPosition=\"right\">search</mat-icon>\n        <div *ngIf=\"!(isHandset$ | async)\">&nbsp;Search</div>\n      </a>\n      <a mat-list-item href=\"#\" matTooltip=\"search items form list\" matTooltipPosition=\"right\">\n        <mat-icon>face</mat-icon>\n        <div *ngIf=\"!(isHandset$ | async)\">&nbsp;My Contents</div>\n      </a>\n      <a mat-list-item href=\"#\" matTooltip=\"search items form list\" matTooltipPosition=\"right\">\n        <mat-icon>loyalty</mat-icon>\n        <div *ngIf=\"!(isHandset$ | async)\">&nbsp;Favorite</div>\n      </a>\n      <a mat-list-item href=\"#\" matTooltip=\"search items form list\" matTooltipPosition=\"right\">\n        <mat-icon>settings</mat-icon>\n        <div *ngIf=\"!(isHandset$ | async)\">&nbsp;Setting</div>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    こんにちは。dsfdsfsdfsdfsdfdsf\n    これはメッセージです。\n    {{this.inputValue}}\n\n\n    <!-- Add Content Here -->\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/flat-menu-nav/main-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/flat-menu-nav/main-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainNavComponent = /** @class */ (function () {
    function MainNavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.inputValue = "";
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/flat-menu-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.css */ "./src/app/flat-menu-nav/main-nav.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/jwt/auth.guard.ts":
/*!***********************************!*\
  !*** ./src/app/jwt/auth.guard.ts ***!
  \***********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('can activate called.');
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['jwt/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__["JwtAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/jwt/event/event.component.css":
/*!***********************************************!*\
  !*** ./src/app/jwt/event/event.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p3dC9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jwt/event/event.component.html":
/*!************************************************!*\
  !*** ./src/app/jwt/event/event.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n  <div class=\"col-md-4 mb-3\" *ngFor=\"let event of events\">\n    <div class=\"card text-center\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{event.name}}</h5>\n        <p class=\"card-text\">{{event.description}}</p>\n        <a href=\"#\" class=\"btn btn-primary\">Buy Tickerts</a>\n      </div>\n      <div class=\"card-footer text muted\">\n        {{event.date | date: 'longDate'}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/jwt/event/event.component.ts":
/*!**********************************************!*\
  !*** ./src/app/jwt/event/event.component.ts ***!
  \**********************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/event.service */ "./src/app/jwt/service/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(_eventService) {
        this._eventService = _eventService;
        this.events = [];
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getEvents()
            .subscribe(function (res) { return _this.events = res; }, function (err) { return console.log(err); });
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/jwt/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.css */ "./src/app/jwt/event/event.component.css")]
        }),
        __metadata("design:paramtypes", [_service_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/jwt/jwt-login/jwt-login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/jwt/jwt-login/jwt-login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.flex-container>div {\n    margin: 5px;\n    box-align: center;\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvand0L2p3dC1sb2dpbi9qd3QtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztDQUVyQiIsImZpbGUiOiJzcmMvYXBwL2p3dC9qd3QtbG9naW4vand0LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmxleC1jb250YWluZXI+ZGl2IHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3gtYWxpZ246IGNlbnRlcjtcbiBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/jwt/jwt-login/jwt-login.component.html":
/*!********************************************************!*\
  !*** ./src/app/jwt/jwt-login/jwt-login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    jwt login\n  </mat-card-title>\n\n  <div class=\"cardbody flex-container\">\n    <div>\n      <input matInput [(ngModel)]=\"loginUserData.email\" type=\"text\" name=\"email\" #email />\n    </div>\n    <div>\n      <input matInput [(ngModel)]=\"loginUserData.password\" type=\"password\" name=\"password\" #password />\n    </div>\n    <div>\n      <button (click)=\"login()\" color=\"primary\" mat-raised-button matTooltip=\"emailアドレスでログインします。認証情報はFireStoreにあります。\"\n        matTooltipPosition=\"right\">\n        Login\n      </button>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/jwt/jwt-login/jwt-login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/jwt/jwt-login/jwt-login.component.ts ***!
  \******************************************************/
/*! exports provided: JwtLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtLoginComponent", function() { return JwtLoginComponent; });
/* harmony import */ var _service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
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



var JwtLoginComponent = /** @class */ (function () {
    function JwtLoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.loginUserData = {};
    }
    JwtLoginComponent.prototype.ngOnInit = function () {
    };
    JwtLoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginUserData);
        this._auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            // 指定した先に移動させる
            _this._router.navigate(['jwt/special']);
        }, function (error) {
            console.log(error);
        });
    };
    JwtLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jwt-login',
            template: __webpack_require__(/*! ./jwt-login.component.html */ "./src/app/jwt/jwt-login/jwt-login.component.html"),
            styles: [__webpack_require__(/*! ./jwt-login.component.css */ "./src/app/jwt/jwt-login/jwt-login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__["JwtAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JwtLoginComponent);
    return JwtLoginComponent;
}());



/***/ }),

/***/ "./src/app/jwt/service/event.service.ts":
/*!**********************************************!*\
  !*** ./src/app/jwt/service/event.service.ts ***!
  \**********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this._eventUrl = "http://localhost:3000/api/events";
        this._specialEventsUrl = "http://localhost:3000/api/special";
        // こんな感じで、サーバ側で外部サイトから結果を取ってきて表示することも可能。
        this._jsonplaceholderPostUrl = "https://jsonplaceholder.typicode.com/posts";
    }
    EventService.prototype.getEvents = function () {
        console.log("get events");
        return this.http.get(this._eventUrl);
    };
    EventService.prototype.getSpecialEvents = function () {
        return this.http.get(this._specialEventsUrl);
    };
    /**
     * JsonPlaceholderという外部サイトからサンプルデータを取得する。
     */
    EventService.prototype.getJsonPost = function () {
        console.log("get post");
        return this.http.get(this._jsonplaceholderPostUrl);
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/jwt/service/jwt-auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/jwt/service/jwt-auth.service.ts ***!
  \*************************************************/
/*! exports provided: JwtAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtAuthService", function() { return JwtAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var JwtAuthService = /** @class */ (function () {
    function JwtAuthService(http, _router) {
        this.http = http;
        this._router = _router;
        //これは本物だが、環境によってつながらないときがあるので、ダミーに切り替えられるようにしておきたい。
        this._registerUrl = "http://localhost:3000/api/register";
        this._loginUrl = "http://localhost:3000/api/login";
    }
    //constructor() { }
    JwtAuthService.prototype.registerUser = function (user) {
        console.log(user);
        return this.http.post(this._registerUrl, user);
        //return null;
    };
    JwtAuthService.prototype.loginUser = function (user) {
        return this.http.post(this._loginUrl, user);
    };
    JwtAuthService.prototype.loggedIn = function () {
        console.log('ログインチェックを行います');
        return !!localStorage.getItem('token');
    };
    JwtAuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
        this._router.navigate(['jwt/events']);
    };
    JwtAuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    JwtAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JwtAuthService);
    return JwtAuthService;
}());



/***/ }),

/***/ "./src/app/jwt/service/token-interceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/jwt/service/token-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
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


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(_auth) {
        this._auth = _auth;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        console.log('intercept method called.');
        var tokenizeReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this._auth.getToken(),
                NNNNNNNN: "this is test value",
                xxx: 'value12345'
            }
        });
        return next.handle(tokenizeReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__["JwtAuthService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/jwt/special-events/special-events.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/jwt/special-events/special-events.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p3dC9zcGVjaWFsLWV2ZW50cy9zcGVjaWFsLWV2ZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jwt/special-events/special-events.component.html":
/*!******************************************************************!*\
  !*** ./src/app/jwt/special-events/special-events.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mt-5\">\n    <div class=\"col-md-4 mb-3\" *ngFor=\"let event of specialEvents\">\n      <div class=\"card text-center\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{event.name}}</h5>\n          <p class=\"card-text\">{{event.description}}</p>\n          <a href=\"#\" class=\"btn btn-success\">Buy Tickerts</a>\n        </div>\n        <div class=\"card-footer text muted\">\n          {{event.date | date: 'longDate'}}\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/jwt/special-events/special-events.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/jwt/special-events/special-events.component.ts ***!
  \****************************************************************/
/*! exports provided: SpecialEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialEventsComponent", function() { return SpecialEventsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/event.service */ "./src/app/jwt/service/event.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpecialEventsComponent = /** @class */ (function () {
    function SpecialEventsComponent(_eventService, _router) {
        this._eventService = _eventService;
        this._router = _router;
        this.specialEvents = [];
    }
    SpecialEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.getSpecialEvents()
            .subscribe(function (res) { return _this.specialEvents = res; }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    _this._router.navigate(['jwt/login']);
                }
            }
        });
    };
    SpecialEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-special-events',
            template: __webpack_require__(/*! ./special-events.component.html */ "./src/app/jwt/special-events/special-events.component.html"),
            styles: [__webpack_require__(/*! ./special-events.component.css */ "./src/app/jwt/special-events/special-events.component.css")]
        }),
        __metadata("design:paramtypes", [_service_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], SpecialEventsComponent);
    return SpecialEventsComponent;
}());



/***/ }),

/***/ "./src/app/jwt/user-register/user-register.component.css":
/*!***************************************************************!*\
  !*** ./src/app/jwt/user-register/user-register.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2p3dC91c2VyLXJlZ2lzdGVyL3VzZXItcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/jwt/user-register/user-register.component.html":
/*!****************************************************************!*\
  !*** ./src/app/jwt/user-register/user-register.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    ユーザ登録\n  </mat-card-title>\n\n  <div class=\"cardbody flex-container\">\n    <div>\n      <input [(ngModel)]=\"registerUserData.email\" matInput placeholder=\"email\" type=\"text\" name=\"email\" />\n    </div>\n\n    <div>\n      <input [(ngModel)]=\"registerUserData.password\" matInput placeholder=\"password\" type=\"password\"  />\n    </div>\n    <div>\n      <button (click)=\"registerUser()\" color=\"primary\" mat-raised-button matTooltip=\"---\" matTooltipPosition=\"right\">\n        Register\n      </button>\n    </div>\n  </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/jwt/user-register/user-register.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/jwt/user-register/user-register.component.ts ***!
  \**************************************************************/
/*! exports provided: UserRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterComponent", function() { return UserRegisterComponent; });
/* harmony import */ var _service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
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



var UserRegisterComponent = /** @class */ (function () {
    function UserRegisterComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.registerUserData = {};
    }
    UserRegisterComponent.prototype.ngOnInit = function () {
    };
    UserRegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this._auth.registerUser(this.registerUserData).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this._router.navigate(['jwt/special']);
        }, function (req) {
            console.log(req);
        });
    };
    UserRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-register',
            template: __webpack_require__(/*! ./user-register.component.html */ "./src/app/jwt/user-register/user-register.component.html"),
            styles: [__webpack_require__(/*! ./user-register.component.css */ "./src/app/jwt/user-register/user-register.component.css")]
        }),
        __metadata("design:paramtypes", [_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__["JwtAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserRegisterComponent);
    return UserRegisterComponent;
}());

;


/***/ }),

/***/ "./src/app/material-modules.ts":
/*!*************************************!*\
  !*** ./src/app/material-modules.ts ***!
  \*************************************/
/*! exports provided: MaterialModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModules", function() { return MaterialModules; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModules = /** @class */ (function () {
    function MaterialModules() {
    }
    MaterialModules = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTreeModule"],
            ]
        })
    ], MaterialModules);
    return MaterialModules;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "not found page !!!!\n\n"

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

/***/ "./src/app/switch-parents/switch-parents.component.css":
/*!*************************************************************!*\
  !*** ./src/app/switch-parents/switch-parents.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaC1wYXJlbnRzL3N3aXRjaC1wYXJlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LmNzcyJ9 */"

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

/***/ "./src/app/top/top.component.css":
/*!***************************************!*\
  !*** ./src/app/top/top.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n    font-family: sans-serif;\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.login {\n    box-align: right;\n    font-size: 12px;\n    text-align: right;\n    float: right;\n    background: red;\n    width: 100px;\n}\n\n.moveright {\n    //background:lightcoral;\n    width: 100vw; //text-align: right;\n    font-size: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.login-align {\n    //text-align: right;\n    font-size: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    color: white;\n}\n\n.main-content {\n    padding-left: 15px;\n    padding-top: 10px;\n}\n\n.mat-expansion-panel-header:hover {\n    background-color: red;\n}\n\n.mat-panel-title {\n    background-color: red;\n}\n\na.mat-list-item:hover {\n    background-color: rgba(194, 192, 194, 0.26);\n}\n\n.sidenav-container {\n    height: 100%;\n}\n\n.mat-is-mobile .mat-sidenav-container {\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n    flex: 1 0 auto;\n}\n\n.mat-toolbar.mat-primary {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    height: 50px;\n    padding-left: 8px;\n    font-size: 25px;\n}\n\nmat-panel-title {\n    /*\n  font-size: 20px;\n  font-weight: bold;\n  font-family: '-apple-system,Segoe UI,Helvetica Neue,Hiragino Kaku Gothic ProN,\"メイリオ\",meiryo,sans-serif'\n  */\n}\n\n::ng-deep .mat-expansion-panel-body {\n    padding: 0px !important;\n}\n\n::ng-deep .mat-list-item-content {\n    padding-left: 30px !important;\n}\n\n::ng-deep .current {\n    color: red;\n    font-weight: bold;\n    background: rgb(235, 235, 235);\n}\n\n.active {\n    background: rgb(235, 235, 235);\n    ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYSxDQUFDLG9CQUFvQjtJQUNsQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksNENBQTRDO0NBQy9DOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJO2tFQUM4RDtJQUM5RCxlQUFlO0NBQ2xCOztBQUVEO0lBQ0kseUJBQWlCO0lBQWpCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0k7Ozs7SUFJQTtDQUNIOztBQUVEO0lBQ0ksd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSwrQkFBK0I7O0NBRWxDIiwiZmlsZSI6InNyYy9hcHAvdG9wL3RvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luIHtcbiAgICBib3gtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuLm1vdmVyaWdodCB7XG4gICAgLy9iYWNrZ3JvdW5kOmxpZ2h0Y29yYWw7XG4gICAgd2lkdGg6IDEwMHZ3OyAvL3RleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmxvZ2luLWFsaWduIHtcbiAgICAvL3RleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcGFuZWwtdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuYS5tYXQtbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NCwgMTkyLCAxOTQsIDAuMjYpO1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1pcy1tb2JpbGUgLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICAgIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxubWF0LXBhbmVsLXRpdGxlIHtcbiAgICAvKlxuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJy1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksSGVsdmV0aWNhIE5ldWUsSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTixcIuODoeOCpOODquOCqlwiLG1laXJ5byxzYW5zLXNlcmlmJ1xuICAqL1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jdXJyZW50IHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzUsIDIzNSwgMjM1KTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMjM1LCAyMzUpO1xuICAgIDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/top/top.component.html":
/*!****************************************!*\
  !*** ./src/app/top/top.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  Inverness\n  <div class=\"moveright\">\n    <a routerLink=\"jwt/login\">\n      <span class=\"login-align\" *ngIf=\"!_authService.loggedIn()\" style=\"cursor:pointer\">\n        <mat-icon aria-label=\"Side nav toggle icon\" class=\" icon-small\">vpn_key</mat-icon>\n        <span>login</span>\n      </span>\n    </a>\n\n    <a (click)=\"_authService.logOut()\">\n      <span class=\"login-align\" *ngIf=\"_authService.loggedIn()\" style=\"cursor:pointer\">\n        <mat-icon aria-label=\"Side nav toggle icon\" class=\"icon-small\">directions_run</mat-icon>\n        <span>logout</span>\n      </span>\n    </a>\n  </div>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"sidenav-container\" [hasBackdrop]=\"(isHandset$ | async)\" autosize>\n  <mat-sidenav #drawer class=\"sidenav\" [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\" [fixedInViewport]=\"false\">\n\n\n    <mat-accordion>\n      <mat-expansion-panel expanded=\"false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Experiments : {{experimentLinkActive.isActive}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-nav-list routerLinkActive #experimentLinkActive=\"routerLinkActive\">\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"followers\" active>\n            <mat-icon>settings</mat-icon>\n            &nbsp;Stack overflow API\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"md-forms\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;forms\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"responsive\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;responsive\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"bootstrap\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;bootstrap\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"switch\">\n            <mat-icon>face</mat-icon>\n            &nbsp;switch\n          </a>\n        </mat-nav-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel expanded=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            認証認可(jwt)\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-nav-list routerLinkActive #authLinkActive=\"routerLinkActive\">\n          <a mat-list-item routerLink=\"/jwt/register\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Register\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"/jwt/login\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;ログイン\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"/jwt/events\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Event\n          </a>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"/jwt/special\">\n            <mat-icon>face</mat-icon>\n            &nbsp;Special Events\n          </a>\n        </mat-nav-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Firebase\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-nav-list>\n          <a mat-list-item routerLinkActive=\"active current\" routerLink=\"auth\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Firebase ログイン\n          </a>\n          <a mat-list-item routerLink=\"courses\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Firebase登録\n          </a>\n          <a mat-list-item routerLink=\"courses\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Firebase検索\n          </a>\n        </mat-nav-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            グリッド関連\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-nav-list>\n\n          <a mat-list-item routerLink=\".\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Grid CRUD\n          </a>\n          <a mat-list-item routerLink=\".\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;Grid検索\n          </a>\n        </mat-nav-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Admin area\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <mat-nav-list>\n          <a mat-list-item routerLink=\".\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;システム設定変更\n          </a>\n          <a mat-list-item routerLink=\".\">\n            <mat-icon>settings</mat-icon>\n            &nbsp;ユーザ情報編集\n          </a>\n        </mat-nav-list>\n      </mat-expansion-panel>\n\n    </mat-accordion>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n\n    <div class=\"main-content\">\n      <router-outlet>\n      </router-outlet>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/top/top.component.ts":
/*!**************************************!*\
  !*** ./src/app/top/top.component.ts ***!
  \**************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _jwt_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../jwt/service/jwt-auth.service */ "./src/app/jwt/service/jwt-auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopComponent = /** @class */ (function () {
    function TopComponent(fb, breakpointObserver, _authService) {
        this.breakpointObserver = breakpointObserver;
        this._authService = _authService;
        this.mode = {
            value: 'side'
            //or over
        };
        this.panelOpenState = true;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.options = fb.group({
            bottom: 0,
            fixed: false,
            top: 0,
            over: false
        });
    }
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./src/app/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./src/app/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"],
            _jwt_service_jwt_auth_service__WEBPACK_IMPORTED_MODULE_0__["JwtAuthService"]])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome to Inverness.\n  please choose menu on left side.\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyCA0NB2rBm2WQ-p3vXF9MdrIXhUPqO0c2Y",
        authDomain: "inverness-beta.firebaseapp.com",
        databaseURL: "https://inverness-beta.firebaseio.com",
        projectId: "inverness-beta",
        storageBucket: "inverness-beta.appspot.com",
        messagingSenderId: "860648332333"
    }
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

module.exports = __webpack_require__(/*! /Users/nagase/git-repository/angular-first-project/part1/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map