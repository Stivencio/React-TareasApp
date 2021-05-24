import React, { useState } from "react";
import moment from "moment";
const Time = () => {
	const [date, setDate] = useState("");

	setInterval(() => {
		setDate(moment().local().format("LTS"));
	}, 0);

	return (
		<div className="center-position">
			<h1>{date}</h1>
		</div>
	);
};

export default Time;
