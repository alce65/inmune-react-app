import { useEffect, useState } from "react";

export function Effect() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data && <p>{data.title}</p>}</div>;
}
