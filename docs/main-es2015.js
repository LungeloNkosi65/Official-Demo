(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/counter.actionts.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/counter.actionts.ts ***!
  \*********************************************/
/*! exports provided: increment, decrement, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const increment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Increment');
const decrement = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Decrement');
const reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Counter Component] Reset');


/***/ }),

/***/ "./src/app/actions/scorebord.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/actions/scorebord.actions.ts ***!
  \**********************************************/
/*! exports provided: ActionTypes, IncrementHome, IncrementAway, Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementHome", function() { return IncrementHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementAway", function() { return IncrementAway; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
// import { createAction, props, createReducer } from '@ngrx/store';
// import { initialState } from '../reducers/counter.reducers'; 
// import {Game} from '../models/gamescore';
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["IncrementHome"] = "[Scoreboard Page] Home Score";
    ActionTypes["IncrementAway"] = "[Scoreboard Page] Away Score";
    ActionTypes["Reset"] = "[Scoreboard Page] Score Reset";
})(ActionTypes || (ActionTypes = {}));
class IncrementHome {
    constructor() {
        this.type = ActionTypes.IncrementHome;
    }
}
class IncrementAway {
    constructor() {
        this.type = ActionTypes.IncrementAway;
    }
}
class Reset {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.Reset;
    }
}


/***/ }),

/***/ "./src/app/actions/tutorials.action.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/tutorials.action.ts ***!
  \*********************************************/
/*! exports provided: ADD_TUTORIAL, REMOVE_TUTORIAL, AddTutorial, RemoveTutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TUTORIAL", function() { return ADD_TUTORIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TUTORIAL", function() { return REMOVE_TUTORIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTutorial", function() { return AddTutorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveTutorial", function() { return RemoveTutorial; });
const ADD_TUTORIAL = '[TUTORIAL], Add'; //this is the type 1st part of an action
const REMOVE_TUTORIAL = '[TUTORIAL], Remove';
class AddTutorial {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_TUTORIAL;
    } //the constructor will allow us to pass data/payload
}
class RemoveTutorial {
    constructor(payload) {
        this.payload = payload;
        this.type = REMOVE_TUTORIAL;
    } //the constructor will allow us to pass data/payload
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_read_read_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/read/read.component */ "./src/app/components/read/read.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/my-counter/my-counter.component */ "./src/app/components/my-counter/my-counter.component.ts");





