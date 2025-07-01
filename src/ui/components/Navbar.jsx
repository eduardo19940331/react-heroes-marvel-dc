import { useContext } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {
    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext);
    // In custom
    // if (!user?.logged) {
    //     navigate('/login', { replace: true });
    //     <Navigate to="/login" replace={true} />;
    // }
    
    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
        <Navigate to="/login" replace={true} />;
        return;
    };
    /////////

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand" to="/">Asociaciones</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink to="/marvel"
                        end
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        to="/dc"
                        end
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        DC
                    </NavLink>
                    <NavLink
                        to="/search"
                        end
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>
                    <button className="nav-item nav-link btn" onClick={onLogout}>
                        Logout
                    </button>
                    {/* <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/login"
                    >
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}