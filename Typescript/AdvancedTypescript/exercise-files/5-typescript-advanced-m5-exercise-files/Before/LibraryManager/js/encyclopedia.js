"use strict";
const classes_1 = require('./classes');
class Encyclopedia extends classes_1.ReferenceItem {
    constructor(newTitle, newYear, edition) {
        super(newTitle, newYear);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Encyclopedia;
