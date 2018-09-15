import {CELL_TYPE, ANITIME, CELL_STATUS, GRID_ROW} from "./Constant";

export default class CellModel {
    type:number = null;
    status: string = CELL_STATUS.COMMON;
    x:number = 1;
    y:number = 1;
    startX:number = 1;
    startY:number = 1;
    cmd = [];
    isDeath:boolean = false;
    objecCount = Math.floor(Math.random() * 1000);

    init(type:number, x:number, y:number) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.startX = x;
        this.startY = y;
        return this;
    }
}