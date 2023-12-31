"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetAttribute = void 0;
var WidgetAttribute;
(function (WidgetAttribute) {
    WidgetAttribute[WidgetAttribute["WA_AcceptDrops"] = 78] = "WA_AcceptDrops";
    WidgetAttribute[WidgetAttribute["WA_AlwaysShowToolTips"] = 84] = "WA_AlwaysShowToolTips";
    WidgetAttribute[WidgetAttribute["WA_ContentsPropagated"] = 3] = "WA_ContentsPropagated";
    WidgetAttribute[WidgetAttribute["WA_CustomWhatsThis"] = 47] = "WA_CustomWhatsThis";
    WidgetAttribute[WidgetAttribute["WA_DeleteOnClose"] = 55] = "WA_DeleteOnClose";
    WidgetAttribute[WidgetAttribute["WA_Disabled"] = 0] = "WA_Disabled";
    WidgetAttribute[WidgetAttribute["WA_DontShowOnScreen"] = 103] = "WA_DontShowOnScreen";
    WidgetAttribute[WidgetAttribute["WA_ForceDisabled"] = 32] = "WA_ForceDisabled";
    WidgetAttribute[WidgetAttribute["WA_ForceUpdatesDisabled"] = 59] = "WA_ForceUpdatesDisabled";
    WidgetAttribute[WidgetAttribute["WA_GroupLeader"] = 72] = "WA_GroupLeader";
    WidgetAttribute[WidgetAttribute["WA_Hover"] = 74] = "WA_Hover";
    WidgetAttribute[WidgetAttribute["WA_InputMethodEnabled"] = 14] = "WA_InputMethodEnabled";
    WidgetAttribute[WidgetAttribute["WA_KeyboardFocusChange"] = 77] = "WA_KeyboardFocusChange";
    WidgetAttribute[WidgetAttribute["WA_KeyCompression"] = 33] = "WA_KeyCompression";
    WidgetAttribute[WidgetAttribute["WA_LayoutOnEntireRect"] = 48] = "WA_LayoutOnEntireRect";
    WidgetAttribute[WidgetAttribute["WA_LayoutUsesWidgetRect"] = 92] = "WA_LayoutUsesWidgetRect";
    WidgetAttribute[WidgetAttribute["WA_MacNoClickThrough"] = 12] = "WA_MacNoClickThrough";
    WidgetAttribute[WidgetAttribute["WA_MacOpaqueSizeGrip"] = 85] = "WA_MacOpaqueSizeGrip";
    WidgetAttribute[WidgetAttribute["WA_MacShowFocusRect"] = 88] = "WA_MacShowFocusRect";
    WidgetAttribute[WidgetAttribute["WA_MacNormalSize"] = 89] = "WA_MacNormalSize";
    WidgetAttribute[WidgetAttribute["WA_MacSmallSize"] = 90] = "WA_MacSmallSize";
    WidgetAttribute[WidgetAttribute["WA_MacMiniSize"] = 91] = "WA_MacMiniSize";
    WidgetAttribute[WidgetAttribute["WA_MacVariableSize"] = 102] = "WA_MacVariableSize";
    WidgetAttribute[WidgetAttribute["WA_MacBrushedMetal"] = 46] = "WA_MacBrushedMetal";
    WidgetAttribute[WidgetAttribute["WA_Mapped"] = 11] = "WA_Mapped";
    WidgetAttribute[WidgetAttribute["WA_MouseNoMask"] = 71] = "WA_MouseNoMask";
    WidgetAttribute[WidgetAttribute["WA_MouseTracking"] = 2] = "WA_MouseTracking";
    WidgetAttribute[WidgetAttribute["WA_Moved"] = 43] = "WA_Moved";
    WidgetAttribute[WidgetAttribute["WA_MSWindowsUseDirect3D"] = 94] = "WA_MSWindowsUseDirect3D";
    WidgetAttribute[WidgetAttribute["WA_NoBackground"] = 4] = "WA_NoBackground";
    WidgetAttribute[WidgetAttribute["WA_NoChildEventsForParent"] = 58] = "WA_NoChildEventsForParent";
    WidgetAttribute[WidgetAttribute["WA_NoChildEventsFromChildren"] = 39] = "WA_NoChildEventsFromChildren";
    WidgetAttribute[WidgetAttribute["WA_NoMouseReplay"] = 54] = "WA_NoMouseReplay";
    WidgetAttribute[WidgetAttribute["WA_NoMousePropagation"] = 73] = "WA_NoMousePropagation";
    WidgetAttribute[WidgetAttribute["WA_TransparentForMouseEvents"] = 51] = "WA_TransparentForMouseEvents";
    WidgetAttribute[WidgetAttribute["WA_NoSystemBackground"] = 9] = "WA_NoSystemBackground";
    WidgetAttribute[WidgetAttribute["WA_OpaquePaintEvent"] = 4] = "WA_OpaquePaintEvent";
    WidgetAttribute[WidgetAttribute["WA_OutsideWSRange"] = 49] = "WA_OutsideWSRange";
    WidgetAttribute[WidgetAttribute["WA_PaintOnScreen"] = 8] = "WA_PaintOnScreen";
    WidgetAttribute[WidgetAttribute["WA_PaintUnclipped"] = 52] = "WA_PaintUnclipped";
    WidgetAttribute[WidgetAttribute["WA_PendingMoveEvent"] = 34] = "WA_PendingMoveEvent";
    WidgetAttribute[WidgetAttribute["WA_PendingResizeEvent"] = 35] = "WA_PendingResizeEvent";
    WidgetAttribute[WidgetAttribute["WA_QuitOnClose"] = 76] = "WA_QuitOnClose";
    WidgetAttribute[WidgetAttribute["WA_Resized"] = 42] = "WA_Resized";
    WidgetAttribute[WidgetAttribute["WA_RightToLeft"] = 56] = "WA_RightToLeft";
    WidgetAttribute[WidgetAttribute["WA_SetCursor"] = 38] = "WA_SetCursor";
    WidgetAttribute[WidgetAttribute["WA_SetFont"] = 37] = "WA_SetFont";
    WidgetAttribute[WidgetAttribute["WA_SetPalette"] = 36] = "WA_SetPalette";
    WidgetAttribute[WidgetAttribute["WA_SetStyle"] = 86] = "WA_SetStyle";
    WidgetAttribute[WidgetAttribute["WA_ShowModal"] = 70] = "WA_ShowModal";
    WidgetAttribute[WidgetAttribute["WA_StaticContents"] = 5] = "WA_StaticContents";
    WidgetAttribute[WidgetAttribute["WA_StyleSheet"] = 97] = "WA_StyleSheet";
    WidgetAttribute[WidgetAttribute["WA_StyleSheetTarget"] = 131] = "WA_StyleSheetTarget";
    WidgetAttribute[WidgetAttribute["WA_TabletTracking"] = 129] = "WA_TabletTracking";
    WidgetAttribute[WidgetAttribute["WA_TranslucentBackground"] = 120] = "WA_TranslucentBackground";
    WidgetAttribute[WidgetAttribute["WA_UnderMouse"] = 1] = "WA_UnderMouse";
    WidgetAttribute[WidgetAttribute["WA_UpdatesDisabled"] = 10] = "WA_UpdatesDisabled";
    WidgetAttribute[WidgetAttribute["WA_WindowModified"] = 41] = "WA_WindowModified";
    WidgetAttribute[WidgetAttribute["WA_WindowPropagation"] = 80] = "WA_WindowPropagation";
    WidgetAttribute[WidgetAttribute["WA_MacAlwaysShowToolWindow"] = 96] = "WA_MacAlwaysShowToolWindow";
    WidgetAttribute[WidgetAttribute["WA_SetLocale"] = 87] = "WA_SetLocale";
    WidgetAttribute[WidgetAttribute["WA_StyledBackground"] = 93] = "WA_StyledBackground";
    WidgetAttribute[WidgetAttribute["WA_ShowWithoutActivating"] = 98] = "WA_ShowWithoutActivating";
    WidgetAttribute[WidgetAttribute["WA_NativeWindow"] = 100] = "WA_NativeWindow";
    WidgetAttribute[WidgetAttribute["WA_DontCreateNativeAncestors"] = 101] = "WA_DontCreateNativeAncestors";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeDesktop"] = 104] = "WA_X11NetWmWindowTypeDesktop";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeDock"] = 105] = "WA_X11NetWmWindowTypeDock";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeToolBar"] = 106] = "WA_X11NetWmWindowTypeToolBar";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeMenu"] = 107] = "WA_X11NetWmWindowTypeMenu";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeUtility"] = 108] = "WA_X11NetWmWindowTypeUtility";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeSplash"] = 109] = "WA_X11NetWmWindowTypeSplash";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeDialog"] = 110] = "WA_X11NetWmWindowTypeDialog";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeDropDownMenu"] = 111] = "WA_X11NetWmWindowTypeDropDownMenu";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypePopupMenu"] = 112] = "WA_X11NetWmWindowTypePopupMenu";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeToolTip"] = 113] = "WA_X11NetWmWindowTypeToolTip";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeNotification"] = 114] = "WA_X11NetWmWindowTypeNotification";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeCombo"] = 115] = "WA_X11NetWmWindowTypeCombo";
    WidgetAttribute[WidgetAttribute["WA_X11NetWmWindowTypeDND"] = 116] = "WA_X11NetWmWindowTypeDND";
    WidgetAttribute[WidgetAttribute["WA_MacFrameworkScaled"] = 117] = "WA_MacFrameworkScaled";
    WidgetAttribute[WidgetAttribute["WA_AcceptTouchEvents"] = 121] = "WA_AcceptTouchEvents";
    WidgetAttribute[WidgetAttribute["WA_TouchPadAcceptSingleTouchEvents"] = 123] = "WA_TouchPadAcceptSingleTouchEvents";
    WidgetAttribute[WidgetAttribute["WA_X11DoNotAcceptFocus"] = 126] = "WA_X11DoNotAcceptFocus";
    WidgetAttribute[WidgetAttribute["WA_AlwaysStackOnTop"] = 128] = "WA_AlwaysStackOnTop";
    WidgetAttribute[WidgetAttribute["WA_ContentsMarginsRespectsSafeArea"] = 130] = "WA_ContentsMarginsRespectsSafeArea";
})(WidgetAttribute = exports.WidgetAttribute || (exports.WidgetAttribute = {}));
