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

/***/ "./src/app/admin/rooms/room-detail/room-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/rooms/room-detail/room-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb20tZGV0YWlsL3Jvb20tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/rooms/room-detail/room-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/rooms/room-detail/room-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"roomDetails\">\n  <h2>Room details</h2>\n  <a class=\"btn btn-small btn-warning\" (click)=\"editRoom()\" *ngIf=\"isAdminUser\">edit</a>\n  <a class=\"btn btn-small btn-warning\" (click)=\"deleteRoom()\" *ngIf=\"isAdminUser\">delete</a>\n  <div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n  <table>\n    <tr>\n      <td>id</td><td>{{room?.id}}</td>\n    </tr>\n    <tr>\n      <td>name</td><td>{{room?.name}}</td>\n    </tr>\n    <tr>\n      <td>location</td><td>{{room?.location}}</td>\n    </tr>\n  </table>\n  <h4>This room can accomodate:</h4>\n  <table *ngIf=\"room\">\n    <tr *ngFor=\"let layoutCapacity of room.capacities\"> <!-- repeat the tr for each capacity -->\n      <td>{{layoutCapacity.layout}}</td><td>{{layoutCapacity.capacity}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/admin/rooms/room-detail/room-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/rooms/room-detail/room-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RoomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDetailComponent", function() { return RoomDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_model_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Room */ "./src/app/model/Room.ts");






var RoomDetailComponent = /** @class */ (function () {
    function RoomDetailComponent(router, dataService, authService) {
        this.router = router;
        this.dataService = dataService;
        this.authService = authService;
        this.dataChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = '';
        this.isAdminUser = false;
    }
    RoomDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.role === 'ADMIN')
            this.isAdminUser = true;
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next === 'ADMIN') {
                _this.isAdminUser = true;
            }
            else {
                _this.isAdminUser = false;
            }
        });
    };
    RoomDetailComponent.prototype.editRoom = function () {
        this.router.navigate(['admin', 'rooms'], { queryParams: { action: 'edit', id: this.room.id } });
    };
    RoomDetailComponent.prototype.deleteRoom = function () {
        var _this = this;
        var result = confirm('Are you sure you wish to delete this room?');
        if (result) {
            this.message = 'deleting...';
            this.dataService.deleteRoom(this.room.id).subscribe(function (next) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'rooms']);
            }, function (error) { return _this.message = 'Sorry this room is cannot be deleted at this time'; });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Room__WEBPACK_IMPORTED_MODULE_5__["Room"])
    ], RoomDetailComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomDetailComponent.prototype, "dataChangeEvent", void 0);
    RoomDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-detail',
            template: __webpack_require__(/*! ./room-detail.component.html */ "./src/app/admin/rooms/room-detail/room-detail.component.html"),
            styles: [__webpack_require__(/*! ./room-detail.component.css */ "./src/app/admin/rooms/room-detail/room-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RoomDetailComponent);
    return RoomDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/rooms/room-edit/room-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/rooms/room-edit/room-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb20tZWRpdC9yb29tLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/rooms/room-edit/room-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/rooms/room-edit/room-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1> {{room.id == null ? 'Add' : 'Edit'}} Room</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n<form [formGroup]=\"roomForm\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"room name\" formControlName=\"roomName\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"roomForm.controls['roomName'].invalid && roomForm.controls['roomName'].dirty\"> Room name cannot be blank</div>\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"location\">Location</label>\n    <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"location\" formControlName=\"location\" required>\n    <div class=\"alert alert-danger\" *ngIf=\"roomForm.controls['location'].invalid && roomForm.controls['location'].dirty\"> Location Cannot be Blank</div>\n  </div>\n\n  <h2>This room can accomodate:</h2>\n\n  <!-- list the layout types here -->\n  <div class=\"form-group\" *ngFor=\"let layout of layouts\">\n    <label for=\"layout{{layout}}\">{{layoutEnum[layout]}}</label>\n    <input type=\"number\" class=\"form-control\" id=\"layout{{layout}}\" formControlName=\"layout{{layout}}\">\n  </div>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"roomForm.invalid\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/rooms/room-edit/room-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/rooms/room-edit/room-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: RoomEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomEditComponent", function() { return RoomEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/form-reset.service */ "./src/app/form-reset.service.ts");
/* harmony import */ var src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/Room */ "./src/app/model/Room.ts");








var RoomEditComponent = /** @class */ (function () {
    function RoomEditComponent(formBuilder, dataService, router, formResetService, authService) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.formResetService = formResetService;
        this.authService = authService;
        this.dataChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = '';
        this.layouts = Object.keys(src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["Layout"]);
        this.layoutEnum = src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["Layout"];
    }
    RoomEditComponent.prototype.ngOnDestroy = function () {
        this.resetEventSubscription.unsubscribe();
    };
    RoomEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.resetEventSubscription = this.formResetService.resetRoomFormEvent.subscribe(function (room) {
            _this.room = room;
            _this.initializeForm();
        });
    };
    RoomEditComponent.prototype.initializeForm = function () {
        this.roomForm = this.formBuilder.group({ roomName: [this.room.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: [this.room.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
        });
        this.roomForm.patchValue({
            roomName: this.room.name,
            location: this.room.location
        });
        var _loop_1 = function (layout) {
            var layoutCapacity = this_1.room.capacities.find(function (lc) { return lc.layout === src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["Layout"][layout]; });
            var initialCapacity = layoutCapacity == null ? 0 : layoutCapacity.capacity;
            this_1.roomForm.addControl("layout" + layout, this_1.formBuilder.control(initialCapacity));
        };
        var this_1 = this;
        for (var _i = 0, _a = this.layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            _loop_1(layout);
        }
    };
    RoomEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.room.name = this.roomForm.controls['roomName'].value;
        this.room.location = this.roomForm.controls['location'].value;
        this.room.capacities = new Array();
        for (var _i = 0, _a = this.layouts; _i < _a.length; _i++) {
            var layout = _a[_i];
            var layoutCapacity = new src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["LayoutCapacity"]();
            layoutCapacity.layout = src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["Layout"][layout];
            layoutCapacity.capacity = this.roomForm.controls["layout" + layout].value;
            this.room.capacities.push(layoutCapacity);
        }
        if (this.room.id == null) {
            this.dataService.addRoom(this.room).subscribe(function (next) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'rooms'], { queryParams: { action: 'view', id: next.id } });
            }, function (error) {
                _this.message = 'Something went wrong, Please try again.';
            });
        }
        else {
            this.dataService.updateRoom(this.room).subscribe(function (next) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'rooms'], { queryParams: { action: 'view', id: next.id } });
            }, function (error) {
                _this.message = 'Something went wrong, Please try again.';
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_Room__WEBPACK_IMPORTED_MODULE_7__["Room"])
    ], RoomEditComponent.prototype, "room", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoomEditComponent.prototype, "dataChangeEvent", void 0);
    RoomEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-room-edit',
            template: __webpack_require__(/*! ./room-edit.component.html */ "./src/app/admin/rooms/room-edit/room-edit.component.html"),
            styles: [__webpack_require__(/*! ./room-edit.component.css */ "./src/app/admin/rooms/room-edit/room-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_6__["FormResetService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RoomEditComponent);
    return RoomEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jvb21zL3Jvb21zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Rooms Admin</h1>\n\n<a class=\"btn btn-warning mb-3\" (click)=\"addRoom()\" *ngIf=\"isAdminUser\">add</a>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Name</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let room of rooms\"> <!-- repeat the tr for each room -->\n            <td>{{room.id}}</td>\n            <td>{{room.name}}</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"setRoom(room.id)\">view</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div *ngIf=\"loadingData\">{{message}}</div>\n    </div>\n    <div class=\"col-6\">\n      <app-room-detail *ngIf=\"action==='view'\" [room]=\"selectedRoom\" (dataChangeEvent)=\"loadData()\"></app-room-detail>\n      <app-room-edit *ngIf=\"action==='edit'\" [room]=\"selectedRoom\" (dataChangeEvent)=\"loadData()\"></app-room-edit>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/rooms/rooms.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/rooms/rooms.component.ts ***!
  \************************************************/
/*! exports provided: RoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsComponent", function() { return RoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/form-reset.service */ "./src/app/form-reset.service.ts");
/* harmony import */ var src_app_model_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/Room */ "./src/app/model/Room.ts");







