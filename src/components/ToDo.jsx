import React from "react";

const ToDo = ({ data, toDoDelete, toDoCompleted }) => {
	return (
		<div>
			<div className="card mt-2">
				<div className="card-body">
					<h3 className="card-title text-end">{data.title}</h3>

					<p className="card-text text-end">{data.description}</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button
							onClick={() => toDoCompleted(data.id)}
							className={`btn btn-sm btn-outline-success ml-2 ${
								data.completed ? "disabled" : ""
							}
							`}
						>
							{data.completed ? "Done" : "Complete"}
						</button>
					</div>
					<hr />
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button className="btn btn-sm btn-outline-primary">Update</button>

						<button
							onClick={() => toDoDelete(data.id)}
							className="btn btn-sm btn-outline-danger"
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