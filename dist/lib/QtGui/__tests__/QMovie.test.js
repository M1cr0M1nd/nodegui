"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QMovie_1 = require("../QMovie");
const path_1 = __importDefault(require("path"));
const QPixmap_1 = require("../QPixmap");
const QSize_1 = require("../../QtCore/QSize");
const fs_1 = __importDefault(require("fs"));
const testImagePath = path_1.default.resolve(__dirname, 'assets', 'fine.gif');
describe('QMovie', () => {
    it('initialize empty', () => {
        const movie = new QMovie_1.QMovie();
        expect(movie).toBeTruthy();
    });
    it('setFileName', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        expect(movie.fileName()).toBe(testImagePath);
    });
    it('setFormat', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        // movie.setFormat('GIF');
        expect(movie.format()).toBe('gif');
    });
    it('start', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        expect(movie.state()).toBe(QMovie_1.MovieState.Running);
    });
    it('setPaused', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        movie.setPaused(true);
        expect(movie.state()).toBe(QMovie_1.MovieState.Paused);
        movie.setPaused(false);
        expect(movie.state()).toBe(QMovie_1.MovieState.Running);
    });
    it('stop', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        movie.stop();
        expect(movie.state()).toBe(QMovie_1.MovieState.NotRunning);
    });
    it('jumpToFrame and jumpToNextFrame', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        movie.stop();
        movie.jumpToFrame(2);
        expect(movie.currentFrameNumber()).toBe(2);
        movie.jumpToNextFrame();
        expect(movie.currentFrameNumber()).toBe(3);
    });
    it('currentPixmap', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        movie.stop();
        movie.jumpToFrame(2);
        const pixmap = movie.currentPixmap();
        expect(pixmap).toBeInstanceOf(QPixmap_1.QPixmap);
        expect(pixmap.height()).toBe(270);
    });
    it('setScaledSize', () => {
        const movie = new QMovie_1.QMovie();
        movie.setFileName(testImagePath);
        movie.start();
        movie.stop();
        movie.jumpToFrame(2);
        movie.setScaledSize(new QSize_1.QSize(200, 200));
        movie.jumpToNextFrame();
        const pixmap = movie.currentPixmap();
        expect(pixmap.height()).toBe(200);
    });
    it('custom: loadFromData', () => {
        const movie = new QMovie_1.QMovie();
        const arrayBuffer = fs_1.default.readFileSync(testImagePath, null).buffer;
        movie.loadFromData(Buffer.from(arrayBuffer));
        movie.start();
        movie.stop();
        movie.jumpToNextFrame();
        const pixmap = movie.currentPixmap();
        expect(pixmap).toBeInstanceOf(QPixmap_1.QPixmap);
        expect(pixmap.height()).toBe(270);
    });
});
