import React, { useState } from 'react';
import './Html2';
import './App.css';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';
function Html1() {
  return (
        <div className="html1">
          <h1>This is your first step in HTML</h1>
          <div>
          <h3>What is HTML</h3>
          </div>
          <ul>
            <p>HTML stands for Hyper Text Markup Language</p>
            <p>HTML is the standard markup language for creating Web pages</p>
            <p>HTML describes the structure of a Web page</p>
            <p>HTML consists of a series of elements</p>
            <p>HTML elements tell the browser how to display the content</p>
            <p>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</p>
          </ul>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KJ13lX20FqU?si=J9VU-y7cd_V_drYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className='buttons'>
          <NavLink to={"/"}>
          <button className='button'>HOME</button>
          </NavLink>
          <NavLink to={"/html2"}>
          <button className='button'>NEXT</button>
          </NavLink>
          </div>
    </div>
  );
}
;
export default Html1 ;