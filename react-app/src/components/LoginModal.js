import LoginForm from "./auth/LoginForm";

const LoginModal = ({ showLoginModal, setShowLoginModal }) => {
    return (
        <>
            <div className={`modal container ${showLoginModal ? "login-show" : ""}`}>
                <LoginForm showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal} />
            </div>
            <div
                className={`overlay ${showLoginModal ? "show" : ""}`}
                onClick={() => setShowLoginModal(!setShowLoginModal)}
            />
        </>
    )
}

export default LoginModal;
