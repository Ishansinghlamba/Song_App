import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import styles from "./Homepage.module.css";
function Homepage() {
  const authResult = new URLSearchParams(window.location.search);
  const page = Number(authResult.get("page"));
  const size = Number(authResult.get("size"));
  console.log(page);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState(true);
  const [text, setText] = useState("");
  const [pageo, setPageo] = useState(page || 1);
  const [sizeo, setSizeo] = useState(size || 1);
  const [totalPage, setTotalPage] = useState(0);
  const arraypages = new Array(totalPage).fill(0).map((e, i) => e + i + 1);
  let getData = async () => {
    const res = await fetch(
      `http://localhost:4003/albums?page=${pageo}&size=${sizeo}`
    );
    const { album, totalpages } = await res.json();
    setTotalPage(totalpages);
    setData(album);
  };
  useEffect(() => {
    getData();
  }, [pageo, sizeo]);
  const handlechange = (e) => {
    setText(e.target.value);
  };
  const history = useHistory();

  const handlego = () => {
    history.push({
      pathname: `/search/${text}`,
      state: text,
    });
  };
  const handleit = (i) => {
    history.push({
      pathname: `/home?page=${i}`,
    });
    setPageo(i);
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
      <div>
        {arraypages.map((e) => (
          <button onClick={() => handleit(e)}>{e}</button>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
