import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getChats } from "../../store/chats";
import ConfirmThreadDelete from "./ConfirmThreadDelete";

const OneChat = ({ chat, selectedChat, setSelectedChat, calcTimeElapsed, setShowChatModal, setMessages }) => {
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    return (
        <>
            {chat && chat.recipient &&
                <div
                    className='chat-recipient'
                    onClick={() => {
                        dispatch(getChats());
                        setSelectedChat(chat);
                        setMessages(chat.chatMessages)
                    }}
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
                        {!chat.recipient ? setMessages([]) && setSelectedChat(null) : ''}
                        <h2 className={`recipient-name ${selectedChat && selectedChat.recipient.id === chat.recipient.id && 'selected-recipient-name'}`}>{chat.recipient.firstName}</h2>
                        {chat.chatMessages.length ?
                            <p className="chat-preview">
                                {chat.chatMessages[chat.chatMessages.length - 1].message.trim().slice(0, 20)}
                                {chat.chatMessages[chat.chatMessages.length - 1].message.trim().length > 19 ? '...' : ""}
                                &nbsp;·&nbsp;
                                {calcTimeElapsed(new Date(chat.chatMessages[chat.chatMessages.length - 1].createdAt))}
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
                </div>}
        </>
    )
}

export default OneChat;
