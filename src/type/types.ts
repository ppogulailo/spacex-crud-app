import {Dispatch} from "react";

export interface ICard {
    img:string,
    name:string,
    info:string,
    onCLick:()=>void;
}
export interface ISearch{
    search:string,
    setSearch:Dispatch<string>
}
export interface ISpaceXData{
    date_local:string,
    details:string,
    id:string,
    links:{
        article:string,
        patch:{
            large:string,
            small:string,
        }
        youtube_id:string,
        wikipedia:string,
        webcast:string

    }
    name:string,
    success:boolean,
}
export interface IHomePage{
    items:ISpaceXData[],
    setItems:(arg?:ISpaceXData[])=>void
}
export interface Iinfo{

}
