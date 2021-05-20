import React from "react";
import Sound from "react-sound";
import song from "../sounds/canción.mp3";

const SoundApp = () => {
	return (
		<Sound
			url={song}
			playStatus={Sound.status.PLAYING}
			playFromPosition={300 /* in milliseconds */}
			volume={5}
			loop
			// onLoading={handleSongLoading}
			// onPlaying={handleSongPlaying}
			// onFinishedPlaying={handleSongFinishedPlaying}
		/>
	);
};
export default SoundApp;
