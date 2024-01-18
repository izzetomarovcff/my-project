function Todo() {
  return (
    <div className="main-card">
        <div className="yellow-area"></div>
        <div className="header">To-do list</div>
        <div className="new">
            <input type="text" placeholder="Type New Task"/>
            <img src="cancel.png" alt="" />
        </div>
        <div className="tasks">

        </div>
        <div className="add">
            <div className="circule">+</div>
            <div className="text">Add</div>
        </div>
    </div>
  );
}

export default Todo;
