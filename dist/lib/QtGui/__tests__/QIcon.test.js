"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QIcon_1 = require("../QIcon");
const path_1 = __importDefault(require("path"));
const QVariant_1 = require("../../QtCore/QVariant");
const testImagePath = path_1.default.resolve(__dirname, 'assets', 'nodegui.png');
describe('QIcon', () => {
    it('initialize empty', () => {
        const icon = new QIcon_1.QIcon();
        expect(icon).toBeTruthy();
    });
    it('initialize with string', () => {
        const icon = new QIcon_1.QIcon(testImagePath);
        expect(icon).toBeTruthy();
    });
    it('returns the cache Key', () => {
        const icon = new QIcon_1.QIcon(testImagePath);
        const cacheKey = icon.cacheKey();
        expect(Number.isInteger(cacheKey)).toBe(true);
    });
    it('initialize from QVariant', () => {
        const icon = new QIcon_1.QIcon(testImagePath);
        const variant = new QVariant_1.QVariant(icon.native);
        expect(variant).toBeTruthy();
        expect(QIcon_1.QIcon.fromQVariant(variant).cacheKey()).toBe(icon.cacheKey());
    });
});
