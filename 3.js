
//this will create an empty array called items
let items = [];

let addTasks = (task) => {
    items.push(task);
    console.log(task+" has been added to my items!");
    return items.length;
}

// c
let listAllTasks = () =>{
    items.forEach((item)=>{
        console.log(item);
    })
}


// d
let deleteTask = (task) => {
    let index = items.indexOf(task);
    if(index > -1){
        items.splice(index,1);
        console.log(task +" has been deleted!");
    }else {
        console.log(task +" not found in my Items.");
    }
    return items.length
}



addTasks("Apple");
addTasks("Banana");
addTasks("Cherry");
listAllTasks();

deleteTask("Apple");
console.log(items);