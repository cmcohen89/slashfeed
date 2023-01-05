import { useDispatch } from "react-redux";
import { deletePost } from "../../store/all_posts";
import { getUserLikedPosts, getUserPosts } from "../../store/user_posts";

const ConfirmDelete = ({ postId, showConfirmDelete, user }) => {
    const dispatch = useDispatch();

    return (
        <div className="confirm-delete">
            <h1>Are you sure you want to delete this post?</h1>
            <div className="confirm-delete-buttons">
                <span
                    className="confirm-delete-button-yes"
                    onClick={async () => {
                        await dispatch(deletePost(postId));
                        dispatch(getUserPosts(user.id));
                        dispatch(getUserLikedPosts(user.id));
                        showConfirmDelete(false);
                    }}
                >
                    Yes, delete it!
                </span>
                <span
                    className="confirm-delete-button-no"
                    onClick={() => showConfirmDelete(false)}
                >
                    No, go back
                </span>
            </div>
        </div>
    )
}

export default ConfirmDelete;
