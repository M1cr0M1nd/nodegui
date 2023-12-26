"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QTreeWidget_1 = require("../QTreeWidget");
const QTreeWidgetItem_1 = require("../QTreeWidgetItem");
const QIcon_1 = require("../../QtGui/QIcon");
const path_1 = __importDefault(require("path"));
function createTreeWidget() {
    const tree = new QTreeWidget_1.QTreeWidget();
    tree.setColumnCount(2);
    tree.setHeaderLabels(['First Column', 'Second Column']);
    return tree;
}
describe('QTreeWidget', () => {
    it('instantiate a tree widget', () => {
        const tree = createTreeWidget();
        expect(tree.inherits('QTreeWidget')).toBe(true);
    });
    it('setText', () => {
        const tree = createTreeWidget();
        const item = new QTreeWidgetItem_1.QTreeWidgetItem();
        item.setText(0, 'row0, column0');
        expect(item.text(0)).toEqual('row0, column0');
        tree.addTopLevelItem(item);
    });
    it('setIcon', () => {
        const item = new QTreeWidgetItem_1.QTreeWidgetItem();
        const testImagePath = path_1.default.resolve(__dirname, 'assets', 'nodegui.png');
        const icon = new QIcon_1.QIcon(testImagePath);
        item.setText(0, 'row0, column0');
        item.setIcon(0, icon);
        // TODO: figure out a way to check this. They are not equivalent.
        // expect(item.icon(0).cacheKey()).toEqual(icon.cacheKey());
    });
});
