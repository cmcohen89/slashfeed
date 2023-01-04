import { useState } from "react";
import { useDispatch } from "react-redux";
import { getChats } from "../../store/chats";
import { postMessage } from "../../store/chats";

const ChatForm = ({ threadId }) => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        let errors = [];
        if (body.length > 1000) errors.push("Easy tiger, let's keep it under 5000 characters!")
        if (errors.length > 0) {
            setErrors(errors);
        } else {
            const data = await dispatch(postMessage(body, threadId));
            if (data.errors) {
                setErrors(data.errors)
            } else {
                dispatch(getChats());
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
            />
            <button type='submit'>Send message</button>
        </form>
    )
}

export default ChatForm;
