import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ data, toDoDelete, toDoCompleted, setTaskEdit, Swal }) => {
	return (
		<div>
			<h2 className="text-center display-5">To do list</h2>

			{!data.length ? (
				<div className="alert alert-danger" style={{ textAlign: "center" }}>
					You don't have any task yet 🙃{" "}
				</div>
			) : (
				data.map((el, idx) => (
					<ToDo
						key={idx}
						data={el}
						toDoDelete={toDoDelete}
						toDoCompleted={toDoCompleted}
						setTaskEdit={setTaskEdit}
						Swal={Swal}
					/>
				))
			)}
		</div>
	);
};

export default ToDoList;
