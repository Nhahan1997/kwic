export class Alphabetizer {
    constructor(lineStorage) {
        this.lineStorage = lineStorage;
    }

    // Operation to alphabetize the shifted indices
    alphabetize(shiftedIndicesObj) {
        shiftedIndicesObj.getIndices().sort((a, b) => {
            const wordA = this.lineStorage.getLineByIndexAndOffset(a.lineIndex, a.offset);
            const wordB = this.lineStorage.getLineByIndexAndOffset(b.lineIndex, b.offset);
            return wordA.localeCompare(wordB);
        });
        return shiftedIndicesObj;
    }


}
