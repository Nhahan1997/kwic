import { Indices } from "./Indices.js";

export class CircularShift {
    constructor(lineStorage) {
        this.lineStorage = lineStorage;
    }

    // Operation to circularShift to product shifted indices
    circularShift() {
        // Create an instance to hold index and record of offset
        const shiftedIndicesObj = new Indices();
        this.lineStorage.lines.forEach((line, lineIndex) => {
            const numWords = line.trim().split(/\s+/).length;
            for (let i = 0; i < numWords; i++) {
                const shiftedIndex = {
                    lineIndex: lineIndex,
                    offset: i
                };
                shiftedIndicesObj.addIndex(shiftedIndex);
            }
        });
        return shiftedIndicesObj
    }
}

