"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QSettings_1 = require("../QSettings");
describe('QSize', () => {
    it('initialize', () => {
        expect(() => new QSettings_1.QSettings('testOrg', 'testApp')).not.toThrow();
    });
    it('should save and load data correctly', () => {
        const value = Math.ceil(Math.random() * 100);
        const settings = new QSettings_1.QSettings('testOrg', 'testApp');
        settings.setValue('randomNumber', value);
        settings.sync();
        expect(settings.value('randomNumber').toInt()).toBe(value);
    });
});