var RoomsComponent = /** @class */ (function () {
    function RoomsComponent(dataService, route, router, formResetService, authService) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.formResetService = formResetService;
        this.authService = authService;
        this.loadingData = true;
        this.message = 'Please wait.... getting data of room';
        this.reloadAttempts = 0;
        this.isAdminUser = false;
    }
    RoomsComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getRooms().subscribe(function (next) {
            _this.rooms = next;
            _this.loadingData = false;
            _this.processUrlParam();
        }, function (error) {
            if (error.status === 402) {
                _this.message = 'Sorry You need to make payment before using the application';
            }
            else {
                if (_this.reloadAttempts < 10) {
                    _this.reloadAttempts++;
                    _this.message = 'sorry something went wrong. trying again.... ';
                    _this.loadData();
                }
                else {
                    _this.message = 'sorry something went wrong please contact support ';
                }
            }
        });
    };
    RoomsComponent.prototype.processUrlParam = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            _this.action = null;
            var id = param['id'];
            if (id) {
                _this.selectedRoom = _this.rooms.find(function (room) { return room.id === +id; });
                _this.action = param['action'];
            }
            if (param['action'] === 'add') {
                _this.selectedRoom = new src_app_model_Room__WEBPACK_IMPORTED_MODULE_6__["Room"]();
                _this.action = 'edit';
                _this.formResetService.resetRoomFormEvent.emit(_this.selectedRoom);
            }
        });
    };
    RoomsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        if (this.authService.role === 'ADMIN') {
            this.isAdminUser = true;
        }
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next === 'ADMIN') {
                _this.isAdminUser = true;
            }
            else {
                _this.isAdminUser = false;
            }
        });
    };
    RoomsComponent.prototype.setRoom = function (id) {
        this.router.navigate(['admin', 'rooms'], { queryParams: { id: id, action: 'view' } });
    };
    RoomsComponent.prototype.addRoom = function () {
        this.router.navigate(['admin', 'rooms'], { queryParams: { action: 'add' } });
    };
    RoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__(/*! ./rooms.component.html */ "./src/app/admin/rooms/rooms.component.html"),
            styles: [__webpack_require__(/*! ./rooms.component.css */ "./src/app/admin/rooms/rooms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_5__["FormResetService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/user-detail/user-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/users/user-detail/user-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/users/user-detail/user-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/users/user-detail/user-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userDetails\">\n  <h2>User details</h2>\n  <a class=\"btn btn-small btn-warning\" (click)=\"editUser()\" *ngIf=\"isAdminUser\">edit</a>\n  <a class=\"btn btn-small btn-warning\" (click)=\"deleteUser()\" *ngIf=\"isAdminUser\">delete</a>\n  <div *ngIf=\"message\" class=\"bg-warning p-5\">{{message}}</div>\n  <table>\n    <tr>\n      <td>id</td><td>{{user?.id}}</td>\n    </tr>\n    <tr>\n      <td>name</td><td>{{user?.name}}</td>\n    </tr>\n    <tr>\n      <td>Password</td><td><a class=\"btn btn-small btn-warning\" (click)=\"resetPassword()\" *ngIf=\"isAdminUser\">reset</a></td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/admin/users/user-detail/user-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/users/user-detail/user-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");






var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(dataService, router, authService) {
        this.dataService = dataService;
        this.router = router;
        this.authService = authService;
        this.dataChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.message = '';
        this.isAdminUser = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.setUpRole();
        if (this.authService.role === 'ADMIN') {
            this.isAdminUser = true;
        }
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next === 'ADMIN') {
                _this.isAdminUser = true;
            }
            else {
                _this.isAdminUser = false;
            }
        });
    };
    UserDetailComponent.prototype.editUser = function () {
        console.log(this.user.id);
        this.router.navigate(['admin', 'users'], { queryParams: { action: 'edit', id: +this.user.id } });
    };
    UserDetailComponent.prototype.deleteUser = function () {
        var _this = this;
        var result = confirm('Are you sure you wish to delete this user?');
        if (result) {
            this.message = 'Deleting User...';
            this.dataService.deleteUser(this.user.id).subscribe(function (next) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'users']);
            }, function (error) { return _this.message = 'Sorry this user cannot be deleted at this time!'; });
        }
    };
    UserDetailComponent.prototype.resetPassword = function () {
        var _this = this;
        this.message = 'please wait...';
        this.dataService.resetUserPassword(this.user.id).subscribe(function (next) { return _this.message = 'Password is reset'; }, function (error) { return _this.message = 'Sorry, Something went wrong'; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_User__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], UserDetailComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserDetailComponent.prototype, "dataChangeEvent", void 0);
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/admin/users/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/admin/users/user-detail/user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/user-edit/user-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/users/user-edit/user-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched{\r\n    border: 1.5px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/users/user-edit/user-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/users/user-edit/user-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{user.id==null? 'Add': 'Edit'}} User</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n\n<form #userForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"user name\" [(ngModel)]=\"formUser.name\" name=\"name\" \n    required #nameField=\"ngModel\" (change)=\"checkNameIsValid()\">\n    <div *ngIf=\"nameField.touched&& nameField.invalid\" class=\"alert alert-danger\">Name is required</div>\n    <div *ngIf=\"nameField.touched&& !nameIsValid\" class=\"alert alert-danger\">Name cannot be blank</div>\n\n  </div>\n\n  <div class=\"form-group\" *ngIf=\"user.id==null\"> <!-- only show this field on adding a user -->\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\" name=\"password\" \n    [(ngModel)]=\"password\" (change)=\"checkPasswordIsValid()\" required #pass1=\"ngModel\">\n    <div class=\"alert alert-danger\" *ngIf=\"pass1.touched && pass1.invalid\">Password Required</div>\n    <div class=\"alert alert-danger\" *ngIf=\"pass1.touched && !passwordAreValid\">Password Can not be blank</div>\n    \n    <label for=\"password2\">Repeat Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password2\" placeholder=\"password\" name=\"password2\" \n    [(ngModel)]=\"password2\" (change)=\"checkPasswordIsValid()\" required #pass2=\"ngModel\">\n    <div class=\"alert alert-danger\" *ngIf=\"pass2.touched && !passwordMatch\">Password must match</div>\n  </div>\n  \n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\" [disabled]=\"userForm.invalid || !nameIsValid || !passwordAreValid || !passwordMatch\">Save</button>\n</form>\n"

/***/ }),

