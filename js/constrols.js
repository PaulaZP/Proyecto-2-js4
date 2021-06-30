import ObjectList from './index.js';
import {day,listTask,optionCategory} from './index.js';
//funcion que controla y ejecuta os métodos del objeto y los instancia al mismo tiempo
function handleControls(){
    const createList = new ObjectList(day,listTask,optionCategory);
    createList.add();    
    createList.edit();
    createList.delete();
}

export {handleControls};