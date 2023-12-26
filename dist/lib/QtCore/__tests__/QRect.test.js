"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QRect_1 = require("../QRect");
const QVariant_1 = require("../QVariant");
describe('QRect', () => {
    it('initialize empty', () => {
        const rect = new QRect_1.QRect();
        expect(rect).toBeTruthy();
    });
    it('initialize with x, y, width, height', () => {
        const rect = new QRect_1.QRect(10, 11, 20, 30);
        expect(rect).toBeTruthy();
    });
    it('width', () => {
        const rect = new QRect_1.QRect();
        rect.setWidth(300);
        expect(rect.width()).toBe(300);
    });
    it('height', () => {
        const rect = new QRect_1.QRect();
        rect.setHeight(200);
        expect(rect.height()).toBe(200);
    });
    it('left', () => {
        const rect = new QRect_1.QRect();
        rect.setLeft(200);
        expect(rect.left()).toBe(200);
    });
    it('top', () => {
        const rect = new QRect_1.QRect();
        rect.setTop(200);
        expect(rect.top()).toBe(200);
    });
    it('initialize from QVariant', () => {
        const rect = new QRect_1.QRect(10, 10, 300, 200);
        const variant = new QVariant_1.QVariant(rect.native);
        expect(variant).toBeTruthy();
        expect(QRect_1.QRect.fromQVariant(variant).left()).toBe(rect.left());
    });
});
