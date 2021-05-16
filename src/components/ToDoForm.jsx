import React from "react";

const ToDoForm = () => {
	return (
		<div className="mb-3">
			<h1 className="text-end">ToDoForm</h1>
			<form action="">
				<input type="text" placeholder="Título" className="form-control" />
				<textarea
					placeholder="Description"
					className="form-control mt-2"
				></textarea>
				<hr />
				<button className="btn btn-primary btn-block mt-2">Add Task</button>
			</form>
		</div>
	);
};

export default ToDoForm;
