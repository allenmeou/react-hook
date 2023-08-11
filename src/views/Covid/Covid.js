import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./Covid.scss";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  // componentDidMount
  useEffect(() => {
    (async function anyNameFunction() {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "X-RapidAPI-Key":
            "420e0a031amsh6ce33aa56b81f45p1feb8cjsnde5ededbc0fe",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        let dataRes = response.data.response;
        if (dataRes && dataRes.length > 9) {
          dataRes.map((item) => {
            item.time = moment(item.time).format("DD/MM/YYYY");
            return item;
          });
        }
        console.log(dataRes);
        setDataCovid(dataRes);
        console.log(">>> check setDataCovid", dataCovid);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="covid-container">
      <h2>Covid 19 Tracking</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Country</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
          {dataCovid.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.country}</td>
                {/* <td></td>
                <td></td>
                <td></td> */}
                <td>{item.cases.active}</td>
                <td>{item.deaths.total}</td>
                <td>{item.cases.recovered}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
