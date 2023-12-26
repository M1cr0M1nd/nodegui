"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../../index");
const QPixmap_1 = require("../../QtGui/QPixmap");
const path_1 = __importDefault(require("path"));
describe('QVariant', () => {
    it('initialize empty', () => {
        const variant = new index_1.QVariant();
        expect(variant).toBeTruthy();
    });
    it('initialize with string', () => {
        const variant = new index_1.QVariant('hello');
        expect(variant).toBeTruthy();
        expect(variant.toString()).toEqual('hello');
    });
    it('initialize with int', () => {
        const variant = new index_1.QVariant(123);
        expect(variant).toBeTruthy();
        expect(variant.toInt()).toEqual(123);
    });
    it('initialize with double', () => {
        const variant = new index_1.QVariant(12.33);
        expect(variant).toBeTruthy();
        expect(variant.toDouble()).toEqual(12.33);
    });
    it('initialize with boolean', () => {
        const variant = new index_1.QVariant(true);
        expect(variant).toBeTruthy();
        expect(variant.toBool()).toEqual(true);
    });
    it('initialize with complex objects', () => {
        const pixmap = new QPixmap_1.QPixmap(path_1.default.resolve(__dirname, 'nodegui.png'));
        const variant = new index_1.QVariant(pixmap.native);
        expect(variant).toBeTruthy();
        expect(QPixmap_1.QPixmap.fromQVariant(variant).height()).toBe(pixmap.height());
    });
});
