import React from "react";

const ToDo = ({ data, toDoDelete, toDoCompleted, setTaskEdit, toDoUpdate }) => {
	return (
		<div>
			<div className="card mt-2 inputStyles">
				<div className="card-body">
					<h3 className="card-title text-end textStyles">{data.title}</h3>

					<p className="card-text text-end textStyles">{data.description}</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						{/* To complete task */}
						<button
							onClick={() => toDoCompleted(data.id)}
							className={`btn btn-sm btn-success ml-2 ${
								data.completed ? "disabled" : ""
							}
							`}
						>
							{data.completed ? "Done" : "Complete"}
						</button>
					</div>
					<hr />
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						{/* To update task */}
						<button
							// onClick={() => console.log(data)}
							onClick={() => setTaskEdit(data)}
							className="btn btn-sm btn-primary"
						>
							Update
						</button>

						{/* To delete task */}
						<button
							onClick={() => toDoDelete(data.id)}
							className="btn btn-sm btn-danger"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToDo;
