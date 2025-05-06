import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const App = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


const changeList = (name)=>{
alert(name)
}


    return (
        <div>

            <h1>User List</h1>

            {loading && <p>Loading...</p>}

            {error && <p>Error: {error}</p>}

            <ul>

                {users.map((user) => (
                    <li onClick={()=>{changeList(user.name)}} key={user.id}>{user.name}</li>
                ))}
                
            </ul>

        </div>
    );
};

export default App;
