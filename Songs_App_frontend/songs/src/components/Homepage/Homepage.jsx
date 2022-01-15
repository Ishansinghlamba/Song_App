import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import styles from "./Homepage.module.css";
function Homepage() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(true);
  const [text, setText] = useState("");
  let getData = async () => {
    const res = await fetch("http://localhost:4003/albums");
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const handlechange = (e) => {
    setText(e.target.value);
  };
  const history = useHistory();

  const handlego = () => {
    history.push({
      pathname: "/search",
      state: text,
    });
  };
  return (
    <div>
      <div className={styles.mfl}>
        <div>
          <input type="text" value={text} onChange={handlechange} />
          <button onClick={handlego}>Search</button>
        </div>
        <button
          className={styles.sort}
          onClick={() => {
            if (sort === true) {
              setSort(false);
            } else {
              setSort(true);
            }
          }}
        >
          Sort
        </button>
      </div>
      {data
        .sort((a, b) => (sort ? true : b.Year - a.Year))
        .map((e) => (
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

export default Homepage;
