export const sendEmail= async( data ) => {

    const url = `https://mwc-finddigitaltalent.herokuapp.com/users/sendEmail`;
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json'
        }
      })

    const email = await resp.json();

    return email
}
