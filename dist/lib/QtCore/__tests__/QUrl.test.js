"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QUrl_1 = require("../QUrl");
const QVariant_1 = require("../QVariant");
describe('QUrl', () => {
    it('initialize empty', () => {
        const url = new QUrl_1.QUrl();
        expect(url).toBeTruthy();
    });
    it('initialize with url', () => {
        const url = new QUrl_1.QUrl('https://google.com');
        expect(url).toBeTruthy();
    });
    it('setUrl', () => {
        const url = new QUrl_1.QUrl();
        url.setUrl('https://yahoo.com');
        expect(url.toString()).toEqual('https://yahoo.com');
    });
    it('initialize from QVariant', () => {
        const url = new QUrl_1.QUrl('https://google.com');
        const variant = new QVariant_1.QVariant(url.native);
        expect(variant).toBeTruthy();
        expect(QUrl_1.QUrl.fromQVariant(variant).toString()).toBe('https://google.com');
    });
});
