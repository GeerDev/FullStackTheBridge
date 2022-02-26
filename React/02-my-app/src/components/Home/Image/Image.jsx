import './Image.css';

import {DiJavascript1,DiCss3,DiHtml5,DiMongodb,DiMysql,DiReact} from "react-icons/di"

const Image = () => {
  return (
    <>
    <h3>Tecnologías con las que me defiendo</h3>
    <div className='tecnologies'>
        <span><DiCss3 /></span>
        <span><DiHtml5 /></span>
        <span><DiJavascript1 /></span>
        <span><DiMongodb /></span>
        <span><DiMysql /></span>
        <span><DiReact /></span>
    </div>
    </>
  )
}

export default Image