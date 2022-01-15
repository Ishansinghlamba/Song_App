import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
function Homepage() {
  const [data, setData] = useState([]);
  let getData = async () => {
    const res = await fetch("http://localhost:4003/albums");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((e) => (
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
      ))}
    </div>
  );
}

export default Homepage;
