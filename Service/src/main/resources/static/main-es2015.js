(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Home/home.module": "./src/app/Home/home.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/admin-panel.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/admin-panel.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"section-title\"></h2>\r\n<div class=\"d-flex\" id=\"wrapper\">\r\n    <!-- Sidebar -->\r\n    <div class=\"bg-light border-right\" id=\"sidebar-wrapper\">\r\n      <div class=\"sidebar-heading\">Sections</div>\r\n      <div class=\"list-group list-group-flush\">\r\n        <a  (click)=\"deSelectInquiry()\" class=\"list-group-item list-group-item-action bg-light\">Customer</a>\r\n      </div>\r\n    </div>\r\n    <!-- /#sidebar-wrapper -->\r\n\r\n    <!-- Page Content -->\r\n    <div id=\"page-content-wrapper\">\r\n\r\n      <div class=\"container-fluid\" *ngIf=\"!isSelectedData\">\r\n        <h2 class=\"mt-10\">Customer</h2>\r\n        <ag-grid-angular\r\n\t\t    style=\"width: 100%; height: 500px;\"\r\n\t\t    class=\"ag-theme-alpine\"\r\n\t\t    [rowData]=\"inquiryMasters\"\r\n\t\t    [columnDefs]=\"columnDefs\"\r\n\t\t    [defaultColDef]=\"defaultColDef\"\r\n\t\t    (rowClicked)=\"onRowClicked($event)\">\r\n\t\t</ag-grid-angular>\r\n      </div>\r\n      <div *ngIf=\"isSelectedData\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"card xs-8 s-8 m-8 l-8 xl-8\">\r\n\t\t\t\t\t<div class=\"steps-form\">\r\n\t\t\t\t\t\t<div class=\"steps-row setup-panel\">\r\n\t\t\t\t\t        <div class=\"steps-step\">\r\n\t\t\t\t\t          <a href=\"#step-9\" type=\"button\" class=\"btn btn-default btn-circle\">1</a>\r\n\t\t\t\t\t          <p>Step 1: Information</p>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"steps-step\">\r\n\t\t\t\t\t          <a href=\"#step-10\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">2</a>\r\n\t\t\t\t\t          <p>Step 2: Call</p>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"steps-step\">\r\n\t\t\t\t\t          <a href=\"#step-11\" type=\"button\" class=\"btn btn-default btn-circle\" disabled=\"disabled\">3</a>\r\n\t\t\t\t\t          <p>Step 3: Plan</p>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t        <div class=\"steps-step\">\r\n\t\t\t\t\t          <a href=\"#step-11\" type=\"button\" class=\"btn btn-default btn-circle waves-effect waves-light btn-indigo\" disabled=\"disabled\">4</a>\r\n\t\t\t\t\t          <p>Step 4: Information and payment</p>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t      </div>\r\n\t\t\t\t    </div>\t\t\r\n\t\t\t\t    <hr>\t\r\n\t      \t\t\t<step1 [data]=inquiryService.inquiryMasters></step1>\r\n\t      \t\t</div>\r\n\t\t\t\t<div style=\"margin-left: 2%; border: 1px black;\" class=\"card xl-3 s-3 m-3 l-3 xl-3 right\">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<h3 [innerText]=\"inquiryService.inquiryMasters.firstName+' '+inquiryService.inquiryMasters.lastName\"></h3>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<table style=\"width:100%\">\r\n\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><b>Current Status</b></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='N'\"><span>New</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='R'\"><span>Rejected</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='L'\"><span>Payment link send</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='D'\"><span>In discussion</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='A'\"><span>Accepted</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='J'\"><span>Called-Joining Program</span></td>\r\n\t\t\t\t\t\t\t\t<td *ngIf=\"inquiryService.inquiryMasters.status=='P'\"><span>Payment Received</span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><b>Mobile Number</b></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><span [innerText]=\"inquiryService.inquiryMasters.phoneNo\"></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><b>Email</b></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><span [innerText]=\"inquiryService.inquiryMasters.emailId\"></span></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td><b>Height</b></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td></td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n      </div>\r\n    </div>\r\n    <!-- /#page-content-wrapper -->\r\n\r\n  </div>\r\n  <!-- /#wrapper -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"mainfooter\" role=\"contentinfo\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12 copy\">\r\n\t\t\t<p class=\"text-center\">&copy; Copyright 2020 - Fit Fortune. All\r\n\t\t\t\trights reserved.</p>\r\n\t\t</div>\r\n\t</div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n\t<div id=\"topbar\">\r\n\t\t<div class=\"line\">\r\n\t\t\t<div class=\"m-6 l-6 hide-s\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\tCONTACT US: <strong>{{contact_no}}</strong> | <strong>{{email_id}}</strong>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"s-12 m-6 l-6\">\r\n\t\t\t\t<div class=\"social right\">\r\n\t\t\t\t\t<button type=\"button\" routerLink=\"/loadLogin\" class=\"btn btn-success\">Login</button>\r\n\t\t\t\t\t<a href=\"https://www.facebook.com/fitwithpristine/\" target=\"blank\" class=\"fa fa-facebook\"></a>\r\n\t\t\t\t\t<a href=\"https://www.instagram.com/shekhar_shinde/\" target=\"blank\" class=\"fa fa-instagram\"></a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n\t\t<a class=\"navbar-brand left\" routerLink=\"\"><img src=\"app/Home/Images/8_logo.png\" width=\"15%\"/></a>\r\n\t\t<a class=\"navbar-brand left\" style=\"margin-right: 38%;\" href=\"#\">{{org_name}}</a>\r\n\t</nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"upcoming-tours\">\r\n\t<h2 class=\"section-title\"></h2>\r\n\t<div class=\"line wpforms-container-full\" *ngIf=\"submitted==false || registerForm.invalid\">\r\n\t\t<form class=\"wpforms-form\" [formGroup]=\"registerForm\">\r\n\t\t    <fieldset>\r\n\t\t    \t<table class=\"form-style-1\">\r\n\t\t    \t\t<tr>\r\n\t\t    \t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputFirstName\" name=\"inputFirstName\" placeholder=\"First Name\" autofocus \r\n\t\t\t\t\t                formControlName=\"firstName\" readonly=\"true\" [ngClass]=\"{ 'is-invalid': submitted && f().firstName.errors }\">\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t        </td>\r\n\t\t\t\t        <td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputLastName\" name=\"inputLastName\" placeholder=\"Last Name\"\r\n\t\t\t\t\t                formControlName=\"lastName\" readonly=\"true\" required [ngClass]=\"{ 'is-invalid': submitted && f().lastName.errors }\">\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t        </td>\r\n\t\t\t        </tr>\r\n\t\t\t        <tr>\r\n\t\t\t        \t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"date\" class=\"new-form-control\" id=\"inputDateOfBirth\" name=\"inputAddress\"\r\n\t\t\t\t\t                formControlName=\"dateOfBirth\" required [ngClass]=\"{ 'is-invalid': submitted && f().dateOfBirth.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().dateOfBirth.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().dateOfBirth.errors.required\">Date of Birth is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputHeight\" name=\"inputHeight\" placeholder=\"Heigth eg. 5 ft 3 inches OR 155 cms\" \r\n\t\t\t\t\t                formControlName=\"height\" required [ngClass]=\"{ 'is-invalid': submitted && f().height.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().height.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().height.errors.required\">Height is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t        </tr>\r\n\t\t\t        <tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputBreakFastTime\" name=\"inputBreakFastTime\" placeholder=\"What do you have at breakfast and what time?\" \r\n\t\t\t\t\t                formControlName=\"breakFastTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().breakFastTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().breakFastTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().breakFastTime.errors.required\">Breakfast time is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputLunchFastTime\" name=\"inputLunchFastTime\" placeholder=\"What do you have at lunch and what time?\" \r\n\t\t\t\t\t                formControlName=\"lunchFastTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().lunchFastTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().lunchFastTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().lunchFastTime.errors.required\">Lunch time is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t        </tr>  \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\"  class=\"new-form-control\" id=\"inputEveningSnacksTime\" name=\"inputEveningSnacksTime\"  placeholder=\"What do you have at evening snacks?\"\r\n\t\t\t\t\t                formControlName=\"eveningSnacksTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().eveningSnacksTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().eveningSnacksTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().eveningSnacksTime.errors.required\">Evening snacks time is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputDinnerTime\" name=\"inputDinnerTime\"  placeholder=\"What do you have at dinner and what time?\"\r\n\t\t\t\t\t                formControlName=\"dinnerTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().dinnerTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().dinnerTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().dinnerTime.errors.required\">Dinner time is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>   \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputCraving\" name=\"inputCraving\"  placeholder=\"When do you feel a craving?\"\r\n\t\t\t\t\t                formControlName=\"craving\" required [ngClass]=\"{ 'is-invalid': submitted && f().craving.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().craving.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().craving.errors.required\">Craving field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputFoodAllergies\" name=\"inputFoodAllergies\"  placeholder=\"Do you have any food allergies or restrictions?\"\r\n\t\t\t\t\t                formControlName=\"foodAllergies\" required [ngClass]=\"{ 'is-invalid': submitted && f().foodAllergies.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().foodAllergies.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().foodAllergies.errors.required\">Food allergies are required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>  \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t            \t<textarea rows=\"1\" cols=\"80\" class=\"new-form-control\" id=\"inputFoodExclusive\" name=\"inputFoodExclusive\"  placeholder=\"Which food would not like to have as part of your meal suggestions?\"\r\n\t\t\t\t\t                formControlName=\"foodExclusive\" required [ngClass]=\"{ 'is-invalid': submitted && f().foodExclusive.errors }\">\r\n\t\t\t\t\t                </textarea>\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().foodExclusive.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().foodExclusive.errors.required\">This Field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>What is your food preference?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"vegWithoutEgg\" name=\"foodPreference\" value=\"vegWithoutEgg\" formControlName=\"foodPreference\" \r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().foodPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp; I am a strict vegetarian (No eggs)</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"vegWithEgg\" name=\"foodPreference\" value=\"vegWithEgg\" formControlName=\"foodPreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().foodPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp; I am a vegetarian but I can have eggs</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"nonVeg\" name=\"foodPreference\" value=\"nonVeg\" formControlName=\"foodPreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().foodPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;  I can have both veg and non-veg (including eggs and chicken)</label>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().foodPreference.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().foodPreference.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>How do you cook your meals?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"outsideMeal\" name=\"cookPreference\" value=\"outsideMeal\" formControlName=\"cookPreference\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().cookPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp; I mostly eat outside meals.</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"homeMadeFood\" name=\"cookPreference\" value=\"homeMadeFood\" formControlName=\"cookPreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().cookPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp; I always cook my own food at home</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"mixPreference\" name=\"cookPreference\" value=\"mixPreference\" formControlName=\"cookPreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().cookPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp; It's a mix. Home food and 1-2 meals outside</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"weekendMixPreference\" name=\"cookPreference\" value=\"weekendMixPreference\" formControlName=\"cookPreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().cookPreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp; I eat home cooked meals on weekdays and eat outside mostly on weekends.</label><br>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().cookPreference.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().cookPreference.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputTypeOfExercise\" name=\"inputTypeOfExercise\"  placeholder=\"What kind of exercise have you been doing?\"\r\n\t\t\t\t\t                formControlName=\"typeOfExercise\" required [ngClass]=\"{ 'is-invalid': submitted && f().typeOfExercise.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().typeOfExercise.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().typeOfExercise.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputInjuries\" name=\"inputInjuries\"  placeholder=\"Do you suffer from any injuries?\"\r\n\t\t\t\t\t                formControlName=\"injuries\" required [ngClass]=\"{ 'is-invalid': submitted && f().injuries.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().injuries.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().injuries.errors.required\">This field are required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>Are you following any exercise routine currently?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"neverUser\" name=\"existingExerciseUser\" value=\"neverUser\" formControlName=\"existingExerciseUser\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingExerciseUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;No, I am not currently exercising</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"regularUser\" name=\"existingExerciseUser\" value=\"regularUser\" formControlName=\"existingExerciseUser\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingExerciseUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;Yes, I regularly exercise</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"notRegularUser\" name=\"existingExerciseUser\" value=\"notRegularUser\" formControlName=\"existingExerciseUser\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingExerciseUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"other\">&nbsp;I exercise but not regularly</label>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().existingExerciseUser.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().existingExerciseUser.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>Do you have access to a gym?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"haveAccess\" name=\"gymAccess\" value=\"haveAccess\" formControlName=\"gymAccess\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().gymAccess.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;Yes I have access and I am open to taking membership</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"notHaveAccess\" name=\"gymAccess\" value=\"notHaveAccess\" formControlName=\"gymAccess\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().gymAccess.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;No I do not have access to a gym</label><br>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().gymAccess.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().gymAccess.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>What kind of exercise do you prefer?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"everything\" name=\"exercisePreference\" value=\"everything\" formControlName=\"exercisePreference\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().exercisePreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;I am open to whatever you recommend</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"gymWorkout\" name=\"exercisePreference\" value=\"gymWorkout\" formControlName=\"exercisePreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().exercisePreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I like going to the gym so please plan gym workouts for me</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"homeWorkout\" name=\"exercisePreference\" value=\"homeWorkout\" formControlName=\"exercisePreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().exercisePreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I prefer only home workouts</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"outdoorWorkout\" name=\"exercisePreference\" value=\"outdoorWorkout\" formControlName=\"exercisePreference\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().exercisePreference.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I prefer outdoor exercises like running, outdoor HIIT...</label><br>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().exercisePreference.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().exercisePreference.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>Do you consume alcohol?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"never\" name=\"existingAlcoholUser\" value=\"never\" formControlName=\"existingAlcoholUser\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingAlcoholUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;No, I never consume alcohol</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"weekends\" name=\"existingAlcoholUser\" value=\"weekends\" formControlName=\"existingAlcoholUser\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingAlcoholUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;Yes, I have alcohol on weekends</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"twiceAWeek\" name=\"existingAlcoholUser\" value=\"twiceAWeek\" formControlName=\"existingAlcoholUser\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingAlcoholUser.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"other\">&nbsp;I have alcohol more than twice a week</label>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().existingAlcoholUser.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().existingAlcoholUser.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <p><b>How is your energy levels throughout the day?</b></p>\r\n\t\t\t\t\t                <input type=\"radio\" id=\"fullEnergy\" name=\"energyLevel\" value=\"fullEnergy\" formControlName=\"energyLevel\"\r\n\t\t\t\t\t                \trequired [ngClass]=\"{ 'is-invalid': submitted && f().energyLevel.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;I am energetic all through the day</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"lowEnergyInEvening\" name=\"energyLevel\" value=\"lowEnergyInEvening\" formControlName=\"energyLevel\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().energyLevel.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I feel good in the morning but tired/lethargic in the evenings</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"lowEnergyInMorning\" name=\"energyLevel\" value=\"lowEnergyInMorning\" formControlName=\"energyLevel\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().energyLevel.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;Mornings are sluggish but by end of day I feel energetic</label><br>\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"lowEnergy\" name=\"energyLevel\" value=\"lowEnergy\" formControlName=\"energyLevel\"\r\n\t\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().energyLevel.errors }\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I feel tired and lethargic mostly for the whole day</label><br>\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().energyLevel.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().energyLevel.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputSnackingTime\" name=\"inputSnackingTime\"  placeholder=\"What are the times when you find yourself snacking on junk food the most?\"\r\n\t\t\t\t\t                formControlName=\"snackingTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().snackingTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().snackingTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().snackingTime.errors.required\">This Field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputExercisePreferenceTime\" name=\"inputExercisePreferenceTime\"  placeholder=\"When is the best time in the day when you can exercise?\"\r\n\t\t\t\t\t                formControlName=\"exercisePreferenceTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().exercisePreferenceTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().exercisePreferenceTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().exercisePreferenceTime.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t            \t<textarea rows=\"1\" cols=\"80\" class=\"new-form-control\" id=\"inputFoodAndExercise\" name=\"inputFoodAndExercise\"  placeholder=\"What is your food and exercise challenge?\"\r\n\t\t\t\t\t                formControlName=\"foodAndExercise\" required [ngClass]=\"{ 'is-invalid': submitted && f().foodAndExercise.errors }\">\r\n\t\t\t\t\t                </textarea>\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().foodAndExercise.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().foodAndExercise.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputPostalAddress\" name=\"inputPostalAddress\"  placeholder=\"Postal Address for us to send your shipment.\"\r\n\t\t\t\t\t                formControlName=\"postalAddress\" required [ngClass]=\"{ 'is-invalid': submitted && f().postalAddress.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().postalAddress.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().postalAddress.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <input type=\"text\" class=\"new-form-control\" id=\"inputCallDateAndTime\" name=\"inputCallDateAndTime\"  placeholder=\"When is the best day and time to schedule calls?\"\r\n\t\t\t\t\t                formControlName=\"callDateAndTime\" required [ngClass]=\"{ 'is-invalid': submitted && f().callDateAndTime.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().callDateAndTime.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().callDateAndTime.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr> \r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t        <div class=\"form-group\">\r\n\t\t\t\t\t            <div class=\"col-lg-10\">\r\n\t\t\t\t\t                <textarea rows=\"3\" cols=\"80\" class=\"new-form-control\" id=\"inputExtraInformation\" name=\"inputExtraInformation\"  placeholder=\"Anything that you want us to know about yourself? Any additional information will only help us to plan your program better.\"\r\n\t\t\t\t\t                formControlName=\"extraInfo\" required [ngClass]=\"{ 'is-invalid': submitted && f().extraInfo.errors }\">\r\n\t\t\t\t\t                </textarea>\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().extraInfo.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().extraInfo.errors.required\">This field is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t            </div>\r\n\t\t\t\t\t        </div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>      \r\n\t\t\t        <tr>\r\n\t\t\t        \t<td>\r\n\t\t\t\t        \t<div class=\"form-group\">\r\n\t\t\t\t\t\t    \t<div class=\"col-lg-10 col-lg-offset-2\">\r\n\t\t\t\t\t\t    \t\t<button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success\">Confirm</button>\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t        \t<div class=\"form-group\">\r\n\t\t\t\t\t\t    \t<div class=\"col-lg-10 col-lg-offset-2\">\r\n\t\t\t\t\t\t    \t\t<button type=\"reset\" routerLink=\"/home\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t        </tr>\r\n\t\t        </table>\r\n\t\t    </fieldset>\r\n\t\t</form>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-info.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-two-percentage\" *ngIf=\"customerDetailsMasters != null\">\r\n\t\t<div style=\"width:100%;\">\r\n\t\t\t<table class=\"admin-step\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Date Of Birth</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.dateOfBirth\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Height</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.height\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What do you have at breakfast and what time?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.breakFastTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What do you have at lunch and what time?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.lunchFastTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What do you have at evening snacks?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.eveningSnacksTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What do you have at dinner and what time?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.dinnerTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>When do you feel a craving?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.craving\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Do you have any food allergies or restrictions?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.foodAllergies\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Which food would not like to have as part of your meal suggestions?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.foodExclusive\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What is your food preference?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.foodPreference == 'vegWithoutEgg'\">I am a strict vegetarian (No eggs)</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.foodPreference == 'vegWithEgg'\">I am a vegetarian but I can have eggs</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.foodPreference == 'nonVeg'\">I can have both veg and non-veg (including eggs and chicken)</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>How do you cook your meals?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.cookPreference == 'outsideMeal'\">I mostly eat outside meals.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.cookPreference == 'homeMadeFood'\">I always cook my own food at home</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.cookPreference == 'mixPreference'\">It's a mix. Home food and 1-2 meals outside</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.cookPreference == 'weekendMixPreference'\">I eat home cooked meals on weekdays and eat outside mostly on weekends.</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What kind of exercise have you been doing?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.typeOfExercise\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Do you suffer from any injuries?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.injuries\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Are you following any exercise routine currently?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingExerciseUser == 'neverUser'\">No, I am not currently exercising.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingExerciseUser == 'regularUser'\">Yes, I regularly exercise</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingExerciseUser == 'notRegularUser'\">I exercise but not regularly</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Do you have access to a gym?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.gymAccess == 'haveAccess'\">Yes I have access and I am open to taking membership</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.gymAccess == 'notHaveAccess'\">No I do not have access to a gym</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What kind of exercise do you prefer?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.exercisePreference == 'everything'\">I am open to whatever you recommend</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.exercisePreference == 'gymWorkout'\">I like going to the gym so please plan gym workouts for me</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.exercisePreference == 'homeWorkout'\">I prefer only home workouts</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.exercisePreference == 'outdoorWorkout'\">I prefer outdoor exercises like running, outdoor HIIT...</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Do you consume alcohol?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingAlcoholUser == 'never'\">No, I never consume alcohol</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingAlcoholUser == 'weekends'\">Yes, I have alcohol on weekends</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.existingAlcoholUser == 'twiceAWeek'\">I have alcohol more than twice a week</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>How is your energy levels throughout the day?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.energyLevel == 'fullEnergy'\">I am energetic all through the day</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.energyLevel == 'lowEnergyInEvening'\">I feel good in the morning but tired/lethargic in the evenings</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.energyLevel == 'lowEnergyInMorning'\">Mornings are sluggish but by end of day I feel energetic</span>\r\n\t\t\t\t\t\t<span *ngIf=\"customerDetailsMasters.energyLevel == 'lowEnergy'\">I feel tired and lethargic mostly for the whole day</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What are the times when you find yourself snacking on junk food the most?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.snackingTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>When is the best time in the day when you can exercise?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.exercisePreferenceTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What is your food and exercise challenge?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.foodAndExercise\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Postal Address for us to send your shipment.</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.postalAddress\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>When is the best day and time to schedule calls?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.callDateAndTime\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Anything that you want us to know about yourself? Any additional information will only help us to plan your program better.</th>\r\n\t\t\t\t\t<td><span [innerText]=\"customerDetailsMasters.extraInfo\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<br>\r\n\t\t</div>\r\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/home-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/home-page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"upcoming-tours\">\r\n\t<div class=\"line\">\r\n\t\t<h2 class=\"section-title\"></h2>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"card xs-12 s-12 m-12 l-6 xl-6\" style=\"padding-right:2%;\">\r\n\t\t\t\t\t<img src=\"app/Home/Images/8_before_after.jpg\" class=\"card-img-top\"\r\n\t\t\t\t\t\talt=\"...\">\r\n\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t<h5 class=\"card-title\">\r\n\t\t\t\t\t\t\t\"We all begin somewhere, So start your fitness journey from\r\n\t\t\t\t\t\t\tfitness with Fit Fortune. I am so glad you have come down to this\r\n\t\t\t\t\t\t\tpage for your weight issues. I’ve made it my personal mission to\r\n\t\t\t\t\t\t\thelp as many people as possible to achieve their ideal level of\r\n\t\t\t\t\t\t\tfitness and to feel more confident and happy. My online programs\r\n\t\t\t\t\t\t\tare flexible, so you can easily follow from anywhere. Because if\r\n\t\t\t\t\t\t\tI can why not you? So all I want to do is apply now and Join us\r\n\t\t\t\t\t\t\tand make your health and fitness goals a reality. If you keenly\r\n\t\t\t\t\t\t\tinterested then don't wait just get started apply now.\" <br>\r\n\t\t\t\t\t\t\t<br>Shekhar Shinde, <br>Fitness With Fit Fortune Coach\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card xs-12 s-12 m-12 l-6 xl-6\" style=\"padding-left:2%;\">\r\n\t\t\t\t\t<div id=\"tmp_headline1-90857\" data-de-type=\"headline\"\r\n\t\t\t\t\t\tdata-de-editing=\"false\" data-title=\"headline\" data-ce=\"true\"\r\n\t\t\t\t\t\tdata-trigger=\"none\" data-animate=\"fade\" data-delay=\"500\"\r\n\t\t\t\t\t\tstyle=\"margin-top: 0px; cursor: pointer; outline: none;\"\r\n\t\t\t\t\t\taria-disabled=\"false\">\r\n\t\t\t\t\t\t<div style=\"text-align: center; font-size: 28px;\"\r\n\t\t\t\t\t\t\tdata-bold=\"inherit\" contenteditable=\"false\">\r\n\t\t\t\t\t\t\t<font color=\"#2b719d\"><span\r\n\t\t\t\t\t\t\t\tstyle=\"caret-color: rgb(43, 113, 157);\"><b>Watch This\r\n\t\t\t\t\t\t\t\t\t\tVideo Before Going Any Further\r\n\t\t\t\t\t\t\t\t</b></span></font>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<iframe\r\n\t\t\t\t\t\tsrc=\"https://www.youtube.com/embed/vY7TFshPZ4w?autoplay=0&amp;modestbranding=1&amp;controls=1&amp;showinfo=0&amp;rel=-1&amp;hd=1&amp;wmode=transparent\"\r\n\t\t\t\t\t\tframeborder=\"0\" allowfullscreen=\"\" wmode=\"opaque\"\r\n\t\t\t\t\t\tid=\"fitvid135028\" style=\"width: 100%; height: 400px;\"></iframe>\r\n\t\t\t\t\t<div\r\n\t\t\t\t\t\tclass=\"card-body text-center justify-content-center align-items-center\">\r\n\t\t\t\t\t\t<h5 class=\"card-title\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\"\r\n\t\t\t\t\t\t\t\trouterLink=\"/booking\">Enroll Now</button>\r\n\t\t\t\t\t\t</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-1 l-1 s-1 xs-1 left\"></div>\r\n\t\t\t\t\t<div class=\"m-11 l-11 s-11 xs-11 center\">\r\n\t\t\t\t\t\t<h2>What You Get In The Fitness With Fit Fortune Online Program</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<br>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"card m-3 l-3\" style=\"border:none;\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/meal.jpg\" width=\"145\" height=\"100\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card m-8 l-8 right\" style=\"border:none;\">\r\n\t\t\t\t\t\t<h3 style=\"color: blue;\">#1: Meal Plans and Nutrition</h3>\r\n\t\t\t\t\t\t<ol style=\"list-style-type: decimal;\">\r\n\t\t\t\t\t\t\t<li>Meals plans according to your food preferences</li>\r\n\t\t\t\t\t\t\t<li>Herbalife Nutrition recommended as per your need and goals.</li>\r\n\t\t\t\t\t\t\t<li>Shopping lists</li>\r\n\t\t\t\t\t\t\t<li>Dining out options</li>\r\n\t\t\t\t\t\t\t<li>Recipes and easy meal ideas</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"card m-3 l-3\" style=\"border:none;\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/exercise.jpg\" width=\"145\" height=\"100\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card m-8 l-8 right\" style=\"border:none;\">\r\n\t\t\t\t\t\t<h3 style=\"color: blue;\">#2: Exercise & Lifestyle Improvement</h3>\r\n\t\t\t\t\t\t<ol style=\"list-style-type: decimal;\">\r\n\t\t\t\t\t\t\t<li>​Video tutorials for all exercises on your phone</li>\r\n\t\t\t\t\t\t\t<li>Daily workout plans for home or gym</li>\r\n\t\t\t\t\t\t\t<li>Mobility, strength and cardio workouts</li>\r\n\t\t\t\t\t\t\t<li>Walking-running plans for fat loss</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"card m-3 l-3\" style=\"border:none;\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/follow-up.jpg\" width=\"145\" height=\"100\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card m-8 l-8 right\" style=\"border:none;\">\r\n\t\t\t\t\t\t<h3 style=\"color: blue;\">#3: Follow-up & Accountability</h3>\r\n\t\t\t\t\t\t<ol style=\"list-style-type: decimal;\">\r\n\t\t\t\t\t\t\t<li>​Regular weight and measurement checks, and journaling</li>\r\n\t\t\t\t\t\t\t<li>Weekly Zoom call for motivation, problem solving and action plan for the week</li>\r\n\t\t\t\t\t\t\t<li>24X7 WhatsApp support</li>\r\n\t\t\t\t\t\t\t<li>​Access to our Private Facebook ActiFit Community</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"card m-3 l-3\" style=\"border:none;\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/education.jpg\" width=\"145\" height=\"100\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card m-8 l-8 right\" style=\"border:none;\">\r\n\t\t\t\t\t\t<h3 style=\"color: blue;\">#4: Education & Know-how</h3>\r\n\t\t\t\t\t\t<ol style=\"list-style-type: decimal;\">\r\n\t\t\t\t\t\t\t<li>Ongoing support for all members, past and current</li>\r\n\t\t\t\t\t\t\t<li>Weekly live sessions for educational snippets about nutrition and fitness</li>\r\n\t\t\t\t\t\t\t<li>​Weekly sharing of recipes, exercises, tips and tricks for weight maintenance</li>\r\n\t\t\t\t\t\t</ol>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<br>\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-4 l-4 s-1 xs-1 left\"></div>\r\n\t\t\t\t\t<div class=\"m-8 l-8 s-11 xs-11 center\" style=\"widht:100%;margin-left:25%;\">\r\n\t\t\t\t\t\t<h2>Choose From The Following Programs</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-3 l-1 s-1 left\"></div>\r\n\t\t\t\t\t<div class=\"m-12 l-3 s-12 xs-12\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/trial-package.png\" width=\"100%\" height=\"100%\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-12 l-3 s-12 xs-12\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/monthly-package.png\" width=\"100%\" height=\"100%\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-12 l-3 s-12 xs-12\">\r\n\t\t\t\t\t\t<img alt=\"...\" src=\"app/Home/Images/quoterly-package.png\" width=\"100%\" height=\"100%\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-2 l-2 s-2 xs-2 left\"></div>\r\n\t\t\t\t\t<div class=\"m-7 l-7 s-7 xs-7\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"width:100%;\" routerLink=\"/booking\">Enroll Now</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"container my-4\">\r\n\r\n\t\t\t\t<hr class=\"my-4\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-2 l-2 s-1 xs-1 left\"></div>\r\n\t\t\t\t\t<div class=\"m-7 l-7 s-11 xs-11\" style=\"widht:100%;margin-left:5%;\">\r\n\t\t\t\t\t\t<h2>Transformation Stories at Fit Fortune</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<!--Carousel Wrapper-->\r\n\t\t\t\t<div id=\"multi-item-example\"\r\n\t\t\t\t\tclass=\"carousel slide carousel-multi-item\" data-ride=\"carousel\">\r\n\r\n\t\t\t\t\t<!--Controls-->\r\n\t\t\t\t\t<div class=\"controls-top\">\r\n\t\t\t\t\t\t<a class=\"btn-floating\" href=\"#multi-item-example\"\r\n\t\t\t\t\t\t\tdata-slide=\"prev\"><i class=\"fa fa-chevron-left\"></i></a> <a\r\n\t\t\t\t\t\t\tclass=\"btn-floating\" href=\"#multi-item-example\" data-slide=\"next\"><i\r\n\t\t\t\t\t\t\tclass=\"fa fa-chevron-right\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/.Controls-->\r\n\r\n\t\t\t\t\t<!--Indicators-->\r\n\t\t\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t<li data-target=\"#multi-item-example\" data-slide-to=\"0\"\r\n\t\t\t\t\t\t\tclass=\"active\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#multi-item-example\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#multi-item-example\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#multi-item-example\" data-slide-to=\"3\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#multi-item-example\" data-slide-to=\"4\"></li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t\t<!--/.Indicators-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--Slides-->\r\n\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\r\n\t\t\t\t\t<!--First slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item active\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide1.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide2.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide3.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Janaki badade</h5>\r\n\t\t\t\t\t\t\t\t\t\t\tI am simple housewife, I have 2 son one is in 10 th and other is in primary school. I was Sitting at home doing same work and following same schedule everyday. Even for household work we have a hosemade, so my job was just eating and seating. One day my thyroid taste was positive and I was completely afraid. My weight started gaining and I was looking very old, which I was not. I got a reference from friend & I started the program. After a first week, I was feeling so much energetic and confident. I had lost total 17 kgs weight now all the members called me santoor mom jokingly. Initially I had doubts but suhas and Prajakta clears everything. They always educate us, motivate us. We inspired from them every day.\r\n\t\t\t\t\t\t\t\t\t\t\tThank you fit fortune.\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.First slide-->\r\n\r\n\t\t\t\t\t\t<!--Second slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide4.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide5.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide6.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Second slide-->\r\n\r\n\t\t\t\t\t\t<!--Third slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide7.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">Akshay kurhade</h5>\r\n\t\t\t\t\t\t\t\t\t\t\tI am just 21 years old guy and my weight was 105 kg. I am working in own hotel business. As I said just 21 age but I was looking like 40 plus age. My age people called me uncle beacuse of my physical appearance. And somehow I felt very bad and heart broken. One day one of my close friend suggest me to visit at fit Fortune and I visited. I saw many people's results over there. I joined very quickly without any doubts. In just one month I achieved my first milestone of 5 kgs and I am inspired from my own result. Day by day my results was improving and many people started recognising me because of healthy change. Now I just 70 kg and felt like teenage boy. I lost 35 kgs in 8 months and Now I maintaining it very good. Age 21 weight loss 35 kg fat loss 25 kg\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide8.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide9.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Third slide-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Fourth slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide10.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide11.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide12.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Fourth slide-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Fifth slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide13.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide14.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide15.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Fifth slide-->\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/.Slides-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--/.Carousel Wrapper-->\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-2 l-2 s-2 xs-2 left\"></div>\r\n\t\t\t\t\t<div class=\"m-7 l-7 s-7 xs-7\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"width:100%;\" routerLink=\"/booking\">Enroll Now</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br>\r\n\t\t\t<br>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"m-4 l-4 s-1 xs-1 left\"></div>\r\n\t\t\t\t<div class=\"m-8 l-8 s-11 xs-11 center\" style=\"widht:100%;margin-left:45%;\">\r\n\t\t\t\t\t<h2>Are You...</h2>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"card s-12 xs-12 m-12 l-12 right\" style=\"border: none;\">\r\n\t\t\t\t\t<ol class=\"glyphicon glyphicon-ok\" style=\"margin-left:10%;font-weight: bold;font-weight: 900;\">\r\n\t\t\t\t\t\t<li>Struggling to lose weight, stubborn fat and inches?</li>\r\n\t\t\t\t\t\t<li>Want to know \"how\" to lose weight and maintain it instead of just getting a \"one-time\" plan?</li>\r\n\t\t\t\t\t\t<li>Want a real \"coach\" who you can speak with from time to time rather than following a pre designed program?</li>\r\n\t\t\t\t\t\t<li>Too busy to spend time in the gym or cook separately for yourself?</li>\r\n\t\t\t\t\t\t<li>Struggling to learn how to enjoy social settings with your spouse, family, or friends without feeling the guilt of falling off track?</li>\r\n\t\t\t\t\t\t<li>Just feeling confused with \"Yes carbs or no carbs, Do I really need protein, My metabolism is slow, Should I do cardio or weights, Do I eat 2 times a day or 4 times a day\" ... we'll tell you what is fact, vs fiction for YOU!</li>\r\n\t\t\t\t\t\t<li>Sick and tired of looking at awesome bodies on Instagram and feeling frustrated?</li>\r\n\t\t\t\t\t\t<li>​Looking for guidance, support and encouragement rather than some challenge or magic diet?</li>\r\n\t\t\t\t\t\t<li>​If you've answered YES to any of these questions, we want to speak with you! If you qualify, we'll hold a brief 1-1 call to discuss your future, and determine if this is the right fit for you. Just click below to apply!</li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"m-2 l-2 s-2 xs-2 left\"></div>\r\n\t\t\t\t<div class=\"m-7 l-7 s-7 xs-7\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"width:100%;\" routerLink=\"/booking\">Enroll Now</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"container my-4\">\r\n\r\n\t\t\t\t<hr class=\"my-4\">\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"m-2 l-2 s-1 xs-1 left\"></div>\r\n\t\t\t\t\t<div class=\"m-7 l-7 s-11 xs-11 center\" style=\"widht:100%;margin-left:20%;\">\r\n\t\t\t\t\t\t<h2>Few More Transformation Stories at Fit Fortune</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--Carousel Wrapper-->\r\n\t\t\t\t<div id=\"new-multi-item-example\"\r\n\t\t\t\t\tclass=\"carousel slide carousel-multi-item\" data-ride=\"carousel\">\r\n\r\n\t\t\t\t\t<!--Controls-->\r\n\t\t\t\t\t<div class=\"controls-top\">\r\n\t\t\t\t\t\t<a class=\"btn-floating\" href=\"#new-multi-item-example\"\r\n\t\t\t\t\t\t\tdata-slide=\"prev\"><i class=\"fa fa-chevron-left\"></i></a> <a\r\n\t\t\t\t\t\t\tclass=\"btn-floating\" href=\"#new-multi-item-example\" data-slide=\"next\"><i\r\n\t\t\t\t\t\t\tclass=\"fa fa-chevron-right\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/.Controls-->\r\n\r\n\t\t\t\t\t<!--Indicators-->\r\n\t\t\t\t\t<ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"0\"\r\n\t\t\t\t\t\t\tclass=\"active\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"3\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"4\"></li>\r\n\t\t\t\t\t\t<li data-target=\"#new-multi-item-example\" data-slide-to=\"5\"></li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t\t<!--/.Indicators-->\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!--Slides-->\r\n\t\t\t\t\t<div class=\"carousel-inner\" role=\"listbox\">\r\n\t\t\t\t\t<!--First slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item active\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide16.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide17.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide18.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.First slide-->\r\n\r\n\t\t\t\t\t\t<!--Second slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide19.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide20.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide21.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Second slide-->\r\n\r\n\t\t\t\t\t\t<!--Third slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide22.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide23.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide24.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Third slide-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Fourth slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide25.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide26.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide27.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Fourth slide-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Fifth slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide28.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide29.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide30.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Fifth slide-->\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<!--Sixth slide-->\r\n\t\t\t\t\t\t<div class=\"carousel-item\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide31.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4 clearfix d-none d-md-block\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"card mb-2\">\r\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img-top\" src=\"app/Home/Images/Slider/Slide32.JPG\" alt=\"Card image cap\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--/.Sixth slide-->\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--/.Slides-->\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--/.Carousel Wrapper-->\r\n\r\n\t\t\t\t<br>\r\n\t\t\t\t<div style=\"text-align:center;\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"m-2 l-2 s-2 xs-2 left\"></div>\r\n\t\t\t\t\t\t<div class=\"m-11 l-11 s-11 xs-11 center\">\r\n\t\t\t\t\t\t\t<h2>You Are Only 1 Decision Away From Changing</h2>\r\n\t\t\t\t\t\t\t<h3>Your Life For Good…</h3>\r\n\t\t\t\t\t\t\t<h4>Click The Button Below To Start Your Application</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"m-2 l-2 s-2 xs-2 left\"></div>\r\n\t\t\t\t\t\t<div class=\"m-7 l-7 s-7 xs-7 center\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" style=\"width:100%;\" routerLink=\"/booking\">Enroll Now</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/inquiry.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/inquiry.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<h2 class=\"section-title\"></h2>\r\n\t<div class=\"line\" *ngIf=\"submitted==false || registerForm.invalid\">\r\n\t\t<form [formGroup]=\"registerForm\">\r\n\t\t    <fieldset>\r\n\t\t    \t<table class=\"form-style-1\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputFirstName\" name=\"inputFirstName\" placeholder=\"First Name\" autofocus \r\n\t\t\t\t\t\t\t\t\tformControlName=\"firstName\" required [ngClass]=\"{ 'is-invalid': submitted && f().firstName.errors }\">\r\n\t\t\t\t\t\t\t\t    <div *ngIf=\"submitted && f().firstName.errors\" class=\"invalid-feedback\">\r\n\t\t\t                        \t<div *ngIf=\"f().firstName.errors.required\">First Name is required</div>\r\n\t\t\t                    \t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputLastName\" name=\"inputLastName\" placeholder=\"Last Name\"\r\n\t\t\t\t\t    \t\t\t\tformControlName=\"lastName\" required [ngClass]=\"{ 'is-invalid': submitted && f().lastName.errors }\">\r\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().lastName.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t                        \t<div *ngIf=\"f().lastName.errors.required\">Last Name is required</div>\r\n\t\t\t\t                    \t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputAddress\" name=\"inputAddress\" placeholder=\"Address\"\r\n\t\t\t\t\t               \tformControlName=\"address\" required [ngClass]=\"{ 'is-invalid': submitted && f().address.errors }\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().address.errors\" class=\"invalid-feedback\">\r\n\t\t                        \t\t<div *ngIf=\"f().address.errors.required\">Address is required</div>\r\n\t\t                    \t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputPhone\" name=\"inputPhone\" placeholder=\"Mobile / Whatsapp Number\" \r\n\t\t\t\t\t               \tformControlName=\"phoneNo\" required [ngClass]=\"{ 'is-invalid': submitted && f().phoneNo.errors }\">\r\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().phoneNo.errors\" class=\"invalid-feedback\">\r\n\t\t\t                        \t<div *ngIf=\"f().phoneNo.errors.required\">Mobile no is required</div>\r\n\t\t\t                    \t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t <input type=\"text\" class=\"new-form-control\" id=\"inputEmail\" name=\"inputEmail\" placeholder=\"Email-Id\"\r\n\t\t\t\t\t                formControlName=\"emailId\" required [ngClass]=\"{ 'is-invalid': submitted && f().emailId.errors }\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().emailId.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t<div *ngIf=\"f().emailId.errors.required\">Email-Id is required</div>\r\n                    \t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputInstagram\" name=\"inputInstagram\" placeholder=\"Instagram\" \r\n\t\t\t\t\t                formControlName=\"instagram\" required [ngClass]=\"{ 'is-invalid': submitted && f().instagram.errors }\">\r\n\t\t\t\t\t                <div *ngIf=\"submitted && f().instagram.errors\" class=\"invalid-feedback\">\r\n                        \t\t\t\t<div *ngIf=\"f().instagram.errors.required\">Instagram Id is required</div>\r\n                    \t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputGoal\" name=\"inputGoal\"  placeholder=\"What made you apply here? What do you want to achieve?\"\r\n\t\t\t\t\t                formControlName=\"goal\" required [ngClass]=\"{ 'is-invalid': submitted && f().goal.errors }\">\r\n\t\t\t\t\t        <div *ngIf=\"submitted && f().goal.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().goal.errors.required\">Goals are required</div>\r\n                    \t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputWeakness\" name=\"inputWeakness\"  placeholder=\"What is stopping you from achieving your weight loss goal right now?\"\r\n\t\t\t\t\t                formControlName=\"weakness\" required [ngClass]=\"{ 'is-invalid': submitted && f().weakness.errors }\">\r\n\t\t\t                <div *ngIf=\"submitted && f().weakness.errors\" class=\"invalid-feedback\">\r\n        \t\t\t\t\t\t<div *ngIf=\"f().weakness.errors.required\">Weakness is required</div>\r\n                    \t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<p><b>How serious are you about weight loss and a body transformation right now?</b></p>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"serious\" name=\"seriousness\" value=\"serious\" formControlName=\"seriousness\" \r\n\t\t\t\t\t               \trequired [ngClass]=\"{ 'is-invalid': submitted && f().seriousness.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;I am seriously interested and I want to start as soon as possible.</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"notserious\" name=\"seriousness\" value=\"notserious\" formControlName=\"seriousness\"\r\n\t\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().seriousness.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I am not very serious right now, I am just gathering information.</label>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().seriousness.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().seriousness.errors.required\">This field is required</div>\r\n                    \t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<p><b>To achieve a healthy and sustainable result in this program, we recommend the use of Herbalife Nutrition during the course of this program. Are you ok with this?</b></p>\r\n\t\t\t\t\t        <input type=\"radio\" id=\"oknutrition\" name=\"nutrition\" value=\"oknutrition\" formControlName=\"nutrition\"\r\n\t\t\t\t\t        \trequired [ngClass]=\"{ 'is-invalid': submitted && f().nutrition.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;Yes I am ok with using Herbalife Nutrition to get best results.</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"notOknutrition\" name=\"nutrition\" value=\"notOknutrition\" formControlName=\"nutrition\"\r\n\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().nutrition.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"female\">&nbsp;No I do not want to use Herbalife Nutrition..</label><br>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().nutrition.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().nutrition.errors.required\">This field is required</div>\r\n                    \t\t</div>\t\t\t\t\t\t\r\n                    \t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<p><b>Have you used Herbalife Nutrition before?</b></p>\r\n\t\t\t\t\t        <input type=\"radio\" id=\"currentUser\" name=\"existingNutritionUser\" value=\"currentUser\" formControlName=\"existingNutritionUser\"\r\n\t\t\t\t\t        \trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingNutritionUser.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;Yes, I am currently using Herbalife Nutrition from another coach.</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"pastUser\" name=\"existingNutritionUser\" value=\"pastUser\" formControlName=\"existingNutritionUser\"\r\n\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingNutritionUser.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"female\">&nbsp;I have used Herbalife Nutrition in the past. I am currently not on the program.</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"neverUser\" name=\"existingNutritionUser\" value=\"neverUser\" formControlName=\"existingNutritionUser\"\r\n\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().existingNutritionUser.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"other\">I have never used Herbalife Nutrition before.</label>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().existingNutritionUser.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().existingNutritionUser.errors.required\">This field is required</div>\r\n                    \t\t</div>\r\n                    \t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<p><b>Taking action is the ONLY way to achieve results. Before we set up a call with you, we would like to know which program you would like to take.</b></p>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"trialPackage\" name=\"nutritionPackage\" value=\"trialPackage\" formControlName=\"nutritionPackage\"\r\n\t\t\t\t\t        \trequired [ngClass]=\"{ 'is-invalid': submitted && f().nutritionPackage.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"male\"> &nbsp;15 days Trial Pack: Rs. 3700/-</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"fourWeekPackage\" name=\"nutritionPackage\" value=\"fourWeekPackage\" formControlName=\"nutritionPackage\"\r\n\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().nutritionPackage.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"female\">&nbsp;4 Week Weight Loss Program: Rs.5900/-</label><br>\r\n\t\t\t\t\t\t\t<input type=\"radio\" id=\"twelveWeekPackage\" name=\"nutritionPackage\" value=\"twelveWeekPackage\" formControlName=\"nutritionPackage\"\r\n\t\t\t\t\t\t\t\trequired [ngClass]=\"{ 'is-invalid': submitted && f().nutritionPackage.errors }\">\r\n\t\t\t\t\t\t\t<label for=\"other\">12 Week Weight Loss + Fitness Plan: 15,900/- (Body Transformation Program)</label>\r\n\t\t\t\t\t\t\t<div *ngIf=\"submitted && f().nutritionPackage.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().nutritionPackage.errors.required\">This field is required</div>\r\n                    \t\t</div>\r\n                    \t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputExtraInformation\" name=\"inputExtraInformation\"  placeholder=\"Would you like to share anything else about your lifestyle or preferences with me?\"\r\n\t\t\t\t\t                formControlName=\"extraInfo\" required [ngClass]=\"{ 'is-invalid': submitted && f().extraInfo.errors }\">\r\n\t\t\t\t\t        <div *ngIf=\"submitted && f().extraInfo.errors\" class=\"invalid-feedback\">\r\n                        \t\t<div *ngIf=\"f().extraInfo.errors.required\">This field is required</div>\r\n                    \t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t        <td>\r\n\t\t\t\t\t    \t<div class=\"form-group right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success\">Submit</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t    \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" routerLink=\"\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t    </fieldset>\r\n\t\t</form>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\t<h2 class=\"section-title\"></h2>\r\n\t<div class=\"line center\" *ngIf=\"submitted==false || registerForm.invalid\">\r\n\t\t<form [formGroup]=\"registerForm\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<table class=\"form-style-1\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"new-form-control\" id=\"inputUserName\" name=\"inputUserName\" placeholder=\"User Name\" autofocus\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"userName\" required\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f().userName.errors }\" style=\"width:100%;\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"new-form-control\" id=\"inputPassword\" name=\"inputPassword\" placeholder=\"Password\"\r\n\t\t\t\t\t\t\t\t\t\tformControlName=\"password\" required\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{ 'is-invalid': submitted && f().password.errors }\" style=\"width:100%;\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t        <td>\r\n\t\t\t\t\t    \t<div class=\"form-group right\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success\">Login</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t    \t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" routerLink=\"\" class=\"btn btn-danger\">Cancel</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</fieldset>\r\n\t\t</form>\r\n\t</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/step1.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/step1.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-two-percentage\">\r\n\t<div *ngIf=\"inquiryMasters.status=='N'\">\r\n\t\t<b>Step 1:</b>\r\n\t\t<br>\r\n\t\tThere are 3 options in Step 1.\r\n\t\t<ul>\r\n\t\t\t<li>Option 1: Accept - A WhatsApp Message is sent to the client with a request to have a video call.</li>\r\n\t\t\t<li>Option 2: Reject - You can reject a client & no communication is sent to the client.</li>\r\n\t\t\t<li>Option 3: Ignore - You can currently ignore the customer & can contact him later.</li>\r\n\t\t</ul>\r\n\t\t<div style=\"width:100%;\">\r\n\t\t\t<table class=\"admin-step\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Phone</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.phoneNo\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.emailId\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Instagram</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.instagram\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What made you apply here? What do you want to achieve?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.goal\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>What is stopping you from achieving your weight loss goal right now?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.weakness\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>How serious are you about weight loss and a body transformation right now?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.seriousness == 'notserious'\">I am not very serious right now, I am just gathering information.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.seriousness == 'serious'\">I am seriously interested and I want to start as soon as possible.</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>To achieve a healthy and sustainable result in this program, we recommend the use of Herbalife Nutrition during the course of this program. Are you ok with this?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.nutrition == 'oknutrition'\">Yes I am ok with using Herbalife Nutrition to get best results.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.nutrition == 'notOknutrition'\">No I do not want to use Herbalife Nutrition..</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Have you used Herbalife Nutrition before?</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.existingNutritionUser == 'currentUser'\">Yes, I am currently using Herbalife Nutrition from another coach.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.existingNutritionUser == 'pastUser'\">I have used Herbalife Nutrition in the past. I am currently not on the program.</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.existingNutritionUser == 'neverUser'\">I have never used Herbalife Nutrition before.</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Taking action is the ONLY way to achieve results. Before we set up a call with you, we would like to know which program you would like to take.</th>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.nutritionPackage == 'trialPackage'\">15 days Trial Pack: Rs. 3700/-</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.nutritionPackage == 'fourWeekPackage'\">4 Week Weight Loss Program: Rs.5900/-</span>\r\n\t\t\t\t\t\t<span *ngIf=\"inquiryMasters.nutritionPackage == 'twelveWeekPackage'\">12 Week Weight Loss + Fitness Plan: 15,900/- (Body Transformation Program)</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Would you like to share anything else about your lifestyle or preferences with me?</th>\r\n\t\t\t\t\t<td><span [innerText]=\"inquiryMasters.extraInfo\"></span></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<br>\r\n\t\t\t<div>\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" name=\"step1\" value=\"accept\" (click)=\"acceptLead()\"><i class=\"feather icon-check\"></i>Accept</button>&nbsp;\r\n\t\t\t\t<button *ngIf=\"inquiryMasters.status=='N'\" type=\"submit\" class=\"btn btn-primary\" name=\"step1\" value=\"discuss\" (click)=\"startDiscussion()\">Discuss</button>&nbsp;\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-danger\" name=\"step1\" value=\"ignore\" (click)=\"rejectLead()\"><i class=\"feather icon-x-circle\"></i>Reject</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"inquiryMasters.status=='A'\">\r\n\t\t<b>Step 2:</b>\r\n\t\t<br>\r\n\t\t<p>\r\n\t\t\tThis is where your first one-on-one call happens with your customer. \r\n\t\t\tThere are currently 2 options after this step, the customer has agreed to join the program or decided to opt out. You can mark the status here.\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tThere is space below to write your comments regarding this call. This information will be saved at both options - Joining / Rejected. Feel free to write your observations / comments on why the client accepted or rejected joining the programme.\r\n\t\t</p>\r\n\t\t<textarea rows=\"2\" cols=\"80\" class=\"new-form-control\" id=\"inputWeakness\" name=\"inputWeakness\"  placeholder=\"Please write your thoughts on how this call went.\"></textarea>\r\n\t\t<div>\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" name=\"step1\" value=\"accept\" (click)=\"joining()\"><i class=\"feather icon-check\"></i>Joining:Proceed to select plan</button>&nbsp;\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-danger\" name=\"step1\" value=\"discuss\" (click)=\"rejectLead()\">Rejected:Lead terminated here</button>&nbsp;\r\n\t\t</div>\r\n\t</div>\t\r\n\t<div *ngIf=\"inquiryMasters.status=='J'\">\r\n\t\t<b>Step 3:</b>\r\n\t\t<br>\r\n\t\t<p>\r\n\t\t\tThis is where your select plan as per customers choice. \r\n\t\t\tThis step will send mail to customer with form and payment link.\r\n\t\t</p>\r\n\t\t<input type=\"radio\" id=\"trialPackage\" name=\"nutritionPackage\" value=\"trialPackage\" [(ngModel)]=\"package\">\r\n\t\t<label for=\"male\"> &nbsp;15 days Trial Pack: Rs. 3700/-</label><br>\r\n\t\t<input type=\"radio\" id=\"fourWeekPackage\" name=\"nutritionPackage\" value=\"fourWeekPackage\" [(ngModel)]=\"package\">\r\n\t\t<label for=\"female\">&nbsp;4 Week Weight Loss Program: Rs.5900/-</label><br>\r\n\t\t<input type=\"radio\" id=\"twelveWeekPackage\" name=\"nutritionPackage\" value=\"twelveWeekPackage\" [(ngModel)]=\"package\">\r\n\t\t<label for=\"other\">12 Week Weight Loss + Fitness Plan: 15,900/- (Body Transformation Program)</label>\r\n\t\t<div>\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" name=\"step1\" value=\"accept\" (click)=\"sendPaymentLink()\"><i class=\"feather icon-check\"></i>Send payment link</button>&nbsp;\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-danger\" name=\"step1\" value=\"discuss\" (click)=\"rejectLead()\">Rejected</button>&nbsp;\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"inquiryMasters.status=='L'\">\r\n\t\t<b>Step 4:</b>\r\n\t\t<br>\r\n\t\t<p>\r\n\t\t\tIn step 4, we get to see the detailed information form the customer has filled & weather we have received their payment. \r\n\t\t\tYou will be able to manually send reminder message if either of them is unfulfilled.\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<button type=\"submit\" class=\"btn btn-success\" name=\"step1\" value=\"accept\" (click)=\"markAsPaid()\"><i class=\"feather icon-check\"></i>Mark as Paid</button>&nbsp;\r\n\t\t</div>\r\n\t\t<cust-info></cust-info>\r\n\t</div>\r\n\t<div *ngIf=\"inquiryMasters.status=='P'\">\r\n\t\t<br>\r\n\t\t<b>Payment received from customer</b>\r\n\t\t<cust-info></cust-info>\r\n\t</div>\t\t\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>");

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

