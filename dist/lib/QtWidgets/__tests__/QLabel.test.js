"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QLabel_1 = require("../QLabel");
const QPixmap_1 = require("../../QtGui/QPixmap");
const QMovie_1 = require("../../QtGui/QMovie");
describe('QLabel', () => {
    const label = new QLabel_1.QLabel();
    afterAll(() => {
        label.close();
    });
    it('instantiate a label instance', () => {
        const label = new QLabel_1.QLabel();
        expect(label.inherits('QLabel')).toBe(true);
    });
    it('setText', () => {
        const label = new QLabel_1.QLabel();
        label.setText('hello');
        expect(label.text()).toEqual('hello');
    });
    it('setWordWrap', () => {
        const label = new QLabel_1.QLabel();
        label.setWordWrap(true);
        expect(label.wordWrap()).toEqual(true);
        label.setWordWrap(false);
        expect(label.wordWrap()).toEqual(false);
    });
    it('setPixmap', () => {
        const label = new QLabel_1.QLabel();
        const pixMap = new QPixmap_1.QPixmap();
        label.setPixmap(pixMap);
        expect(label.pixmap()).toEqual(pixMap);
    });
    it('setMovie', () => {
        const label = new QLabel_1.QLabel();
        const movie = new QMovie_1.QMovie();
        label.setMovie(movie);
        expect(label.movie()).toEqual(movie);
    });
    it('check if signals are working', () => {
        const widget = new QLabel_1.QLabel();
        const mock = jest.fn();
        widget.addEventListener('objectNameChanged', mock);
        widget.setObjectName('testName');
        expect(mock).toBeCalledWith('testName');
        expect(mock).toBeCalledTimes(1);
    });
    it('check if signals are working from QWidget', () => {
        const widget = new QLabel_1.QLabel();
        const mock = jest.fn();
        widget.addEventListener('windowTitleChanged', mock);
        widget.setWindowTitle('testName');
        expect(mock).toBeCalledWith('testName');
        expect(mock).toBeCalledTimes(1);
    });
});
