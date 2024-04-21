import React, { useEffect, useState } from "react";

import "./Corona.css";
function Corona() {
  const [data, setdata] = useState([]);

  async function getCovidData() {
    const fetchapi = await fetch(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );

    const data = await fetchapi.json();

    setdata(data.data.regional);
  }

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading text-center">
          <h1 className="mb-5">
            <span className="text-muted">INDIA </span> COVID-19 Dashboard
          </h1>
        </div>

        {/* This is not bootstrap */}
        <div className="table-responsive overflow-visible ">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed Cases Foreign</th>
                <th>Confirmed Cases Indian</th>
                <th>Total Confirmed</th>
                <th>Discharged</th>
                <th>Deaths</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currelem) => {
                const {
                  loc,
                  confirmedCasesForeign,
                  confirmedCasesIndian,
                  totalConfirmed,
                  discharged,
                  deaths,
                } = currelem;
                return (
                  <tr>
                    <td>{loc}</td>
                    <td>{confirmedCasesForeign}</td>
                    <td>{confirmedCasesIndian}</td>
                    <td>{totalConfirmed}</td>
                    <td>{discharged}</td>
                    <td>{deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Corona;
