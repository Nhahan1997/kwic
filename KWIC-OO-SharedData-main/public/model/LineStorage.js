export class LineStorage {
    constructor() {
        this.lines = [];
    }

    // Operation to store lines
    store(input) {
        input.split('\n').forEach(line => {
            this.lines.push(line);
        });
    }

    // Operation to get a line based on line index and offset
    getLineByIndexAndOffset(lineIndex, offset) {
        const line = this.lines[lineIndex];
        const words = line.trim().split(/\s+/);
        const finalLine = [...words.slice(offset), ...words.slice(0, offset)];
        return finalLine.join(' ');
    }
}