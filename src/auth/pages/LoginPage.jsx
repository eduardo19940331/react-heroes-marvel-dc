import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Eduardo Sánchez');

        navigate(lastPath, { replace: true });
        return <Navigate to="/marvel" />;
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-outline-success" onClick={onLogin}>Login</button>
        </div>
    )
}

export default LoginPage
