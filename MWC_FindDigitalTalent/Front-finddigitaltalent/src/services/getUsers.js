export const getUsers = async( ) => {

    const url = `https://mwc-finddigitaltalent.herokuapp.com/users`;
    const resp = await fetch( url );
    const data = await resp.json();

    const users = data.user.map( user => {
        return {
            id: user._id,
            name: user.name,
            description: user.description,
            image: user.image,
            ...user
        }
    })

    return users;


}