/***/ "./src/app/admin/users/user-edit/user-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/users/user-edit/user-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/form-reset.service */ "./src/app/form-reset.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");






var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(dataService, router, formResetService) {
        this.dataService = dataService;
        this.router = router;
        this.formResetService = formResetService;
        this.dataChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nameIsValid = false;
        this.passwordAreValid = false;
        this.passwordMatch = false;
    }
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.userResetSubscription.unsubscribe();
    };
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeForm();
        this.userResetSubscription = this.formResetService.resetUserFormEvent.subscribe(function (user) {
            _this.user = user;
            _this.initializeForm();
        });
    };
    UserEditComponent.prototype.initializeForm = function () {
        this.formUser = Object.assign({}, this.user);
        this.checkNameIsValid();
        this.checkPasswordIsValid();
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = 'Saving...';
        if (this.formUser.id == null) {
            this.dataService.addUser(this.formUser, this.password).subscribe(function (user) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'users'], { queryParams: { action: 'view', id: user.id } });
            }, function (error) {
                _this.message = 'Something went wrong and the data wasn\'t saved. Please try again.';
            });
        }
        else {
            this.dataService.updateUser(this.formUser).subscribe(function (user) {
                _this.dataChangeEvent.emit();
                _this.router.navigate(['admin', 'users'], { queryParams: { action: 'view', id: user.id } });
            }, function (error) {
                _this.message = 'Something went wrong and the data wasn\'t saved. Please try again.';
            });
        }
    };
    UserEditComponent.prototype.checkNameIsValid = function () {
        if (this.formUser.name) {
            this.nameIsValid = this.formUser.name.trim().length > 0;
        }
        else {
            this.nameIsValid = false;
        }
    };
    UserEditComponent.prototype.checkPasswordIsValid = function () {
        if (this.formUser.id == null) {
            this.passwordMatch = this.password === this.password2;
            if (this.password) {
                this.passwordAreValid = this.password.trim().length > 0;
            }
            else {
                this.passwordAreValid = false;
            }
        }
        else {
            this.passwordMatch = true;
            this.passwordAreValid = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserEditComponent.prototype, "dataChangeEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_model_User__WEBPACK_IMPORTED_MODULE_5__["User"])
    ], UserEditComponent.prototype, "user", void 0);
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/admin/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/admin/users/user-edit/user-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_4__["FormResetService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/users/users.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Users Admin</h1>\n<a class=\"btn btn-warning mb-3\" (click)=\"addUser()\" *ngIf=\"isAdminUser\">add</a>\n<div class=\"row\">\n  <div class=\"col-6\">\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th></th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\"> <!-- repeat this tr for each user -->\n        <td>{{user.id}}</td>\n        <td>{{user.name}}</td>\n        <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"selectUser(user.id)\">view</button></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"loadingData\">{{message}}</div>\n  <div class=\"col-6\">\n    <app-user-detail *ngIf=\"action==='view'\" [user]=\"selectedUser\" (dataChangeEvent)=\"loadData()\"></app-user-detail>\n    <app-user-edit *ngIf=\"action==='edit' || action==='add'\" [user]=\"selectedUser\" (dataChangeEvent)=\"loadData()\"></app-user-edit>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/form-reset.service */ "./src/app/form-reset.service.ts");
/* harmony import */ var src_app_model_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/User */ "./src/app/model/User.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(dataService, router, route, formResetService, authService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.formResetService = formResetService;
        this.authService = authService;
        this.message = 'Loading user data.... Please wait';
        this.loadingData = true;
        this.isAdminUser = false;
    }
    UsersComponent.prototype.loadData = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (next) {
            _this.users = next;
            _this.loadingData = false;
            _this.processingParam();
        }, function (error) {
            _this.message = 'An error occur please contact support';
        });
    };
    UsersComponent.prototype.processingParam = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var id = params['id'];
            _this.action = params['action'];
            if (id) {
                _this.selectedUser = _this.users.find(function (user) { return user.id === +id; });
            }
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        if (this.authService.role === 'ADMIN') {
            this.isAdminUser = true;
        }
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next === 'ADMIN') {
                _this.isAdminUser = true;
            }
            else {
                _this.isAdminUser = false;
            }
        });
    };
    UsersComponent.prototype.selectUser = function (id) {
        this.router.navigate(['admin', 'users'], { queryParams: { id: id, action: 'view' } });
    };
    UsersComponent.prototype.addUser = function () {
        this.selectedUser = new src_app_model_User__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
        this.formResetService.resetUserFormEvent.emit(this.selectedUser);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/admin/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_form_reset_service__WEBPACK_IMPORTED_MODULE_5__["FormResetService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-menu></app-menu>\n  <router-outlet></router-outlet>\n</div>"

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
        this.title = 'RoomBookingClient';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/rooms/rooms.component */ "./src/app/admin/rooms/rooms.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_rooms_room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/rooms/room-detail/room-detail.component */ "./src/app/admin/rooms/room-detail/room-detail.component.ts");
/* harmony import */ var _admin_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/users/user-detail/user-detail.component */ "./src/app/admin/users/user-detail/user-detail.component.ts");
/* harmony import */ var _admin_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/users/user-edit/user-edit.component */ "./src/app/admin/users/user-edit/user-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/rooms/room-edit/room-edit.component */ "./src/app/admin/rooms/room-edit/room-edit.component.ts");
/* harmony import */ var _calendar_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar/edit-booking/edit-booking.component */ "./src/app/calendar/edit-booking/edit-booking.component.ts");
/* harmony import */ var _prefetch_rooms_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./prefetch-rooms.service */ "./src/app/prefetch-rooms.service.ts");
/* harmony import */ var _prefetch_users_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./prefetch-users.service */ "./src/app/prefetch-users.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_route_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth-route-guard.service */ "./src/app/auth-route-guard.service.ts");





















