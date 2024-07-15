import { useContext } from 'react'
import { TaskContextApi } from './TaskProvider';

const DisplayNotes = () => {

    let { selective, handleCategory, task, handleDelete, handleUpdate } = useContext(TaskContextApi);
    console.log(task);
    let { selectedCategory } = selective;
    return (
        <section className='displaySection'>
            <div className="selectedNotes">
                <div className="selectDisplayBlock" name='selectedCategory' value={selectedCategory} onChange={handleCategory}>
                    <label htmlFor="">Select the Category</label>
                    <input type="radio" name="selectedCategory" value="tobedone" id="" checked /><span>To Be Done</span>
                    <input type="radio" name="selectedCategory" value="inprogress" id="" /><span>In Progress</span>
                    <input type="radio" name="selectedCategory" value="done" id="" /><span>Done</span>
                </div>
            </div>
            <div className="displayBlock">
                <div className="displayContent">
                    {task.length == 0 ? "Loading..." : task.length > 0 && task.map((value) => {
                        return selectedCategory == "all" ? (
                            <main className='output'>
                                <div>
                                    <h3>Title: {value.title}</h3>
                                    <h3>Description: {value.description}</h3>
                                    <h3>Category: {value.category}</h3>
                                </div>
                                <div className="btn">
                                    <button onClick={() => handleDelete(value.id)}>Delete</button>
                                    <button onClick={() => handleUpdate(value.id)}>Update</button>
                                </div>
                            </main>
                        ) : (
                            selectedCategory == value.category && (
                                <main className='output'>
                                    <div>
                                        <h3>Title: {value.title}</h3>
                                        <h3>Description: {value.description}</h3>
                                        <h3>Category: {value.category}</h3>
                                    </div>
                                    <div className="btn">
                                        <button onClick={() => handleDelete(value.id)}>Delete</button>
                                        <button onClick={() => handleUpdate(value.id)}>Update</button>
                                    </div>
                                </main>
                            )
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DisplayNotes
