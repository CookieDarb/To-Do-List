
let taskArray=JSON.parse(localStorage.getItem("taskArray"))||[];
let sectionHTML=localStorage.getItem("sectionHTML")||'';

function add(){
    const name=document.querySelector('.js-input-todo').value;
    const date=document.querySelector('.js-todo-time').value;

    const tempObj={
        name,
        date
    };
    taskArray.push(tempObj);
    document.querySelector('.js-input-todo').value='';
    document.querySelector('.js-todo-time').value='';
    localStorage.setItem("taskArray",JSON.stringify(taskArray));
}

function updateSection(){
    sectionHTML='';
    for(let i=0;i<taskArray.length;i++){
        const {name,date}=taskArray[i];
        sectionHTML+=`
        <section class="list-item">
            <p>${name}</p>
            <p>${date}</p>
            <button class="delete-button" onclick="
                deleteArray(${i});
                updateSection();
                displaySection();
            ">Delete</button>
        </section>
        `;
    }
    localStorage.setItem("sectionHTML",sectionHTML);  
}

function displaySection(){
    document.querySelector('.js-list-section').innerHTML=sectionHTML;
}

function checkInput(){
    if(document.querySelector('.js-input-todo').value && document.querySelector('.js-todo-time').value){
        return true;
    }
    else{
        return false;
    }
}

function deleteArray(i){
    taskArray.splice(i,1);
    localStorage.setItem("taskArray",JSON.stringify(taskArray));
}

displaySection();