/***/ "./src/app/Home/Components/admin-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Home/Components/admin-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");


//Services

let AdminPanelComponent = class AdminPanelComponent {
    constructor(inquiryService) {
        this.inquiryService = inquiryService;
        this.columnDefs = [
            { headerName: 'Name', field: 'firstName', sortable: true, filter: true, checkboxSelection: true, suppressSizeToFit: true, width: 100 },
            { headerName: 'Contact no', field: 'phoneNo', sortable: true, filter: true },
            { headerName: 'Email Id', field: 'emailId', sortable: true, filter: true },
            { headerName: 'Date', field: 'creationDate', sortable: true, filter: true,
                cellRenderer: (data) => {
                    return data.value ? (new Date(data.value)).toLocaleDateString() : '';
                }
            },
            { headerName: 'Status', field: 'status', sortable: true, filter: true,
                cellRenderer: (data) => {
                    if (data.value === "N") {
                        return "New";
                    }
                    if (data.value === "R") {
                        return "Rejected";
                    }
                    if (data.value === "L") {
                        return "Payment link send";
                    }
                    if (data.value === "D") {
                        return "In discussion";
                    }
                    if (data.value === "A") {
                        return "Accepted";
                    }
                    if (data.value === "J") {
                        return "Called-Joining Program";
                    }
                    if (data.value === "P") {
                        return "Payment Received";
                    }
                }
            },
            { headerName: 'Actions',
                template: `<button type="button" data-action-type="view" class="btn btn-success">View</button>`,
                suppressSizeToFit: true,
                width: 75
            }
        ];
        this.defaultColDef = { resizable: true };
    }
    ngOnInit() {
        this.inquiryService.fetchInquiryMastersDetails().subscribe(data => {
            this.inquiryMasters = data;
        }, err => console.log(err), () => console.log("Service call complited "));
    }
    onRowClicked(e) {
        if (e.event.target !== undefined) {
            let data = e.data;
            this.isSelectedData = true;
            this.inquiryService.selectedInquiry(data);
        }
    }
    deSelectInquiry() {
        this.isSelectedData = false;
        this.inquiryService.fetchInquiryMastersDetails().subscribe(data => {
            this.inquiryMasters = data;
        }, err => console.log(err), () => console.log("Service call complited "));
    }
};
AdminPanelComponent.ctorParameters = () => [
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__["InquiryService"] }
];
AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/admin-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/admin-panel.component.html")).default
    })
], AdminPanelComponent);



