import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getChats } from "../../store/chats";
import './Chat.css'
import ChatForm from "./ChatForm";
import ChatMessages from "./ChatMessages";
import { Redirect } from "react-router-dom";

const Chat = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user);
    const chats = useSelector(state => Object.values(state.chats));
    const [selectedChat, setSelectedChat] = useState(null);

    const calcTimeElapsed = (dateObj) => {
        let totalMs = new Date() - dateObj;
        let totalSeconds = totalMs / 1000;
        if (totalSeconds < 5) return 'now'
        if (totalSeconds < 60) return Math.floor(totalSeconds) + 's';
        if (totalSeconds / 60 < 60) return Math.floor(totalSeconds / 60) + 'm';
        if (totalSeconds / 3600 < 24) return Math.floor(totalSeconds / 3600) + 'h';
        else return Math.floor(totalSeconds / 86400) + 'd'
    }

    useEffect(() => {
        dispatch(getChats());
    }, [dispatch, deleteMessage])

    if (!currUser) return <Redirect to={`/`} />;

    for (let chat of chats) {
        chat.recipient = Object.values(chat.chatUsers).filter(user => user.id !== currUser.id)[0]
        chat.chatMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }

    return (
        <div className="chat-page">
            <div className="chat-left">
                {chats.map(chat => (
                    <div className='chat-recipient' onClick={() => setSelectedChat(chat)}>
                        <img className="recipient-pic" src={chat.recipient.profileImgUrl} />
                        <div>
                            <h2 className='recipient-name'>{chat.recipient.firstName}</h2>
                            {chat.chatMessages.length ?
                                <p className="chat-preview">
                                    {chat.chatMessages[chat.chatMessages.length - 1].message.slice(0, 15)}
                                    {chat.chatMessages[chat.chatMessages.length - 1].message.length > 14 ? '...' : ""}
                                    {" "} · {" "} {calcTimeElapsed(new Date(chat.chatMessages[chat.chatMessages.length - 1].createdAt))}
                                </p>
                                :
                                <p className="chat-preview">
                                    Start a convo with {chat.recipient.firstName}!
                                </p>
                            }
                        </div>
                        {/* <span
                            className='delete-message-button'
                            onClick={async () => {
                                await dispatch(deleteThread(chat.id))
                                dispatch(getChats())
                            }}>
                            <i className="fa-solid fa-xmark"></i>
                        </span> */}
                    </div>
                ))}
            </div>
            <div className="chat-right">
                <div className="chat-right-content">
                    {selectedChat && selectedChat.chatMessages.map(msg => (
                        <ChatMessages msg={msg} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
                    ))}
                </div>
                <div>
                    {selectedChat && <ChatForm threadId={selectedChat.id} setSelectedChat={setSelectedChat} />}
                </div>
            </div>
        </div>
    )
}

export default Chat;
