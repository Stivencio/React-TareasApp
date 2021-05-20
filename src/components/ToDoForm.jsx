import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const initialFormValue = {
	title: "",
	description: "",
};

const ToDoForm = ({ toDoAdd, taskEdit, toDoUpdate, setTaskEdit }) => {
	const [formValues, setFormValues] = useState(initialFormValue);
	// const [error, setError] = useState(false);
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

	function triggerSuccess(message) {
		toast.info(message);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		//Update
		// console.log(formValidation);

		//AAAAAAAAAAAAAAAAAAAAAAA
		// 1 key 2 value
		// if (Object.entries(formValidation).some((e) => !e[1].length))
		// 	return setError(true);
		// else setError(false);

		if (title.trim() === "" || description.trim() === "") {
			return triggerSuccess("Debes ingresar un título y descripción");
		}

		//Update
		taskEdit ? toDoUpdate(formValues) : toDoAdd(formValues);
		setFormValues(initialFormValue);
		setTaskEdit(null);

		// setTimeout(() => {
		// 	setError(false);
		// }, 2000);
	};

	//Validar campos

	return (
		<div className="mb-3">
			<h1 className="text-center">{taskEdit ? "Update task" : "New Task"}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					className="form-control inputStyles"
					value={title}
					name="title"
					onChange={handleInputChange}
				/>
				<textarea
					placeholder="Description"
					className="form-control mt-2 inputStyles"
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
				<div className="d-flex justify-content-end">
					{taskEdit && (
						<button
							onClick={() => setTaskEdit(null)}
							className="btn btn-warning btn-block mt-2"
						>
							Cancel
						</button>
					)}
				</div>

				{/* {error && (
					<div className="alert alert-danger mt-3" role="alert">
						Debes completar todos los campos
					</div>
				)} */}
			</form>
		</div>
	);
};

export default ToDoForm;
