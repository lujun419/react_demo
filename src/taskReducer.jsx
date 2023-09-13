export default function taskReducer(tasks,action){
    // console.log(tasks);
    switch(action.type1){
        case 'added':{
            return [
                ...tasks,
                {
                    id : action.id,
                    text : action.text,
                    done : false,
                }
            ]
        }
        case 'changed':{
            return tasks.map((t) => {
                if (t.id === action.task.id){
                    console.log(action.task);
                    return action.task;
                }else{
                    return t;
                }
            })
        }
        case 'deleted':{
            return tasks.filter((t)=>{t.id === action.task.id})
        }
    }
}