var routes = [
    { path: 'admin/users', component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"], canActivate: [_auth_route_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthRouteGuardService"]] },
    { path: 'admin/rooms', component: _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_7__["RoomsComponent"], canActivate: [_auth_route_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthRouteGuardService"]] },
    { path: '', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"] },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"] },
    { path: 'editBooking', component: _calendar_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"], resolve: { rooms: _prefetch_rooms_service__WEBPACK_IMPORTED_MODULE_17__["PrefetchRoomsService"], users: _prefetch_users_service__WEBPACK_IMPORTED_MODULE_18__["PrefetchUsersService"] }, canActivate: [_auth_route_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthRouteGuardService"]] },
    { path: 'addBooking', component: _calendar_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"], resolve: { rooms: _prefetch_rooms_service__WEBPACK_IMPORTED_MODULE_17__["PrefetchRoomsService"], users: _prefetch_users_service__WEBPACK_IMPORTED_MODULE_18__["PrefetchUsersService"] }, canActivate: [_auth_route_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthRouteGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
                _admin_rooms_rooms_component__WEBPACK_IMPORTED_MODULE_7__["RoomsComponent"],
                _admin_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                _admin_rooms_room_detail_room_detail_component__WEBPACK_IMPORTED_MODULE_11__["RoomDetailComponent"],
                _admin_users_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
                _admin_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserEditComponent"],
                _admin_rooms_room_edit_room_edit_component__WEBPACK_IMPORTED_MODULE_15__["RoomEditComponent"],
                _calendar_edit_booking_edit_booking_component__WEBPACK_IMPORTED_MODULE_16__["EditBookingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-route-guard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth-route-guard.service.ts ***!
  \*********************************************/
/*! exports provided: AuthRouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouteGuardService", function() { return AuthRouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var AuthRouteGuardService = /** @class */ (function () {
    function AuthRouteGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthRouteGuardService.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['login'], { queryParams: { requested: state.url } });
        }
        return this.authService.isAuthenticated;
    };
    AuthRouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthRouteGuardService);
    return AuthRouteGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(dataservice) {
        this.dataservice = dataservice;
        this.isAuthenticated = false;
        this.authenticationResultEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.roleSetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkIfAlreadyAuthenticated();
    }
    AuthService.prototype.authenticate = function (name, password) {
        var _this = this;
        this.dataservice.validateUser(name, password).subscribe(function (next) {
            _this.setUpRole();
            _this.isAuthenticated = true;
            _this.authenticationResultEvent.emit(true);
        }, function (error) {
            _this.isAuthenticated = false;
            _this.authenticationResultEvent.emit(false);
        });
    };
    AuthService.prototype.setUpRole = function () {
        var _this = this;
        this.dataservice.getRole().subscribe(function (next) {
            _this.role = next.role;
            _this.roleSetEvent.emit(next.role);
        });
    };
    AuthService.prototype.checkIfAlreadyAuthenticated = function () {
        var _this = this;
        this.dataservice.getRole().subscribe(function (next) {
            console.log(next.role);
            if (next.role !== '') {
                _this.role = next.role;
                _this.roleSetEvent.emit(next.role);
                _this.isAuthenticated = true;
                console.log(_this.isAuthenticated);
                _this.authenticationResultEvent.emit(true);
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.dataservice.logout().subscribe();
        this.isAuthenticated = false;
        this.authenticationResultEvent.emit(false);
        this.roleSetEvent.emit('');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-secondary{\r\n    background-color: darkslategrey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Utc2Vjb25kYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Room Booking System</h1>\r\n\r\n<h2>The following meetings are taking place on: <input type=\"date\" [(ngModel)]=\"selectedDate\" name=\"selectedDate\" (change)=\"dateChange()\" /></h2>\r\n\r\n<a class=\"btn btn-primary mt-3 mb-5\" (click)=\"addBooking()\" *ngIf=\"isAdminUser\">New Booking</a>\r\n<div *ngIf=\"message\">{{message}}</div>\r\n<div *ngIf=\"dataLoaded\">\r\n<!-- only show this h3 if there are no bookings! -->\r\n  <h3 class=\"mt-5\" *ngIf=\"bookings.length===0\">There are no meetings currently scheduled for this date.</h3>\r\n\r\n  <div class=\"row row-striped\" *ngFor=\"let booking of bookings\"> <!-- repeat this div for each booking -->\r\n    <div class=\"col-2 text-right\">\r\n      <h1 class=\"display-4\"><span class=\"badge badge-secondary\">{{booking.getDateAsDate() | date:'dd'}}</span></h1>\r\n      <h2>{{booking.getDateAsDate() | date:'MMM'}}</h2>\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <h3 class=\"text-uppercase\"><strong>{{booking.title}}</strong></h3>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\"><i class=\"fa fa-calendar-o\" aria-hidden=\"true\"></i>{{booking.getDateAsDate() | date:'EEE'}}</li>\r\n        <li class=\"list-inline-item\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>{{booking.startTime}} - {{booking.endTime}}</li>\r\n        <li class=\"list-inline-item\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>{{booking.room.name}}</li>\r\n      </ul>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <p class=\"mb-0\">Booked by : {{booking.user.name}}</p>\r\n          <p class=\"mb-0\">Room layout: {{booking.layout}}</p>\r\n          <p>Participants: {{booking.participants}}</p>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <a class=\"btn btn-warning\" (click)=\"editBooking(booking.id)\" *ngIf=\"isAdminUser\">Amend</a>\r\n          <a class=\"btn btn-danger\" (click)=\"deleteBooking(booking.id)\" *ngIf=\"isAdminUser\">Cancel</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p class=\"mt-5\">The design of this page is taken from <a href=\"https://bootsnipp.com/snippets/VgzeR\">https://bootsnipp.com/snippets/VgzeR</a></p>\r\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(dataService, router, route, authService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.dataLoaded = false;
        this.message = '';
        this.isAdminUser = false;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        if (this.authService.role === 'ADMIN') {
            this.isAdminUser = true;
        }
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next === 'ADMIN') {
                _this.isAdminUser = true;
            }
            else {
                _this.isAdminUser = false;
            }
        });
    };
    CalendarComponent.prototype.loadData = function () {
        var _this = this;
        this.message = 'Loading data....';
        this.route.queryParams.subscribe(function (params) {
            _this.selectedDate = params['date'];
            if (!_this.selectedDate) {
                _this.selectedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-IN');
            }
            _this.dataService.getBookings(_this.selectedDate).subscribe(function (next) {
                _this.bookings = next;
                _this.dataLoaded = true;
                _this.message = '';
            }, function (error) { return _this.message = 'Sorry something wrong try again'; });
        });
    };
    CalendarComponent.prototype.editBooking = function (id) {
        this.router.navigate(['editBooking'], { queryParams: { id: id } });
    };
    CalendarComponent.prototype.addBooking = function () {
        this.router.navigate(['addBooking']);
    };
    CalendarComponent.prototype.deleteBooking = function (id) {
        var _this = this;
        var result = confirm('Are you sure you wish to delete this Booking?');
        if (result) {
            this.message = 'Deleting please wait...';
            this.dataService.deleteBooking(id).subscribe(function (next) {
                _this.message = '';
                _this.loadData();
            }, function (error) {
                _this.message = 'Sorry there is problem in deleting the item';
            });
        }
    };
    CalendarComponent.prototype.dateChange = function () {
        this.router.navigate([''], { queryParams: { date: this.selectedDate } });
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/edit-booking/edit-booking.component.css":
/*!******************************************************************!*\
  !*** ./src/app/calendar/edit-booking/edit-booking.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2VkaXQtYm9va2luZy9lZGl0LWJvb2tpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/calendar/edit-booking/edit-booking.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/edit-booking/edit-booking.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{booking?.id == null ? 'Add' : 'Edit'}} Booking</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n<form *ngIf=\"dataLoaded\">\n  <div class=\"row\">\n    <div class=\"form-group col-4\">\n      <label for=\"date\">Date</label>\n      <input type=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"booking.date\" name=\"date\">\n    </div>\n\n    <div class=\"form-group col-4\">\n      <label for=\"startTime\">Start time</label>\n      <input type=\"time\" class=\"form-control\" id=\"startTime\" [(ngModel)]=\"booking.startTime\" name=\"startTime\">\n    </div>\n\n    <div class=\"form-group col-4\">\n      <label for=\"endTime\">End time</label>\n      <input type=\"time\" class=\"form-control\" id=\"endTime\" [(ngModel)]=\"booking.endTime\" name=\"endTime\">\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"form-group col-5\">\n      <label for=\"room\">Room</label>\n      <select class=\"form-control\" id=\"room\" [(ngModel)]=\"booking.room\" name=\"room\">\n        <!-- repeat the option for each room -->\n        <option *ngFor=\"let room of rooms\" [ngValue]=\"room\">{{room.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-5\">\n      <label for=\"layout\">Layout</label>\n      <select class=\"form-control\" id=\"layout\" [(ngModel)]=\"booking.layout\" name=\"layout\">\n        <!-- repeat the option for each layout -->\n        <option *ngFor=\"let layout of layouts\" [ngValue]=\"layoutEnum[layout]\">{{layoutEnum[layout]}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-2\">\n      <label for=\"participants\">Participants</label>\n      <input type=\"number\" class=\"form-control\" id=\"participants\" [(ngModel)]=\"booking.participants\" name=\"participants\">\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n    <div class=\"form-group col-6\">\n      <label for=\"layout\">User</label>\n      <select class=\"form-control\" id=\"user\" [(ngModel)]=\"booking.user\" name=\"user\">\n        <!-- repeat the option for each user -->\n        <option *ngFor=\"let user of users\" [ngValue]=\"user\">{{user.name}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group col-6\">\n      <label for=\"title\">Meeting title</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"booking.title\" name=\"title\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/calendar/edit-booking/edit-booking.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/calendar/edit-booking/edit-booking.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookingComponent", function() { return EditBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
/* harmony import */ var src_app_model_Booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Booking */ "./src/app/model/Booking.ts");
/* harmony import */ var src_app_model_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/Room */ "./src/app/model/Room.ts");







