import { useEffect, useState } from "react";
import moment from "moment";
import axios, { Axios } from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      (async function fetchData() {
        const options = {
          method: "GET",
          url: url,
          headers: {
            "X-RapidAPI-Key":
              "420e0a031amsh6ce33aa56b81f45p1feb8cjsnde5ededbc0fe",
            "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
          },
        };
        try {
          const response = await axios.request(options);
          let data = response.data.response;
          if (data && data.length > 9) {
            data.map((item) => {
              item.time = moment(item.time).format("DD/MM/YYYY");
              return item;
            });
          }
          setData(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          console.log(error.name + "" + error.message);
        }
      })();
    }, 4000);
  }, [url]);

  return {
    data,
    loading,
  };
};

export default useFetch;
