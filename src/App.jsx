import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import useSound from "use-sound";
import song from "./sounds/zelda.mp3";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DBdata = [
	{
		id: "1",
		title: "Tarea 1",
		description: "Desc 1",
		completed: false,
	},
	{
		id: "2",
		title: "Tarea 2",
		description: "Desc 2",
		completed: true,
	},
];

const App = () => {
	/*
Login con la cuenta de Google
LocalStorage / Mongo - Crear Backend
Confirmaciones para update, delete, confirm
Calidar campos - backend y frontend
Agregar fotos, archivos, radiobutton, select, etc.
Conectarse a la api de coinbase para obtener los precios de las cripto en tiempo real
*/

	const [play, { isPlaying, stop }] = useSound(song, { volume: 0.04 });

	// localStorage.setItem("Data", JSON.stringify(data));

	const [data, setData] = useState(DBdata);

	//To update task
	const [taskEdit, setTaskEdit] = useState(null);

	//To delete task
	const toDoDelete = (dataId) => {
		const changedToDo = data.filter((el) => el.id !== dataId);
		setData(changedToDo);
	};

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

	//Reproducir canción
	useEffect(() => {
		play();
	}, [play]);

	return (
		<>
			<NavBar />
			<div className="container mt-4">
				<div className="btn-position">
					<button
						className={`btn btn-${
							isPlaying ? `danger` : `success`
						} btn-circle btn-xl`}
						onClick={isPlaying ? () => stop() : () => play()}
					>
						XD
					</button>
				</div>
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

				<div className="row d-flex justify-content-center">
					<div className="col-6 mt-5">
						<ToDoForm
							toDoAdd={toDoAdd}
							taskEdit={taskEdit}
							toDoUpdate={toDoUpdate}
							setTaskEdit={setTaskEdit}
						/>
					</div>
					<div className="col-7 ">
						<ToDoList
							data={data}
							toDoDelete={toDoDelete}
							toDoCompleted={toDoCompleted}
							setTaskEdit={setTaskEdit}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
