export const getAllTasks = () => {
    const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    return taskList
}

export const saveAllTasks = newList => {
    const newTaskList = JSON.stringify(newList);
    localStorage.setItem("taskList", newTaskList);
};

export const deleteTasks = (index, newTaskList) => {
    newTaskList.splice(index, 1);
};


