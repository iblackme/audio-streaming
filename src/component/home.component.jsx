import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { SongsList } from "./songs.list.component";
import "./home.componet.css";
export const Home = () => {
  const songForm = {
    title: "",
    disc: "",
    alink: "",
  };
  const [Song, setSong] = useState(songForm);
  const { title, disc, alink } = Song;
  const [isUploading, setIsUploading] = useState(false);

  const resetsongForm = () => {
    setSong(songForm);
  };

  const upload = async (e) => {
    e.preventDefault();
    try {
      setIsUploading(true);
      await addDoc(collection(db, "songs"), {
        alink: alink,
        title: title,
        disc: disc,
        created: Timestamp.now(),
      });
      setIsUploading(false);
      resetsongForm();
    } catch (error) {
      alert("error ocurse");
      console.log(error);
    }
    resetsongForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...Song, [name]: value });
  };

  return (
    <>
      <div className="home-page-core">
        <div className="home-page">
          <div className="upload-form">
            <div>
              {!isUploading && (
                <form onSubmit={upload} className="the-form">
                  <input
                    type="text"
                    label="title"
                    placeholder=" add title"
                    value={title}
                    name="title"
                    onChange={handleChange}
                    className="text-input"
                    required
                  />
                  <input
                    type="text"
                    label="disc"
                    placeholder="add disc"
                    value={disc}
                    name="disc"
                    onChange={handleChange}
                    className="text-input"
                    required
                  />

                  <input
                    type="text"
                    label="alink"
                    placeholder="paste audio link"
                    value={alink}
                    name="alink"
                    onChange={handleChange}
                    className="text-input"
                    required
                  />

                  <button type="submit" className="upload-button">
                    {" "}
                    UPLOAD
                  </button>
                </form>
              )}
              {isUploading && (
                <div className="the-form">
                  <h1 className="uploading-text">UPLOADING</h1>
                </div>
              )}
            </div>
          </div>

          <div className="song-list">
            {isUploading && <SongsList />}
            {!isUploading && <SongsList />}
          </div>
        </div>
      </div>
    </>
  );
};
