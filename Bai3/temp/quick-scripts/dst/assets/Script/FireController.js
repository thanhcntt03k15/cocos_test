
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