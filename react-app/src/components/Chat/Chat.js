import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats, readMessages, postMessage } from "../../store/chats";
import './Chat.css'
import ChatMessages from "./ChatMessages";
import { NavLink } from "react-router-dom";
import OneChat from "./OneChat";
import { io } from 'socket.io-client';
import SearchBarChat from "../SearchBar/SearchBarChat";
let socket;

const Chat = ({ setShowChatModal, targetUserId, showChatModal1, showChatModal2 }) => {
    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.user);
    let chats = useSelector(state => Object.values(state.chats));
    const [body, setBody] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (currUser) {
            socket = io();

            socket.on("chat", (chat) => {
                setMessages(messages => [...messages, chat])
            })

            if (selectedChat) {
                socket.emit("join", {
                    user: currUser.id,
                    room: selectedChat.id
                })
            }

            socket.on("notify", () => {
                dispatch(getChats());
            })

            socket.on("delete_thread", (data) => {
                if (data.source.id === selectedChat.recipient.id) setSelectedChat(null);
                dispatch(getChats());
            })

            return (() => {
                socket.disconnect()
            })
        }
    }, [setMessages, selectedChat, currUser, dispatch])

    useEffect(() => {
        if ((showChatModal1 || showChatModal2) && !selectedChat && chats.length) {
            const interval = setInterval(() => {
                dispatch(getChats());
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [showChatModal1, showChatModal2, selectedChat, setSelectedChat, chats.length, dispatch])

    useEffect(() => {
        if (currUser) dispatch(getChats());
        const targetChat = chats.find(chat => chat.recipient.id === +targetUserId);
        setSelectedChat(targetChat);
        if (targetChat) setMessages(targetChat.chatMessages);
    }, [dispatch, targetUserId, showChatModal1, showChatModal2, currUser]);

    const messageReader = (chat) => {
        const unreadMsgs = [];
        for (let msg of chat.chatMessages) if (!msg.read) unreadMsgs.push(msg.id);
        if (unreadMsgs.length) {
            dispatch(readMessages(unreadMsgs));
            dispatch(getChats());
        }
    }

    const calcTimeElapsed = (dateObj) => {
        let totalMs = new Date() - dateObj;
        let totalSeconds = totalMs / 1000;
        if (totalSeconds < 60) return 'just now';
        if (totalSeconds / 60 < 60) return Math.floor(totalSeconds / 60) + 'm';
        if (totalSeconds / 3600 < 24) return Math.floor(totalSeconds / 3600) + 'h';
        else return Math.floor(totalSeconds / 86400) + 'd';
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (body.trim() === '') return setBody('');
        const newMsg = await dispatch(postMessage(body, selectedChat.id));
        newMsg.room = selectedChat.id;
        await socket.emit("chat", newMsg);
        await socket.emit("notify", selectedChat.recipient)
        dispatch(getChats());
        setBody('');
        const msgObj = {};
        msgObj.chatMessages = messages;
        messageReader(msgObj);
    }

    // let totalUnreadMsgs = 0;
    if (currUser) {
        for (let chat of chats) {
            chat.recipient = Object.values(chat.chatUsers).filter(user => user.id !== currUser.id)[0];
            chat.chatMessages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            // for (let msg of chat.chatMessages) if (!msg.read && msg.messageOwner.id !== currUser.id) totalUnreadMsgs += 1;
        };
    }

    if (chats.length) {
        const emptyChats = [];
        const activeChats = [];
        for (let chat of chats) chat.chatMessages.length === 0 ? emptyChats.push(chat) : activeChats.push(chat);
        activeChats.sort((a, b) => new Date(b.chatMessages[b.chatMessages.length - 1].createdAt) - new Date(a.chatMessages[a.chatMessages.length - 1].createdAt));
        chats = activeChats.concat(emptyChats);
    };

    return (
        <div className="chat-page">
            <SearchBarChat selectedChat={selectedChat} showChatModal1={showChatModal1} showChatModal2={showChatModal2} setSelectedChat={setSelectedChat} setMessages={setMessages} />
            <div className="chat-left">
                {chats.length ? chats.map(chat => (
                    <div key={chat.id}>
                        <OneChat
                            chat={chat}
                            selectedChat={selectedChat}
                            setSelectedChat={setSelectedChat}
                            setMessages={setMessages}
                            calcTimeElapsed={calcTimeElapsed}
                            setShowChatModal={setShowChatModal}
                            messageReader={messageReader}
                            messages={messages}
                            currUser={currUser}
                            socket={socket}
                        />
                    </div>
                ))
                    :
                    <div className="no-message-threads">
                        <h2>No message threads yet...</h2>
                        <h3>Go to a user's profile page to start chatting with them!</h3>
                    </div>}
            </div>
            <div className="chat-right">
                {selectedChat ?
                    <div className='chat-right-header'>
                        <NavLink to={`/profile/${selectedChat.recipient.id}`} onClick={() => setShowChatModal(false)}>
                            <img className="chat-right-recipient-pic" src={selectedChat.recipient.profileImgUrl} alt="" />
                        </NavLink>
                        <h2 className='recipient-name'>{selectedChat.recipient.firstName}</h2>
                    </div>
                    :
                    <div className='chat-right-header'>
                        <span className="chat-right-header-placeholder" />
                    </div>
                }
                <div className="chat-right-content">
                    {selectedChat ? messages.map(msg => (
                        <div key={msg.id}>
                            <ChatMessages msg={msg} selectedChat={selectedChat} setSelectedChat={setSelectedChat} setMessages={setMessages} />
                        </div>
                    ))
                        :
                        <div className="chat-right-content-placeholder">
                            <i className="fa-regular fa-message placeholder-icon"></i>
                            <h1 className="chat-right-content-placeholder-title">Your messages</h1>
                            <h3 className="chat-right-content-placeholder-subtitle">Chat with other users!</h3>
                        </div>
                    }
                </div>
                <div className="message-form-container">
                    {selectedChat ?
                        <form className="message-form" onSubmit={handleSubmit}>
                            <input
                                className={`message-input ${body.length === 999 && 'message-input-max'}`}
                                required
                                onChange={e => setBody(e.target.value)}
                                value={body}
                                placeholder="Type your message here!"
                                type='text'
                                maxLength="999"
                            />
                            <button className={`send-message-button ${(body.trim() === '') && 'send-message-button-disabled'}`} type='submit'><i className="fa-solid fa-message message-icon"></i></button>
                        </form>
                        :
                        <form className="message-form">
                            <input
                                className='message-input-disabled'
                                required
                                type='text'
                                maxLength="999"
                                disabled
                            />
                            <button className='send-message-button-disabled' type='submit'><i className="fa-solid fa-message message-icon"></i></button>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
};

export default Chat;
