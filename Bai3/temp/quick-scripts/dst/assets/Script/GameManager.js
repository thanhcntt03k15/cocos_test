
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQXFFQztRQWxFVSxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUdoQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFtRHJDLENBQUM7SUE1Q0csMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUVqRixDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEksSUFBSSxDQUFDLE1BQU0sQ0FBQyxX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LENBQUMsQ0FBQztTQUV0RDtJQUNMLENBQUM7SUFqRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDbUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDa0I7SUFHdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ2U7SUFsQmhCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FxRS9CO0lBQUQsa0JBQUM7Q0FyRUQsQUFxRUMsQ0FyRXdDLEVBQUUsQ0FBQyxTQUFTLEdBcUVwRDtrQkFyRW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHVibGljIGJ1bGxldF9QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHB1YmxpYyBlbmVteV9QcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgZmlyZV9Qb2ludDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgcGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBlbmVteTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgZW5lbXlfUG9zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgYnVsbGV0O1xuXG4gICAgcHJpdmF0ZSBmaXJlX1BvaW50X1Bvc2l0aW9uO1xuXG4gICAgcHJpdmF0ZSBwbGF5ZXJfdmVsb2NpdHk6IGNjLlZlYzI7XG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucGxheWVyX3ZlbG9jaXR5ID0gdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk7XG5cbiAgICB9XG5cbiAgICBGaXJlKCkge1xuICAgICAgICB0aGlzLmJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0X1ByZWZhYik7XG4gICAgICAgIHRoaXMuYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5maXJlX1BvaW50X1Bvc2l0aW9uID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRoaXMuZmlyZV9Qb2ludC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuZmlyZV9Qb2ludC5wb3NpdGlvbikpO1xuICAgICAgICB0aGlzLmJ1bGxldC5zZXRQb3NpdGlvbih0aGlzLmZpcmVfUG9pbnRfUG9zaXRpb24pO1xuICAgICAgICB0aGlzLmJ1bGxldC5yb3RhdGlvbiA9IHRoaXMucGxheWVyLnJvdGF0aW9uO1xuICAgIH1cblxuICAgIHNlZWsodGFyZ2V0OiBjYy5WZWMyKTogY2MuVmVjMiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC54K1wiIFwiKyB0YXJnZXQueSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgZGVzaXJlZCA9IG5ldyBjYy5WZWMyKHRhcmdldC54IC0gdGhpcy5maXJlX1BvaW50X1Bvc2l0aW9uLngsIHRhcmdldC55IC0gdGhpcy5maXJlX1BvaW50X1Bvc2l0aW9uLnkpO1xuICAgICAgICBsZXQgc3RlZXJpbmcgPSBuZXcgY2MuVmVjMigpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHN0ZWVyaW5nLCBkZXNpcmVkLCB0aGlzLnBsYXllcl92ZWxvY2l0eSk7XG4gICAgICAgIHJldHVybiBzdGVlcmluZztcbiAgICB9XG4gICAgcm90YXRlKHRhcmdldDogY2MuVmVjMikge1xuICAgICAgICBsZXQgZGVzaXJlZCA9IG5ldyBjYy5WZWMyKHRhcmdldC54IC0gdGhpcy5maXJlX1BvaW50X1Bvc2l0aW9uLngsIHRhcmdldC55IC0gdGhpcy5maXJlX1BvaW50X1Bvc2l0aW9uLnkpO1xuICAgICAgICBsZXQgc3RlZXJpbmcgPSBuZXcgY2MuVmVjMigpO1xuICAgICAgICBjYy5WZWMyLnN1YnRyYWN0KHN0ZWVyaW5nLCBkZXNpcmVkLCB0aGlzLnBsYXllcl92ZWxvY2l0eSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY3VsYXRlZF9yb3RhdGUoZGVzaXJlZCwgc3RlZXJpbmcpO1xuICAgIH1cbiAgICBjYWN1bGF0ZWRfcm90YXRlKFZlYzE6IGNjLlZlYzIsIFZlYzI6IGNjLlZlYzIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcygoVmVjMS54ICogVmVjMi54ICsgVmVjMS55ICogVmVjMi55KSAvIChNYXRoLnNxcnQoVmVjMS54ICogVmVjMS54ICsgVmVjMS55ICogVmVjMS55KSAqXG4gICAgICAgICAgICBNYXRoLnNxcnQoVmVjMi54ICogVmVjMi54ICsgVmVjMi55ICogVmVjMi55KSkpXG4gICAgfVxuXG5cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBsZXQgc2VlazogY2MuVmVjMjtcbiAgICAgICAgaWYgKHRoaXMuZW5lbXkuYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgICAgICAgIHNlZWsgPSB0aGlzLnNlZWsodGhpcy5lbmVteS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gbmV3IGNjLlZlYzIoc2Vlay54LCBzZWVrLnkpO1xuICAgICAgICAgICAgdGhpcy5idWxsZXQucm90YXRlICs9IHRoaXMucm90YXRlKHRoaXMuZW5lbXkuZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvdGF0ZSh0aGlzLmVuZW15LmdldFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuIl19