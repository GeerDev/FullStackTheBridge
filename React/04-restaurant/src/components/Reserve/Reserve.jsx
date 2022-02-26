import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reserve = () => {

  let navigate = useNavigate();

  const [data, setData] = useState({
        name: "",
        email: ""
      });

  const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      };

  const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("dataForm", JSON.stringify(data))

        setTimeout(() => {
            navigate("/");
          }, 1000);
      };
    
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
      />
      <button type="submit">Enviar</button>
</form>
  )
}

export default Reserve