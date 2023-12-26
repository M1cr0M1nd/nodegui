"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QSize_1 = require("../QSize");
const QVariant_1 = require("../QVariant");
describe('QSize', () => {
    it('initialize empty', () => {
        const size = new QSize_1.QSize();
        expect(size).toBeTruthy();
    });
    it('initialize with width and height', () => {
        const size = new QSize_1.QSize(300, 200);
        expect(size).toBeTruthy();
    });
    it('width', () => {
        const size = new QSize_1.QSize();
        size.setWidth(300);
        expect(size.width()).toBe(300);
    });
    it('height', () => {
        const size = new QSize_1.QSize();
        size.setHeight(200);
        expect(size.height()).toBe(200);
    });
    it('initialize from QVariant', () => {
        const size = new QSize_1.QSize(300, 200);
        const variant = new QVariant_1.QVariant(size.native);
        expect(variant).toBeTruthy();
        expect(QSize_1.QSize.fromQVariant(variant).height()).toBe(size.height());
    });
});
