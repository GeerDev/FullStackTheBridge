export const postUser = async( data ) => {

    const url = `https://mwc-finddigitaltalent.herokuapp.com/users`;
    await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })
  

}



