import axios from 'axios';

const getMenuItem = async() => {
    try {
        const response = await axios.get(`https://restaurant-api-ejercicios.herokuapp.com/menus`)
        // Así se meten cabeceras en una petición axios:
        // , { headers: {'X-API-KEY': `7f74d89625dc98a54d44ee4fb30f016d`}})
        let data = await response.data
        return data
    } catch (error) {
        console.error(error)
        throw new Error(error);
    }
}

export default getMenuItem;