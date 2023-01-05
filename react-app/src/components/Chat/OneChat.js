import { useState } from "react";
import { NavLink } from "react-router-dom";
import ConfirmThreadDelete from "./ConfirmThreadDelete";

const OneChat = ({ chat, selectedChat, setSelectedChat, calcTimeElapsed, setShowChatModal }) => {
    const [hover, setHover] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <div
            className='chat-recipient'
            onClick={() => setSelectedChat(chat)}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={`modal container ${showDelete ? "signup-show" : ""}`}>
                <ConfirmThreadDelete setShowDelete={setShowDelete} chat={chat} setSelectedChat={setSelectedChat} />
            </div>
            <div
                className={`overlay ${showDelete ? "show" : ""}`}
                onClick={() => setShowDelete(!showDelete)}
            />
            <NavLink to={`/profile/${chat.recipient.id}`} onClick={() => setShowChatModal(false)}>
                <img className="recipient-pic" src={chat.recipient.profileImgUrl} alt="" />
            </NavLink>
            <div>
                <h2 className={`recipient-name ${selectedChat && selectedChat.recipient.id === chat.recipient.id && 'selected-recipient-name'}`}>{chat.recipient.firstName}</h2>
                {chat.chatMessages.length ?
                    <p className="chat-preview">
                        {chat.chatMessages[chat.chatMessages.length - 1].message.slice(0, 20)}
                        {chat.chatMessages[chat.chatMessages.length - 1].message.length > 19 ? '...' : ""}
                        {" "} · {" "} {calcTimeElapsed(new Date(chat.chatMessages[chat.chatMessages.length - 1].createdAt))}
                    </p>
                    :
                    <p className="chat-preview">
                        Start a convo with {chat.recipient.firstName}!
                    </p>
                }
            </div>
            {hover && <span
                className='delete-thread-button'
                onClick={() => setShowDelete(true)}
            >
                <i className="fa-solid fa-xmark"></i>
            </span>}
        </div>
    )
}

export default OneChat;
