import {CELL_TYPE, ANITIME, CELL_STATUS, GRID_HEIGHT} from "./Constant";

export default class CellModel {
    private type = null;
    status: string = CELL_STATUS.COMMON;
    private x = 1;
    private y = 1;
    startX = 1;
    startY = 1;
    private cmd = [];
    private isDeath = false;
    private objecCount = Math.floor(Math.random() * 1000);

    init() {

    }
}