/***/ }),

/***/ "./src/app/Home/Components/app-footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Home/Components/app-footer.component.ts ***!
  \*********************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppFooterComponent = class AppFooterComponent {
    constructor() { }
    ngOnInit() { }
};
AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/app-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-footer.component.html")).default
    })
], AppFooterComponent);



/***/ }),

/***/ "./src/app/Home/Components/app-header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Home/Components/app-header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppHeaderComponent = class AppHeaderComponent {
    constructor() {
        this.org_name = "FIT FORTUNE FITNESS CLUB";
        this.contact_no = "+91 9881696139";
        this.email_id = "fitfortune@gmail.com";
    }
    ngOnInit() { }
};
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/app-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/app-header.component.html")).default
    })
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/Home/Components/customer-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Home/Components/customer-details.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");




//Services

let CustomerDetailsComponent = class CustomerDetailsComponent {
    constructor(formBuilder, _activatedRoute, inquiryService) {
        this.formBuilder = formBuilder;
        this._activatedRoute = _activatedRoute;
        this.inquiryService = inquiryService;
        this.submitted = false;
        this.customerDetailsMasters = null;
        this._activatedRoute.queryParams.subscribe(params => {
            this.cust_id = params['cust_id'];
        });
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            height: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            breakFastTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lunchFastTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            eveningSnacksTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dinnerTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            craving: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            foodAllergies: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            foodPreference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cookPreference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            typeOfExercise: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            injuries: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            existingExerciseUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            exercisePreference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            existingAlcoholUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            energyLevel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            exercisePreferenceTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            foodAndExercise: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            postalAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            callDateAndTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            extraInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            foodExclusive: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gymAccess: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            snackingTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.inquiryService.fetchInquiryMastersDetailsId(this.cust_id).subscribe(data => {
            this.registerForm.controls.firstName.setValue(data.firstName);
            this.registerForm.controls.lastName.setValue(data.lastName);
        }, err => console.log(err), () => console.log("Service call completed "));
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.customerDetailsMasters = this.registerForm.value;
        this.customerDetailsMasters.customerId = this.cust_id;
        this.inquiryService.saveCustomerDetails(this.customerDetailsMasters).subscribe(data => {
            alert(data);
        }, err => console.log(err), () => console.log("Service call complited "));
    }
    // convenience getter for easy access to form fields
    f() { return this.registerForm.controls; }
};
CustomerDetailsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__["InquiryService"] }
];
CustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'customerDetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-details.component.html")).default,
    })
], CustomerDetailsComponent);



