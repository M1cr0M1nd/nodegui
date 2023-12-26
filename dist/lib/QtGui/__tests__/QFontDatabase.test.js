"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QFontDatabase_1 = require("../QFontDatabase");
describe('QFont', () => {
    it('initialize empty', () => {
        const fontDatabase = new QFontDatabase_1.QFontDatabase();
        expect(fontDatabase).toBeTruthy();
    });
    it('families', () => {
        const fontDatabase = new QFontDatabase_1.QFontDatabase();
        expect(fontDatabase.native).toBeTruthy();
        expect(fontDatabase.families).toBeTruthy();
        expect(fontDatabase.families().length).toBeTruthy();
        expect(fontDatabase.families(QFontDatabase_1.WritingSystem.Runic).length < fontDatabase.families().length).toBeTruthy();
    });
});
