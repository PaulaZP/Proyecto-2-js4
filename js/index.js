const form = document.querySelector('#form');
const arrayTask = [];
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    handleControls();

})

function handleControls(){
    const createList = new ObjectList(arrayTask);
    createList.add();
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
        label.innerHTML = `${form.elements[0].value}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';
        item.appendChild(editImg);

        item.appendChild(label);
        listTask.appendChild(item);

        arrayTask.push(item);

        form.elements[0].value = '';
    }
    delete(){
        deteleTask();
    }
}
function deteleTask(){
    const li = document.querySelectorAll('ul li');
    

    for (let i= 0; i < li.length; i++) {
        const deleteImg = document.createElement('button');
        deleteImg.className = 'delete-img clearfix';
        const prueba = li[i].appendChild(deleteImg);
        console.log(li[i]);
        
    }

}
