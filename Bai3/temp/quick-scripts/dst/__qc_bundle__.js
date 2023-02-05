
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Bullet');
require('./assets/Script/EnemyController');
require('./assets/Script/FireController');
require('./assets/Script/GameManager');
require('./assets/Script/PlayerController');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/FireController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxGaXJlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjtBQUN0Riw2Q0FBd0M7QUFFbEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUFzREM7UUFuREcsWUFBTSxHQUFjLElBQUksQ0FBQztRQUd6QixnQkFBVSxHQUFZLElBQUksQ0FBRTs7UUF3QjVCLG1CQUFtQjtRQUVuQiw0Q0FBNEM7UUFDNUMsbURBQW1EO1FBRW5ELDBDQUEwQztRQUMxQyxxSUFBcUk7UUFDckkscUNBQXFDO1FBQ3JDLGdDQUFnQztRQUNoQywrQ0FBK0M7UUFHL0MsMEJBQTBCO1FBRTFCLGdEQUFnRDtRQUNoRCxnQ0FBZ0M7UUFHaEMsaUhBQWlIO1FBRWpILHdDQUF3QztRQUV4Qyx3QkFBd0I7UUFDeEIsSUFBSTtJQUNSLENBQUM7SUE5Q0csK0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLGlDQUFpQztRQUNqQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRSx1QkFBdUI7SUFFM0IsQ0FBQztJQUVELGtDQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ1g7O1VBRUU7UUFDRixRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbkIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xELHNCQUFzQjtnQkFFdEIsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2tEQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1U7SUFOWCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBc0RsQztJQUFELHFCQUFDO0NBdERELEFBc0RDLENBdEQyQyxFQUFFLENBQUMsU0FBUyxHQXNEdkQ7a0JBdERvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4vR2FtZU1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBidWxsZXQ6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBmaXJlX1BvaW50OiBjYy5Ob2RlID0gbnVsbCA7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8ga2ljaCBob2F0IHRyaW5oIHF1YW4gbHkgdmF0IGx5XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLk9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgLy8ga2hvaSB0YW8gc3Uga2llbiBiYW5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBPbktleURvd24oZXZlbnQpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIE5oYW4gZiBkZSBiYW5cclxuICAgICAgICAqL1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5mOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoR2FtZU1hbmFnZXIpLkZpcmUoKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2ZpcmUnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIEZpcmUoKSB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgbGV0IGJsID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coYmwucG9zaXRpb24ueCwgYmwucG9zaXRpb24ueSk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgYmwucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgIC8vICAgICBsZXQgZmIgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUih0aGlzLmZpcmVfUG9pbnQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmZpcmVfUG9pbnQucG9zaXRpb24pKTtcclxuICAgIC8vICAgICAvL2xldCBmYiA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGZiLngsZmIueSk7XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAvLyAgICAgYmwuc2V0UG9zaXRpb24oZmIpO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vYmwucG9zaXRpb24gPSB0aGlzLmZpcmVfUG9pbnQucG9zaXRpb247XHJcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhibC54LGJsLnkpO1xyXG4gICAgICAgIFxyXG5cclxuICAgIC8vICAgICAvL2xldCB6ID0gKHRoaXMubm9kZS5yaWdodC55PDAgPyAtIE1hdGguYWNvcyh0aGlzLm5vZGUucmlnaHQueCk6IE1hdGguYWNvcyh0aGlzLm5vZGUucmlnaHQueCkpL01hdGguUEkqMTgwXHJcbiAgICAgXHJcbiAgICAvLyAgICAgYmwucm90YXRpb24gPSB0aGlzLm5vZGUucm90YXRpb247XHJcblxyXG4gICAgLy8gICAgIC8vdGhpcy5ub2RlLnJpZ2h0XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0374f+ijWhMYYACeb/JdX9K', 'Bullet');
// Script/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bullet.prototype.start = function () {
        //cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.node.up.x * 400, this.node.up.y * 400);
    };
    Bullet.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        console.log(selfCollider.tag);
        if (otherCollider.tag == 2) {
            otherCollider.node.destroy();
            this.node.destroy();
            console.log('contact');
        }
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCdWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBbUJBLENBQUM7SUFqQkcsc0JBQUssR0FBTDtRQUNJLG1EQUFtRDtRQUNuRCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVsSCxDQUFDO0lBRUQsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUMxQjtZQUNJLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBRTFCO0lBQ0wsQ0FBQztJQWxCZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW1CMUI7SUFBRCxhQUFDO0NBbkJELEFBbUJDLENBbkJtQyxFQUFFLENBQUMsU0FBUyxHQW1CL0M7a0JBbkJvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBFbmVteUNvbnRyb2xsZXIgZnJvbSBcIi4vRW5lbXlDb250cm9sbGVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy9jYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IG5ldyBjYy5WZWMyKHRoaXMubm9kZS51cC54ICogNDAwLCB0aGlzLm5vZGUudXAueSAqIDQwMCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxmQ29sbGlkZXIudGFnKTtcbiAgICAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG90aGVyQ29sbGlkZXIubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '963e8sd27tEDLT8rGDXT8mb', 'EnemyController');
// Script/EnemyController.ts

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
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmVteUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7O0lBRUEsQ0FBQztJQUZvQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBRW5DO0lBQUQsc0JBQUM7Q0FGRCxBQUVDLENBRjRDLEVBQUUsQ0FBQyxTQUFTLEdBRXhEO2tCQUZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxQbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBeUVDO1FBdEVXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZ0JBQVUsR0FBVSxDQUFDLENBQUU7UUFFeEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7UUFtRGpDLHlEQUF5RDtRQUV6RCxrQ0FBa0M7UUFDbEMsUUFBUTtRQUNSLCtCQUErQjtRQUUvQixRQUFRO1FBQ1Isa0NBQWtDO1FBQ2xDLFFBQVE7UUFDUixnQ0FBZ0M7UUFDaEMsd0NBQXdDO1FBQ3hDLFFBQVE7UUFDUixrQkFBa0I7UUFDbEIsSUFBSTtJQUVSLENBQUM7SUFqRUcsaUNBQU0sR0FBTjtRQUVJLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUvRSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6Riw2SEFBNkg7UUFFN0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQywrQkFBK0I7SUFDbkMsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxLQUFLO1FBQ1QsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2xCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsb0NBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDbEIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDO2dCQUNsQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLElBQUcsR0FBRyxDQUFDO2dCQUNqQixNQUFNO1lBQ1YsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxRQUFRLEdBQUUsSUFBSSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQXRERDtRQURDLFFBQVE7bURBQ2lCO0lBRTFCO1FBREMsUUFBUTt3REFDc0I7SUFMZCxnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXlFcEM7SUFBRCx1QkFBQztDQXpFRCxBQXlFQyxDQXpFNkMsRUFBRSxDQUFDLFNBQVMsR0F5RXpEO2tCQXpFb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgbV9Sb3RhdGlvbjogbnVtYmVyID0wIDtcclxuXHJcbiAgICBwdWJsaWMgb25lX1Nob3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1fUm90YXRpb24gPSAtMTA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbj10aGlzLm5vZGUucG9zaXRpb24uYWRkKHRoaXMubm9kZS51cC5tdWx0aXBseVNjYWxhciggZHQgKiB0aGlzLnNwZWVkKSk7XHJcbiAgICAgICAgLy90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBuZXcgY2MuVmVjMih0aGlzLm5vZGUudXAueCAqIHRoaXMuc3BlZWQsIHRoaXMubm9kZS51cC55KyB0aGlzLnNwZWVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5tX1JvdGF0aW9uO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5tX1JvdGF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGV2ZW50KXtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uZV9TaG90ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihldmVudCl7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMubV9Sb3RhdGlvbiArPSA1O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1fUm90YXRpb24gLT0gNTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS53OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuczpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0xMDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYzpcclxuICAgICAgICAgICAgICAgIHRoaXMub25lX1Nob3Q9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKSB7XHJcblxyXG4gICAgLy8gICAgIGlmIChzZWxmQ29sbGlkZXIudGFnID09IDEpIFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJ0YW5rXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKG90aGVyQ29sbGlkZXIudGFnID09IDIpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVuZW15XCIpO1xyXG4gICAgLy8gICAgICAgICBvdGhlckNvbGxpZGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
