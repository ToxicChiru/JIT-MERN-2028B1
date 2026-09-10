import { useState } from "react";

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) {
            return;
        }

        onAddTask({
            title: trimmedTitle,
            description: description.trim() || "New task",
            status: "Pending",
        });
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Task</h2>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter task title"
                aria-label="Task title"
            />
            <textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter task description"
                aria-label="Task description"
                rows="1"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default AddTask;