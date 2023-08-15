import './TopicCard.css'
import {Topic} from "../../config";

export default function TopicCard(topic:Topic) {
    return(
        <div className="card_body">
            <div className="card_body_left">
                <img className="card_body_img" src={topic.title_img} alt="이미지 없음" />
            </div>
            <div className="card_body_right">
                {topic.title}
            </div>
        </div>
    )
}