// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {

    @property
    private speed: number = 0;
    @property
    private m_Rotation: number =0 ;

    public one_Shot: boolean = false;
    onLoad(): void {
        
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.m_Rotation = -10;
        this.speed = 0;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        
    }

    update(dt: number): void {
        this.node.position=this.node.position.add(this.node.up.multiplyScalar( dt * this.speed));
        //this.node.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(this.node.up.x * this.speed, this.node.up.y+ this.speed);

        this.node.angle = this.m_Rotation;
        //console.log(this.m_Rotation);
    }

    onKeyUp(event){
        switch(event.keyCode) {
            case cc.macro.KEY.w:
                this.speed = 0;
                break;
            case cc.macro.KEY.s:
                this.speed = 0;
                break;
            case cc.macro.KEY.c:
                this.one_Shot = false;
        }
    }

    onKeyDown(event){
        switch(event.keyCode) {
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
                this.speed -=100;
                break;
            case cc.macro.KEY.c:
                this.one_Shot= true;
        }
    }
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
