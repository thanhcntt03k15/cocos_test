"use strict";
cc._RF.push(module, '8b714QCCpFPz5v60t1ENeJM', 'PlayerController');
// Script/PlayerController.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.m_Rotation = 0;
        _this.one_Shot = false;
        return _this;
        // onBeginContact(contact, selfCollider, otherCollider) {
        //     if (selfCollider.tag == 1) 
        //     {
        //         console.log("tank");
        //     }
        //     if (otherCollider.tag == 2)
        //     {
        //         console.log("enemy");
        //         otherCollider.node.destroy();
        //     }
        //         return;
        // }
    }
    PlayerController.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.m_Rotation = -10;
        this.speed = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    PlayerController.prototype.update = function (dt) {
        this.node.position = this.node.position.add(this.node.up.multiplyScalar(dt * this.speed));
        //this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.node.up.x * this.speed, this.node.up.y+ this.speed);
        this.node.angle = this.m_Rotation;
        //console.log(this.m_Rotation);
    };
    PlayerController.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.speed = 0;
                break;
            case cc.macro.KEY.s:
                this.speed = 0;
                break;
            case cc.macro.KEY.c:
                this.one_Shot = false;
        }
    };
    PlayerController.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.m_Rotation += 5;
                break;
            case cc.macro.KEY.d:
                this.m_Rotation -= 5;
                break;
            case cc.macro.KEY.w:
                this.speed += 100;
                break;
            case cc.macro.KEY.s:
                this.speed -= 100;
                break;
            case cc.macro.KEY.c:
                this.one_Shot = true;
        }
    };
    __decorate([
        property
    ], PlayerController.prototype, "speed", void 0);
    __decorate([
        property
    ], PlayerController.prototype, "m_Rotation", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

cc._RF.pop();