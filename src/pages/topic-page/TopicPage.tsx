import {useLocation} from "react-router-dom";
import {Detail, Topic} from "../../config";
import TopicCard from "../../components/topic-card/TopicCard";
import {useQuery} from 'react-query';

const dummyTopic:Topic = {
    title: "서버로부터 응답이 없습니다",
    summary: "",
    title_img: "/",
    topic_id: 0
}


export default function TopicPage() {
    const location = useLocation()
    const detail:Detail = location.state
    const {data, isLoading} = useQuery({queryKey: ["topic"], queryFn: () => GetServerData(detail.toServer)})
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
            {TopicCard(dummyTopic)}
        </div>
    )
}

async function GetServerData(url:string) {
    const topicData = await fetch("http://192.168.0.8:8081/new")
        .then((response) => response.json())
    return topicData
}