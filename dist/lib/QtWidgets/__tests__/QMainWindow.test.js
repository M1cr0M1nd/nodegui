"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QMainWindow_1 = require("../QMainWindow");
const QWidget_1 = require("../QWidget");
describe('QMainWindow', () => {
    const win = new QMainWindow_1.QMainWindow();
    afterAll(() => {
        win.close();
    });
    it('should be able to instantiate a window instance', () => {
        const win = new QMainWindow_1.QMainWindow();
        expect(win.inherits('QMainWindow')).toBe(true);
    });
    it('setCentalWidget', () => {
        const win = new QMainWindow_1.QMainWindow();
        const widget = new QWidget_1.QWidget();
        win.setCentralWidget(widget);
        expect(win.centralWidget()).toEqual(widget);
    });
});
