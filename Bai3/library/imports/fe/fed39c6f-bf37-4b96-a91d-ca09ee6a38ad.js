"use strict";
cc._RF.push(module, 'fed39xvvzdLlqkdygnuajit', 'FireController');
// Script/FireController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var GameManager_1 = require("./GameManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FireController = /** @class */ (function (_super) {
    __extends(FireController, _super);
    function FireController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet = null;
        _this.fire_Point = null;
        return _this;
        // private Fire() {
        //     let bl = cc.instantiate(this.bullet);
        //     //console.log(bl.position.x, bl.position.y);
        //     bl.parent = cc.director.getScene();
        //     let fb = this.node.parent.parent.convertToNodeSpaceAR(this.fire_Point.parent.convertToWorldSpaceAR(this.fire_Point.position));
        //     //let fb = this.node.position;
        //     //console.log(fb.x,fb.y);
        //     //console.log(this.node.x, this.node.y);
        //     bl.setPosition(fb);
        //     //bl.position = this.fire_Point.position;
        //     //console.log(bl.x,bl.y);
        //     //let z = (this.node.right.y<0 ? - Math.acos(this.node.right.x): Math.acos(this.node.right.x))/Math.PI*180
        //     bl.rotation = this.node.rotation;
        //     //this.node.right
        // }
    }
    FireController.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        // kich hoat trinh quan ly vat ly
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
        // khoi tao su kien ban
    };
    FireController.prototype.OnKeyDown = function (event) {
        /*
        Nhan f de ban
        */
        switch (event.keyCode) {
            case cc.macro.KEY.f:
                this.node.parent.getComponent(GameManager_1.default).Fire();
                //console.log('fire');
                break;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], FireController.prototype, "bullet", void 0);
    __decorate([
        property(cc.Node)
    ], FireController.prototype, "fire_Point", void 0);
    FireController = __decorate([
        ccclass
    ], FireController);
    return FireController;
}(cc.Component));
exports.default = FireController;

cc._RF.pop();