/***/ }),

/***/ "./src/app/Home/Components/customer-info.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Home/Components/customer-info.component.ts ***!
  \************************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");


//Services

let CustomerInfoComponent = class CustomerInfoComponent {
    constructor(inquiryService) {
        this.inquiryService = inquiryService;
    }
    ngOnInit() {
        console.log(this.inquiryService.inquiryMasters.id);
        this.inquiryService.fetchCustomerMastersDetails(this.inquiryService.inquiryMasters.id).subscribe(data => {
            this.customerDetailsMasters = data;
            console.log(this.customerDetailsMasters);
        }, err => console.log(err), () => console.log("Service call completed "));
    }
};
CustomerInfoComponent.ctorParameters = () => [
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__["InquiryService"] }
];
CustomerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'cust-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/customer-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/customer-info.component.html")).default
    })
], CustomerInfoComponent);



/***/ }),

/***/ "./src/app/Home/Components/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Home/Components/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let HomePageComponent = class HomePageComponent {
    constructor(sanitizer, router) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.slider1 = [
            ["app/Home/Images/Slider/Slide1.JPG", "app/Home/Images/Slider/Slide2.JPG", "app/Home/Images/Slider/Slide3.JPG"],
            ["app/Home/Images/Slider/Slide4.JPG", "app/Home/Images/Slider/Slide5.JPG", "app/Home/Images/Slider/Slide6.JPG"],
            ["app/Home/Images/Slider/Slide7.JPG", "app/Home/Images/Slider/Slide8.JPG", "app/Home/Images/Slider/Slide9.JPG"],
            ["app/Home/Images/Slider/Slide10.JPG", "app/Home/Images/Slider/Slide11.JPG", "app/Home/Images/Slider/Slide12.JPG"],
            ["app/Home/Images/Slider/Slide13.JPG", "app/Home/Images/Slider/Slide14.JPG", "app/Home/Images/Slider/Slide15.JPG"]
        ];
    }
    ngOnInit() {
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/home-page.component.html")).default,
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/Home/Components/inquiry.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Home/Components/inquiry.component.ts ***!
  \******************************************************/
/*! exports provided: InquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiryComponent", function() { return InquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");




//Services

let InquiryComponent = class InquiryComponent {
    constructor(formBuilder, _activatedRoute, inquiryService) {
        this.formBuilder = formBuilder;
        this._activatedRoute = _activatedRoute;
        this.inquiryService = inquiryService;
        this.submitted = false;
        this.inquiryMasters = null;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            goal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            weakness: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            seriousness: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nutrition: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            existingNutritionUser: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nutritionPackage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            extraInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.inquiryMasters = this.registerForm.value;
        this.inquiryMasters.status = "N";
        console.log(this.registerForm.value);
        this.inquiryService.saveInquiry(this.inquiryMasters).subscribe(data => {
            alert(data);
        }, err => console.log(err), () => console.log("Service call complited "));
    }
    // convenience getter for easy access to form fields
    f() { return this.registerForm.controls; }
};
InquiryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__["InquiryService"] }
];
InquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'inquiry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/inquiry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/inquiry.component.html")).default,
    })
], InquiryComponent);



/***/ }),

