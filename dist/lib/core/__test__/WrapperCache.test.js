"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QObject_1 = require("../../QtCore/QObject");
const QApplication_1 = require("../../QtGui/QApplication");
const CacheTestQObject_1 = require("./CacheTestQObject");
const WrapperCache_1 = require("../WrapperCache");
describe('WrapperCache using CacheTestQObject', () => {
    const qApp = QApplication_1.QApplication.instance();
    qApp.setQuitOnLastWindowClosed(true);
    it('Cached foo', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new CacheTestQObject_1.CacheTestQObject();
        expect(a).not.toBeNull();
        const foo = a.foo();
        expect(foo).not.toBeNull();
        const foo2 = a.foo();
        expect(foo.native.__id__()).toBe(foo2.native.__id__());
        expect(foo).toBe(foo2);
    });
    it('clearFoo() and wrapper expiration', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new CacheTestQObject_1.CacheTestQObject();
        const foo = a.foo();
        a.clearFoo();
        expect(foo.native).toBeNull();
    });
    it('clearFoo() and new wrapper', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new CacheTestQObject_1.CacheTestQObject();
        const foo = a.foo();
        const fooId = foo.native.__id__();
        a.clearFoo();
        expect(foo.native).toBeNull();
        console.log(''); // for some reason this fixes the test in macos
        const foo2 = a.foo();
        expect(foo2).not.toBe(foo);
        expect(foo2.native.__id__()).not.toBe(fooId);
    });
    it('Cached foo and bar', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new CacheTestQObject_1.CacheTestQObject();
        const foo = a.foo();
        const bar = a.bar();
        expect(foo).not.toEqual(bar);
        expect(foo.native.__id__()).not.toEqual(bar.native.__id__());
    });
    it('QObject.parent() can be null', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new QObject_1.QObject();
        expect(a.parent()).toBeNull();
    });
    it('QObject.parent() === QObject.parent()', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new QObject_1.QObject();
        const b = new QObject_1.QObject(a);
        expect(a.native.__id__()).toEqual(b.parent().native.__id__());
        expect(a).toEqual(b.parent());
        a['magic'] = true;
        expect(b.parent()['magic']).toBe(true);
    });
    it('QObject.delete() clears the native field', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new QObject_1.QObject();
        a.delete();
        expect(a.native).toBeNull();
    });
    it('QObject.delete() clears chains of QObjects and their native field', () => {
        WrapperCache_1.wrapperCache._flush();
        const a = new QObject_1.QObject();
        const b = new QObject_1.QObject(a);
        a.delete();
        expect(a.native).toBeNull();
        expect(b.native).toBeNull();
    });
    it('Object.children()', () => {
        WrapperCache_1.wrapperCache._flush();
        const parent = new QObject_1.QObject();
        const kid1 = new QObject_1.QObject(parent);
        const kid2 = new QObject_1.QObject(parent);
        const allKids = parent.children();
        expect(allKids.length).toBe(2);
        expect(allKids[0]).toEqual(kid1);
        expect(allKids[1]).toEqual(kid2);
    });
    qApp.quit();
});
