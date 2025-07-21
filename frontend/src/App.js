import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get("htttp://localhost:5000/api/tasks")
            .then(res => setTasks(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/api/tasks", { title, description });
        setTasks([...tasks, res.data]);
        setTitle("");
        setDescription("");
    };

    return (
    <div style={{ padding: "2rem" }}>
      <h2>Task Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task._id}><strong>{task.title}</strong>: {task.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;