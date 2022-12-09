import { RotatingLines } from "react-loader-spinner";
import { useEffect, useState } from 'react';

const URL = process.env.REACT_APP_LIST_URL;

function List({ selected, setSelected }) {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(URL).then((res)=> {
                return res.json();
            }).then((data)=> {
                setList(data);
                setLoading(false);
            }).catch((err) => {
                setError(err.message);
            });
        }, 2000);
    }, []);

    const getClassName = (id) => id === selected ? 'list-item selected' : 'list-item';

    return ( 
        <div>
      {loading && <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96" visible={true} />}
      {error && (<div>{error}</div>)}
      {list && (
        <ul className="list-container">
          {list.map((item) => (
            <li
              className={getClassName(item.id)}
              key={item.id}
              onClick={() => setSelected(item.id)}>{item.name}
            </li>)
          )}
        </ul>
      )}
    </div>
     );
}

export default List;