/***/ "./src/app/Home/Components/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Home/Components/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");




//Services

let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, inquiryService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.inquiryService = inquiryService;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.inquiryService.doLogin(this.f().userName.value, this.f().password.value).subscribe(data => {
            if (data === "Successfull") {
                this.router.navigate(['/admin-panel'], { relativeTo: this.router });
            }
            else {
                this.alertError();
            }
        }, err => {
            this.alertError();
        }, () => console.log("Service call complited "));
    }
    // convenience getter for easy access to form fields
    f() { return this.registerForm.controls; }
    alertError() {
        alert("User Name or password is not correct");
        this.f().userName.setValue("");
        this.f().password.setValue("");
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_4__["InquiryService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'inquiry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/login.component.html")).default,
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/Home/Components/step1.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Home/Components/step1.component.ts ***!
  \****************************************************/
/*! exports provided: Step1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Step1Component", function() { return Step1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");


//Services

let Step1Component = class Step1Component {
    constructor(inquiryService) {
        this.inquiryService = inquiryService;
    }
    ngOnInit() {
    }
    set setData(data) {
        this.inquiryMasters = data;
    }
    startDiscussion() {
        let id = this.inquiryService.inquiryMasters.id;
        this.updateStatus(id, "D");
    }
    acceptLead() {
        let id = this.inquiryService.inquiryMasters.id;
        this.updateStatus(id, "A");
    }
    rejectLead() {
        let id = this.inquiryService.inquiryMasters.id;
        this.updateStatus(id, "R");
    }
    joining() {
        let id = this.inquiryService.inquiryMasters.id;
        this.updateStatus(id, "J");
    }
    sendPaymentLink() {
        let id = this.inquiryService.inquiryMasters.id;
        this.inquiryService.sendEmailPayment(id, this.package).subscribe(data => {
            this.inquiryMasters = data;
            this.inquiryService.selectedInquiry(data);
        }, err => console.log(err), () => console.log("Service call complited "));
    }
    markAsPaid() {
        let id = this.inquiryService.inquiryMasters.id;
        this.updateStatus(id, "P");
    }
    updateStatus(id, status) {
        this.inquiryService.updateStatus(id, status).subscribe(data => {
            this.inquiryMasters = data;
            this.inquiryService.selectedInquiry(data);
        }, err => console.log(err), () => console.log("Service call complited "));
    }
};
Step1Component.ctorParameters = () => [
    { type: _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_2__["InquiryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data')
], Step1Component.prototype, "setData", null);
Step1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'step1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!../views/step1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Home/views/step1.component.html")).default
    })
], Step1Component);



/***/ }),

