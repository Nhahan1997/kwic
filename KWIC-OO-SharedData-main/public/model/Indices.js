export class Indices {
    constructor() {
        this.indices = [];
    }

    addIndex(indices) {
        this.indices.push(indices);
    }

    getIndices() {
        return this.indices;
    }
}