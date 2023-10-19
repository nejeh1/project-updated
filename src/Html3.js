import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';


function Html3() {
  return (
    <div className="html1">
      <h1>The &lt;!DOCTYPE&gt; Declaration</h1>
      <p>The &lt;!DOCTYPE&gt; declaration represents the document type, and helps browsers to display web pages correctly.
<br></br>It must only appear once, at the top of the page (before any HTML tags).
The &lt;!DOCTYPE&gt; declaration is not case sensitive.<br></br>
The &lt;!DOCTYPE&gt; declaration for HTML5 is:</p>
<p>Web pages can be created and modified by using professional HTML editors.

However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).<br></br>
We believe that using a simple text editor is a good way to learn HTML.<br></br>
Follow the steps below to create your first web page with Notepad or TextEdit.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/bWPMSSsVdPk?si=Wbr3AnniisIutxMG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div className='buttons'>
        <NavLink to={"/html2"}>
          <button className='button'>PREVIOUSLY</button>
        </NavLink>
        <NavLink to={"/html4"}>
          <button className='button'>NEXT</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Html3;