/***/ "./src/app/Home/Services/inquiry.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Home/Services/inquiry.service.ts ***!
  \**************************************************/
/*! exports provided: InquiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquiryService", function() { return InquiryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let InquiryService = class InquiryService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getServerPath() {
        return window.location.protocol + '/';
    }
    saveInquiry(inquiryMasters) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post(this.getServerPath() + 'inquiry/save', inquiryMasters, { headers, responseType: 'text' });
    }
    fetchInquiryMastersDetails() {
        return this._httpClient.get(this.getServerPath() + 'inquiry/fetchAll', { responseType: 'json' });
    }
    selectedInquiry(data) {
        this.inquiryMasters = data;
    }
    updateStatus(id, status) {
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.set('id', id.toString());
        body = body.set('status', status);
        return this._httpClient.post(this.getServerPath() + 'inquiry/update', body);
    }
    sendEmailPayment(id, packages) {
        let cost;
        let body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        switch (packages) {
            case "trialPackage": {
                cost = 3700;
                break;
            }
            case "fourWeekPackage": {
                cost = 5900;
                break;
            }
            case "twelveWeekPackage": {
                cost = 15, 900;
                break;
            }
        }
        body = body.set('id', id.toString());
        body = body.set('cost', cost.toString());
        return this._httpClient.post(this.getServerPath() + 'inquiry/emailWithPayment', body);
    }
    fetchInquiryMastersDetailsId(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id.toString());
        return this._httpClient.get(this.getServerPath() + 'inquiry/fetchById', { responseType: 'json', params: param });
    }
    saveCustomerDetails(customerDetailsMasters) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post(this.getServerPath() + 'inquiry/saveCustomerDetails', customerDetailsMasters, { headers, responseType: 'text' });
    }
    fetchCustomerMastersDetails(id) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("id", id.toString());
        return this._httpClient.get(this.getServerPath() + 'inquiry/fetchAllCustomerDetails', { responseType: 'json', params: param });
    }
    doLogin(userName, password) {
        let param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userName", userName).set("password", password);
        return this._httpClient.get(this.getServerPath() + 'inquiry/doLogin', { responseType: 'text', params: param });
    }
};
InquiryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
InquiryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], InquiryService);



/***/ }),

