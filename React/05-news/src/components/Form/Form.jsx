import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Form.css';

const Form = () => {

  let navigate = useNavigate();

  const [array, setArray] = useState([])

  const [data, setData] = useState({
        name: "",
        title: "",
        description: "",
        place: "",
        image: ""
      });

  const handleInputChange = (event) => {
        setData({
          ...data, 
          [event.target.name]: event.target.value
        });
      };

  const handleArray = () => {
        const hastag = document.getElementById('hastags')
        setArray([...array, hastag.value])
        hastag.value = ''
      } 

  const handleSubmit = (event) => {
        event.preventDefault();

        let save = JSON.parse(localStorage.getItem('dataForm')) || [];
        const dataForm = {...data, hastags:array}
        console.log(dataForm);
        save.push(dataForm)
        localStorage.setItem("dataForm", JSON.stringify(save))

        setTimeout(() => {
            navigate("/list");
          }, 1000);
      };
    
  return (
    <section className='form animate__animated animate__jackInTheBox'> 
      <form onSubmit={handleSubmit} className='form_body'>
          <h2>Fill in these details:</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Title"
            onChange={handleInputChange}
            name="title"
          />
          <textarea
            type="text"
            placeholder="Description"
            onChange={handleInputChange}
            name="description"
          />
          <div className="form_group">
            <input
              type="text"
              placeholder="Place"
              onChange={handleInputChange}
              name="place"
            />
            <div className="file-select">
            <input
              type="file"
              placeholder="Add a image"
              onChange={handleInputChange}
              name="image"
            />
            </div>
          </div>
          <div className="form_hastags">
            <input
              type="text"
              placeholder="#Hastags"
              id="hastags"
              className="hastags"
            />
            <button type="button" onClick={handleArray}>Add hastag</button>
          </div>
          <div className='list_hastags'>
              {array.map((elem,idx) => (
              <div className='animate__animated animate__zoomIn '>
                <p className='element_hastags' key={idx}>#{elem}</p>
              </div>
              ))}
          </div>
          <button type="submit">Send</button>
      </form>
      <div className="form_ilustration">
      </div>
    </section>

  )
}

export default Form