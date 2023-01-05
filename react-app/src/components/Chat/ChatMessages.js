import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getChats } from "../../store/chats";
import { getOneChat } from "../../store/one_chat";

const ChatMessages = ({ msg, selectedChat, setSelectedChat }) => {
    const currUser = useSelector(state => state.session.user);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom()
    }, [])


    return (
        <>
            <div className={
                msg.messageOwner.id === currUser.id ?
                    `curr-user-msg` : `target-user-msg`}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {
                    msg.messageOwner.id == currUser.id && hover &&
                    <span
                        className='delete-message-button'
                        onClick={async () => {
                            await dispatch(deleteMessage(msg.id));
                            dispatch(getChats());
                            const newChat = await dispatch(getOneChat(selectedChat.id));
                            setSelectedChat(newChat.Chat)
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
            </div>
        </>
    )
}

export default ChatMessages;
