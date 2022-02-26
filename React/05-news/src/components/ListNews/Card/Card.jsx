import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";

import './Card.scss';

const Card = () => {

  const { news, getNews } = useContext(GlobalContext);

  useEffect(()=> {
    getNews()
  }, []);

  const externalLink = ( url ) => {
      window.location.replace(url)
  }

  const event = news.map(({des_facet, ...event}) => {
    return (
      <div key={event.title} className="card animate__animated animate__backInLeft">
        <img src={event.multimedia[1].url} alt={event.multimedia[1].caption}/>
        <div className="card_content">
          <h1>{event.title}</h1>
          <p>{event.abstract}</p>
          <p><i>{event.byline}</i></p>
          <div className="card_atribbutes">
          {
            des_facet ? des_facet.map((elem,idx) => (
                <span key={idx} className="card_element animate__animated animate__bounce">#{elem}</span>
              ))
            : null
          }
          </div>
          {
            event.org_facet ? (<p>{event.org_facet}</p>) : null
          }
          {
            event.geo_facet ? (<p>{event.geo_facet}</p>) : null
          } 
          <button onClick={()=> externalLink (event.short_url) }>Go to the website</button>
        </div>
      </div>
    );
  });
  return <div>{event}</div>
  }
  
  export default Card