/***/ "./src/app/Home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/Home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/fesm2015/ag-grid-angular.js");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.routing */ "./src/app/Home/home.routing.ts");
/* harmony import */ var _Components_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/home-page.component */ "./src/app/Home/Components/home-page.component.ts");
/* harmony import */ var _Components_inquiry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/inquiry.component */ "./src/app/Home/Components/inquiry.component.ts");
/* harmony import */ var _Components_app_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/app-header.component */ "./src/app/Home/Components/app-header.component.ts");
/* harmony import */ var _Components_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/admin-panel.component */ "./src/app/Home/Components/admin-panel.component.ts");
/* harmony import */ var _Components_step1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/step1.component */ "./src/app/Home/Components/step1.component.ts");
/* harmony import */ var _Components_app_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/app-footer.component */ "./src/app/Home/Components/app-footer.component.ts");
/* harmony import */ var _Components_customer_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/customer-details.component */ "./src/app/Home/Components/customer-details.component.ts");
/* harmony import */ var _Components_customer_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/customer-info.component */ "./src/app/Home/Components/customer-info.component.ts");
/* harmony import */ var _Components_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/login.component */ "./src/app/Home/Components/login.component.ts");
/* harmony import */ var _Services_inquiry_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/inquiry.service */ "./src/app/Home/Services/inquiry.service.ts");







