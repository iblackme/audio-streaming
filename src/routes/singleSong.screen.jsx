import { useState, useEffect } from "react";
import { MusicBar } from "../component/musicbar.componet";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useParams } from "react-router-dom";

export const SingleSongScreen = () => {
  let [getData, setGetData] = useState("");
  const { id } = useParams();
  const docRef = doc(db, "songs", id);

  const getSong = async (id) => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setGetData(data);
    } else {
      setGetData("error");
    }
  };
  useEffect(() => {
    getSong(id);
  }, []);

  const { title, disc, alink } = getData;

  return (
    <div className="core">
      <div className="main">
        <div className="nav-bar">
          <div className="gg-arrow-left"></div>
          <div className="now-playing">NOW PLAYING</div>
          <div className="gg-more-vertical-alt"> </div>
        </div>

        <div className="music-photo-main">
          <div className="music-photo"></div>
        </div>
        <div className="music-info">
          <div className="music-title">
            <h1> {title && title}</h1>
          </div>
        </div>
        <div className="music-dital">
          <div className="gg-heart"></div>
          <div className="music-disctiption">
            <p> {disc && disc}</p>
          </div>
          <div className="gg-software-upload"></div>
        </div>

        <MusicBar alink={alink} />
      </div>
    </div>
  );
};
