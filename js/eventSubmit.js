import {form,day,arrayTask} from './index.js';
import {handleControls} from './constrols.js';

//evento de tipo submit el cual lee una funcion
function formSubmit(){
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        handleControls();
    
        const description = form.elements[0].value;
    
        const userTask = {
            description: description,
            complete: false,
            date:day,
        }
    
        arrayTask.push(userTask);
    
        localStorage.setItem('Task', JSON.stringify(arrayTask));
    
        form.elements[0].value = '';
    })
}

export {formSubmit};