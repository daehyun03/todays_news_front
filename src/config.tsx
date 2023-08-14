export interface Detail{
    url:string, name:string, idx:number, toServer:string
}
export const Categories:Array<Detail> = [{url: "/hot-issue", name: "핫이슈", idx:0, toServer: "/hot"},
    {url: "/politics", name: "정치", idx:1, toServer: "/pol"},
    {url: "/economy", name: "경제", idx:2, toServer: "/eco"},
    {url: "/society", name: "사회", idx:3, toServer: "/soc"},
    {url: "/life", name: "생활", idx:4, toServer: "/lif"},
    {url: "/IT", name: "IT", idx:5, toServer: "/it"},
    {url: "/world", name: "세계", idx:6, toServer: "/wor"}]