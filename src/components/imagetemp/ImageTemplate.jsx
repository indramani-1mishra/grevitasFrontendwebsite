import React from 'react'
import './imagetemplate.css';
import { Link } from 'react-router-dom';

export default function ImageTemplate({ manuitem = [], imageurl = [] }) {
  return (
    <>
      {manuitem && <div className="imageTemplateContainer">

      {/* Left Menu */}
      
        <ul className="imageTemplateMenu">
          {manuitem.map((data) => (
            <li key={data.id}>
              <Link to={data.link}>{data.name}</Link>
            </li>
          ))}
        </ul>
      

      {/* Images Section */}
      <div className="imageTemplateImages">
        {imageurl.map((url) => (
          <img src={url.path} alt={url.alt} key={url.path} />
        ))}
      </div>

    </div>}
    </>
  )
}
