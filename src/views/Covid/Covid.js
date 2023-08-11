import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./Covid.scss";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  // componentDidMount
  useEffect(() => {
    setTimeout(() => {
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
          let data = response.data.response;
          if (data && data.length > 9) {
            data.map((item) => {
              item.time = moment(item.time).format("DD/MM/YYYY");
              return item;
            });
          }
          // console.log(data);
          setDataCovid(data);
          setLoading(false);
          // console.log(">>> check setDataCovid", dataCovid);
        } catch (error) {
          console.error(error);
        }
      })();
    }, 4000);
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
          {loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
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
          {loading === true && (
            <tr>
              <td style={{ textAlign: "center" }} colSpan="5">
                Loading ...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
