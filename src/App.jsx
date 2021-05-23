import React, { useState, useEffect } from "react";
// import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Time from "./components/Time";
import Swal from "sweetalert2";

import useSound from "use-sound";
import song from "./sounds/canción.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = [
	{
		id: "1",
		title: "Task 1",
		description: "Description",
		completed: false,
	},
	{
		id: "2",
		title: "Task 2",
		description: "Description",
		completed: true,
	},
];

/*
Login con la cuenta de Google
LocalStorage / Mongo - Crear Backend
Confirmaciones para update, delete, confirm
Validar campos - backend y frontend
Agregar fotos, archivos, radiobutton, select, etc.
Conectarse a la api de coinbase para obtener los precios de las cripto en tiempo real
*/

const localData = JSON.parse(localStorage.getItem("data"));

const App = () => {
	const [data, setData] = useState(localData || initialData);
	const [taskEdit, setTaskEdit] = useState(null);
	const [play, { isPlaying, stop }] = useSound(song, { volume: 0.03 });

	//LocalStorage solo puede almacenar strings
	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(data));
	}, [data]);

	//SweetAlert

	//To complete task
	const toDoCompleted = (dataId) => {
		const changedToDo = data.map((data) =>
			data.id === dataId ? { ...data, completed: true } : data
		);
		setData(changedToDo);
	};

	//To add new task
	const toDoAdd = (dataForm) => {
		const newData = {
			...dataForm,
			id: Date.now(),
			completed: false,
		};
		setData([...data, newData]);
	};

	//To update task
	const toDoUpdate = (dataEdit) => {
		const changedToDo = data.map((el) =>
			el.id === dataEdit.id ? dataEdit : el
		);

		setData(changedToDo);
		// console.log(dataEdit);
		// console.log(data);
	};

	const toDoDelete = (dataId) => {
		taskEdit && dataId === taskEdit.id && setTaskEdit(null);

		const changedToDo = data.filter((el) => el.id !== dataId);
		setData(changedToDo);
	};

	// Reproducir canción
	useEffect(() => {
		play();
	}, [play]);
	return (
		<>
			{/* <NavBar /> */}
			<div className="container mt-4">
				<div className="start-position">
					<button
						className={`btn btn-${
							isPlaying ? `danger` : `warning`
						} btn-circle btn-xl`}
						onClick={isPlaying ? () => stop() : () => play()}
					>
						<i
							className={`bi bi-${isPlaying ? `pause` : `play`}-circle-fill`}
						></i>
					</button>
				</div>
				<Time />

				{/* <SoundApp /> */}
				<ToastContainer
					className=" progressClassName: 'fancy-progress-bar'"
					position="top-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					limit={1}
				/>

				<ToDoForm
					toast={toast}
					Swal={Swal}
					setTaskEdit={setTaskEdit}
					toDoAdd={toDoAdd}
					taskEdit={taskEdit}
					toDoUpdate={toDoUpdate}
				/>

				<ToDoList
					Swal={Swal}
					data={data}
					setTaskEdit={setTaskEdit}
					toDoDelete={toDoDelete}
					toDoCompleted={toDoCompleted}
				/>
			</div>
		</>
	);
};

export default App;
