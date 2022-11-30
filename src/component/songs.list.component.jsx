import { db } from "../lib/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import Post from "../lib/datascroller";
import "./songs.list.css";

export const SongsList = () => {
  const [songs, setSongs] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "songs")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSongs(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="song-list">
      <div className="songs-text">
        <h1>SONGS</h1>
      </div>

      <div className="songs">
        {songs?.map((song) => (
          <div>
            <div key={song.id} className="single-song">
              <Link to={`song/${song.id}`}>
                <div className="song-card">
                  <h1 className="single-song-title title">{song.title}</h1>
                  <h1 className="single-song-title play">play </h1>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
