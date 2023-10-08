import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
const App = () => {
  const [addBtn, setAddBtn] = useState(false);
  const [tasks, setTasks] = useState([]);
  const url = 'http://localhost:5000/tasks/';

  // useEffect is called when the webpage is displayed
  useEffect(() => {
    const getData = async () => {
      const task_data = await fetchTasks();
      setTasks(task_data);
      // console.log(task_data);
    }
    getData();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(url + `${id}`);
    const data = await res.json();
    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    // console.log('delete', id);
    await fetch(url + `${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // setTasks(tasks.filter((t) => t.id !== id));
    setTasks(await fetchTasks());
  }

  const toggleReminder = async (id) => {
    const toggleTask = await fetchTask(id);
    const updateTask = { ...toggleTask, reminder: !toggleTask.reminder }

    await fetch(url + `${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateTask),
    });

    setTasks(await fetchTasks());

    // setTasks(tasks.map((task) => task.id === id
    //   ? { ...task, reminder: !task.reminder }
    //   : task
    // ))
  };

  const saveTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };

    // const res =
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(task),
    })
    // const newTask = await res.json();
    // setTasks([...tasks, newTask]);
    setTasks(await fetchTasks());

  };

  const addClick = () => {
    setAddBtn(() => !addBtn);
  };

  return (
    <Router>
      <div className="container">

        <Header title='Task Tracker' addClick={addClick} changeAddBtn={addBtn} />

        <Routes>
          {/* Just want to show tasks in the main page */}
          <Route path='/' exact element={
            <>
              {/* {addBtn ? <AddTask saveTask={saveTask} /> : <span></span>} */}
              {addBtn && <AddTask saveTask={saveTask} />}
              {tasks.length > 0 ?
                <Tasks tasks={tasks}
                  onDelete={deleteTask}
                  doubleClick={toggleReminder} />
                : 'No Tasks To Show'
              }
            </>
          }>
          </Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <Footer />
      </div >
    </Router >
  );

}

// Class-based components
// class App extends React.Component {
//   render() {
//     return (
//       <Header />
//     )
//   }
// }
export default App;
