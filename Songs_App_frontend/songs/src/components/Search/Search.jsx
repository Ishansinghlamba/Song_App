import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Search() {
  const { state } = useLocation();
  const [single, setSingle] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4003/albums/search/${state}`)
      .then((res) => {
        return res.json();
      })
      .then((dat) => {
        console.log(dat);
        setSingle(dat);
      });
  }, [state]);
  return (
    <div>
      {single.map((e) => (
        <Link to={`/albums/${e._id}`}>
          <div key={e._id} className={styles.main}>
            <div className={styles.fl}>
              <h3 className={styles.center}>{e.album_name}</h3>
              <h5 className={styles.center}>{e.NoOfSongs}</h5>
              <h5 className={styles.center}>{e.Year}</h5>
            </div>
            <div className={styles.pic}>
              <img src={e.Pic} alt="nn" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Search;
