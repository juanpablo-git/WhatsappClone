import React from "react"
import "./chatlistIten.css"
export default ({onClick,active,data})=>{
        return (
                <div
                className={`chatlist-iten ${active?'active':''}`}
                onClick={onClick}
                >
                <img src='https://avatars.githubusercontent.com/u/67269430?v=1'  className="chat-list-iten-havatar"/>
                <div className="chat-list-iten-lines">
                        <div className="chat-list-iten-line">
                                <div className="Chat-list-iten-name">{data.nome}</div>
                                <div className="chat-list-iten-date">19:00</div>
                        </div>
                        <div className="chat-list-iten-line">
                                <div className="chat-list-iten-lastMSG">
                                        <p>Opa td bem :) </p>
                                </div>
                        </div>
                </div>
                </div>
        )
}