import {NavLink} from "react-router-dom";

export default function App() {
    return (
        <div>
            <p>MAIN</p>
            <NavLink to={'/users'}>USERS</NavLink>
        </div>
    );
}
