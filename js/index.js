const form = document.querySelector('#form');
let contadorTareas = 0;
let arrayTask = [];
const day = new Date();
day.className = 'day';
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();
    prueba();
    const description = form.elements[0].value;
    console.log(description);

    const userTask = {
        id: contadorTareas,
        description: description,
        completo: false,
        fecha:day,
    }

    arrayTask.push(userTask);
    contadorTareas++;

    localStorage.setItem('Task', JSON.stringify(arrayTask));

    form.elements[0].value = '';
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

        if(optionCategory.value === 'shopping'){
            const shoppingImg = document.createElement('img');
            shoppingImg.className = 'category-img';
            shoppingImg.setAttribute('src', './img/shopping1.png');
            shoppingImg.setAttribute('alt', 'shopping');
            
            item.appendChild(shoppingImg);
    
        }else if(optionCategory.value === 'chores'){
            const chores = document.createElement('img');
            chores.className = 'category-img';
            chores.setAttribute('src', './img/chores1.png');
            chores.setAttribute('alt', 'shopping');
            
            item.appendChild(chores);
        }else{
            const schoolImg = document.createElement('img');
            schoolImg.className = 'category-img';
            schoolImg.setAttribute('src', './img/school1.png');
            schoolImg.setAttribute('alt', 'shopping');
            
            item.appendChild(schoolImg);
        }

        const label = document.createElement('label');
        label.setAttribute('id',`tarea-${contadorTareas}`);
        label.innerHTML = `${form.elements[0].value}`;

        const hourP = document.createElement('p');
        hourP.className = 'hours clearfix';
        hourP.innerHTML =`${day.getHours()} : ${day.getMinutes()} : ${day.getSeconds()}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';

        listTask.appendChild(item);
        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(hourP);
        item.appendChild(editImg);
    }
    edit(){
        const buttonEdit = document.querySelectorAll('li .edit-img');
        const li = document.querySelectorAll('ul li label');

        for (let i = 0; i < buttonEdit.length; i++) {
            buttonEdit[i].addEventListener('click', () => {
                li[i].innerHTML = '';
                const inputEdit = document.createElement('input');
                inputEdit.className = 'inputEdit1';
                li.innerHTML = inputEdit;
                li[i].appendChild(inputEdit);

                listTask.addEventListener('keypress', (event) => {
                    if (event.keyCode == 13) {
                        console.log('hola')

                    }
                });
            })
        }
    }
    delete(){
        const li = document.querySelectorAll('ul li');
        const deleteImg = document.createElement('button');
        deleteImg.className = 'delete-img clearfix';
        
        for (let i= 0; i < li.length; i++) {
            li[i].appendChild(deleteImg);

            deleteImg.addEventListener('click', () =>{
                localStorage.setItem('Task', JSON.stringify(arrayTask));
                localStorage.removeItem('Task');
                li[i].remove();
            })
        }
        
        const deleteAll = document.querySelector('#btn-delte-all');

        deleteAll.addEventListener('click',() =>{
            for (let i = 0; i < li.length; i++) {
                localStorage.setItem('Task', JSON.stringify(arrayTask));
                localStorage.removeItem('Task');
                li[i].remove();  
            }
        })
    }
}

function prueba(){
    const tasks = JSON.parse(localStorage.getItem('Task'));

    if(tasks){
        arrayTask = tasks;
    }
}