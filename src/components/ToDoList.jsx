import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ data, toDoDelete, toDoCompleted, setTaskEdit, Swal }) => {
	return (
		<>
			<h2 className="text-center display-5">To do list</h2>
			<div className="row align-items-center">
				{!data.length ? (
					<div className=" d-flex justify-content-center col-12">
						<div className="alert alert-danger" style={{ textAlign: "center" }}>
							You don't have any task yet 🙃{" "}
						</div>
					</div>
				) : (
					data.map((el, idx) => (
						<div className="col-4">
							<ToDo
								key={idx}
								data={el}
								toDoDelete={toDoDelete}
								toDoCompleted={toDoCompleted}
								setTaskEdit={setTaskEdit}
								Swal={Swal}
							/>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default ToDoList;
