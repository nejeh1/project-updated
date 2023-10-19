import { createSlice } from "@reduxjs/toolkit";



export const coursesSlice=createSlice({
    name:"courses",
    initialState:{
        courses:[{name:'HTML',star:4,description:' It is a standard markup language for web page creation',image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/1/881415294f_50170557_code-html-sashkin-adobe-stock.jpg',duration:"30 days",coast:"150$"},
        {name:'CSS',star:5,description:' is a stylesheet language used to describe the presentation of a document written in HTML',image:'https://www.skyminds.net/wp-content/uploads/2009/07/css.jpg',duration:"60 days",coast:"200$"},
        {name:'JavaScript',star:5,description:' is a scripting language that enables you to create dynamically updating content',image:'https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png',duration:"60 days",coast:"350$"},
        {name:'Figma',star:5,description:'Figma is the leading collaborative design tool for building meaningful products',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs50YocUbWVenSNWuV28TLuhyF5-24rs2hTQWrSAH2WdhAgHvjBPIEj8QD-5fDYUivXfM&usqp=CAU',coast:"100$"},
        {name:'Python',star:5,description:'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYkBRSs213HVUF86CZhWv1UfUzSuXbTaDOeR4pXuvXx9qzoOc-dJ9YloV17cKfJuGozY&usqp=CAU',coast:"200$"},
        {name:'Java',star:5,description:'Java is a multi-platform, object-oriented, and network-centric language',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsI9fL-xk1XsBHaFYrZ72PA0jgZk9B4dUCg&usqp=CAU',coast:"500$"},
        {name:'C++',star:5,description:'C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused',image:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/338236756/original/6240543093b14bffd8d804aed7f4e0aab440bb56/help-you-in-programming-with-cpp-and-writing-as-well.jpg',coast:"450$"},
        {name:'SQL',star:5,description:'SQL stands for Structured Query Language · SQL lets you access and manipulate databases · SQL became a standard of the American National Standards Institute',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN3409Xy8KSTRtvff6zPTXxDYrbanZiKZxw&usqp=CAU',coast:"100$"},
        {name:'PHP',star:5,description:'PHP is a widely-used open source general-purpose scripting language that is especially suited for web',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChGLTmw14-QnCYMDruDDTeXOZuufAl9uCZA&usqp=CAU',coast:"300$"},
        {name:'C#',star:5,description:'C# is used to develop web apps, desktop apps, mobile apps, games and much more',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVR7wx2oq8ITpsZjDx94Hc9XGPF4GVS1loA&usqp=CAU',coast:"200$"}
    ]
          ,  filtredCourses:[{name:'HTML',star:4,description:' It is a standard markup language for web page creation',image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/1/881415294f_50170557_code-html-sashkin-adobe-stock.jpg',duration:"30 days",coast:"150$"},
            {name:'CSS',star:5,description:' is a stylesheet language used to describe the presentation of a document written in HTML',image:'https://www.skyminds.net/wp-content/uploads/2009/07/css.jpg',duration:"60 days",coast:"200$"},
            {name:'JavaScript',star:5,description:' is a scripting language that enables you to create dynamically updating content',image:'https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png',duration:"60 days",coast:"350$"},
            {name:'figma',star:5,description:'Figma is the leading collaborative design tool for building meaningful products',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs50YocUbWVenSNWuV28TLuhyF5-24rs2hTQWrSAH2WdhAgHvjBPIEj8QD-5fDYUivXfM&usqp=CAU',coast:"100$"},
            {name:'Python',star:5,description:'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYkBRSs213HVUF86CZhWv1UfUzSuXbTaDOeR4pXuvXx9qzoOc-dJ9YloV17cKfJuGozY&usqp=CAU',coast:"200$"},
            {name:'Java',star:5,description:'Java is a multi-platform, object-oriented, and network-centric language',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsI9fL-xk1XsBHaFYrZ72PA0jgZk9B4dUCg&usqp=CAU',coast:"500$"},
            {name:'C++',star:5,description:'C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused',image:'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/338236756/original/6240543093b14bffd8d804aed7f4e0aab440bb56/help-you-in-programming-with-cpp-and-writing-as-well.jpg',coast:"450$"},
            {name:'SQL',star:5,description:'SQL stands for Structured Query Language · SQL lets you access and manipulate databases · SQL became a standard of the American National Standards Institute',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUN3409Xy8KSTRtvff6zPTXxDYrbanZiKZxw&usqp=CAU',coast:"100$"},
            {name:'PHP',star:5,description:'PHP is a widely-used open source general-purpose scripting language that is especially suited for web',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChGLTmw14-QnCYMDruDDTeXOZuufAl9uCZA&usqp=CAU',coast:"300$"},
            {name:'C#',star:5,description:'C# is used to develop web apps, desktop apps, mobile apps, games and much more',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVR7wx2oq8ITpsZjDx94Hc9XGPF4GVS1loA&usqp=CAU',coast:"200$"}]
            
    },
    reducers:{
        addCourse:(state,action)=>{
               state.courses.push(action.payload)
        } ,
            filter:(state, action)=>{
            
                console.log(action.payload)
            state.courses=  state.filtredCourses.filter(e=>e.name.toUpperCase().includes(action.payload.name.toUpperCase()))
            }
    }

})

export const {addCourse,filter} =coursesSlice.actions
export default coursesSlice.reducer