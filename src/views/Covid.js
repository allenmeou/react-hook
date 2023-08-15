// import { useEffect, useState } from "react";
// import axios from "axios";
// import moment from "moment/moment";
import useFetch from "../customize/fetch";
const Covid = () => {
  const { data: dataCovid, loading: isLoading } = useFetch(
    "https://covid-193.p.rapidapi.com/statistics"
  );

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
          {isLoading === false &&
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
          {isLoading === true && (
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
