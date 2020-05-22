/** 分页 */
export class Paginator {
    constructor({ index = 1, count = 0, all = 0, size = 10 } = {}) {
        this.index = index;
        this.count = count;
        this.all = all;
        this.size = size;
    }
}