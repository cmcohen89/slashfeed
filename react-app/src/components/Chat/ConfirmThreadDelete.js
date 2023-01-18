import { useDispatch } from "react-redux";
import { deleteThread, getChats } from "../../store/chats";

const ConfirmThreadDelete = ({ selectedChat, currUser, socket, chat, setShowDelete, setSelectedChat }) => {
    const dispatch = useDispatch();

    return (
        <div className="confirm-thread-delete">
            <h1>Are you sure you want to delete this thread?<br />This will delete it for both users!</h1>
            <div className="confirm-delete-buttons">
                <span
                    className="confirm-delete-button-yes"
                    onClick={async () => {
                        await dispatch(deleteThread(chat.id));
                        await socket.emit("delete_thread", { target: selectedChat.recipient, source: currUser })
                        setSelectedChat(null);
                        setShowDelete(false);
                        dispatch(getChats());
                    }}
                >
                    Yes, delete it!
                </span>
                <span
                    className="confirm-delete-button-no"
                    onClick={() => setShowDelete(false)}
                >
                    No, go back
                </span>
            </div>
        </div >
    )
}

export default ConfirmThreadDelete;
