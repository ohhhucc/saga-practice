import {useEffect} from "react";
import {useDispatch, useStore} from "react-redux";

export default function Users() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type:'LOAD_USERS_DATA'})
    }, [])

    const state = useStore().getState();

    return (
        <div>
            <p>USERS</p>
            {state.app.users.map(user => <p>{user.name}</p>)}
            <button onClick={() => {
                dispatch({type:'LOAD_PLANETS_DATA'})
            }}>PLANETS</button>
        </div>
    )
}