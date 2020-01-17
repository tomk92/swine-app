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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _browsing_browsing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browsing/browsing.component */ "./src/app/browsing/browsing.component.ts");




var routes = [
    { path: 'browsing', component: _browsing_browsing_component__WEBPACK_IMPORTED_MODULE_3__["BrowsingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Swine Tax';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _browsing_browsing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browsing/browsing.component */ "./src/app/browsing/browsing.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _browsing_browsing_component__WEBPACK_IMPORTED_MODULE_5__["BrowsingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/browsing/browsing-phrases.ts":
/*!**********************************************!*\
  !*** ./src/app/browsing/browsing-phrases.ts ***!
  \**********************************************/
/*! exports provided: PHRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHRASES", function() { return PHRASES; });
var PHRASES = [
    { id: 1, firstLine: 'Hello World', secondLine: '', thirdLine: '', fourthLine: '', video: true, displayType: 'single' }
];


/***/ }),

/***/ "./src/app/browsing/browsing.component.html":
/*!**************************************************!*\
  !*** ./src/app/browsing/browsing.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  browsing works!\n</p>\n"

/***/ }),

/***/ "./src/app/browsing/browsing.component.scss":
/*!**************************************************!*\
  !*** ./src/app/browsing/browsing.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzaW5nL2Jyb3dzaW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/browsing/browsing.component.ts":
/*!************************************************!*\
  !*** ./src/app/browsing/browsing.component.ts ***!
  \************************************************/
/*! exports provided: BrowsingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowsingComponent", function() { return BrowsingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _browsing_phrases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browsing-phrases */ "./src/app/browsing/browsing-phrases.ts");



