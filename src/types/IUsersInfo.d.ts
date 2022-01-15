export default interface IUsersInfo {
    phone: string,
    email: string,
    dob: {
        age: number,
        date: string
    },
    name: {
        title: string,
        first: string,
        last: string
    },
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    },
    location: {
        city: string,
        state: string,
        postcode: number,
        country: string
    }
}