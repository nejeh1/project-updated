import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';


function Html6() {
  return (
    <div className='html1'>
      <h1>Conclusion</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KJ13lX20FqU?si=J9VU-y7cd_V_drYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='buttons'>
        <NavLink to={"/html5"}>
          <button className='button'>PREVIOUSLY</button>
        </NavLink>
        <NavLink to={"/"}>
          <button className='button'>NEXT</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Html6;
