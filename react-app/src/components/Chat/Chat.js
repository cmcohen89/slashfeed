import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, deleteThread, getChats } from "../../store/chats";
import { getFollows } from "../../store/follows";
import './Chat.css'
import ChatForm from "./ChatForm";

const Chat = () => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user)
    const chats = useSelector(state => Object.values(state.chats))
    for (let chat of chats) {
        chat.recipient = Object.values(chat.chatUsers).filter(user => user.id !== currUser.id)[0]
        chat.chatMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    }
    console.log(chats)

    useEffect(() => {
        dispatch(getChats());
    }, [dispatch])

    return (
        <div className="chat-page">
            <div className="chat-left">
                {chats.map(chat => (
                    <div>
                        <h1>
                            {chat.recipient.username}
                            <span
                                className='delete-message-button'
                                onClick={async () => {
                                    await dispatch(deleteThread(chat.id))
                                    dispatch(getChats())
                                }}>
                                <i className="fa-solid fa-xmark"></i>
                            </span>
                        </h1>
                        {chat.chatMessages.map(msg => (
                            <p>{msg.messageOwner.username}: {msg.message}
                                {
                                    msg.messageOwner.id == currUser.id &&
                                    <span
                                        className='delete-message-button'
                                        onClick={async () => {
                                            await dispatch(deleteMessage(msg.id))
                                            dispatch(getChats())
                                        }}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </span>
                                }
                            </p>
                        ))}
                        <ChatForm threadId={chat.id} />
                    </div>
                ))}
            </div>
            <div className="chat-right">
                {/* {chats.map(chat => (
                    <OneChat chat={selectedChat} />
                ))} */}
            </div>
        </div>
    )
}

export default Chat;
