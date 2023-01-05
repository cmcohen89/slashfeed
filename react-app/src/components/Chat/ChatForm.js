import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../../store/chats";
import { postMessage } from "../../store/chats";
import { getOneChat } from "../../store/one_chat";

const ChatForm = ({ threadId, setSelectedChat }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState('');
    const currUser = useSelector(state => state.session.user);

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        let errors = [];
        if (body.length > 999) errors.push("Easy tiger, let's keep it under 1000 characters!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(postMessage(body, threadId));
            if (data.errors) {
                setErrors(data.errors)
            } else {
                dispatch(getChats());
                const newChat = await dispatch(getOneChat(threadId))
                newChat.Chat.recipient = Object.values(newChat.Chat.chatUsers).filter(user => user.id !== currUser.id)[0]
                setSelectedChat(newChat.Chat)
                setBody('');
            }
        }
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <input
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