var EditBookingComponent = /** @class */ (function () {
    function EditBookingComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.layouts = Object.keys(src_app_model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"]);
        this.layoutEnum = src_app_model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"];
        this.dataLoaded = false;
        this.message = 'please wait...';
    }
    EditBookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rooms = this.route.snapshot.data['rooms'];
        this.users = this.route.snapshot.data['users'];
        var id = this.route.snapshot.queryParams['id'];
        if (id) {
            this.dataService.getBooking(+id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (booking) {
                booking.room = _this.rooms.find(function (room) { return room.id === booking.room.id; });
                booking.user = _this.users.find(function (user) { return user.id === booking.user.id; });
                return booking;
            }))
                .subscribe(function (next) {
                _this.booking = next;
                _this.dataLoaded = true;
                _this.message = '';
            });
        }
        else {
            this.booking = new src_app_model_Booking__WEBPACK_IMPORTED_MODULE_5__["Booking"]();
            this.dataLoaded = true;
            this.message = '';
        }
    };
    EditBookingComponent.prototype.save = function () {
        var _this = this;
        if (this.booking.id != null) {
            this.dataService.saveBooking(this.booking).subscribe(function (next) { return _this.router.navigate(['']); });
        }
        else {
            this.dataService.addBooking(this.booking).subscribe(function (next) { return _this.router.navigate(['']); });
        }
    };
    EditBookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-booking',
            template: __webpack_require__(/*! ./edit-booking.component.html */ "./src/app/calendar/edit-booking/edit-booking.component.html"),
            styles: [__webpack_require__(/*! ./edit-booking.component.css */ "./src/app/calendar/edit-booking/edit-booking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditBookingComponent);
    return EditBookingComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_Booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/Booking */ "./src/app/model/Booking.ts");
/* harmony import */ var _model_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/Room */ "./src/app/model/Room.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/User */ "./src/app/model/User.ts");








var DataService = /** @class */ (function () {
    function DataService() {
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].restUrl);
        this.rooms = new Array();
        var room1 = new _model_Room__WEBPACK_IMPORTED_MODULE_6__["Room"]();
        room1.id = 1;
        room1.name = 'First Room';
        room1.location = 'First Floor';
        var capacity1 = new _model_Room__WEBPACK_IMPORTED_MODULE_6__["LayoutCapacity"]();
        capacity1.layout = _model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"].THEATER;
        capacity1.capacity = 50;
        var capacity2 = new _model_Room__WEBPACK_IMPORTED_MODULE_6__["LayoutCapacity"]();
        capacity2.layout = _model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"].USHAPE;
        capacity2.capacity = 20;
        room1.capacities.push(capacity1);
        room1.capacities.push(capacity2);
        var room2 = new _model_Room__WEBPACK_IMPORTED_MODULE_6__["Room"]();
        room2.id = 2;
        room2.name = 'Second Room';
        room2.location = 'Third Floor';
        var capacity3 = new _model_Room__WEBPACK_IMPORTED_MODULE_6__["LayoutCapacity"]();
        capacity3.layout = _model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"].THEATER;
        capacity3.capacity = 60;
        room2.capacities.push(capacity3);
        this.rooms.push(room1);
        this.rooms.push(room2);
        this.users = new Array();
        var user1 = new _model_User__WEBPACK_IMPORTED_MODULE_7__["User"]();
        user1.id = 1;
        user1.name = 'Mari';
        var user2 = new _model_User__WEBPACK_IMPORTED_MODULE_7__["User"]();
        user2.id = 2;
        user2.name = 'Raj';
        this.users.push(user1, user2);
        this.bookings = new Array();
        var booking1 = new _model_Booking__WEBPACK_IMPORTED_MODULE_5__["Booking"]();
        booking1.id = 1;
        booking1.room = room1;
        booking1.user = user1;
        booking1.layout = _model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"].USHAPE;
        booking1.title = 'Confrence Meeting';
        booking1.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-IN');
        booking1.startTime = '11:30';
        booking1.endTime = '12:30';
        booking1.participants = 12;
        var booking2 = new _model_Booking__WEBPACK_IMPORTED_MODULE_5__["Booking"]();
        booking2.id = 2;
        booking2.room = room2;
        booking2.user = user2;
        booking2.layout = _model_Room__WEBPACK_IMPORTED_MODULE_6__["Layout"].THEATER;
        booking2.title = 'Inauguration Meeting';
        booking2.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en-IN');
        booking2.startTime = '10:30';
        booking2.endTime = '11:30';
        booking2.participants = 10;
        this.bookings.push(booking1, booking2);
    }
    DataService.prototype.getRooms = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.rooms);
    };
    DataService.prototype.getUsers = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.users);
    };
    DataService.prototype.updateUser = function (user) {
        var originalUser = this.users.find(function (u) { return u.id === user.id; });
        originalUser.name = user.name;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(originalUser);
    };
    DataService.prototype.addUser = function (newUser, password) {
        var id = 0;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id > id) {
                id = user.id;
            }
        }
        newUser.id = id + 1;
        this.users.push(newUser);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(newUser);
    };
    DataService.prototype.deleteUser = function (userId) {
        var user = this.users.find(function (u) { return u.id === userId; });
        this.users.splice(this.users.indexOf(user), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    DataService.prototype.resetUserPassword = function (userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    DataService.prototype.updateRoom = function (room) {
        var originalRoom = this.rooms.find(function (r) { return r.id === room.id; });
        originalRoom.name = room.name;
        originalRoom.location = room.location;
        originalRoom.capacities = room.capacities;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(originalRoom);
    };
    DataService.prototype.addRoom = function (newroom) {
        var id = 0;
        for (var _i = 0, _a = this.rooms; _i < _a.length; _i++) {
            var room = _a[_i];
            if (room.id > id) {
                id = room.id;
            }
        }
        newroom.id = id + 1;
        this.rooms.push(newroom);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(newroom);
    };
    DataService.prototype.deleteRoom = function (id) {
        var room = this.rooms.find(function (r) { return r.id === id; });
        this.rooms.splice(this.rooms.indexOf(room), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    DataService.prototype.getBookings = function (date) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.bookings.filter(function (b) { return b.date === date; }));
    };
    DataService.prototype.getBooking = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.bookings.find(function (book) { return book.id === id; }));
    };
    DataService.prototype.saveBooking = function (booking) {
        var existingBooking = this.bookings.find(function (b) { return b.id === booking.id; });
        existingBooking.date = booking.date;
        existingBooking.startTime = booking.startTime;
        existingBooking.endTime = booking.endTime;
        existingBooking.layout = booking.layout;
        existingBooking.participants = booking.participants;
        existingBooking.room = booking.room;
        existingBooking.title = booking.title;
        existingBooking.user = booking.user;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(existingBooking);
    };
    DataService.prototype.addBooking = function (newBooking) {
        var id = 0;
        for (var _i = 0, _a = this.bookings; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (id < booking.id) {
                id = booking.id;
            }
        }
        newBooking.id = id + 1;
        this.bookings.push(newBooking);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(newBooking);
    };
    DataService.prototype.deleteBooking = function (id) {
        var booking = this.bookings.find(function (b) { return b.id === id; });
        this.bookings.splice(this.bookings.indexOf(booking), 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
    };
    DataService.prototype.validateUser = function (name, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ result: "ok" });
    };
    DataService.prototype.getRole = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ role: 'ADMIN' });
    };
    DataService.prototype.logout = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('');
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/form-reset.service.ts":
/*!***************************************!*\
  !*** ./src/app/form-reset.service.ts ***!
  \***************************************/
