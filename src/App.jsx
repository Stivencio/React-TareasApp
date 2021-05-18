import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const DBdata = [
	{
		id: "1",
		title: "ToDo #1",
		description: "Desc #1",
		completed: false,
	},
	{
		id: "2",
		title: "ToDo #2",
		description: "Desc #2",
		completed: true,
	},
];

const App = () => {
	const [data, setData] = useState(DBdata);

	//To delete task
	const toDoDelete = (dataId) => {
		const changedToDo = data.filter((el) => el.id !== dataId);
		setData(changedToDo);
	};

	//To complete task
	const toDoCompleted = (dataId) => {
		const changedToDo = data.map((data) =>
			data.id === dataId ? { ...data, completed: true } : data
		);
		setData(changedToDo);
	};

	//To add new task
	const toDoAdd = (dataForm) => {
		const newData = {
			...dataForm,
			id: Date.now(),
			completed: false,
		};
		setData([...data, newData]);
	};

	//To update task
	// const toDoUpdate = null;

	return (
		<div className="container mt-4">
			<div className="row d-flex justify-content-center">
				<div className="col-6 mt-5">
					<ToDoForm toDoAdd={toDoAdd} />
				</div>
				<div className="col-7 ">
					<ToDoList
						data={data}
						toDoDelete={toDoDelete}
						toDoCompleted={toDoCompleted}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
