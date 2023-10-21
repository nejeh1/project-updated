import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Teachers() {
    const [OurTeam,setOurTeam]=useState([
        {name:"Mark hamilton",instagram:"https://www.instagram.com/mark.hamilton/?hl=fr",twitter:"https://twitter.com/markyham",facebook:"https://en-gb.facebook.com/mark.hamilton.9889",degree:"Bachelor of Science in Game Development",image:"https://media.vanityfair.com/photos/6319eab06009e759e6638e28/master/w_2560%2Cc_limit/1421315651"},
        {name:"Amelia hanna",instagram:"https://www.instagram.com/gigglesamelia/?hl=fr",twitter:"https://twitter.com/hannaameliaa",facebook:"https://www.facebook.com/photo/?fbid=3673568869540585&set=a.1399201546977340&__tn__=%3C",degree:"BSc in Computing Web Development",image:"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"},
        {name:"Adam Siraj",instagram:"https://www.instagram.com/adamsirajj/",facebook:"https://fr-fr.facebook.com/people/Adam-Siraj/pfbid037gpiytRGosS7vHQe6njLPBjgVmo8PD9QXXYeaLZjAKdfkhZm8aKuCRps7A7ETCpSl/",twitter:"https://twitter.com/SirajAdam2",degree:"-Bachelor of Science in Information Systems - Web Development Concentration",image:"https://pbs.twimg.com/profile_images/861814141899620352/rilXkENS_400x400.jpg"}
    ])
  return (
    <div style={{margin:'50px'}}>
        <h1 className='titlenm'>Our Website Creator</h1>
    <div className='teacherbox'>
      {OurTeam.map((OurTeam,index)=>(
         
        <div className='teachers'>
        <img src={OurTeam.image} alt={OurTeam.name}></img>
        <h2>{OurTeam.name}</h2>
        <p>{OurTeam.degree}</p>
        <p>{OurTeam.age}</p>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <a href={OurTeam.instagram}><img src='https://i0.wp.com/bodybeyondlimits.com.au/wp-content/uploads/2022/07/instagram-circle-icon-png-4.png?ssl=1' style={{width:"50px",height:"50px",margin:"7px"}}></img></a>
          <a href={OurTeam.facebook}><img src='data:image/png;base64,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' style={{width:"50px",height:"50px",margin:"7px"}}></img></a>
          <a href={OurTeam.twitter}><img src='https://www.alpha-cure.com/wp-content/uploads/2023/07/pngtree-twitter-social-media-round-icon-png-image_6315985.png' style={{width:"50px",height:"50px",margin:"7px"}}></img></a>
      </div>
      </div>
      ))}
      
    </div>
    </div>
  )
}

export default Teachers
