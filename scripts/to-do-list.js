
let  taskArray=[];
let sectionHTML='';

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
}

function updateSection(){
    for(let i=0;i<taskArray.length;i++){
        const {name,date}=taskArray[i];
        sectionHTML+=`
        <section class="list-item">
            <p>${name}</p>
            <p>${date}</p>
            <button class="delete-button" onclick="
                taskArray.splice(${i},1);
                updateSection();
                displaySection();
            ">Delete</button>
        </section>
        `;
    }   
}

function displaySection(){
    document.querySelector('.js-list-section').innerHTML=sectionHTML;
    sectionHTML='';
}

function checkInput(){
    if(document.querySelector('.js-input-todo').value && document.querySelector('.js-todo-time').value){
        return true;
    }
    else{
        return false;
    }
}