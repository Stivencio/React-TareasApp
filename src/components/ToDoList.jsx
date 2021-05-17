import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ data, toDoDelete, toDoCompleted }) => {
	return (
		<div>
			<h1 className="text-center">ToDoList</h1>
			{data.map((el, idx) => (
				<ToDo
					key={idx}
					data={el}
					toDoDelete={toDoDelete}
					toDoCompleted={toDoCompleted}
				/>
			))}
		</div>
	);
};

export default ToDoList;
