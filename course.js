const course=[
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLOA0c6Y9KclRxXqT2BrLoe7XMHDdnbJeew&usqp=CAU',
        title:'HTML for Beginears',
        writer:'by John Sibla',
        btn:'Computer'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIO3RFm1G1STGKP4ZQ2gMLzBZG7FDlC0qdg&usqp=CAU',
        title:'English for beginners',
        writer:'by Venessa',
        btn:'English'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurg4roxks82PgSkRmqXZnjYmtIapuAFxLLQ&usqp=CAU',
        title:'Art Course',
        writer:'by Peter Sans',
        btn:'Arts'
    }
];
const banana=`<h2 class="course-h2">My courses</h2>`;
const courseHead=document.querySelector('.course-head');
window.addEventListener('DOMContentLoaded',()=>{
    let updateCourse=course.map((item)=>{
        return `<div class="course-des">
           <img  src="${item.img}"/>
           <h2>
           ${item.title}</h2>
           <h5>${item.writer}</h5>
           <button>${item.btn}</button>
        </div>`
    })
    updateCourse=updateCourse.join('');
    updateCourse=banana.concat(updateCourse);
    courseHead.innerHTML=updateCourse;
})
