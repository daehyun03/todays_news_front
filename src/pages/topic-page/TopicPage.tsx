import {useLocation} from "react-router-dom";
import {Detail} from "../../config";
import TopicCard from "../../components/topic-card/TopicCard";


export default function TopicPage() {
    const location = useLocation()
    const data:Detail = location.state
    return(
        <div className="container">
            <div>{data.name}</div>
            <TopicCard/>
            <TopicCard/>
            <TopicCard/>
            <TopicCard/>
            <TopicCard/>
        </div>
    )
}