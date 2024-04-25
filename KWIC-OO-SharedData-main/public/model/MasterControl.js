import { LineStorage } from "./LineStorage.js";
import { CircularShift } from "./CircularShift.js";
import { Alphabetizer } from "./Alphabetizer.js";
import { Output } from "./Output.js";
// Master Control
export class MasterControl {
    constructor() {
        this.lineStorage = new LineStorage();
        this.circularShift = new CircularShift(this.lineStorage);
        this.alphabetizer = new Alphabetizer(this.lineStorage);
        this.output = new Output(this.lineStorage);
    }

    // Operation to run the KWIC system
    generate(lines) {
        // Start measuring time
        const startTime = performance.now();

        // Calling other object and function
        this.lineStorage.store(lines);
        const shiftedIndicesObj = this.circularShift.circularShift();
        const sortedIndecesObj = this.alphabetizer.alphabetize(shiftedIndicesObj);
        const output = this.output.printOutput(sortedIndecesObj).join('\n');

        // End measuring time
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        // Print execution time to console
        console.log(`Execution time: ${executionTime} ms`);

        // Return output
        return output
    }
}