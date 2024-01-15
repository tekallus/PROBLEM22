import React, { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef();
  const [paused, setPaused] = useState(false);

  const handlePause = () => {
    videoRef.current.pause();
    setPaused(true);
  };

  const handlePlay = () => {
    videoRef.current.play();
    setPaused(false);
  };

  return (
    <div className="max-w-[500px] space-y-4 p-8 mx-auto">
      <h1 className="text-center font-bold text-3xl">Video Oynatıcı</h1>
      <video
        ref={videoRef}
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
      />
      <div className="flex justify-between items-center">
        <button
          onClick={handlePause}
          className={`text-orange-500 font-semibold ${
            paused ? "bg-yellow-200" : ""
          }`}
        >
          Duraklat
        </button>
        <div className={`${paused ? "bg-yellow-200" : ""}`}>Duraklatıldı</div>
        <button
          onClick={handlePlay}
          className={`text-indigo-500 font-semibold ${
            paused ? "" : "bg-yellow-200"
          }`}
        >
          Oynat
        </button>
      </div>
    </div>
  );
}
