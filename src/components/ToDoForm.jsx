import React, { useState, useEffect } from "react";

const initialFormValue = {
	title: "",
	description: "",
};

const ToDoForm = ({
	toDoAdd,
	taskEdit,
	toDoUpdate,
	setTaskEdit,
	toast,
	Swal,
}) => {
	const [formValues, setFormValues] = useState(initialFormValue);
	// const [error, setError] = useState(false);
	const { title, description } = formValues;

	useEffect(() => {
		taskEdit ? setFormValues(taskEdit) : setFormValues(initialFormValue);
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

		//Validations

		// 1 key 2 value
		// if (Object.entries(formValidation).some((e) => !e[1].length))
		// 	return setError(true);
		// else setError(false);

		//Validations
		if (title.trim() === "") {
			return triggerSuccess("Title is required");
		}
		if (description.trim() === "") {
			return triggerSuccess("Description is required");
		}

		//UpdateTask - AddTask

		taskEdit ? toDoUpdate(formValues) : toDoAdd(formValues);
		setFormValues(initialFormValue);
		setTaskEdit(null);
	};

	//Validar campos

	return (
		<div className="row d-flex justify-content-center">
			<div className="col-5 mt-5">
				<div className="mb-3">
					<h2 className="text-center display-5">
						{taskEdit ? "Update task" : "New Task"}
					</h2>
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
							{taskEdit ? (
								<button
									onClick={() => Swal.fire("Any fool can use a computer")}
									className="btn btn-primary btn-block mt-2"
								>
									Update task
								</button>
							) : (
								<button className="btn btn-primary btn-block mt-2">
									Add task
								</button>
							)}
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
			</div>
		</div>
	);
};

export default ToDoForm;
