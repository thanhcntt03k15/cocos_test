// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import GameManager from "./GameManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FireController extends cc.Component {

    @property(cc.Prefab)
    bullet: cc.Prefab = null;

    @property(cc.Node)
    fire_Point: cc.Node = null ;

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        // kich hoat trinh quan ly vat ly
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.OnKeyDown, this);
        // khoi tao su kien ban
        
    }

    OnKeyDown(event) {
        /*
        Nhan f de ban
        */
        switch (event.keyCode) {
            case cc.macro.KEY.f:
                this.node.parent.getComponent(GameManager).Fire();
                //console.log('fire');
                
                break;

        }
    }

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
