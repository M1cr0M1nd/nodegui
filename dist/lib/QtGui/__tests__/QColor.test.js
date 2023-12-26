"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QColor_1 = require("../QColor");
const QtEnums_1 = require("../../QtEnums");
const QVariant_1 = require("../../QtCore/QVariant");
describe('QColor', () => {
    it('initialize empty', () => {
        const color = new QColor_1.QColor();
        expect(color).toBeTruthy();
    });
    it('initialize with enum GlobalColor', () => {
        const color = new QColor_1.QColor(QtEnums_1.GlobalColor.green);
        expect(color.green()).toBe(255);
        expect(color.red()).toBe(0);
        expect(color.blue()).toBe(0);
        expect(color.alpha()).toBe(255);
    });
    it('initialize with rgba', () => {
        const color = new QColor_1.QColor(12, 30, 40, 50);
        expect(color.red()).toBe(12);
        expect(color.green()).toBe(30);
        expect(color.blue()).toBe(40);
        expect(color.alpha()).toBe(50);
        const color2 = new QColor_1.QColor(11, 12, 13);
        expect(color2.red()).toBe(11);
        expect(color2.green()).toBe(12);
        expect(color2.blue()).toBe(13);
        expect(color2.alpha()).toBe(255);
    });
    it('initialize with string', () => {
        const color = new QColor_1.QColor('blue');
        expect(color.red()).toBe(0);
        expect(color.green()).toBe(0);
        expect(color.blue()).toBe(255);
        expect(color.alpha()).toBe(255);
    });
    it('setRed', () => {
        const color = new QColor_1.QColor();
        color.setRed(20);
        expect(color.red()).toBe(20);
    });
    it('setGreen', () => {
        const color = new QColor_1.QColor();
        color.setGreen(20);
        expect(color.green()).toBe(20);
    });
    it('setBlue', () => {
        const color = new QColor_1.QColor();
        color.setBlue(20);
        expect(color.blue()).toBe(20);
    });
    it('setAlpha', () => {
        const color = new QColor_1.QColor();
        color.setAlpha(20);
        expect(color.alpha()).toBe(20);
    });
    it('initialize from QVariant', () => {
        const color = new QColor_1.QColor(10, 10, 10);
        const variant = new QVariant_1.QVariant(color.native);
        expect(variant).toBeTruthy();
        expect(QColor_1.QColor.fromQVariant(variant).red()).toBe(10);
    });
});
