const form = document.querySelector('#form');
let counterTask = 0;
const arrayTask = [];
const listTask = document.querySelector('#list');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();
    category();
})

function handleControls(){
    const createList = new ObjectList(arrayTask, counterTask);
    createList.add();
}


const optionCategory = document.querySelector('select');
const imageCategory = document.querySelector('#imagesCategory');

function category(){
    if(optionCategory.value === 'shopping'){
        const shoppingImg = `
            <img src="./img/shopping1.png" alt="shopping">
        `
        imageCategory.innerHTML = shoppingImg;

    }else if(optionCategory.value === 'chores'){
        const choresImg = `
            <img src="./img/chores1.png" alt="shopping">
        `
        imageCategory.innerHTML = choresImg;
    }else{
        const schoolImg = `
            <img src="./img/school1.png" alt="shopping">
        `
        imageCategory.innerHTML = schoolImg;
    }
    
}

class ObjectList{
    constructor (arrayTask, counterTask )  {
        this.arrayTask = arrayTask;
        this.counterTask = counterTask;
    }
    add(){
        const item = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('id',`task-${counterTask}`);
        
        const label = document.createElement('label');
        label.setAttribute('for', `task-${counterTask}`);
        label.innerHTML = `${form.elements[0].value}`;

        item.appendChild(checkbox);
        item.appendChild(label);
        listTask.appendChild(item);

        const userTask = {
            id: counterTask,
            name: form.elements[0].value,
            status: false,
        };
        arrayTask.push(userTask);

        counterTask++;
        form.elements[0].value = '';
    }
}
    