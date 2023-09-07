


export interface Iearphones{
    Ename: string;
    Eimgurl: string;
    Erating: number;
    Eprize: string;
    Estatus: IearStatus;
    Edetails: string;
    earid: number;
}

export type IearStatus = "Available" | "Out Of Stock"


export interface IPods{
    Iname: string;
    Iimgurl: string;
    Irating: number;
    Iprize: string;
    Istatus: IpodStatus;
    Idetails: string;
    ipodId: number;
}

export type IpodStatus = "Available" | "Out Of Stock"


export interface Iheadphones{
    Hname: string;
    Himgurl: string;
    Hrating: number;
    Hprize: string;
    Hstatus: IhStatus;
    Hdetails: string;
    HeadId: number;
}

export type IhStatus = "Available" | "Out Of Stock"

export interface Iphones{
    moId: number;
    moName: string;
    prize: number;
    ram: string;
    rating: number;
    imgUrl: string;
    moInfo: string;
    status: Istatus;
}

export type Istatus ="Available" | "Out Of Stock"