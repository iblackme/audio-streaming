import AudioPlayer from "react-h5-audio-player";
import "./musicbar.componet.css";
export const MusicBar = (props) => {
  const alink = props.alink;
  return (
    <div className="music-bar">
      <div className="play-pause">
        <AudioPlayer
          autoPlay
          src={alink}
          // other props here
        />
      </div>
    </div>
  );
};
