import React, { useState } from "react";
const initialFormValue = {
	title: "",
	description: "",
};

const ToDoForm = ({ toDoAdd }) => {
	const [formValues, setFormValues] = useState(initialFormValue);
	const { title, description } = formValues;

	//evento
	const handleInputChange = (e) => {
		const changedFromValues = {
			...formValues,
			[e.target.name]: e.target.value,
		};

		setFormValues(changedFromValues);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log({ formValues });
		//Agregar tarea
		toDoAdd(formValues);
	};

	return (
		<div className="mb-3">
			<h1 className="text-end">ToDoForm</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					className="form-control"
					value={title}
					name="title"
					onChange={handleInputChange}
				/>
				<textarea
					placeholder="Description"
					className="form-control mt-2"
					value={description}
					name="description"
					onChange={handleInputChange}
				></textarea>
				<hr />
				<button className="btn btn-primary btn-block mt-2">Add Task</button>
			</form>
		</div>
	);
};

export default ToDoForm;
