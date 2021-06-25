const form = document.querySelector('#form');
let counterTask = 0;
const arrayTask = [];
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();

})

function handleControls(){
    const createList = new ObjectList(arrayTask, counterTask);
    createList.add();
}

class ObjectList{
    constructor (arrayTask, counterTask )  {
        this.arrayTask = arrayTask;
        this.counterTask = counterTask;
    }
    add(){
        const item = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.setAttribute('type','checkbox');
        checkbox.setAttribute('id',`task-${counterTask}`);
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
        label.setAttribute('for', `task-${counterTask}`);
        label.innerHTML = `${form.elements[0].value}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';
        item.appendChild(editImg);

        const deleteImg = document.createElement('button');
        deleteImg.className = 'delete-img clearfix';
        item.appendChild(deleteImg);

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
