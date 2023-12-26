"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLayout = exports.QWidget = exports.WidgetEventTypes = exports.QWindow = exports.QScreen = exports.QResizeEvent = exports.QPaintEvent = exports.QDragLeaveEvent = exports.QDragMoveEvent = exports.QDropEvent = exports.QDrag = exports.QTimerEvent = exports.QTabletEvent = exports.QNativeGestureEvent = exports.QWheelEvent = exports.QMoveEvent = exports.QMouseEvent = exports.QKeyEvent = exports.QFontMetricsF = exports.QFontMetrics = exports.WritingSystem = exports.SystemFont = exports.QFontDatabase = exports.QStylePixelMetric = exports.QStyle = exports.QClipboardMode = exports.QClipboard = exports.QTextOptionWrapMode = exports.QCursor = exports.ColorRole = exports.ColorGroup = exports.QPalette = exports.MovieState = exports.CacheMode = exports.QMovie = exports.QFontWeight = exports.QFontStretch = exports.QFontCapitalization = exports.QFont = exports.QImageFormat = exports.QImage = exports.QIconState = exports.QIconMode = exports.QIcon = exports.QPixmap = exports.QPicture = exports.QKeySequence = exports.QPen = exports.QBrush = exports.QApplication = void 0;
exports.QStackedWidget = exports.QRadioButton = exports.QSpinBox = exports.ToolButtonPopupMode = exports.QToolButton = exports.QPushButton = exports.InsertPolicy = exports.QComboBox = exports.QProgressDialog = exports.QProgressBarDirection = exports.QProgressBar = exports.QMainWindow = exports.EchoMode = exports.QLineEdit = exports.QGraphicsDropShadowEffect = exports.QGraphicsBlurEffect = exports.QGraphicsEffect = exports.Shape = exports.Shadow = exports.QFrame = exports.FontDialogOption = exports.QFontDialog = exports.QFileDialog = exports.QErrorMessage = exports.QDoubleSpinBox = exports.QDial = exports.SegmentStyle = exports.Mode = exports.QLCDNumber = exports.QLabel = exports.QDateTimeEdit = exports.QDateEdit = exports.QColorDialog = exports.QCheckBox = exports.QCalendarWidget = exports.StepType = exports.CorrectionMode = exports.ButtonSymbols = exports.QAbstractSpinBox = exports.SelectionMode = exports.ScrollMode = exports.QAbstractItemViewSelectionBehavior = exports.QAbstractItemView = exports.EditTrigger = exports.DragDropMode = exports.QAbstractButton = exports.SliderAction = exports.QAbstractSlider = exports.QAbstractScrollArea = exports.SizeConstraint = void 0;
exports.QStandardItemModel = exports.QStatusBar = exports.QGroupBox = exports.QShortcut = exports.QAction = exports.QSystemTrayIconActivationReason = exports.QSystemTrayIcon = exports.QButtonGroup = exports.QSplitter = exports.QSvgWidget = exports.InputMode = exports.InputDialogOptions = exports.QInputDialog = exports.ButtonRole = exports.QMessageBoxIcon = exports.QMessageBox = exports.QDialog = exports.QPainterPath = exports.RenderHint = exports.QPainter = exports.CompositionMode = exports.QTreeWidgetItem = exports.QTreeWidget = exports.QTimeEdit = exports.TickPosition = exports.QSlider = exports.QScrollBar = exports.QScrollArea = exports.LineWrapMode = exports.QPlainTextEdit = exports.QMenuBar = exports.QMenu = exports.QTableWidgetItem = exports.QTableWidget = exports.QTableView = exports.QTabWidget = exports.TabBarShape = exports.SelectionBehavior = exports.ButtonPosition = exports.QTabBar = exports.QListWidgetItem = exports.QListWidget = exports.ListViewMode = exports.ResizeMode = exports.Movement = exports.LayoutMode = exports.Flow = exports.QListView = exports.QHeaderViewResizeMode = exports.QHeaderView = void 0;
exports.setLogDestroyQObject = exports.setLogCreateQObject = exports.wrapperCache = exports.CacheTestQObject = exports.wrapNative = exports.registerNativeWrapper = exports.checkIfNapiExternal = exports.checkIfNativeElement = exports.Component = exports.StyleSheet = exports.FlexLayout = exports.QGridLayout = exports.QBoxLayout = exports.QSettingsScope = exports.QSettingsFormat = exports.QSettings = exports.ComponentFormattingOption = exports.UrlFormattingOption = exports.UserInputResolutionOption = exports.ParsingMode = exports.QUrl = exports.QTime = exports.QColor = exports.QPointF = exports.QPoint = exports.QRectF = exports.QRect = exports.QSizeF = exports.QSize = exports.QVariant = exports.QObject = exports.QMimeData = exports.QModelIndex = exports.SelectionFlag = exports.QItemSelectionModel = exports.QDateTime = exports.QDate = exports.QAbstractTableModel = exports.QAbstractItemModel = exports.QAbstractItemDelegate = exports.QSizePolicyPolicyFlag = exports.QSizePolicyPolicy = exports.QStyleFactory = exports.WrapMode = exports.QTextEditLineWrapMode = exports.AutoFormattingFlag = exports.QTextEdit = exports.QTextBrowser = exports.QStandardItem = void 0;
// bootstrap
require("./lib/core/bootstrap");
// Enums:
__exportStar(require("./lib/QtEnums"), exports);
// Gui:
var QApplication_1 = require("./lib/QtGui/QApplication");
Object.defineProperty(exports, "QApplication", { enumerable: true, get: function () { return QApplication_1.QApplication; } });
var QBrush_1 = require("./lib/QtGui/QBrush");
Object.defineProperty(exports, "QBrush", { enumerable: true, get: function () { return QBrush_1.QBrush; } });
var QPen_1 = require("./lib/QtGui/QPen");
Object.defineProperty(exports, "QPen", { enumerable: true, get: function () { return QPen_1.QPen; } });
var QKeySequence_1 = require("./lib/QtGui/QKeySequence");
Object.defineProperty(exports, "QKeySequence", { enumerable: true, get: function () { return QKeySequence_1.QKeySequence; } });
var QPicture_1 = require("./lib/QtGui/QPicture");
Object.defineProperty(exports, "QPicture", { enumerable: true, get: function () { return QPicture_1.QPicture; } });
var QPixmap_1 = require("./lib/QtGui/QPixmap");
Object.defineProperty(exports, "QPixmap", { enumerable: true, get: function () { return QPixmap_1.QPixmap; } });
var QIcon_1 = require("./lib/QtGui/QIcon");
Object.defineProperty(exports, "QIcon", { enumerable: true, get: function () { return QIcon_1.QIcon; } });
Object.defineProperty(exports, "QIconMode", { enumerable: true, get: function () { return QIcon_1.QIconMode; } });
Object.defineProperty(exports, "QIconState", { enumerable: true, get: function () { return QIcon_1.QIconState; } });
var QImage_1 = require("./lib/QtGui/QImage");
Object.defineProperty(exports, "QImage", { enumerable: true, get: function () { return QImage_1.QImage; } });
Object.defineProperty(exports, "QImageFormat", { enumerable: true, get: function () { return QImage_1.QImageFormat; } });
var QFont_1 = require("./lib/QtGui/QFont");
Object.defineProperty(exports, "QFont", { enumerable: true, get: function () { return QFont_1.QFont; } });
Object.defineProperty(exports, "QFontCapitalization", { enumerable: true, get: function () { return QFont_1.QFontCapitalization; } });
Object.defineProperty(exports, "QFontStretch", { enumerable: true, get: function () { return QFont_1.QFontStretch; } });
Object.defineProperty(exports, "QFontWeight", { enumerable: true, get: function () { return QFont_1.QFontWeight; } });
var QMovie_1 = require("./lib/QtGui/QMovie");
Object.defineProperty(exports, "QMovie", { enumerable: true, get: function () { return QMovie_1.QMovie; } });
Object.defineProperty(exports, "CacheMode", { enumerable: true, get: function () { return QMovie_1.CacheMode; } });
Object.defineProperty(exports, "MovieState", { enumerable: true, get: function () { return QMovie_1.MovieState; } });
var QPalette_1 = require("./lib/QtGui/QPalette");
Object.defineProperty(exports, "QPalette", { enumerable: true, get: function () { return QPalette_1.QPalette; } });
Object.defineProperty(exports, "ColorGroup", { enumerable: true, get: function () { return QPalette_1.ColorGroup; } });
Object.defineProperty(exports, "ColorRole", { enumerable: true, get: function () { return QPalette_1.ColorRole; } });
var QCursor_1 = require("./lib/QtGui/QCursor");
Object.defineProperty(exports, "QCursor", { enumerable: true, get: function () { return QCursor_1.QCursor; } });
var QTextOption_1 = require("./lib/QtGui/QTextOption");
Object.defineProperty(exports, "QTextOptionWrapMode", { enumerable: true, get: function () { return QTextOption_1.QTextOptionWrapMode; } });
var QClipboard_1 = require("./lib/QtGui/QClipboard");
Object.defineProperty(exports, "QClipboard", { enumerable: true, get: function () { return QClipboard_1.QClipboard; } });
Object.defineProperty(exports, "QClipboardMode", { enumerable: true, get: function () { return QClipboard_1.QClipboardMode; } });
var QStyle_1 = require("./lib/QtGui/QStyle");
Object.defineProperty(exports, "QStyle", { enumerable: true, get: function () { return QStyle_1.QStyle; } });
Object.defineProperty(exports, "QStylePixelMetric", { enumerable: true, get: function () { return QStyle_1.QStylePixelMetric; } });
var QFontDatabase_1 = require("./lib/QtGui/QFontDatabase");
Object.defineProperty(exports, "QFontDatabase", { enumerable: true, get: function () { return QFontDatabase_1.QFontDatabase; } });
Object.defineProperty(exports, "SystemFont", { enumerable: true, get: function () { return QFontDatabase_1.SystemFont; } });
Object.defineProperty(exports, "WritingSystem", { enumerable: true, get: function () { return QFontDatabase_1.WritingSystem; } });
var QFontMetrics_1 = require("./lib/QtGui/QFontMetrics");
Object.defineProperty(exports, "QFontMetrics", { enumerable: true, get: function () { return QFontMetrics_1.QFontMetrics; } });
var QFontMetricsF_1 = require("./lib/QtGui/QFontMetricsF");
Object.defineProperty(exports, "QFontMetricsF", { enumerable: true, get: function () { return QFontMetricsF_1.QFontMetricsF; } });
// Events: Maybe a separate module ?
var QKeyEvent_1 = require("./lib/QtGui/QEvent/QKeyEvent");
Object.defineProperty(exports, "QKeyEvent", { enumerable: true, get: function () { return QKeyEvent_1.QKeyEvent; } });
var QMouseEvent_1 = require("./lib/QtGui/QEvent/QMouseEvent");
Object.defineProperty(exports, "QMouseEvent", { enumerable: true, get: function () { return QMouseEvent_1.QMouseEvent; } });
var QMoveEvent_1 = require("./lib/QtGui/QEvent/QMoveEvent");
Object.defineProperty(exports, "QMoveEvent", { enumerable: true, get: function () { return QMoveEvent_1.QMoveEvent; } });
var QWheelEvent_1 = require("./lib/QtGui/QEvent/QWheelEvent");
Object.defineProperty(exports, "QWheelEvent", { enumerable: true, get: function () { return QWheelEvent_1.QWheelEvent; } });
var QNativeGestureEvent_1 = require("./lib/QtGui/QEvent/QNativeGestureEvent");
Object.defineProperty(exports, "QNativeGestureEvent", { enumerable: true, get: function () { return QNativeGestureEvent_1.QNativeGestureEvent; } });
var QTabletEvent_1 = require("./lib/QtGui/QEvent/QTabletEvent");
Object.defineProperty(exports, "QTabletEvent", { enumerable: true, get: function () { return QTabletEvent_1.QTabletEvent; } });
var QTimerEvent_1 = require("./lib/QtGui/QEvent/QTimerEvent");
Object.defineProperty(exports, "QTimerEvent", { enumerable: true, get: function () { return QTimerEvent_1.QTimerEvent; } });
var QDrag_1 = require("./lib/QtGui/QDrag");
Object.defineProperty(exports, "QDrag", { enumerable: true, get: function () { return QDrag_1.QDrag; } });
var QDropEvent_1 = require("./lib/QtGui/QEvent/QDropEvent");
Object.defineProperty(exports, "QDropEvent", { enumerable: true, get: function () { return QDropEvent_1.QDropEvent; } });
var QDragMoveEvent_1 = require("./lib/QtGui/QEvent/QDragMoveEvent");
Object.defineProperty(exports, "QDragMoveEvent", { enumerable: true, get: function () { return QDragMoveEvent_1.QDragMoveEvent; } });
var QDragLeaveEvent_1 = require("./lib/QtGui/QEvent/QDragLeaveEvent");
Object.defineProperty(exports, "QDragLeaveEvent", { enumerable: true, get: function () { return QDragLeaveEvent_1.QDragLeaveEvent; } });
var QPaintEvent_1 = require("./lib/QtGui/QEvent/QPaintEvent");
Object.defineProperty(exports, "QPaintEvent", { enumerable: true, get: function () { return QPaintEvent_1.QPaintEvent; } });
var QResizeEvent_1 = require("./lib/QtGui/QEvent/QResizeEvent");
Object.defineProperty(exports, "QResizeEvent", { enumerable: true, get: function () { return QResizeEvent_1.QResizeEvent; } });
var QScreen_1 = require("./lib/QtGui/QScreen");
Object.defineProperty(exports, "QScreen", { enumerable: true, get: function () { return QScreen_1.QScreen; } });
var QWindow_1 = require("./lib/QtGui/QWindow");
Object.defineProperty(exports, "QWindow", { enumerable: true, get: function () { return QWindow_1.QWindow; } });
var EventWidget_1 = require("./lib/core/EventWidget");
Object.defineProperty(exports, "WidgetEventTypes", { enumerable: true, get: function () { return EventWidget_1.WidgetEventTypes; } });
// Abstract:
var QWidget_1 = require("./lib/QtWidgets/QWidget");
Object.defineProperty(exports, "QWidget", { enumerable: true, get: function () { return QWidget_1.QWidget; } });
var QLayout_1 = require("./lib/QtWidgets/QLayout");
Object.defineProperty(exports, "QLayout", { enumerable: true, get: function () { return QLayout_1.QLayout; } });
Object.defineProperty(exports, "SizeConstraint", { enumerable: true, get: function () { return QLayout_1.SizeConstraint; } });
var QAbstractScrollArea_1 = require("./lib/QtWidgets/QAbstractScrollArea");
Object.defineProperty(exports, "QAbstractScrollArea", { enumerable: true, get: function () { return QAbstractScrollArea_1.QAbstractScrollArea; } });
var QAbstractSlider_1 = require("./lib/QtWidgets/QAbstractSlider");
Object.defineProperty(exports, "QAbstractSlider", { enumerable: true, get: function () { return QAbstractSlider_1.QAbstractSlider; } });
Object.defineProperty(exports, "SliderAction", { enumerable: true, get: function () { return QAbstractSlider_1.SliderAction; } });
var QAbstractButton_1 = require("./lib/QtWidgets/QAbstractButton");
Object.defineProperty(exports, "QAbstractButton", { enumerable: true, get: function () { return QAbstractButton_1.QAbstractButton; } });
var QAbstractItemView_1 = require("./lib/QtWidgets/QAbstractItemView");
Object.defineProperty(exports, "DragDropMode", { enumerable: true, get: function () { return QAbstractItemView_1.DragDropMode; } });
Object.defineProperty(exports, "EditTrigger", { enumerable: true, get: function () { return QAbstractItemView_1.EditTrigger; } });
Object.defineProperty(exports, "QAbstractItemView", { enumerable: true, get: function () { return QAbstractItemView_1.QAbstractItemView; } });
Object.defineProperty(exports, "QAbstractItemViewSelectionBehavior", { enumerable: true, get: function () { return QAbstractItemView_1.QAbstractItemViewSelectionBehavior; } });
Object.defineProperty(exports, "ScrollMode", { enumerable: true, get: function () { return QAbstractItemView_1.ScrollMode; } });
Object.defineProperty(exports, "SelectionMode", { enumerable: true, get: function () { return QAbstractItemView_1.SelectionMode; } });
var QAbstractSpinBox_1 = require("./lib/QtWidgets/QAbstractSpinBox");
Object.defineProperty(exports, "QAbstractSpinBox", { enumerable: true, get: function () { return QAbstractSpinBox_1.QAbstractSpinBox; } });
Object.defineProperty(exports, "ButtonSymbols", { enumerable: true, get: function () { return QAbstractSpinBox_1.ButtonSymbols; } });
Object.defineProperty(exports, "CorrectionMode", { enumerable: true, get: function () { return QAbstractSpinBox_1.CorrectionMode; } });
Object.defineProperty(exports, "StepType", { enumerable: true, get: function () { return QAbstractSpinBox_1.StepType; } });
// Widgets:
var QCalendarWidget_1 = require("./lib/QtWidgets/QCalendarWidget");
Object.defineProperty(exports, "QCalendarWidget", { enumerable: true, get: function () { return QCalendarWidget_1.QCalendarWidget; } });
var QCheckBox_1 = require("./lib/QtWidgets/QCheckBox");
Object.defineProperty(exports, "QCheckBox", { enumerable: true, get: function () { return QCheckBox_1.QCheckBox; } });
var QColorDialog_1 = require("./lib/QtWidgets/QColorDialog");
Object.defineProperty(exports, "QColorDialog", { enumerable: true, get: function () { return QColorDialog_1.QColorDialog; } });
var QDateEdit_1 = require("./lib/QtWidgets/QDateEdit");
Object.defineProperty(exports, "QDateEdit", { enumerable: true, get: function () { return QDateEdit_1.QDateEdit; } });
var QDateTimeEdit_1 = require("./lib/QtWidgets/QDateTimeEdit");
Object.defineProperty(exports, "QDateTimeEdit", { enumerable: true, get: function () { return QDateTimeEdit_1.QDateTimeEdit; } });
var QLabel_1 = require("./lib/QtWidgets/QLabel");
Object.defineProperty(exports, "QLabel", { enumerable: true, get: function () { return QLabel_1.QLabel; } });
var QLCDNumber_1 = require("./lib/QtWidgets/QLCDNumber");
Object.defineProperty(exports, "QLCDNumber", { enumerable: true, get: function () { return QLCDNumber_1.QLCDNumber; } });
Object.defineProperty(exports, "Mode", { enumerable: true, get: function () { return QLCDNumber_1.Mode; } });
Object.defineProperty(exports, "SegmentStyle", { enumerable: true, get: function () { return QLCDNumber_1.SegmentStyle; } });
var QDial_1 = require("./lib/QtWidgets/QDial");
Object.defineProperty(exports, "QDial", { enumerable: true, get: function () { return QDial_1.QDial; } });
var QDoubleSpinBox_1 = require("./lib/QtWidgets/QDoubleSpinBox");
Object.defineProperty(exports, "QDoubleSpinBox", { enumerable: true, get: function () { return QDoubleSpinBox_1.QDoubleSpinBox; } });
var QErrorMessage_1 = require("./lib/QtWidgets/QErrorMessage");
Object.defineProperty(exports, "QErrorMessage", { enumerable: true, get: function () { return QErrorMessage_1.QErrorMessage; } });
var QFileDialog_1 = require("./lib/QtWidgets/QFileDialog");
Object.defineProperty(exports, "QFileDialog", { enumerable: true, get: function () { return QFileDialog_1.QFileDialog; } });
var QFontDialog_1 = require("./lib/QtWidgets/QFontDialog");
Object.defineProperty(exports, "QFontDialog", { enumerable: true, get: function () { return QFontDialog_1.QFontDialog; } });
Object.defineProperty(exports, "FontDialogOption", { enumerable: true, get: function () { return QFontDialog_1.FontDialogOption; } });
var QFrame_1 = require("./lib/QtWidgets/QFrame");
Object.defineProperty(exports, "QFrame", { enumerable: true, get: function () { return QFrame_1.QFrame; } });
Object.defineProperty(exports, "Shadow", { enumerable: true, get: function () { return QFrame_1.Shadow; } });
Object.defineProperty(exports, "Shape", { enumerable: true, get: function () { return QFrame_1.Shape; } });
var QGraphicsEffect_1 = require("./lib/QtWidgets/QGraphicsEffect");
Object.defineProperty(exports, "QGraphicsEffect", { enumerable: true, get: function () { return QGraphicsEffect_1.QGraphicsEffect; } });
var QGraphicsBlurEffect_1 = require("./lib/QtWidgets/QGraphicsBlurEffect");
Object.defineProperty(exports, "QGraphicsBlurEffect", { enumerable: true, get: function () { return QGraphicsBlurEffect_1.QGraphicsBlurEffect; } });
var QGraphicsDropShadowEffect_1 = require("./lib/QtWidgets/QGraphicsDropShadowEffect");
Object.defineProperty(exports, "QGraphicsDropShadowEffect", { enumerable: true, get: function () { return QGraphicsDropShadowEffect_1.QGraphicsDropShadowEffect; } });
var QLineEdit_1 = require("./lib/QtWidgets/QLineEdit");
Object.defineProperty(exports, "QLineEdit", { enumerable: true, get: function () { return QLineEdit_1.QLineEdit; } });
Object.defineProperty(exports, "EchoMode", { enumerable: true, get: function () { return QLineEdit_1.EchoMode; } });
var QMainWindow_1 = require("./lib/QtWidgets/QMainWindow");
Object.defineProperty(exports, "QMainWindow", { enumerable: true, get: function () { return QMainWindow_1.QMainWindow; } });
var QProgressBar_1 = require("./lib/QtWidgets/QProgressBar");
Object.defineProperty(exports, "QProgressBar", { enumerable: true, get: function () { return QProgressBar_1.QProgressBar; } });
Object.defineProperty(exports, "QProgressBarDirection", { enumerable: true, get: function () { return QProgressBar_1.QProgressBarDirection; } });
var QProgressDialog_1 = require("./lib/QtWidgets/QProgressDialog");
Object.defineProperty(exports, "QProgressDialog", { enumerable: true, get: function () { return QProgressDialog_1.QProgressDialog; } });
var QComboBox_1 = require("./lib/QtWidgets/QComboBox");
Object.defineProperty(exports, "QComboBox", { enumerable: true, get: function () { return QComboBox_1.QComboBox; } });
Object.defineProperty(exports, "InsertPolicy", { enumerable: true, get: function () { return QComboBox_1.InsertPolicy; } });
var QPushButton_1 = require("./lib/QtWidgets/QPushButton");
Object.defineProperty(exports, "QPushButton", { enumerable: true, get: function () { return QPushButton_1.QPushButton; } });
var QToolButton_1 = require("./lib/QtWidgets/QToolButton");
Object.defineProperty(exports, "QToolButton", { enumerable: true, get: function () { return QToolButton_1.QToolButton; } });
Object.defineProperty(exports, "ToolButtonPopupMode", { enumerable: true, get: function () { return QToolButton_1.ToolButtonPopupMode; } });
var QSpinBox_1 = require("./lib/QtWidgets/QSpinBox");
Object.defineProperty(exports, "QSpinBox", { enumerable: true, get: function () { return QSpinBox_1.QSpinBox; } });
var QRadioButton_1 = require("./lib/QtWidgets/QRadioButton");
Object.defineProperty(exports, "QRadioButton", { enumerable: true, get: function () { return QRadioButton_1.QRadioButton; } });
var QStackedWidget_1 = require("./lib/QtWidgets/QStackedWidget");
Object.defineProperty(exports, "QStackedWidget", { enumerable: true, get: function () { return QStackedWidget_1.QStackedWidget; } });
var QHeaderView_1 = require("./lib/QtWidgets/QHeaderView");
Object.defineProperty(exports, "QHeaderView", { enumerable: true, get: function () { return QHeaderView_1.QHeaderView; } });
Object.defineProperty(exports, "QHeaderViewResizeMode", { enumerable: true, get: function () { return QHeaderView_1.QHeaderViewResizeMode; } });
var QListView_1 = require("./lib/QtWidgets/QListView");
Object.defineProperty(exports, "QListView", { enumerable: true, get: function () { return QListView_1.QListView; } });
Object.defineProperty(exports, "Flow", { enumerable: true, get: function () { return QListView_1.Flow; } });
Object.defineProperty(exports, "LayoutMode", { enumerable: true, get: function () { return QListView_1.LayoutMode; } });
Object.defineProperty(exports, "Movement", { enumerable: true, get: function () { return QListView_1.Movement; } });
Object.defineProperty(exports, "ResizeMode", { enumerable: true, get: function () { return QListView_1.ResizeMode; } });
Object.defineProperty(exports, "ListViewMode", { enumerable: true, get: function () { return QListView_1.ListViewMode; } });
var QListWidget_1 = require("./lib/QtWidgets/QListWidget");
Object.defineProperty(exports, "QListWidget", { enumerable: true, get: function () { return QListWidget_1.QListWidget; } });
var QListWidgetItem_1 = require("./lib/QtWidgets/QListWidgetItem");
Object.defineProperty(exports, "QListWidgetItem", { enumerable: true, get: function () { return QListWidgetItem_1.QListWidgetItem; } });
var QTabBar_1 = require("./lib/QtWidgets/QTabBar");
Object.defineProperty(exports, "QTabBar", { enumerable: true, get: function () { return QTabBar_1.QTabBar; } });
Object.defineProperty(exports, "ButtonPosition", { enumerable: true, get: function () { return QTabBar_1.ButtonPosition; } });
Object.defineProperty(exports, "SelectionBehavior", { enumerable: true, get: function () { return QTabBar_1.SelectionBehavior; } });
Object.defineProperty(exports, "TabBarShape", { enumerable: true, get: function () { return QTabBar_1.TabBarShape; } });
var QTabWidget_1 = require("./lib/QtWidgets/QTabWidget");
Object.defineProperty(exports, "QTabWidget", { enumerable: true, get: function () { return QTabWidget_1.QTabWidget; } });
var QTableView_1 = require("./lib/QtWidgets/QTableView");
Object.defineProperty(exports, "QTableView", { enumerable: true, get: function () { return QTableView_1.QTableView; } });
var QTableWidget_1 = require("./lib/QtWidgets/QTableWidget");
Object.defineProperty(exports, "QTableWidget", { enumerable: true, get: function () { return QTableWidget_1.QTableWidget; } });
var QTableWidgetItem_1 = require("./lib/QtWidgets/QTableWidgetItem");
Object.defineProperty(exports, "QTableWidgetItem", { enumerable: true, get: function () { return QTableWidgetItem_1.QTableWidgetItem; } });
var QMenu_1 = require("./lib/QtWidgets/QMenu");
Object.defineProperty(exports, "QMenu", { enumerable: true, get: function () { return QMenu_1.QMenu; } });
var QMenuBar_1 = require("./lib/QtWidgets/QMenuBar");
Object.defineProperty(exports, "QMenuBar", { enumerable: true, get: function () { return QMenuBar_1.QMenuBar; } });
var QPlainTextEdit_1 = require("./lib/QtWidgets/QPlainTextEdit");
Object.defineProperty(exports, "QPlainTextEdit", { enumerable: true, get: function () { return QPlainTextEdit_1.QPlainTextEdit; } });
Object.defineProperty(exports, "LineWrapMode", { enumerable: true, get: function () { return QPlainTextEdit_1.LineWrapMode; } });
var QScrollArea_1 = require("./lib/QtWidgets/QScrollArea");
Object.defineProperty(exports, "QScrollArea", { enumerable: true, get: function () { return QScrollArea_1.QScrollArea; } });
var QScrollBar_1 = require("./lib/QtWidgets/QScrollBar");
Object.defineProperty(exports, "QScrollBar", { enumerable: true, get: function () { return QScrollBar_1.QScrollBar; } });
var QSlider_1 = require("./lib/QtWidgets/QSlider");
Object.defineProperty(exports, "QSlider", { enumerable: true, get: function () { return QSlider_1.QSlider; } });
Object.defineProperty(exports, "TickPosition", { enumerable: true, get: function () { return QSlider_1.TickPosition; } });
var QTimeEdit_1 = require("./lib/QtWidgets/QTimeEdit");
Object.defineProperty(exports, "QTimeEdit", { enumerable: true, get: function () { return QTimeEdit_1.QTimeEdit; } });
var QTreeWidget_1 = require("./lib/QtWidgets/QTreeWidget");
Object.defineProperty(exports, "QTreeWidget", { enumerable: true, get: function () { return QTreeWidget_1.QTreeWidget; } });
var QTreeWidgetItem_1 = require("./lib/QtWidgets/QTreeWidgetItem");
Object.defineProperty(exports, "QTreeWidgetItem", { enumerable: true, get: function () { return QTreeWidgetItem_1.QTreeWidgetItem; } });
var QPainter_1 = require("./lib/QtWidgets/QPainter");
Object.defineProperty(exports, "CompositionMode", { enumerable: true, get: function () { return QPainter_1.CompositionMode; } });
Object.defineProperty(exports, "QPainter", { enumerable: true, get: function () { return QPainter_1.QPainter; } });
Object.defineProperty(exports, "RenderHint", { enumerable: true, get: function () { return QPainter_1.RenderHint; } });
var QPainterPath_1 = require("./lib/QtWidgets/QPainterPath");
Object.defineProperty(exports, "QPainterPath", { enumerable: true, get: function () { return QPainterPath_1.QPainterPath; } });
var QDialog_1 = require("./lib/QtWidgets/QDialog");
Object.defineProperty(exports, "QDialog", { enumerable: true, get: function () { return QDialog_1.QDialog; } });
var QMessageBox_1 = require("./lib/QtWidgets/QMessageBox");
Object.defineProperty(exports, "QMessageBox", { enumerable: true, get: function () { return QMessageBox_1.QMessageBox; } });
Object.defineProperty(exports, "QMessageBoxIcon", { enumerable: true, get: function () { return QMessageBox_1.QMessageBoxIcon; } });
Object.defineProperty(exports, "ButtonRole", { enumerable: true, get: function () { return QMessageBox_1.ButtonRole; } });
var QInputDialog_1 = require("./lib/QtWidgets/QInputDialog");
Object.defineProperty(exports, "QInputDialog", { enumerable: true, get: function () { return QInputDialog_1.QInputDialog; } });
Object.defineProperty(exports, "InputDialogOptions", { enumerable: true, get: function () { return QInputDialog_1.InputDialogOptions; } });
Object.defineProperty(exports, "InputMode", { enumerable: true, get: function () { return QInputDialog_1.InputMode; } });
var QSvgWidget_1 = require("./lib/QtWidgets/QSvgWidget");
Object.defineProperty(exports, "QSvgWidget", { enumerable: true, get: function () { return QSvgWidget_1.QSvgWidget; } });
var QSplitter_1 = require("./lib/QtWidgets/QSplitter");
Object.defineProperty(exports, "QSplitter", { enumerable: true, get: function () { return QSplitter_1.QSplitter; } });
var QButtonGroup_1 = require("./lib/QtWidgets/QButtonGroup");
Object.defineProperty(exports, "QButtonGroup", { enumerable: true, get: function () { return QButtonGroup_1.QButtonGroup; } });
var QSystemTrayIcon_1 = require("./lib/QtWidgets/QSystemTrayIcon");
Object.defineProperty(exports, "QSystemTrayIcon", { enumerable: true, get: function () { return QSystemTrayIcon_1.QSystemTrayIcon; } });
Object.defineProperty(exports, "QSystemTrayIconActivationReason", { enumerable: true, get: function () { return QSystemTrayIcon_1.QSystemTrayIconActivationReason; } });
var QAction_1 = require("./lib/QtWidgets/QAction");
Object.defineProperty(exports, "QAction", { enumerable: true, get: function () { return QAction_1.QAction; } });
var QShortcut_1 = require("./lib/QtWidgets/QShortcut");
Object.defineProperty(exports, "QShortcut", { enumerable: true, get: function () { return QShortcut_1.QShortcut; } });
var QGroupBox_1 = require("./lib/QtWidgets/QGroupBox");
Object.defineProperty(exports, "QGroupBox", { enumerable: true, get: function () { return QGroupBox_1.QGroupBox; } });
var QStatusBar_1 = require("./lib/QtWidgets/QStatusBar");
Object.defineProperty(exports, "QStatusBar", { enumerable: true, get: function () { return QStatusBar_1.QStatusBar; } });
var QStandardItemModel_1 = require("./lib/QtWidgets/QStandardItemModel");
Object.defineProperty(exports, "QStandardItemModel", { enumerable: true, get: function () { return QStandardItemModel_1.QStandardItemModel; } });
var QStandardItem_1 = require("./lib/QtWidgets/QStandardItem");
Object.defineProperty(exports, "QStandardItem", { enumerable: true, get: function () { return QStandardItem_1.QStandardItem; } });
var QTextBrowser_1 = require("./lib/QtWidgets/QTextBrowser");
Object.defineProperty(exports, "QTextBrowser", { enumerable: true, get: function () { return QTextBrowser_1.QTextBrowser; } });
var QTextEdit_1 = require("./lib/QtWidgets/QTextEdit");
Object.defineProperty(exports, "QTextEdit", { enumerable: true, get: function () { return QTextEdit_1.QTextEdit; } });
Object.defineProperty(exports, "AutoFormattingFlag", { enumerable: true, get: function () { return QTextEdit_1.AutoFormattingFlag; } });
Object.defineProperty(exports, "QTextEditLineWrapMode", { enumerable: true, get: function () { return QTextEdit_1.QTextEditLineWrapMode; } });
Object.defineProperty(exports, "WrapMode", { enumerable: true, get: function () { return QTextEdit_1.WrapMode; } });
var QStyleFactory_1 = require("./lib/QtWidgets/QStyleFactory");
Object.defineProperty(exports, "QStyleFactory", { enumerable: true, get: function () { return QStyleFactory_1.QStyleFactory; } });
var QSizePolicy_1 = require("./lib/QtWidgets/QSizePolicy");
Object.defineProperty(exports, "QSizePolicyPolicy", { enumerable: true, get: function () { return QSizePolicy_1.QSizePolicyPolicy; } });
Object.defineProperty(exports, "QSizePolicyPolicyFlag", { enumerable: true, get: function () { return QSizePolicy_1.QSizePolicyPolicyFlag; } });
var QAbstractItemDelegate_1 = require("./lib/QtWidgets/QAbstractItemDelegate");
Object.defineProperty(exports, "QAbstractItemDelegate", { enumerable: true, get: function () { return QAbstractItemDelegate_1.QAbstractItemDelegate; } });
// Core
var QAbstractItemModel_1 = require("./lib/QtCore/QAbstractItemModel");
Object.defineProperty(exports, "QAbstractItemModel", { enumerable: true, get: function () { return QAbstractItemModel_1.QAbstractItemModel; } });
var QAbstractTableModel_1 = require("./lib/QtCore/QAbstractTableModel");
Object.defineProperty(exports, "QAbstractTableModel", { enumerable: true, get: function () { return QAbstractTableModel_1.QAbstractTableModel; } });
var QDate_1 = require("./lib/QtCore/QDate");
Object.defineProperty(exports, "QDate", { enumerable: true, get: function () { return QDate_1.QDate; } });
var QDateTime_1 = require("./lib/QtCore/QDateTime");
Object.defineProperty(exports, "QDateTime", { enumerable: true, get: function () { return QDateTime_1.QDateTime; } });
var QItemSelectionModel_1 = require("./lib/QtCore/QItemSelectionModel");
Object.defineProperty(exports, "QItemSelectionModel", { enumerable: true, get: function () { return QItemSelectionModel_1.QItemSelectionModel; } });
Object.defineProperty(exports, "SelectionFlag", { enumerable: true, get: function () { return QItemSelectionModel_1.SelectionFlag; } });
var QModelIndex_1 = require("./lib/QtCore/QModelIndex");
Object.defineProperty(exports, "QModelIndex", { enumerable: true, get: function () { return QModelIndex_1.QModelIndex; } });
var QMimeData_1 = require("./lib/QtCore/QMimeData");
Object.defineProperty(exports, "QMimeData", { enumerable: true, get: function () { return QMimeData_1.QMimeData; } });
var QObject_1 = require("./lib/QtCore/QObject");
Object.defineProperty(exports, "QObject", { enumerable: true, get: function () { return QObject_1.QObject; } });
var QVariant_1 = require("./lib/QtCore/QVariant");
Object.defineProperty(exports, "QVariant", { enumerable: true, get: function () { return QVariant_1.QVariant; } });
var QSize_1 = require("./lib/QtCore/QSize");
Object.defineProperty(exports, "QSize", { enumerable: true, get: function () { return QSize_1.QSize; } });
var QSizeF_1 = require("./lib/QtCore/QSizeF");
Object.defineProperty(exports, "QSizeF", { enumerable: true, get: function () { return QSizeF_1.QSizeF; } });
var QRect_1 = require("./lib/QtCore/QRect");
Object.defineProperty(exports, "QRect", { enumerable: true, get: function () { return QRect_1.QRect; } });
var QRectF_1 = require("./lib/QtCore/QRectF");
Object.defineProperty(exports, "QRectF", { enumerable: true, get: function () { return QRectF_1.QRectF; } });
var QPoint_1 = require("./lib/QtCore/QPoint");
Object.defineProperty(exports, "QPoint", { enumerable: true, get: function () { return QPoint_1.QPoint; } });
var QPointF_1 = require("./lib/QtCore/QPointF");
Object.defineProperty(exports, "QPointF", { enumerable: true, get: function () { return QPointF_1.QPointF; } });
var QColor_1 = require("./lib/QtGui/QColor");
Object.defineProperty(exports, "QColor", { enumerable: true, get: function () { return QColor_1.QColor; } });
var QTime_1 = require("./lib/QtCore/QTime");
Object.defineProperty(exports, "QTime", { enumerable: true, get: function () { return QTime_1.QTime; } });
var QUrl_1 = require("./lib/QtCore/QUrl");
Object.defineProperty(exports, "QUrl", { enumerable: true, get: function () { return QUrl_1.QUrl; } });
Object.defineProperty(exports, "ParsingMode", { enumerable: true, get: function () { return QUrl_1.ParsingMode; } });
Object.defineProperty(exports, "UserInputResolutionOption", { enumerable: true, get: function () { return QUrl_1.UserInputResolutionOption; } });
Object.defineProperty(exports, "UrlFormattingOption", { enumerable: true, get: function () { return QUrl_1.UrlFormattingOption; } });
Object.defineProperty(exports, "ComponentFormattingOption", { enumerable: true, get: function () { return QUrl_1.ComponentFormattingOption; } });
var QSettings_1 = require("./lib/QtCore/QSettings");
Object.defineProperty(exports, "QSettings", { enumerable: true, get: function () { return QSettings_1.QSettings; } });
Object.defineProperty(exports, "QSettingsFormat", { enumerable: true, get: function () { return QSettings_1.QSettingsFormat; } });
Object.defineProperty(exports, "QSettingsScope", { enumerable: true, get: function () { return QSettings_1.QSettingsScope; } });
// Layouts:
var QBoxLayout_1 = require("./lib/QtWidgets/QBoxLayout");
Object.defineProperty(exports, "QBoxLayout", { enumerable: true, get: function () { return QBoxLayout_1.QBoxLayout; } });
var QGridLayout_1 = require("./lib/QtWidgets/QGridLayout");
Object.defineProperty(exports, "QGridLayout", { enumerable: true, get: function () { return QGridLayout_1.QGridLayout; } });
var FlexLayout_1 = require("./lib/core/FlexLayout");
Object.defineProperty(exports, "FlexLayout", { enumerable: true, get: function () { return FlexLayout_1.FlexLayout; } });
// Others:
var StyleSheet_1 = require("./lib/core/Style/StyleSheet");
Object.defineProperty(exports, "StyleSheet", { enumerable: true, get: function () { return StyleSheet_1.StyleSheet; } });
var Component_1 = require("./lib/core/Component");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return Component_1.Component; } });
var helpers_1 = require("./lib/utils/helpers");
Object.defineProperty(exports, "checkIfNativeElement", { enumerable: true, get: function () { return helpers_1.checkIfNativeElement; } });
Object.defineProperty(exports, "checkIfNapiExternal", { enumerable: true, get: function () { return helpers_1.checkIfNapiExternal; } });
Object.defineProperty(exports, "registerNativeWrapper", { enumerable: true, get: function () { return helpers_1.registerNativeWrapFunction; } });
Object.defineProperty(exports, "wrapNative", { enumerable: true, get: function () { return helpers_1.wrapNative; } });
// Test:
var CacheTestQObject_1 = require("./lib/core/__test__/CacheTestQObject");
Object.defineProperty(exports, "CacheTestQObject", { enumerable: true, get: function () { return CacheTestQObject_1.CacheTestQObject; } });
var WrapperCache_1 = require("./lib/core/WrapperCache");
Object.defineProperty(exports, "wrapperCache", { enumerable: true, get: function () { return WrapperCache_1.wrapperCache; } });
Object.defineProperty(exports, "setLogCreateQObject", { enumerable: true, get: function () { return WrapperCache_1.setLogCreateQObject; } });
Object.defineProperty(exports, "setLogDestroyQObject", { enumerable: true, get: function () { return WrapperCache_1.setLogDestroyQObject; } });
