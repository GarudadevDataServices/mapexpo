type pageType = 'map'|'page';

interface PageObject {
    id: string;
    img: string;
    matter: string;
    title: string;
    type: pageType;
}

interface PageData {
    Objects: PageObject[];
    icon: string;
    title: string;
}