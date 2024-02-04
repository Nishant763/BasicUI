
document.addEventListener('DOMContentLoaded',(event)=>{
    console.log("Hello")
})


function fetchStudentDetails(){
    fetch('http://localhost:8082/getStudents').then((data)=>{
    data.json().then((dataA)=>{
        renderStudentDetails(dataA);
    })
    
})
}

function renderStudentDetails(data){
    console.log(data);

    let studentElement = document.getElementById('student-details');
    data.map(sData=>{
        const p = document.createElement('p');
        p.setAttribute('id','s-record');
        p.innerHTML = sData.id +" "+ sData.psp +" "+ sData.name;
        studentElement.appendChild(p);
    })
}

fetchStudentDetails();