/*! exports provided: FormResetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormResetService", function() { return FormResetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormResetService = /** @class */ (function () {
    function FormResetService() {
        this.resetRoomFormEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetUserFormEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormResetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormResetService);
    return FormResetService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n\n<div class=\"bg-warning p-5\" *ngIf=\"message\">{{message}}</div>\n\n<form #userForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"user name\" [(ngModel)]=\"name\" name=\"name\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Login</button>\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.message = '';
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.authenticationResultEvent.subscribe(function (next) {
            if (next) {
                // TODO: add navigation
                var url = _this.route.snapshot.queryParams['requested'];
                _this.router.navigateByUrl(url);
            }
            else {
                _this.message = 'Username and password are not recognised - try again. ';
            }
        });
        this.authService.checkIfAlreadyAuthenticated();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.authService.authenticate(this.name, this.password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" (click)=\"navigateToCalendar()\">Room Booking</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"navigateToCalendar()\">Calendar</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Admin\n        </a>\n        <div class=\"dropdown-content\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" (click)=\"navigateToRoomsAdmin()\">Rooms</a>\n          <a class=\"dropdown-item\" (click)=\"navigateToUsersAdmin()\" >Users</a>\n        </div>\n      </li>\n      <li class=\"nav-item active\" *ngIf=\"userIsLogedIn\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userIsLogedIn = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isAuthenticated)
            this.userIsLogedIn = true;
        this.authService.roleSetEvent.subscribe(function (next) {
            if (next !== '') {
                _this.userIsLogedIn = true;
            }
            else {
                _this.userIsLogedIn = false;
            }
        });
    };
    MenuComponent.prototype.navigateToRoomsAdmin = function () {
        this.router.navigate(['admin', 'rooms']);
    };
    MenuComponent.prototype.navigateToUsersAdmin = function () {
        this.router.navigate(['admin', 'users']);
    };
    MenuComponent.prototype.navigateToCalendar = function () {
        this.router.navigate(['']);
    };
    MenuComponent.prototype.logout = function () {
        this.authService.logout();
        this.navigateToCalendar();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/model/Booking.ts":
/*!**********************************!*\
  !*** ./src/app/model/Booking.ts ***!
  \**********************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Room */ "./src/app/model/Room.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/app/model/User.ts");


var Booking = /** @class */ (function () {
    function Booking() {
    }
    Booking.prototype.getDateAsDate = function () {
        return new Date(this.date);
    };
    Booking.fromHttp = function (booking) {
        var newBooking = new Booking();
        newBooking.id = booking.id;
        newBooking.room = _Room__WEBPACK_IMPORTED_MODULE_0__["Room"].fromHttp(booking.room);
        newBooking.user = _User__WEBPACK_IMPORTED_MODULE_1__["User"].fromHttp(booking.user);
        newBooking.layout = _Room__WEBPACK_IMPORTED_MODULE_0__["Layout"][booking.layout];
        newBooking.date = booking.date;
        newBooking.title = booking.title;
        newBooking.startTime = booking.startTime;
        newBooking.endTime = booking.endTime;
        newBooking.participants = booking.participants;
        return newBooking;
    };
    return Booking;
}());



/***/ }),

