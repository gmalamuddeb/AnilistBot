import { DBAnime, DBManga } from '..';
import { Document } from 'mongoose';

export interface IDBNotificationsInfo {
    readonly time: Date;
    readonly _id: number;
    readonly kind: DBAnime | DBManga;
}

export interface INotificationsContext {
    readonly id: number;
    readonly time: Date;
    readonly kind: DBAnime | DBManga;
}

export interface IDBNotifications extends Document {
    time: Date;
    readonly _id: number;
    kind: DBAnime | DBManga;
}

interface IContentInfo {
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}

export interface IDBLaterNotifications extends Document {
    time: Date;
    readonly _id: number;
    readonly media: IContentInfo[];
}

export interface IDBLaterNotificationsInfo {
    readonly time: Date;
    readonly _id: number;
    readonly media: IContentInfo[];
}

export interface IAddLaterNotifications {
    readonly _id: number;
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
}

export interface INewLaterNotification {
    readonly content_id: number;
    readonly kind: DBAnime | DBManga;
    readonly response: IDBLaterNotifications;
}

export interface IMediaNotifications {
    readonly kind: DBAnime | DBManga;
}

export interface ILaterNotifications {
    readonly kind: DBAnime | DBManga;
}
