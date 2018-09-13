import CellModel from "./CellModel";
import {CELL_TYPE, CELL_BASENUM, CELL_STATUS, GRID_WIDTH, GRID_HEIGHT, ANITIME} from "./Constant";


export default class GameModel {
    private cells = null;
    private cellBgs = null;
    private lastPos = cc.v2(-1, -1);
    private cellTypeNum = 5;
    private cellCreateType = []; // 生成种类只在这个数组里面查找

    init(cellTypeNum: number) {
        this.cells = [];
        this.setCellTypeNum(cellTypeNum || this.cellTypeNum);
        for (let x_w = 1; x_w < GRID_WIDTH; x_w++) {
            this.cells[x_w] = [];
            for (let y_h = 1; y_h < GRID_HEIGHT; y_h++) {
                this.cells[x_w][y_h] = new CellModel();
            }
        }
    }

    // 设置种类
    setCellTypeNum(cellTypeNum: number) {
        this.cellTypeNum = cellTypeNum;
        this.cellCreateType = [];
        // cc.log(CELL_BASENUM)
        for (let i = 1; i < cellTypeNum; i++) {
            while (true) {
                let randomNum = Math.floor(Math.random() * CELL_BASENUM) + 1;
                if (this.cellCreateType.indexOf(randomNum) === -1) {
                    this.cellCreateType.push(randomNum);
                    break;
                }
            }
        }
    }

    getCells() {
        return this.cells;
    }
}
