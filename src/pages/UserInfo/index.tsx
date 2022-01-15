import React,  {useState, useEffect } from 'react';

import './style.scss';
import { Loading } from '../../components/Loading';
import InfoCard from '../../components/InfoCard';
import fetchUsers from '../../services/UserDetails';
import IUsersInfo from '../../types/IUsersInfo';

const UserInfo = () => {
    const [users, setUsers] = useState<IUsersInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetchUsers()
        .then(res => (setUsers(res.data.results), setIsLoading(false)))
        .catch(err => err)
    }, [])
    console.log(users);

    return (
        <div className='wrapper'>
            <h1>User Details</h1>
            {isLoading && <Loading />}
            {users.map((u, i) => (
                <InfoCard item ={u} key={i} />
            ))}
        </div>
    )
}
export default UserInfo;