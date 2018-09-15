import CellModel from "./CellModel";
import {CELL_TYPE, CELL_BASENUM, CELL_STATUS, GRID_COLUMN, GRID_ROW, ANITIME} from "./Constant";


export default class GameModel {
    private cells = null;
    private cellBgs = null;
    private lastPos = cc.v2(-1, -1);
    private cellTypeNum = 5;
    private cellCreateType = []; // 生成种类只在这个数组里面查找

    init(cellTypeNum: number) {
        this.cells = [];
        this.setCellTypeNum(cellTypeNum || this.cellTypeNum);
        for (let y_row = 1; y_row <= GRID_ROW; y_row++) {
            this.cells[y_row] = [];
            for (let x_col = 1; x_col <= GRID_COLUMN; x_col++) {
                let c: CellModel = new CellModel();
                this.cells[y_row][x_col] = c.init(1, x_col, y_row);
                // this.cells[x_col][y_row] = c;
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
