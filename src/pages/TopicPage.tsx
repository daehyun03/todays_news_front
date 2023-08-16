import {BaseURL, Categories, Detail, Topic} from "../config";
import TopicCard from "../components/topic-card/TopicCard";
import {useQuery} from 'react-query';
import {usePageStore} from "../store";
import React from "react";

const dummyTopic:Topic = {
    title: "서버로부터 응답이 없습니다",
    summary: "",
    title_img: "",
    topic_id: 0
}


export default function TopicPage() {
    const {cur} = usePageStore()
    const detail:Detail = Categories[cur]
    const {data, isLoading} =
        useQuery("topics", () => GetServerData(detail.toServer))
    if (isLoading) {
        return(
            <div className="container">
                <div className="category_name">{detail.name}</div>
                {TopicCard(dummyTopic)}
            </div>
        )
    }
    return(
        <div className="container">
            <div className="category_name">{detail.name}</div>
            {data.topics.map((info:Topic) => (
                <TopicCard key={info.topic_id} title={info.title} summary={info.summary} title_img={info.title_img} topic_id={info.topic_id}/>
            ))}
        </div>
    )
}

async function GetServerData(url:string) {
    const reqURL = BaseURL + "/topic" + url
    const topicData = await fetch("reqURL")
    return topicData.json()
}