
export class Output {
    constructor(lineStorage) {
        this.lineStorage = lineStorage;
    }

    // Operation to print all lines based on the indices & only return line start without the noise word
    printOutput(sortedIndices) {
        const result = [];
        sortedIndices.getIndices().forEach(index => {
            const line = this.lineStorage.getLineByIndexAndOffset(index.lineIndex, index.offset);
            if (!this.isNoiseWord(line.split(' ')[0])) {
                console.log(`Line at index ${index.lineIndex}, offset ${index.offset}: ${line}`);
                result.push(line);
            }
        });
        return result;
    }

    // Function to check if there is a noise word in the WORD
    isNoiseWord(word) {
        const noiseWords = ['a', 'an', 'the', 'and', 'or', 'of', 'to', 'be', 'is', 'in', 'out', 'by', 'as', 'at', 'off'];
        return noiseWords.includes(word.toLowerCase());
    }

}