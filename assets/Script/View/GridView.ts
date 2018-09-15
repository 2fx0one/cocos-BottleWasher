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
import {GRID_ROW, GRID_COLUMN} from "../Model/Constant";
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

    start() {

    }

    setController(controller) {
        this.controller = controller;
    }

    initWithCellModels(cellsModels: [CellModel][CellModel]) {
        // cc.log(cellsModels)
        this.cellViews = [];
        for (let y_row = 1; y_row <= GRID_ROW; y_row++) {
            this.cellViews[y_row] = [];
            for (let x_column = 1; x_column <= GRID_COLUMN; x_column++) {
                // if (cellsModels[i][j] !== undefined) {
                cc.log(x_column + " " + y_row)
                cc.log(cellsModels[y_row][x_column])
                let type = cellsModels[y_row][x_column].type
                // }
                // let animationView = cc.instantiate(this.an)
            }

        }

    }


    // update (dt) {}
}
