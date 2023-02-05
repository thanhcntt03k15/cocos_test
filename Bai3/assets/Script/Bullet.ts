// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import EnemyController from "./EnemyController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    start () {
        //cc.director.getCollisionManager().enabled = true;
        cc.director.getPhysicsManager().enabled = true;
        this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.node.up.x * 400, this.node.up.y * 400);
        
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        console.log(selfCollider.tag);
        if (otherCollider.tag == 2)
        {
            otherCollider.node.destroy();
            this.node.destroy();
            console.log('contact');
            
        }
    }
}
