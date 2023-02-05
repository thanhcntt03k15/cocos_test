// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameManager extends cc.Component {

    @property(cc.Prefab)
    public bullet_Prefab: cc.Prefab = null;

    @property(cc.Prefab)
    public enemy_Prefab: cc.Prefab = null;

    @property(cc.Node)
    public fire_Point: cc.Node = null;

    @property(cc.Node)
    public player: cc.Node = null;

    @property(cc.Node)
    public enemy: cc.Node = null;

    @property(cc.Node)
    public enemy_Pos: cc.Node = null;

    private bullet;

    private fire_Point_Position;

    private player_velocity: cc.Vec2;
    start(): void {
        this.player_velocity = this.player.getComponent(cc.RigidBody).linearVelocity;

    }

    Fire() {
        this.bullet = cc.instantiate(this.bullet_Prefab);
        this.bullet.parent = this.node;
        this.fire_Point_Position = this.node.convertToNodeSpaceAR(this.fire_Point.parent.convertToWorldSpaceAR(this.fire_Point.position));
        this.bullet.setPosition(this.fire_Point_Position);
        this.bullet.rotation = this.player.rotation;
    }

    seek(target: cc.Vec2): cc.Vec2 {
        console.log(target.x+" "+ target.y);
        
        let desired = new cc.Vec2(target.x - this.fire_Point_Position.x, target.y - this.fire_Point_Position.y);
        let steering = new cc.Vec2();
        cc.Vec2.subtract(steering, desired, this.player_velocity);
        return steering;
    }
    rotate(target: cc.Vec2) {
        let desired = new cc.Vec2(target.x - this.fire_Point_Position.x, target.y - this.fire_Point_Position.y);
        let steering = new cc.Vec2();
        cc.Vec2.subtract(steering, desired, this.player_velocity);
        return this.caculated_rotate(desired, steering);
    }
    caculated_rotate(Vec1: cc.Vec2, Vec2: cc.Vec2) {
        return Math.acos((Vec1.x * Vec2.x + Vec1.y * Vec2.y) / (Math.sqrt(Vec1.x * Vec1.x + Vec1.y * Vec1.y) *
            Math.sqrt(Vec2.x * Vec2.x + Vec2.y * Vec2.y)))
    }



    update(dt) {
        let seek: cc.Vec2;
        if (this.enemy.activeInHierarchy) {
            seek = this.seek(this.enemy.getPosition());
            this.bullet.getComponent(cc.RigidBody).linearVelocity = new cc.Vec2(seek.x, seek.y);
            this.bullet.rotate += this.rotate(this.enemy.getPosition());
            console.log(this.rotate(this.enemy.getPosition()));
            
        }
    }
}
