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
          <h3 className={styles.center}>{e.album_name}</h3>
          <div className={styles.pic}></div>
        </div>
      ))}
    </div>
  );
}

export default Homepage;
