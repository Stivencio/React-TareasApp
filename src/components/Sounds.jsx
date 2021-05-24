import React, { useEffect } from "react";
import useSound from "use-sound";
import song from "../sounds/song.mp3";

const Sounds = () => {
	const [play, { isPlaying, stop }] = useSound(song, { volume: 0.05 });
	// Reproducir canción
	useEffect(() => {
		play();
	}, [play]);

	return (
		<div className="start-position">
			<button
				className={`btn btn-${
					isPlaying ? `danger` : `warning`
				} btn-circle btn-xl`}
				onClick={isPlaying ? () => stop() : () => play()}
			>
				<i className={`bi bi-${isPlaying ? `pause` : `play`}-circle-fill`}></i>
			</button>
		</div>
	);
};
export default Sounds;