//Component









//Service

let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _home_routing__WEBPACK_IMPORTED_MODULE_6__["HomeRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([])],
        exports: [_Components_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _Components_app_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _Components_app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"]],
        providers: [_Services_inquiry_service__WEBPACK_IMPORTED_MODULE_16__["InquiryService"]],
        declarations: [_Components_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _Components_inquiry_component__WEBPACK_IMPORTED_MODULE_8__["InquiryComponent"], _Components_app_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"], _Components_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__["AdminPanelComponent"], _Components_step1_component__WEBPACK_IMPORTED_MODULE_11__["Step1Component"],
            _Components_app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"], _Components_customer_details_component__WEBPACK_IMPORTED_MODULE_13__["CustomerDetailsComponent"], _Components_customer_info_component__WEBPACK_IMPORTED_MODULE_14__["CustomerInfoComponent"], _Components_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/Home/home.routing.ts":
/*!**************************************!*\
  !*** ./src/app/Home/home.routing.ts ***!
  \**************************************/
/*! exports provided: HomeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoute", function() { return HomeRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Components_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/home-page.component */ "./src/app/Home/Components/home-page.component.ts");
/* harmony import */ var _Components_inquiry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/inquiry.component */ "./src/app/Home/Components/inquiry.component.ts");
/* harmony import */ var _Components_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/admin-panel.component */ "./src/app/Home/Components/admin-panel.component.ts");
/* harmony import */ var _Components_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/customer-details.component */ "./src/app/Home/Components/customer-details.component.ts");
/* harmony import */ var _Components_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/login.component */ "./src/app/Home/Components/login.component.ts");


//Component





const HomeRoutesConfig = [
    {
        path: '',
        component: _Components_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    },
    {
        path: 'booking',
        component: _Components_inquiry_component__WEBPACK_IMPORTED_MODULE_3__["InquiryComponent"]
    },
    {
        path: 'admin-panel',
        component: _Components_admin_panel_component__WEBPACK_IMPORTED_MODULE_4__["AdminPanelComponent"]
    },
    {
        path: 'customerDetails',
        component: _Components_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"]
    },
    {
        path: 'loadLogin',
        component: _Components_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }
];
const HomeRoute = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(HomeRoutesConfig);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
        this.title = 'UI';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Home_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home/home.module */ "./src/app/Home/home.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_4__["rootRoutes"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _Home_home_module__WEBPACK_IMPORTED_MODULE_6__["HomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: rootRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRoutes", function() { return rootRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


const defaultRoutes = [
    {
        path: '',
        loadChildren: './Home/home.module#HomeModule'
    }
];
const HomeRoutes = [
    {
        path: "home",
        loadChildren: './Home/home.module#HomeModule'
    }
];
const appRoutes = [
    ...HomeRoutes,
    ...defaultRoutes
];
const rootRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


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
    production: false,
    version: "0.0.0.0"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\New Workspace\FitnessClub\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map