import { useState } from "react";
import { useDispatch } from "react-redux";
import { getChats } from "../../store/chats";
import { postMessage } from "../../store/chats";

const ChatForm = ({ threadId, socket }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    // const currUser = useSelector(state => state.session.user);

    const handleSubmit = async e => {
        e.preventDefault();
        const newMsg = await dispatch(postMessage(body, threadId));
        socket.emit("chat", newMsg)
        dispatch(getChats());
        // const newChat = await dispatch(getOneChat(threadId))
        // newChat.Chat.recipient = Object.values(newChat.Chat.chatUsers).filter(user => user.id !== currUser.id)[0]
        // setSelectedChat(newChat.Chat)
        setBody('');
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                id="emoji-input"
                className='message-input'
                required
                onChange={e => setBody(e.target.value)}
                value={body}
                placeholder="Type your message here!"
                type='text'
                maxLength="999"
            />
            <button className='send-message-button' type='submit'><i className="fa-solid fa-message message-icon"></i></button>
        </form>
    )
}

export default ChatForm;