/***/ "./src/app/model/Room.ts":
/*!*******************************!*\
  !*** ./src/app/model/Room.ts ***!
  \*******************************/
/*! exports provided: Room, LayoutCapacity, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutCapacity", function() { return LayoutCapacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
var Room = /** @class */ (function () {
    function Room() {
        this.capacities = new Array();
    }
    Room.fromHttp = function (room) {
        var newRoom = new Room();
        newRoom.id = room.id;
        newRoom.name = room.name;
        newRoom.location = room.location;
        newRoom.capacities = new Array();
        for (var _i = 0, _a = room.capacities; _i < _a.length; _i++) {
            var lc = _a[_i];
            newRoom.capacities.push(LayoutCapacity.fromHttp(lc));
        }
        return newRoom;
    };
    return Room;
}());

var LayoutCapacity = /** @class */ (function () {
    function LayoutCapacity() {
    }
    LayoutCapacity.fromHttp = function (lc) {
        var newlc = new LayoutCapacity();
        newlc.capacity = lc.capacity;
        newlc.layout = Layout[lc.layout];
        return newlc;
    };
    return LayoutCapacity;
}());

var Layout;
(function (Layout) {
    Layout["THEATER"] = "Theater";
    Layout["USHAPE"] = "U-Shape";
    Layout["BOARD"] = "Board Meating";
})(Layout || (Layout = {}));


