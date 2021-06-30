import {formSubmit} from './eventSubmit.js';

//Variables principales
const form = document.querySelector('#form');
let arrayTask = [];
const day = new Date();
day.className = 'day';
const listTask = document.querySelector('#list');
const optionCategory = document.querySelector('select');

//Se ejecuta el evento submit y llama a la funcion que controla los métodos el objeto
formSubmit();

//se crea el objeto que contiene varias propiedades se utilizan en los metodos de añadir, editar y eliminar
class ObjectList{
    constructor (day,listTask,optionCategory)  {
        this.day = day;
        this.listTask = listTask;
        this.optionCategory = optionCategory;
    }

    /*metodo que crea y agrega los elementos del label conteniendo la 
    descripcion de la tarea, las opciones de categorias agregando una imagen con el carrito,tareas domesticas
    y tareas escolares y la hora*/
    add(){
        const item = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.className = 'checkbox';
        checkbox.setAttribute('id','tarea');
        checkbox.setAttribute('type','checkbox');

        if(this.optionCategory.value === 'shopping'){
            const shoppingImg = document.createElement('img');
            shoppingImg.className = 'category-img';
            shoppingImg.setAttribute('src', './img/shopping1.png');
            shoppingImg.setAttribute('alt', 'shopping');
            
            item.appendChild(shoppingImg);
    
        }else if(this.optionCategory.value === 'chores'){
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
        label.setAttribute('id','tarea');
        label.innerHTML = `${form.elements[0].value}`;

        const hourP = document.createElement('p');
        hourP.className = 'hours clearfix';
        hourP.innerHTML =`${this.day.getHours()} : ${this.day.getMinutes()} : ${this.day.getSeconds()}`;

        const editImg = document.createElement('button');
        editImg.className = 'edit-img clearfix';

        this.listTask.appendChild(item);
        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(hourP);
        item.appendChild(editImg);
    }

    /*Metodo el cual sirve para editar la tarea cuando escucha el evento de click del boton 
    que contiene la imagen de editar*/
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

    /*metodo el cual sirve para elmiminar cada una de las tareas y tambien
    se pueden eliminar todas al mismo tiempo*/
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

export default ObjectList;
export{
    form,
    arrayTask,
    day,
    listTask,
    optionCategory
};