import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Albumdetails.module.css";

function Albumdetails() {
  const { id } = useParams();
  const [song, setsong] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4003/albums/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setsong(res.Songs.song_name);
      });
  }, [id]);
  return (
    <div>
      {song.map((e) => (
        <h1 className={styles.light}>{e}</h1>
      ))}
    </div>
  );
}

export default Albumdetails;
