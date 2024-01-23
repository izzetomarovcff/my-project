import { useState } from "react";
function Todo() {
    const [haveTask, setHaveTask] = useState(false)
    const [taskText, setTaskText] = useState("")
    const [myArray, setMyArray] = useState([]);
    const HandleChange = (event) => {
        setTaskText(event.target.value)
    }
    const handleClear = () => {
        setTaskText("")
    }
    const handleAdd = () => {
        if (taskText == "") {
            alert("Please Type Task!")
        } else {
            let arr = []
            arr = [...myArray]
            arr.unshift(taskText)
            setMyArray(arr)
            setHaveTask(true)
            setTaskText("")
        }
    }
    const handleDelete = (index) => {
        let arr = [...myArray]
        arr.splice(index, 1)
        setMyArray(arr)
        if (arr.length == 0) {
            setHaveTask(false)
        }
    }

    return (
        <div className="main-card">
            <div className="yellow-area"></div>
            <div className="header">To-do list</div>
            <div className="new">
                <input type="text" placeholder="Type New Task" value={taskText} onChange={HandleChange} />
                <img src="cancel.png" alt="" onClick={handleClear} />
            </div>
            {
                haveTask ? (
                    <div className="tasks">
                        {myArray.map((task, index) => {
                            return (
                                <div key={index} className="task">
                                    <div className="tasktext">{task}</div>
                                    <div className="events">
                                        <div><img src="check.png" alt="" onClick={() => handleDelete(index)} /></div>
                                        <div><img src="bin.png" alt="" onClick={() => handleDelete(index)} /></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (null)
            }
            <div className="add" onClick={handleAdd}>
                <div className="circule">+</div>
                <div className="text">Add</div>
            </div>
        </div>
    );
}

export default Todo;
