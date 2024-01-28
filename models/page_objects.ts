export type PageType = 'map'|'page';
// export type TagType = 'politics'|'languages'|'religion';

export interface PageObject {
    id: string;
    img: string;
    matter: string;
    title: string;
    type: PageType;
    tag?: string;
}

export interface PageData {
    Objects: PageObject[];
    icon: string;
    title: string;
}