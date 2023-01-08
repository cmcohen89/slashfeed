import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChats, postThread } from "../../store/chats";
import { searchQuery } from "../../store/search";
import './SearchBarChat.css'

const SearchBarChat = ({ selectedChat, setSelectedChat, setMessages, showChatModal1, showChatModal2 }) => {
    const dispatch = useDispatch();
    const results = useSelector(state => Object.values(state.searchResults));
    const currUser = useSelector(state => state.session.user);
    const [query, setQuery] = useState('');

    const handleChange = async () => {
        await dispatch(searchQuery(query));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newChat = await dispatch(postThread(results[0].id));
        await dispatch(getChats());
        newChat.chat.recipient = results[0];
        setSelectedChat(newChat.chat)
        setMessages(newChat.chat.chatMessages)
        setQuery('');
    }

    const handleDeselect = async (e) => {
        setTimeout(() => {
            setQuery('');
        }, 100)
    }

    useEffect(() => {
        handleChange();
        getChats();
    }, [query, postThread])

    useEffect(() => {
        setQuery('')
        setSelectedChat(null)
    }, [showChatModal1, showChatModal2])

    return (
        <div className="search-bar-chat">
            <form onSubmit={handleSubmit}>
                <input
                    className='search-input-chat'
                    required
                    name='title-input'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    placeholder="Search for a user to start chatting with!"
                    type='text'
                    autoComplete="off"
                    onBlur={handleDeselect}
                />
            </form>
            {results && query &&
                <div className="results-container-chat">
                    {results.filter(result => result.id !== currUser.id).map(result => (
                        <div className="one-result" onClick={async () => {
                            const newChat = await dispatch(postThread(result.id));
                            await dispatch(getChats());
                            newChat.chat.recipient = result;
                            setSelectedChat(newChat.chat)
                            setMessages(newChat.chat.chatMessages)
                            setQuery('');
                        }}>
                            <h2 className="one-result-user">
                                <span className='profile-pic-link one-post-profile-pic' to={`/profile/${result.id}`}>
                                    <img className='one-post-profile-pic' src={result.profileImgUrl} alt='' />
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className='result-name' to={`/profile/${result.id}`}>
                                    {result.username}
                                </span>
                            </h2>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default SearchBarChat;
