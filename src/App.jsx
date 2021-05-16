import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const DBdata = [
	{
		id: "akhsj",
		title: "ToDo #1",
		description: "Desc #1",
		completed: false,
	},
	{
		id: "dkhfjsd",
		title: "ToDo #2",
		description: "Desc #2",
		completed: true,
	},
];

const App = () => {
	const [data, setData] = useState(DBdata);

	const toDoDelete = (dataId) => {
		const changedToDo = data.filter((el) => el.id !== dataId);
		setData(changedToDo);
	};

	const toDoCompleted = (dataId) => {
		// const changedToDo = data.map((data) => {
		// const todoEdit = {
		// 	...data,
		// 	completed: !data.completed,
		// };

		// if (data.id === dataId) {
		// 	return todoEdit;
		// } else {
		// 	return data;
		// }

		const changedToDo = data.map((data) =>
			data.id === dataId ? { ...data, completed: true } : data
		);
		setData(changedToDo);
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-8">
					<ToDoList
						data={data}
						toDoDelete={toDoDelete}
						toDoCompleted={toDoCompleted}
					/>
				</div>
				<div className="col-4">
					<ToDoForm />
				</div>
			</div>
		</div>
	);
};

export default App;
