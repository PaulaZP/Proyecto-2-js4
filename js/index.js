const form = document.querySelector('#form');
let contadorTareas = 0;
let arrayTask = [];
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();
    prueba();
})

function handleControls(){
    const createList = new ObjectList(arrayTask);
    createList.add();
    createList.edit();
    createList.delete();
}

class ObjectList{
    constructor (arrayTask)  {
        this.arrayTask = arrayTask;
    }
    add(){
        const item = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.setAttribute('id',`tarea-${contadorTareas}`);
        checkbox.setAttribute('type','checkbox');
        item.appendChild(checkbox);

        if(optionCategory.value === 'shopping'){
            const shoppingImg = document.createElement('img');
            shoppingImg.className = 'category-img';
            shoppingImg.setAttribute("src", "./img/shopping1.png");
            shoppingImg.setAttribute("alt", "shopping");
            
            item.appendChild(shoppingImg);
    
        }else if(optionCategory.value === 'chores'){
            const chores = document.createElement('img');
            chores.className = 'category-img';
            chores.setAttribute("src", "./img/chores1.png");
            chores.setAttribute("alt", "shopping");
            
            item.appendChild(chores);
        }else{
            const schoolImg = document.createElement('img');
            schoolImg.className = 'category-img';
            schoolImg.setAttribute("src", "./img/school1.png");
            schoolImg.setAttribute("alt", "shopping");
            
            item.appendChild(schoolImg);
        }

        const label = document.createElement('label');
        label.setAttribute('id',`tarea-${contadorTareas}`);
        label.innerHTML = `${form.elements[0].value}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';
        item.appendChild(editImg);

        item.appendChild(label);
        listTask.appendChild(item);

        const userTask = {
            id: contadorTareas,
            description: form.elements[0].value,
            completo: false,
        }
    
        arrayTask.push(userTask);
        contadorTareas++;

        localStorage.setItem('Task', JSON.stringify(arrayTask));

        form.elements[0].value = '';
    }
    edit(){
        const buttonEdit = document.querySelectorAll('li .edit-img');

        for (let i = 0; i < buttonEdit.length; i++) {
            buttonEdit[i].addEventListener('click', () => {
                console.log('hola')
            })
        }
    }
    delete(){
        const li = document.querySelectorAll('ul li');
    
        for (let i= 0; i < li.length; i++) {
            const deleteImg = document.createElement('button');
            deleteImg.className = 'delete-img clearfix';
            li[i].appendChild(deleteImg);

            deleteImg.addEventListener('click', () =>{
                li[i].remove();
            })
        }
        
        const deleteAll = document.querySelector('#btn-delte-all');

        deleteAll.addEventListener('click',() =>{
            for (let i = 0; i < li.length; i++) {
                li[i].remove();  
            }
            
        })
    }
}

function prueba(){
    const tasks = JSON.parse(localStorage.getItem('Task'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';

    if(tasks){
        arrayTask = tasks;
    }

    for(let i = 0; i < tasks.length; i++) {
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
                <p>${description}
                </p>
            </div>
        </div>`;
    }
}