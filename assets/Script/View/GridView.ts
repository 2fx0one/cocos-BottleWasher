// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import CellModel from "../Model/CellModel";
import {GRID_HEIGHT, GRID_WIDTH} from "../Model/Constant";
import AudioUtils from "../Utils/AudioUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GridView extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;
    //
    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    @property([cc.Prefab])
    private cellPrefabs: [cc.Prefab] = [];

    @property(cc.Node)
    private effectLayer: cc.Node = null;

    @property(AudioUtils)
    private audioUtils: AudioUtils = null;

    private controller;
    private cellViews;
    // onLoad () {}

    start () {

    }

    setController(controller){
        this.controller = controller;
    }

    initWithCellModels(cellsModels: [CellModel][CellModel]) {
        this.cellViews = [];
        for (let i = 1 ; i <= GRID_HEIGHT; i++) {
            this.cellViews[i] = [];
            for  (let j = 0; j < GRID_WIDTH; j++) {
                let type = cellsModels[i][j].type
                // let animationView = cc.instantiate(this.an)
            }

        }

    }


    // update (dt) {}
}
