import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const ProfileRedirect = () => {
    const user = useSelector(state => state.session.user)
    if (user) {
        return <Redirect to={`/profile/${user.id}`} />;
    } else {
        return <Redirect to='/home' />
    }
}

export default ProfileRedirect;
