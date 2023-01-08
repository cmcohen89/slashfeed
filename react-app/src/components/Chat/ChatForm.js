// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getChats } from "../../store/chats";
// import { postMessage } from "../../store/chats";
// import { io } from 'socket.io-client';
// let socket;

// const ChatForm = ({ thread, setMessages }) => {
//     const dispatch = useDispatch();
//     const [body, setBody] = useState('');
//     const currUser = useSelector(state => state.session.user)

//     useEffect(() => {
//         if (currUser) {
//             socket = io();

//             socket.on("chat", (chat) => {
//                 setMessages(messages => [...messages, chat])
//             })

//             socket.emit("join", {
//                 user: currUser.id,
//                 room: thread.id
//             })

//             socket.on("notify", () => {
//                 dispatch(getChats());
//             })

//             return (() => {
//                 socket.disconnect()
//             })
//         }
//     }, [setMessages, thread.id])

//     const handleSubmit = async e => {
//         e.preventDefault();
//         if (body.trim() === '') return setBody('');
//         const newMsg = await dispatch(postMessage(body, thread.id));
//         newMsg.room = thread.id;
//         socket.emit("chat", newMsg);
//         socket.emit("notify", thread.recipient)
//         dispatch(getChats());
//         setBody('');
//     }

//     return (
//         <form className="message-form" onSubmit={handleSubmit}>
//             <input
//                 className='message-input'
//                 required
//                 onChange={e => setBody(e.target.value)}
//                 value={body}
//                 placeholder="Type your message here!"
//                 type='text'
//                 maxLength="999"
//             />
//             <button className={`send-message-button ${body.trim() === '' && 'send-message-button-disabled'}`} type='submit'><i className="fa-solid fa-message message-icon"></i></button>
//         </form>
//     )
// }

// export default ChatForm;
