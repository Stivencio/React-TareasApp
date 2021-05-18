import React, { useState } from "react";
const initialFormValue = {
	title: "",
	description: "",
};

const ToDoForm = ({ toDoAdd }) => {
	const [formValues, setFormValues] = useState(initialFormValue);
	const { title, description } = formValues;

	const [error, setError] = useState(false);

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

		//1 key 2 value
		if (Object.entries(formValues).some((e) => !e[1].length))
			return setError(true);
		else setError(false);

		toDoAdd(formValues);
	};

	//Validar campos

	return (
		<div className="mb-3">
			<h1 className="text-center">ToDoForm</h1>
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
				<div className="d-flex justify-content-end">
					<button className="btn btn-primary btn-block mt-2 ">Add Task</button>
				</div>

				{error && (
					<div class="alert alert-danger mt-3" role="alert">
						Debes completar todos los campos
					</div>
				)}
			</form>
		</div>
	);
};

export default ToDoForm;
