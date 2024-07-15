import { useContext } from 'react'
import { TaskContextApi } from './TaskProvider'

const Form = () => {

  let { state, setState, addTask, task } = useContext(TaskContextApi)
  console.log(state);

  let { title, description, category } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    addTask(title, description, category);
    setState({ title: "", description: "", category: "" })
  }

  let handleReset = () => {
    setState({ title: "", description: "", category: "" })
  }
  console.log(task);

  return (
    <main className='mainFormBlock'>
      <form >
        <div className="form-content">
          <label htmlFor="">Title</label>
          <input type="text" name='title' placeholder='Enter Title' value={title} onChange={handleChange} />
        </div>

        <div className="form-content">
          <label htmlFor="">Description</label>
          <textarea name="description" cols="10" rows="10" placeholder='Enter Description' value={description} onChange={handleChange}></textarea>
        </div>

        <div className="form-content">
          <label htmlFor="">Status</label>
          <select name="category" onChange={handleChange}>
            <option value="" name="tobedone">To be done</option>
            <option value="inprogress" name="inprogress">In Progress</option>
            <option value="done" name="done">Done</option>
          </select>
        </div>

        <div className="form-btn">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </main>
  )
}

export default Form
