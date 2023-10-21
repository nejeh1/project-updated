import React from 'react'
import { NavLink, Route } from 'react-router-dom';

function Contact() {
  return (
    <div className='kkk'>
    <div className='contactext'>
        <div >
        <div>
      <h1>Sign Up From Here</h1>
      <p>To Join Our Comunity Sign Up From Here And Be A Part Of Our Woerld</p>
        </div>
        <div className='icons'>
        <NavLink to={"signup"}>
        <button className='button0'>Sign Up With Email</button>
        </NavLink>
      <div className='icons'>
      <a href=''> <img src='https://www.alpha-cure.com/wp-content/uploads/2023/07/pngtree-twitter-social-media-round-icon-png-image_6315985.png' className='imagecont'></img></a>
      <a href=''> <img src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png' className='imagecont'></img></a>
      <a href=''> <img src='https://i0.wp.com/bodybeyondlimits.com.au/wp-content/uploads/2022/07/instagram-circle-icon-png-4.png?ssl=1' className='imagecont'></img></a>
      <a href=''> <img src='data:image/png;base64,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' className='imagecont'></img></a>
      </div>
      </div>
      </div>
      <div className='profiles'>
      <a href='https://www.facebook.com/mark.fotohabadi/'  className='profile'>
      <img src='https://scontent.ftun8-1.fna.fbcdn.net/v/t1.6435-9/67556924_10219964289967818_8833386931908771840_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=be3454&_nc_ohc=1PpdAuFWrTAAX_sqDoi&_nc_ht=scontent.ftun8-1.fna&oh=00_AfAXV30OJqICseKqesbctpKaPDk9iS7aNmKlEEoT1gJ59w&oe=655B2508' className='imagecont'></img>
        <div>
        <h2 style={{color:"black"}}>Mark Fotohabadi</h2>
        <p>thanks CodeProsper for this opportunity</p>
        </div>
      </a>
      <a href='https://es-la.facebook.com/people/Hanna-Yazzie/pfbid057kc5z5vvskLAcjU4JjfPaUM6kgCY5WEQbjrFpTi97UXgoofDtXXdNF6dWkGCi91l/'  className='profile'>
      <img src='https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/381412239_122140402874002094_1583567195525944196_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sN5JqBd4UAUAX_Eukam&_nc_ht=scontent.ftun8-1.fna&oh=00_AfBkVMHm0soZpo2vZsDnAEJ1cV8vwfQkekuN9lHJdZmI5g&oe=65399E48'></img>
        <div >
        <h2 style={{color:"black"}}>Hanna Yazzie</h2>
        <p> i learned w1 and im gonna learn more</p>
        </div>
      </a>
      <a href='https://www.facebook.com/chris.haraldsen.5/'  className='profile'>
      <img src='https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/159038127_5835382329812584_14213252064022380_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=105&ccb=1-7&_nc_sid=db1b99&_nc_ohc=PfQqy5j19MkAX_QuGz7&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfB1HeZDuNu7e9xXmC-_61cjpjy77QE4J0l3N2E_yzJjxw&oe=6551FF52'></img>
        <div>
        <h2 style={{color:"black"}}> Chris Haraldsen</h2>
        <p>it was a great experience</p>
        </div>
      </a>
      <a href='https://www.facebook.com/drofn.erlingsdottir.1/'  className='profile'>
      <img src='https://www.facebook.com/photo/?fbid=724381679706886&set=a.110973271047733'></img>
        <div>
        <h2 style={{color:"black"}}>Drofn Erlings</h2>
        <p> What a great job</p>
        </div>
      </a>
      <a href='https://www.facebook.com/people/Mohamed-Salah-Khaled/pfbid02vhh1PpNoBZoX2zRU1kKQqjTEqb7LnieZcyUarNpDEZmfW3WSkaQXfj7yUAszgbTXl/'  className='profile'>
      <img src='https://www.facebook.com/photo/?fbid=3636061279956671&set=a.1550459315183555'></img>
        <div>
        <h2 style={{color:"black"}}>Mohammed Salah Khaled</h2>
        <p>thanks guys for the opportunity</p>
        </div>
      </a>
      </div>
      </div>
    </div>
  )
}

export default Contact;
