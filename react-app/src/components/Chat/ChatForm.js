import { useState } from "react";
import { useDispatch } from "react-redux";
import { getChats } from "../../store/chats";
import { postMessage } from "../../store/chats";

const ChatForm = ({ threadId, socket }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (body.trim() === '') return setBody('');
        const newMsg = await dispatch(postMessage(body, threadId));
        socket.emit("chat", newMsg);
        dispatch(getChats());
        setBody('');
    }

    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input
                className='message-input'
                required
                onChange={e => setBody(e.target.value)}
                value={body}
                placeholder="Type your message here!"
                type='text'
                maxLength="999"
            />
            <button className={`send-message-button ${body.trim() === '' && 'send-message-button-disabled'}`} type='submit'><i className="fa-solid fa-message message-icon"></i></button>
        </form>
    )
}

export default ChatForm;
