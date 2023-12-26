"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QToolButton_1 = require("../QToolButton");
const QIcon_1 = require("../../QtGui/QIcon");
const path_1 = __importDefault(require("path"));
const QSize_1 = require("../../QtCore/QSize");
describe('QToolButton', () => {
    it('instantiate a button instance', () => {
        const button = new QToolButton_1.QToolButton();
        expect(button.inherits('QToolButton')).toBe(true);
    });
    it('setText', () => {
        const button = new QToolButton_1.QToolButton();
        button.setText('hello');
        expect(button.property('text').toString()).toEqual('hello');
    });
    it('setIcon', () => {
        const button = new QToolButton_1.QToolButton();
        const testImagePath = path_1.default.resolve(__dirname, 'assets', 'nodegui.png');
        const icon = new QIcon_1.QIcon(testImagePath);
        button.setIcon(icon);
        expect(QIcon_1.QIcon.fromQVariant(button.property('icon')).cacheKey()).toEqual(icon.cacheKey());
    });
    it('setIconSize', () => {
        const button = new QToolButton_1.QToolButton();
        const testImagePath = path_1.default.resolve(__dirname, 'assets', 'nodegui.png');
        const icon = new QIcon_1.QIcon(testImagePath);
        button.setIcon(icon);
        button.setIconSize(new QSize_1.QSize(111, 111));
        const returnedSize = button.iconSize();
        expect(returnedSize.width()).toBe(111);
        expect(returnedSize.height()).toBe(111);
    });
    it('check if signals are working', () => {
        const widget = new QToolButton_1.QToolButton();
        const mock = jest.fn();
        widget.addEventListener('objectNameChanged', mock);
        widget.setObjectName('testName');
        expect(mock).toBeCalledWith('testName');
        expect(mock).toBeCalledTimes(1);
    });
    it('check if signals are working from QWidget', () => {
        const widget = new QToolButton_1.QToolButton();
        const mock = jest.fn();
        widget.addEventListener('windowTitleChanged', mock);
        widget.setWindowTitle('testName');
        expect(mock).toBeCalledWith('testName');
        expect(mock).toBeCalledTimes(1);
    });
});
