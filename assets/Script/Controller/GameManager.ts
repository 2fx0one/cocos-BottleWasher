// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
import GameModel from "../Model/GameModel";
import GridView from "../View/GridView";

@ccclass
export class GameManager extends cc.Component {

    @property(cc.Node)
    grid: cc.Node = null;
    //
    // @property({
    //     type: String,
    //     visible: false
    // })
    // private text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    private gameModel: GameModel = null;
    private gridScript: GridView = null;

    onLoad () {
        this.gameModel = new GameModel();
        this.gameModel.init(5); //准备游戏模型

        this.gridScript = this.grid.getComponent("GridView");
        this.gridScript.setController(this);
        this.gridScript.initWithCellModels(this.gameModel.getCells()); //在网格中初始化
        cc.sys.openURL("https://www.qq.com");
    }

    start () {

    }

    // update (dt) {}

}
