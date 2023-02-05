"use strict";
cc._RF.push(module, 'b6439bs1ABFU5DVVuDmSe9X', 'GameManager');
// Script/GameManager.ts

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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet_Prefab = null;
        _this.enemy_Prefab = null;
        _this.fire_Point = null;
        _this.player = null;
        _this.enemy = null;
        _this.enemy_Pos = null;
        return _this;
    }
    GameManager.prototype.start = function () {
        this.player_velocity = this.player.getComponent(cc.RigidBody).linearVelocity;
    };
    GameManager.prototype.Fire = function () {
        this.bullet = cc.instantiate(this.bullet_Prefab);
        this.bullet.parent = this.node;
        this.fire_Point_Position = this.node.convertToNodeSpaceAR(this.fire_Point.parent.convertToWorldSpaceAR(this.fire_Point.position));
        this.bullet.setPosition(this.fire_Point_Position);
        this.bullet.rotation = this.player.rotation;
    };
    GameManager.prototype.seek = function (target) {
        console.log(target.x + " " + target.y);
        var desired = new cc.Vec2(target.x - this.fire_Point_Position.x, target.y - this.fire_Point_Position.y);
        var steering = new cc.Vec2();
        cc.Vec2.subtract(steering, desired, this.player_velocity);
        return steering;
    };
    GameManager.prototype.rotate = function (target) {
        var desired = new cc.Vec2(target.x - this.fire_Point_Position.x, target.y - this.fire_Point_Position.y);
        var steering = new cc.Vec2();
        cc.Vec2.subtract(steering, desired, this.player_velocity);
        return this.caculated_rotate(desired, steering);
    };
    GameManager.prototype.caculated_rotate = function (Vec1, Vec2) {
        return Math.acos((Vec1.x * Vec2.x + Vec1.y * Vec2.y) / (Math.sqrt(Vec1.x * Vec1.x + Vec1.y * Vec1.y) *
            Math.sqrt(Vec2.x * Vec2.x + Vec2.y * Vec2.y)));
    };
    GameManager.prototype.update = function (dt) {
        var seek;
        if (this.enemy.activeInHierarchy) {
            seek = this.seek(this.enemy.getPosition());
            this.bullet.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(seek.x, seek.y);
            this.bullet.rotate += this.rotate(this.enemy.getPosition());
            console.log(this.rotate(this.enemy.getPosition()));
        }
    };
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "bullet_Prefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameManager.prototype, "enemy_Prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "fire_Point", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "player", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "enemy", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "enemy_Pos", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();