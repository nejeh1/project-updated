import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';

function Html2() {
  return (
    <div className="html1">
      <h1>Simple HTML document</h1>
      <img src=''></img>
      <h2>Exemple</h2>
      <ul>
        <p>The &lt;!DOCTYPE html&lt; declaration defines that this document is an HTML5 document</p>
        <p>The &lt;html&gt; element is the root element of an HTML page</p>
        <p>The &lt;head&gt; element contains meta information about the HTML page</p>
        <p>The &lt;title&gt; element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</p>
        <p>The &lt;body&gt; element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</p>
        <p>The &lt;h1&gt; element defines a large heading</p>
        <p>The &lt;p&gt; element defines a paragraph</p>
      </ul>
        <div className='buttons'>
        <NavLink to={"/html1"}>
          <button className='button'>PREVIOUSLY</button>
        </NavLink>
        <NavLink to={"/html3"}>
          <button className='button'>NEXT</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Html2;