var BrowsingComponent = /** @class */ (function () {
    function BrowsingComponent() {
        this.phrases = _browsing_phrases__WEBPACK_IMPORTED_MODULE_2__["PHRASES"];
    }
    BrowsingComponent.prototype.ngOnInit = function () {
    };
    BrowsingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browsing',
            template: __webpack_require__(/*! ./browsing.component.html */ "./src/app/browsing/browsing.component.html"),
            styles: [__webpack_require__(/*! ./browsing.component.scss */ "./src/app/browsing/browsing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowsingComponent);
    return BrowsingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"title-wrapper\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  <div class=\"nav-section\">\n    <div class=\"nav-tag listen-tag\"><div class=\"nav-button\" (click)=\"showListenTrigger()\">Listen</div></div>\n    <div class=\"nav-img-links\" *ngIf=\"showListen\">\n        <a target=\"_blank\" href=\"https://open.spotify.com/artist/1vcxydDAA4iMUh9gk38H4o?si=hRg9oLCITJC255mvqGCESw\"><img alt=\"spotify\" src=\"https://swinetax.com/assets/Images/social/Spotify_Icon_RGB_Green.png\" /></a>\n        <a target=\"_blank\"  href=\"https://swinetax.bandcamp.com/\"><img alt=\"bandcamp\" class=\"bandcamp\" src=\"https://swinetax.com/assets/Images/social/bandcamp-button-square-black-512.png\" /></a>\n    </div>\n    <div class=\"nav-tag social-tag\"><div class=\"nav-button\" (click)=\"showSocialTrigger()\">Social</div></div>\n    <div *ngIf=\"showSocial\" class=\"nav-img-links\">\n      <a target=\"_blank\" href=\"https://www.facebook.com/swinetax/\"><img alt=\"facebook\" src=\"https://swinetax.com/assets/Images/social/flogo_rgb_hex-brc-site-250.png\" /></a>\n      <a target=\"_blank\" href=\"https://twitter.com/swinetax\"><img alt=\"twitter\" src=\"https://swinetax.com/assets/Images/social/Twitter_Logo_WhiteOnBlue.png\" /></a>\n      <a target=\"_blank\" href=\"https://www.instagram.com/swine_tax/\"><img alt=\"instagram\" src=\"https://swinetax.com/assets/Images/social/Instagram_AppIcon_Aug2017.png\" /></a>\n    </div>\n    <div class=\"nav-tag social-tag\"><div class=\"nav-button\" (click)=\"showContactTrigger()\">Contact</div></div>\n    <div *ngIf=\"showContact\" class=\"contact-content\"><p>Talk to Swine Tax at</p><p>bookings<span>@</span>swinetax.com</p></div>\n  </div>\n  \n  <div class=\"background-cover\"></div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: outlander;\n  src: local(\"outlander\"), url(https://swinetax.com/assets/Fonts/outlander.ttf) format(\"opentype\"); }\n\nh1 {\n  font-family: outlander;\n  margin-top: 0em; }\n\n.title-wrapper h1 {\n  font-size: 3em;\n  margin-bottom: 0em; }\n\n@media (min-width: 450px) {\n  .title-wrapper h1 {\n    font-size: 5em; } }\n\n@media (min-width: 750px) {\n  .title-wrapper h1 {\n    font-size: 8em; } }\n\n@media (min-width: 1070px) {\n  .title-wrapper h1 {\n    font-size: 12em; } }\n\n.background-cover {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: -1;\n  background-image: url('background4.jpg');\n  background-size: cover;\n  background-position: top center; }\n\n.nav-tag {\n  font-family: outlander;\n  font-size: 1em; }\n\n.nav-tag .nav-button {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.nav-tag a:hover {\n  color: white; }\n\n@media (min-width: 580px) {\n  .nav-section {\n    font-size: 2em;\n    text-align: left;\n    margin-left: 15%; }\n  .nav-tag .nav-button:hover::before {\n    content: '';\n    background-image: url('arm-smooth.png');\n    background-size: 50px 32px;\n    display: inline-block;\n    width: 50px;\n    height: 32px;\n    margin-right: 10px;\n    margin-left: -60px;\n    margin-top: -10px; }\n  .nav-tag .nav-button:hover::after {\n    content: '';\n    background-image: url('arm-smooth-right.png');\n    background-size: 50px 32px;\n    display: inline-block;\n    width: 50px;\n    height: 32px;\n    margin-left: 10px;\n    margin-top: -10px; }\n  .listen-tag, .social-tag {\n    width: 100%;\n    float: none; } }\n\n.nav-img-links img {\n  width: 40px;\n  margin-top: 10px;\n  margin-right: 10px; }\n\n.contact-content {\n  font-family: outlander;\n  font-size: 0.5em; }\n\n.contact-content p {\n    margin: 3px 0px 3px 0px; }\n\n.contact-content p span {\n      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHVzZXJcXEFuZ3VsYXJQcm9qZWN0c1xcc3dpbmUtdGF4XFxzd2luZS10YXgvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBc0I7RUFDdEIsZ0dBQWdHLEVBQUE7O0FBR2xHO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFHbkI7RUFFUSxjQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0U7SUFFUSxjQUFhLEVBQUEsRUFDaEI7O0FBSVA7RUFDRTtJQUVRLGNBQWEsRUFBQSxFQUNoQjs7QUFJUDtFQUNFO0lBRVEsZUFBYyxFQUFBLEVBQ2pCOztBQUlQO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxlQUFjO0VBQ2QsT0FBTTtFQUNOLE1BQUs7RUFDTCxXQUFVO0VBQ1Ysd0NBQTREO0VBQzVELHNCQUFzQjtFQUN0QiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDRSxzQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUVoQjtFQUNJLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQTs7QUFJbEI7RUFDSTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxXQUFXO0lBQ1gsdUNBQTJEO0lBQzNELDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsV0FBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsV0FBVztJQUNYLDZDQUFpRTtJQUNqRSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFdBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBRW5CO0lBQ0UsV0FBVTtJQUNWLFdBQVcsRUFBQSxFQUNaOztBQUdQO0VBRVEsV0FBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBRnBCO0lBSVEsdUJBQXNCLEVBQUE7O0FBSjlCO01BTVksNkVBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG91dGxhbmRlcjtcclxuICAgIHNyYzogbG9jYWwoJ291dGxhbmRlcicpLCB1cmwoaHR0cHM6Ly9zd2luZXRheC5jb20vYXNzZXRzL0ZvbnRzL291dGxhbmRlci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG4gIH1cclxuXHJcbiAgaDF7XHJcbiAgICAgIGZvbnQtZmFtaWx5Om91dGxhbmRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gIH1cclxuIFxyXG4gIC50aXRsZS13cmFwcGVye1xyXG4gICAgICBoMXtcclxuICAgICAgICAgIGZvbnQtc2l6ZTozZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwZW07XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjQ1MHB4KXtcclxuICAgIC50aXRsZS13cmFwcGVye1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6NWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjc1MHB4KXtcclxuICAgIC50aXRsZS13cmFwcGVye1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6OGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOjEwNzBweCl7XHJcbiAgICAudGl0bGUtd3JhcHBlcntcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmQtY292ZXJ7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB0b3A6MDtcclxuICAgICAgei1pbmRleDotMTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL2JhY2tncm91bmQ0LmpwZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hdi10YWd7XHJcbiAgICBmb250LWZhbWlseTpvdXRsYW5kZXI7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgLm5hdi10YWcgLm5hdi1idXR0b257XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIH1cclxuICAubmF2LXRhZyBhOmhvdmVye1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NTgwcHgpe1xyXG4gICAgLm5hdi1zZWN0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgICAgfSAgICAgIFxyXG5cclxuICAgICAgLm5hdi10YWcgLm5hdi1idXR0b246aG92ZXI6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9JbWFnZXMvYXJtLXNtb290aC5wbmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggMzJweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgfVxyXG4gICAgICAubmF2LXRhZyAubmF2LWJ1dHRvbjpob3Zlcjo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvSW1hZ2VzL2FybS1zbW9vdGgtcmlnaHQucG5nJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDMycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5saXN0ZW4tdGFnLC5zb2NpYWwtdGFne1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLm5hdi1pbWctbGlua3N7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG4uY29udGFjdC1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IG91dGxhbmRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjozcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWZcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = "Swine Tax";
        this.showListen = false;
        this.showSocial = false;
        this.showContact = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showListenTrigger = function () {
        this.showListen = true;
        this.showSocial = false;
        this.showContact = false;
    };
    HomeComponent.prototype.showSocialTrigger = function () {
        this.showListen = false;
        this.showSocial = true;
        this.showContact = false;
    };
    HomeComponent.prototype.showContactTrigger = function () {
        this.showListen = false;
        this.showSocial = false;
        this.showContact = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\AngularProjects\swine-tax\swine-tax\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map