class AppComponent {
    constructor() {
        this.title = 'ngrx-tut';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"], [1, "container-fluid", 2, "background-color", "#3a4044 !important"], [1, "row", "mt-4"], [1, "col-md-6"], [1, "row"], [1, "col-md-12"], [1, "col-md-12", "mt-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-read");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-my-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_read_read_component__WEBPACK_IMPORTED_MODULE_1__["ReadComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"], _components_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_3__["MyCounterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers_counter_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/counter.reducers */ "./src/app/reducers/counter.reducers.ts");
/* harmony import */ var _reducers_scoreboard_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/scoreboard.reducers */ "./src/app/reducers/scoreboard.reducers.ts");
/* harmony import */ var _reducers_tutorial_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/tutorial.reducers */ "./src/app/reducers/tutorial.reducers.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_read_read_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/read/read.component */ "./src/app/components/read/read.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/my-counter/my-counter.component */ "./src/app/components/my-counter/my-counter.component.ts");
/* harmony import */ var _components_score_board_score_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/score-board/score-board.component */ "./src/app/components/score-board/score-board.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
                tutorial: _reducers_tutorial_reducers__WEBPACK_IMPORTED_MODULE_5__["Tutorialreducer"],
                count: _reducers_counter_reducers__WEBPACK_IMPORTED_MODULE_3__["counterReducer"],
                game: _reducers_scoreboard_reducers__WEBPACK_IMPORTED_MODULE_4__["reducer"]
            })
            // ScoreboardModule
            // It is recommended to abstract a feature key string to 
            //prevent hardcoding strings when registering feature state and calling createFeatureSelector.
            // StoreModule.forFeature(FromCounterReducer.counterFeatureKey, FromCounterReducer.counterReducer)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _components_read_read_component__WEBPACK_IMPORTED_MODULE_8__["ReadComponent"],
        _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
        _components_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_10__["MyCounterComponent"],
        _components_score_board_score_board_component__WEBPACK_IMPORTED_MODULE_11__["ScoreBoardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _components_read_read_component__WEBPACK_IMPORTED_MODULE_8__["ReadComponent"],
                    _components_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                    _components_my_counter_my_counter_component__WEBPACK_IMPORTED_MODULE_10__["MyCounterComponent"],
                    _components_score_board_score_board_component__WEBPACK_IMPORTED_MODULE_11__["ScoreBoardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({
                        tutorial: _reducers_tutorial_reducers__WEBPACK_IMPORTED_MODULE_5__["Tutorialreducer"],
                        count: _reducers_counter_reducers__WEBPACK_IMPORTED_MODULE_3__["counterReducer"],
                        game: _reducers_scoreboard_reducers__WEBPACK_IMPORTED_MODULE_4__["reducer"]
                    })
                    // ScoreboardModule
                    // It is recommended to abstract a feature key string to 
                    //prevent hardcoding strings when registering feature state and calling createFeatureSelector.
                    // StoreModule.forFeature(FromCounterReducer.counterFeatureKey, FromCounterReducer.counterReducer)
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tutorials.action */ "./src/app/actions/tutorials.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CreateComponent {
    constructor(store, router) {
        this.store = store;
        this.router = router;
    }
    addTutorial(name, url) {
        this.store.dispatch(new _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_1__["AddTutorial"]({ name: name, url: url }));
        window.confirm("Tuorial aded");
        if (window.confirm) {
            this.router.navigateByUrl('');
        }
    }
    ngOnInit() {
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 11, vars: 0, consts: [[1, ""], [2, "color", "white !important"], ["type", "text", "placeholder", "Name", 1, "input"], ["name", ""], ["type", "text", "placeholder", "Url", 1, "input"], ["url", ""], [3, "click"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.addTutorial(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".input[_ngcontent-%COMP%]{\r\n    width: 50% !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/my-counter/my-counter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-counter/my-counter.component.ts ***!
  \***************************************************************/
/*! exports provided: MyCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCounterComponent", function() { return MyCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_counter_actionts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/counter.actionts */ "./src/app/actions/counter.actionts.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class MyCounterComponent {
    constructor(store) {
        this.store = store;
        this.count$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('count'));
        // this.count$=store.select('count')
    }
    increment() {
        this.store.dispatch(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_2__["increment"]());
    }
    decrement() {
        this.store.dispatch(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_2__["decrement"]());
    }
    reset() {
        this.store.dispatch(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_2__["reset"]());
    }
    ngOnInit() {
    }
}
MyCounterComponent.ɵfac = function MyCounterComponent_Factory(t) { return new (t || MyCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
MyCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCounterComponent, selectors: [["app-my-counter"]], decls: 11, vars: 3, consts: [[2, "color", "white  !important"], [2, "color", "white !important"], ["id", "increment", 3, "click"], ["id", "decrement", 3, "click"], ["id", "reset", 3, "click"]], template: function MyCounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counter Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_5_listener() { return ctx.increment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Increment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_7_listener() { return ctx.decrement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Decrement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyCounterComponent_Template_button_click_9_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reset Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current Count: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.count$), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktY291bnRlci9teS1jb3VudGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-counter',
                templateUrl: './my-counter.component.html',
                styleUrls: ['./my-counter.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/read/read.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/read/read.component.ts ***!
  \***************************************************/
/*! exports provided: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadComponent", function() { return ReadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tutorials.action */ "./src/app/actions/tutorials.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ReadComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadComponent_div_8_div_4_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.deleteTutorial(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "|Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tutorial_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", tutorial_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tutorial_r2.name);
} }
function ReadComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Available Tutorials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReadComponent_div_8_div_4_Template, 8, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx_r0.tutorials));
} }
class ReadComponent {
    constructor(store) {
        this.store = store;
        this.tutorials = store.select('tutorial');
    }
    deleteTutorial(index) {
        this.store.dispatch(new _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_1__["RemoveTutorial"](index));
    }
    ngOnInit() {
    }
}
ReadComponent.ɵfac = function ReadComponent_Factory(t) { return new (t || ReadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ReadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadComponent, selectors: [["app-read"]], decls: 9, vars: 1, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"], ["class", "right", 4, "ngIf"], [1, "right"], [2, "color", "white !important"], [1, "container"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-8"], [2, "min-width", "100% !important"], ["target", "_blank", 3, "href"], [1, "ml-4", 2, "color", "red", 3, "click"]], template: function ReadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReadComponent_div_8_Template, 6, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tutorials);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".right[_ngcontent-%COMP%] {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    \n  }\n.right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    \n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n    width: 100%;\n\n  }\n.right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    \n    \n    left: .1em;\n  }\n.right[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n    \n    color: white;\n  }\n.right[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n    \n    color: white;\n  }\n.right[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    \n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n.right.h3[_ngcontent-%COMP%]{\n    color: #6f7173 !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWFkL3JlYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVzs7RUFFYjtBQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7QUFDQTtJQUNFLCtCQUErQjtJQUMvQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLCtCQUErQjtJQUMvQixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlYWQvcmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmlnaHRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5yaWdodCB7XG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gIH1cbiAgLnJpZ2h0IGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0VFRTsgKi9cbiAgICBtYXJnaW46IC41ZW07XG4gICAgcGFkZGluZzogLjNlbSAwO1xuICAgIGhlaWdodDogMS42ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gIH1cbiAgLnJpZ2h0IGxpOmhvdmVyIHtcbiAgICAvKiBjb2xvcjogIzYwN0Q4QjsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjREREOyAqL1xuICAgIGxlZnQ6IC4xZW07XG4gIH1cbiAgLnJpZ2h0IGxpLnNlbGVjdGVkIHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDOyAqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAucmlnaHQgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7ICovXG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5yaWdodCAuYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzQwNTA2MTsgKi9cbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHRvcDogLTRweDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbiAgfVxuICAucmlnaHQuaDN7XG4gICAgY29sb3I6ICM2ZjcxNzMgIWltcG9ydGFudDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-read',
                templateUrl: './read.component.html',
                styleUrls: ['./read.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/score-board/score-board.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/score-board/score-board.component.ts ***!
  \*****************************************************************/
/*! exports provided: ScoreBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBoardComponent", function() { return ScoreBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/scorebord.actions */ "./src/app/actions/scorebord.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");




