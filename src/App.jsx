import Navbar from './Navbar'
import Form from './Form'
import TaskProvider from './TaskProvider'
import DisplayTask from './DisplayTask'

const App = () => {
  return (
    <>
      <Navbar />
      <TaskProvider>
        <div className='mainContainer'>
          <Form />
          <DisplayTask />
        </div>
      </TaskProvider>
    </>
  )
}

export default App
