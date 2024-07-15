import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskContextApi = createContext()

// getting the data from the local storage and storing that data into the task so that the data should be stored permanently
let getLocalData = () => {
    let lists = localStorage.getItem("lists");
    if (lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const TaskProvider = ({ children }) => {

    let [task, setTask] = useState(getLocalData())

    const addTask = (title, description, category) => {
        setTask([...task, { title, description, category, id: uuidv4() }])
    }

    let [state, setState] = useState({ //state changes will be visible here and final data will be stored in task
        title: "",
        description: "",
        category: ""
    })

    //to store the data in localStorage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(task))
    }, [task])

    let [selective, setSelective] = useState({
        selectedCategory: "all"
    })

    let handleCategory = (e) => {
        let { name, value } = e.target;
        setSelective({ [name]: value });
        setTask(task);
    }


    let handleDelete = (id) => {
        let filterTask = task.filter(item => item.id !== id)
        setTask(filterTask);
    }

    let handleUpdate = (id) => {
        let filterTask = task.filter(item => item.id != id)
        let selectedTask = task.find(item => item.id == id)
        setState(selectedTask)
        setTask(filterTask)
    }

    return (
        <TaskContextApi.Provider value={{ state, setState, addTask, task, selective, handleCategory, handleDelete, handleUpdate }}>
            {children}
        </TaskContextApi.Provider>

    )
}

export default TaskProvider;