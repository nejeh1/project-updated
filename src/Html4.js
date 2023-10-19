import React from 'react'
import { BrowserRouter as Router,Routes, Route, NavLink} from 'react-router-dom';

function Html4() {
  return (
    <div className='html1'>
      <h1>Heading are important</h1>
      <p>Search engines use the headings to index the structure and content of your web pages.
    Users often skim a page by its headings.<br></br> It is important to use headings to show the document structure.
    &lt;h1&gt; headings should be used for main headings, followed by &lt;h2&gt; headings,<br></br> then the less important &lt;h3&lt;, and so on.
    Each HTML heading <br></br>has a default size and if you want bigger than that  you can specify the size for<br></br> any heading with the "style" attribute, using the CSS font-size property:</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/KJ13lX20FqU?si=J9VU-y7cd_V_drYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div className='buttons'>
        <NavLink to={"/html3"}>
          <button className='button'>PREVIOUSLY</button>
        </NavLink>
        <NavLink to={"/html5"}>
          <button className='button'>NEXT</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Html4;