class ScoreBoardComponent {
    constructor(store) {
        this.store = store;
        this.score = store.select('game');
    }
    homeScore() {
        return this.store.dispatch(new _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_1__["IncrementHome"]());
    }
    awayScore() {
        return this.store.dispatch(new _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_1__["IncrementAway"]());
    }
    resetScore() {
        return this.store.dispatch(new _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_1__["Reset"]({ home: 0, away: 0 }));
    }
    ngOnInit() {
    }
}
ScoreBoardComponent.ɵfac = function ScoreBoardComponent_Factory(t) { return new (t || ScoreBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ScoreBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreBoardComponent, selectors: [["app-score-board"]], decls: 0, vars: 0, template: function ScoreBoardComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NvcmUtYm9hcmQvc2NvcmUtYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score-board',
                templateUrl: './score-board.component.html',
                styleUrls: ['./score-board.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reducers/counter.reducers.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/counter.reducers.ts ***!
  \**********************************************/
/*! exports provided: initialState, counterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterReducer", function() { return counterReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_counter_actionts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/counter.actionts */ "./src/app/actions/counter.actionts.ts");


const initialState = 0;
const _counterReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_1__["increment"], state => state + 1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_1__["decrement"], state => state - 1), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_counter_actionts__WEBPACK_IMPORTED_MODULE_1__["reset"], state => 0));
function counterReducer(state, action) {
    return _counterReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/scoreboard.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/reducers/scoreboard.reducers.ts ***!
  \*************************************************/
/*! exports provided: InitialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialState", function() { return InitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/scorebord.actions */ "./src/app/actions/scorebord.actions.ts");

//setting the initial values of the state
const InitialState = {
    home: 0,
    away: 0
};
//create a reducer function that handles the state transition immutably
// const scoreboardReducer=createReducer(
//     InitialState,
//     on(ScorebiardActions.homeScore, state=>({...state, home:state.home+1})),
//     on(ScorebiardActions.awayScore, state=>({...state, away:state.away+1})),
//     on(ScorebiardActions.resetScore, state=>({home:0,away:0})),
//     on(ScorebiardActions.setScores, (state,{game})=>({home:game.home, away:game.away}))
// );
// export function reducer(state:State | undefined, action:Action){
//     return scoreboardReducer(state,action);
// }
// export const scoreboardFeatureKey = 'game';
function reducer(state = InitialState, action) {
    switch (action.type) {
        case _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].IncrementHome: {
            return Object.assign(Object.assign({}, state), { home: state.home + 1 });
        }
        case _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].IncrementAway: {
            return Object.assign(Object.assign({}, state), { away: state.away + 1 });
        }
        case _actions_scorebord_actions__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].Reset: {
            return action.payload; // typed to { home: number, away: number }
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/reducers/tutorial.reducers.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/tutorial.reducers.ts ***!
  \***********************************************/
/*! exports provided: Tutorialreducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tutorialreducer", function() { return Tutorialreducer; });
/* harmony import */ var _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../actions/tutorials.action */ "./src/app/actions/tutorials.action.ts");

//Initial state of data
const InitialState = {
    name: 'Initial Tutotorial',
    url: 'http://google.com'
};
//create the actual reducer
function Tutorialreducer(state = [InitialState], action) {
    switch (action.type) { // we use this switch to determine what type of actions is being accessed
        case _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TUTORIAL"]:
            return [...state, action.payload];
        case _actions_tutorials_action__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TUTORIAL"]:
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state; // the defualt state defined
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lungelo Nkosi\Desktop\AngularProjects\ngrx\ngrx-tut\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map