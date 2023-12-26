import { NativeElement, Component } from '../core/Component';
import { QVariant } from './QVariant';
import { QDate } from './QDate';
import { QTime } from './QTime';
import { TimeSpec, DateFormat } from '../QtEnums';
export declare class QDateTime extends Component {
    constructor(arg?: NativeElement, time?: NativeElement);
    addDays(ndays: number): QDateTime;
    addMSecs(msecs: number): QDateTime;
    addMonths(nmonths: number): QDateTime;
    addSecs(s: number): QDateTime;
    addYears(nyears: number): QDateTime;
    date(): QDate;
    daysTo(other: QDateTime): number;
    isDaylightTime(): boolean;
    isNull(): boolean;
    isValid(): boolean;
    msecsTo(other: QDateTime): number;
    offsetFromUtc(): number;
    secsTo(other: QDateTime): number;
    setDate(date: QDate): void;
    setMSecsSinceEpoch(msecs: number): void;
    setOffsetFromUtc(offsetSeconds: number): void;
    setSecsSinceEpoch(secs: number): void;
    setTime(time: QTime): void;
    setTimeSpec(spec: TimeSpec): void;
    time(): QTime;
    timeSpec(): TimeSpec;
    toLocalTime(): QDateTime;
    toMSecsSinceEpoch(): number;
    toOffsetFromUtc(offsetSeconds: number): QDateTime;
    toSecsSinceEpoch(): number;
    toString(format: string | DateFormat): string;
    toTimeSpec(spec: TimeSpec): QDateTime;
    toUTC(): QDateTime;
    static currentDateTime(): QDateTime;
    static currentDateTimeUtc(): QDateTime;
    static currentMSecsSinceEpoch(): number;
    static currentSecsSinceEpoch(): number;
    static fromString(dateTimeString: string, format: string | DateFormat): QDateTime;
    static fromQVariant(variant: QVariant): QDateTime;
}