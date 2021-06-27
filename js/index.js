const form = document.querySelector('#form');
let contadorTareas = 0;
const arrayTask = [];
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();
    local();
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
        checkbox.setAttribute('id',`tarea-${contadorTareas}`);
        label.innerHTML = `${form.elements[0].value}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';
        item.appendChild(editImg);

        item.appendChild(label);
        listTask.appendChild(item);

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

function local(){
    const userTask = {
        id: contadorTareas,
        description: form.elements[0].value,
        completo: false,
    };

    arrayTask.push(userTask);

    contadorTareas++;

    
    console.log(JSON.parse(localStorage.getItem('Task')));

    if(localStorage.getItem('Task') === null){
        let arrayNewTasks = [];
        arrayNewTasks.push(userTask);
        localStorage.setItem('Task', JSON.stringify(arrayNewTasks));
    }else{
        let arrayNewTasks = JSON.parse(localStorage.getItem('Task'));
        arrayNewTasks.push(userTask);
        localStorage.setItem('Task', JSON.stringify(arrayNewTasks))
    }
}



