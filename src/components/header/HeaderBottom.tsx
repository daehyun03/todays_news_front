import "./HeaderBottom.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Categories, Detail} from "../../config";

export default function HeaderBottom() {
    const [cur, setCur] = useState<number>(0)
    const category = Categories
    return(
        <div className="header_bottom">
            <div className="header_bottom_inner">
                {category.map((data):JSX.Element => {
                    return Card(data, cur, setCur)
                })}
            </div>
        </div>
    )
}

function Card(data:Detail, cur:number, setCur:React.Dispatch<number>) {
    const navigate = useNavigate()
    const move = () => {
        setCur(data.idx)
        navigate(data.url, {state: data})
    }
    return(
        <div onClick={() => (move())}
                             className={cur === data.idx ? "header_bottom_card select" : "header_bottom_card"}>
            {data.name}
        </div>
    )
}