import React, { useState, useEffect } from "react";
// import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import Sounds from "./components/Sounds";
import Time from "./components/Time";

import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialData = [
	{
		id: "1",
		title: "Charmander",
		description: "Description",
		image:
			"https://areajugones.sport.es/wp-content/uploads/2019/11/Pokemon-Espada-y-Escudo-Charmander.jpg",
		completed: false,
	},
	{
		id: "2",
		title: "Pikachu",
		description: "Description",
		image:
			"https://areajugones.sport.es/wp-content/uploads/2021/02/pikachu-pokemon.jpg",
		completed: true,
	},
	{
		id: "3",
		title: "Squirtle",
		description: "Description",
		image:
			"https://dlprivateserver.com/wp-content/uploads/2020/01/Pokemon-Espada-amp-Escudo-%C2%BFPuedes-obtener-Squirtle-contestado-780x470.jpg",
		completed: false,
	},
];

/*
Login con la cuenta de Google | PDTE
LocalStorage | LISTO/ Mongo - Crear Backend PDTE
Confirmaciones para update, delete, confirm | EN PROCESO
Validar campos - backend y frontend | PDTE
Agregar fotos, archivos, radiobutton, select, etc. | PDTE
Conectarse a la api de coinbase para obtener los precios de las cripto en tiempo real | PDTE
*/

const localData = JSON.parse(localStorage.getItem("data"));

const App = () => {
	const [data, setData] = useState(localData || initialData);
	const [taskEdit, setTaskEdit] = useState(null);

	//LocalStorage solo puede almacenar strings
	useEffect(() => {
		localStorage.setItem("data", JSON.stringify(data));
	}, [data]);

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

	//To delete task
	const toDoDelete = (dataId) => {
		taskEdit && dataId === taskEdit.id && setTaskEdit(null);

		const changedToDo = data.filter((el) => el.id !== dataId);
		setData(changedToDo);
	};

	return (
		<>
			<div className="container mt-4">
				<Sounds />
				<Time />
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
