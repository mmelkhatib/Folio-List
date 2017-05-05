"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var folio_service_1 = require("../../services/folio.service");
var FolioComponent = (function () {
    function FolioComponent(folioService) {
        var _this = this;
        this.folioService = folioService;
        this.folioService.getFolio()
            .subscribe(function (folio) {
            _this.folioitems = folio;
        });
    }
    FolioComponent.prototype.addFolioItem = function (event) {
        var _this = this;
        event.preventDefault();
        var newFolio = {
            title: this.title,
            body: this.body,
            imageUrl: this.imageUrl,
            isDone: false
        };
        this.folioService.addFolio(newFolio)
            .subscribe(function (folio) {
            console.log('newFolio');
            _this.folioitems.push(folio);
            _this.title = '';
            console.log('successfully added ' + _this.title + '!');
        });
    };
    FolioComponent.prototype.removeFolio = function (id) {
        var folioitems = this.folioitems;
        this.folioService.deleteFolio(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < folioitems.length; i++) {
                    if (folioitems[i]._id == id) {
                        folioitems.splice(i, 1);
                    }
                }
            }
        });
    };
    return FolioComponent;
}());
FolioComponent = __decorate([
    core_1.Component({
        selector: 'folio-list',
        templateUrl: './folio.component.html'
    }),
    __metadata("design:paramtypes", [folio_service_1.FolioService])
], FolioComponent);
exports.FolioComponent = FolioComponent;
//# sourceMappingURL=folio.component.js.map