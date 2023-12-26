"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QPixmap_1 = require("../QPixmap");
const path_1 = __importDefault(require("path"));
const QVariant_1 = require("../../QtCore/QVariant");
const QtEnums_1 = require("../../QtEnums");
const fs_1 = __importDefault(require("fs"));
const testImagePath = path_1.default.resolve(__dirname, 'assets', 'nodegui.png');
describe('QPixmap', () => {
    it('initialize empty', () => {
        const pixmap = new QPixmap_1.QPixmap();
        expect(pixmap).toBeTruthy();
    });
    it('initialize with string', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        expect(pixmap).toBeTruthy();
    });
    it('width', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        expect(pixmap.width()).toBe(1000);
    });
    it('height', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        expect(pixmap.height()).toBe(1083);
    });
    it('initialize from QVariant', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        const variant = new QVariant_1.QVariant(pixmap.native);
        expect(variant).toBeTruthy();
        expect(QPixmap_1.QPixmap.fromQVariant(variant).height()).toBe(pixmap.height());
    });
    it('scaled without aspect ratio', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        const newPixmap = pixmap.scaled(300, 340, QtEnums_1.AspectRatioMode.IgnoreAspectRatio);
        expect(newPixmap.width()).toBe(300);
        expect(newPixmap.height()).toBe(340);
    });
    it('scaled with aspect ratio', () => {
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        const newPixmap = pixmap.scaled(100, 100, QtEnums_1.AspectRatioMode.KeepAspectRatio);
        expect(newPixmap.width()).toBe(92);
        expect(newPixmap.height()).toBe(100);
    });
    it('load from file', () => {
        const pixmap = new QPixmap_1.QPixmap();
        expect(pixmap.height()).toBe(0);
        const isLoaded = pixmap.load(testImagePath);
        expect(isLoaded).toBe(true);
        expect(pixmap.height()).toBe(1083);
    });
    it('load from data', () => {
        const pixmap = new QPixmap_1.QPixmap();
        expect(pixmap.height()).toBe(0);
        const arrayBuffer = fs_1.default.readFileSync(testImagePath, null).buffer;
        const isLoaded = pixmap.loadFromData(Buffer.from(arrayBuffer));
        expect(isLoaded).toBe(true);
        expect(pixmap.height()).toBe(1083);
    });
    it('save to a file', async () => {
        const outputFilePath = path_1.default.resolve(__dirname, 'assets', 'nodegui_save.png');
        await new Promise((resolve) => fs_1.default.unlink(outputFilePath, resolve));
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        pixmap.save(outputFilePath);
        const exists = await new Promise((resolve) => fs_1.default.exists(outputFilePath, resolve));
        expect(exists).toBe(true);
    });
    it('save to a file of different format', async () => {
        const outputFilePath = path_1.default.resolve(__dirname, 'assets', 'nodegui_save.jpg');
        await new Promise((resolve) => fs_1.default.unlink(outputFilePath, resolve));
        const pixmap = new QPixmap_1.QPixmap(testImagePath);
        pixmap.save(outputFilePath, 'JPG');
        const exists = await new Promise((resolve) => fs_1.default.exists(outputFilePath, resolve));
        expect(exists).toBe(true);
    });
});
