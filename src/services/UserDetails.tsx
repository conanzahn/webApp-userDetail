import axios from 'axios';

const UserDetails = () => {
    return (
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/'
        }).then(res =>
            res)
    )
}
export default UserDetails;