/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.fromHttp = function (user) {
        var newUser = new User();
        newUser.id = user.id;
        newUser.name = user.name;
        return newUser;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Page you are looking for is not exists\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/prefetch-rooms.service.ts":
/*!*******************************************!*\
  !*** ./src/app/prefetch-rooms.service.ts ***!
  \*******************************************/
/*! exports provided: PrefetchRoomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefetchRoomsService", function() { return PrefetchRoomsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var PrefetchRoomsService = /** @class */ (function () {
    function PrefetchRoomsService(dataService) {
        this.dataService = dataService;
    }
    PrefetchRoomsService.prototype.resolve = function (route, state) {
        return this.dataService.getRooms();
    };
    PrefetchRoomsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PrefetchRoomsService);
    return PrefetchRoomsService;
}());



/***/ }),

/***/ "./src/app/prefetch-users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/prefetch-users.service.ts ***!
  \*******************************************/
/*! exports provided: PrefetchUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefetchUsersService", function() { return PrefetchUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var PrefetchUsersService = /** @class */ (function () {
    function PrefetchUsersService(dataService) {
        this.dataService = dataService;
    }
    PrefetchUsersService.prototype.resolve = function (route, state) {
        return this.dataService.getUsers();
    };
    PrefetchUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PrefetchUsersService);
    return PrefetchUsersService;
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
    production: false,
    restUrl: 'http://localhost:8080'
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

module.exports = __webpack_require__(/*! D:\Angular_Practice\RoomBookingClient\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map