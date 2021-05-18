import React, { useState, useEffect } from "react";
const initialFormValue = {
	title: "",
	description: "",
};

const ToDoForm = ({ toDoAdd, taskEdit }) => {
	const [formValues, setFormValues] = useState(initialFormValue);
	const [error, setError] = useState(false);
	const { title, description } = formValues;

	useEffect(() => {
		taskEdit && setFormValues(taskEdit);
	}, [taskEdit]);

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

		taskEdit ? console.log("editar") : toDoAdd(formValues);
	};

	//Validar campos

	return (
		<div className="mb-3">
			<h1 className="text-center">{taskEdit ? "Update task" : "New Task"}</h1>
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
					<button className="btn btn-primary btn-block mt-2">
						{taskEdit ? "Update task" : "Add Task"}
					</button>
				</div>

				{error && (
					<div className="alert alert-danger mt-3" role="alert">
						Debes completar todos los campos
					</div>
				)}
			</form>
		</div>
	);
};

export default ToDoForm;
