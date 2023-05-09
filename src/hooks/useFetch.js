import { useEffect, useState } from "react";
import { get, getAll, getWhere } from "../firebase/get";

const useFetch = (collectionName, options = {}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const responseHandler = (data) => {
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    if (options.id) {
      get(collectionName, options.id).then((data) => {
        responseHandler(data);
      });
    } else if (options.where) {
      getWhere(collectionName, options.where.field, options.where.value).then(
        (data) => {
          responseHandler(data);
        }
      );
    } else {
      getAll(collectionName).then((data) => {
        responseHandler(data);
      });
    }
  }, []);

  return { loading, data, setData };
};

export default useFetch;
