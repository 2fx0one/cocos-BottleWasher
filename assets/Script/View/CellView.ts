// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import {CELL_HEIGHT, CELL_STATUS, CELL_WIDTH} from "../Model/Constant";
import CellModel from "../Model/CellModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CellView extends cc.Component {

    @property(cc.Sprite)
    defaultFrame: cc.Sprite = null;

    private isSlect: boolean;

    private model: CellModel;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.isSlect = false;
    }

    initWithModel(model: CellModel) {

        this.model = model;
        this.node.x = CELL_WIDTH * (this.model.startX - 0.5);
        this.node.y = CELL_HEIGHT * (this.model.startY - 0.5);
        let animation: cc.Animation = this.node.getComponent(cc.Animation);
        if (this.model.status === CELL_STATUS.COMMON) {
            animation.stop();
        } else {
            animation.play(model.status);

        }


    }

    start () {

    }

    // update (dt) {}
}
