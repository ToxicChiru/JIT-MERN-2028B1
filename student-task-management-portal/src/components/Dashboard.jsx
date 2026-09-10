import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useState } from "react";

function Dashboard() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Learn React", description: "Understanding Components", status: "In Progress" },
        { id: 2, title: "Learn MongoDB", description: "Create a simple React app", status: "Pending" },
        { id: 3, title: "Deploy App", description: "Host the app on a platform", status: "Completed" },
    ]);

    function toggleTask(id) {
        setTasks((currentTasks) => currentTasks.map((task) => {
            if (task.id !== id) {
                return task;
            }

            return {
                ...task,
                status: task.status === "Completed" ? "Pending" : "Completed",
            };
        }));
    }

    const completedTasks = tasks.filter((task) => task.status === "Completed").length;
    const pendingTasks = tasks.length - completedTasks;

    function addTask(newTask) {
        console.log("Adding new task:", newTask);
    }


    return (
        <main>
            <div className="stats-container">
                <StatCard title={"Total Task"} value={"10"}/>
                <StatCard title={"Completed"} value={"8"}/>
                <StatCard title={"Pending"} value={"2"}/>
            </div>

            <AddTask onAddTask={addTask} />

            <h2>Recent Tasks</h2>
            <div className="tasks-container">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onToggle={() => toggleTask(task.id)}
                    />
                ))}
            </div>
        </main>
    );
}

export default Dashboard;