import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';


function Html5() {
  return (
    <div className='html1'>
      <h1>The basic html</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KJ13lX20FqU?si=J9VU-y7cd_V_drYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='buttons'>
      <NavLink to={"/html4"}>
          <button className='button'>PREVIOUSLY</button>
        </NavLink>
        <NavLink to={"/html6"}>
          <button className='button'>NEXT</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Html5;
