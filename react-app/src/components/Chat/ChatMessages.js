import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getChats } from "../../store/chats";
import { getOneChat } from "../../store/one_chat";

const ChatMessages = ({ msg, selectedChat, setSelectedChat, setMessages }) => {
    const currUser = useSelector(state => state.session.user);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom();
    }, []);

    return (
        <>
            {currUser && <div className={
                msg.messageOwner.id === currUser.id ?
                    `curr-user-msg` : `target-user-msg ${!msg.read && 'target-user-msg-unread'}`}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {hover && <span className={
                    msg.messageOwner.id === currUser.id ?
                        `curr-user-timestamp` : `target-user-timestamp`}
                >
                    {new Date(msg.createdAt).toLocaleString()}
                </span>}
                {
                    msg.messageOwner.id === currUser.id && hover &&
                    <span
                        className='delete-message-button'
                        onClick={async () => {
                            await dispatch(deleteMessage(msg.id));
                            dispatch(getChats());
                            const newChat = await dispatch(getOneChat(selectedChat.id));
                            newChat.Chat.recipient = Object.values(newChat.Chat.chatUsers).filter(user => user.id !== currUser.id)[0]
                            setSelectedChat(newChat.Chat)
                            setMessages(newChat.Chat.chatMessages)
                        }}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                }

                <p
                    className={msg.messageOwner.id === currUser.id ?
                        `curr-user-msg-content` : `target-user-msg-content`}
                >
                    {msg.message}
                </p>
                <div ref={messagesEndRef} />
            </div>}
        </>
    )
}

export default ChatMessages;
