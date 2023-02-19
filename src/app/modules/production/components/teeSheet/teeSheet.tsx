import { Card, Col, Divider, message, Row } from "antd";
import axios from 'axios';
import { add } from "date-fns";
//import calendar css as a module to avoid global css
import styles from "./Calendar.module.css";
import { useState } from "react";
import { KTCard, KTCardBody } from "../../../../../_metronic/helpers";
import { BASE_URL } from "../../../../urls";
import { Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

// get data from api
const getData = async () => {
  const response = await axios.get(`${BASE_URL}/teeSheetDate`);
  console.log(response);
};


function clickCell(e: any) {
  if (e.target.tagName !== "TD") return;
  //open modal
  getNextTwoWeeksDates();
  e.target.style.backgroundColor = "red"
  //get row that what click
  console.log("row", e.target.parentElement);
  //get column that what click
  console.log("column", e.target.cellIndex);
}

// get next week dates in an array
function getNextTwoWeeksDates() {
  //create an array to store next 7 days
  const today = new Date();
  let days = []
  days[0] = today;

  for (let i = 1; i <= 13; i++) {
    days.push(add(new Date(),{
      days: i
    }))
  }
  return days;
}



function ChosenDateTeesheet(props: any) {
  //get params from url
  const params = useParams();
  // @ts-ignore
  const dateSelected = new Date(params.date).toDateString();
  console.log("dateSelected", dateSelected);
  console.log("params", params);
  console.log("props from chosen", props);
  return (
    <KTCard className={styles.sheet}>
      <KTCardBody>
        <div className="table-responsive">
          {/*title for the table*/}
          <div className="d-flex justify-content-center">
            <h2>
              <strong>{dateSelected}</strong>
            </h2>
          </div>
          <div className="d-flex justify-content-center mb-3">
            {/*<span className="fst-itali fs-5 text-danger">*/}
            {/*  Please select tee time*/}
            {/*</span>*/}
          </div>
          <div>
          </div>
          {/*end title for the table*/}
          <table className="table table-rounded table-striped border gy-5 gs-5" id={"myTable"}
                 onClick={(e) => {
                   clickCell(e);
                 }}>
            <thead className="border">
            <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
              <th className="min-w-50px"></th>
              <th className="min-w-100px">0</th>
              <th className="min-w-100px">10</th>
              <th className="min-w-100px">20</th>
              <th className="min-w-100px">30</th>
              <th className="min-w-100px">40</th>
              <th className="min-w-100px">50</th>
            </tr>
            </thead>
            <tbody
              className="border"
            >
            <tr>
              <th className="fw-bold fs-6 text-gray-800">6:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">7:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">8:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">9:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">10:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">11:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">12:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">13:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">14:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">15:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="fw-bold fs-6 text-gray-800">16:00</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </KTCardBody>
    </KTCard>
  );
}

const TeeSheet = () => {
  const navigate = useNavigate();
  const [chosenDate, setChosenDate] = useState(getNextTwoWeeksDates()[0]);

  function handleCardClick(item: Date) {
    console.log(item);
    navigate(`/tee-sheet/${item.toISOString()}`)
    message.success('You have selected ' + item.toDateString()).then(r => r);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Row gutter={16}>
            {/*//map through getNextTwoWeeksDates time*/}
            <Col span={4}>
              <Row gutter={[8, 8]}>
                {getNextTwoWeeksDates().slice(0, 7).map((item, index) => {
                  return (
                    <Col span={24}>
                      <Card title={item.toDateString()} bordered={true} onClick={() => {
                        handleCardClick(item)
                      }} className={styles.card}>
                        Number of Tees: 4
                      </Card>
                    </Col>
                  );
                }) }
              </Row>
            </Col>
            <Col span={4}>
              <Row gutter={[8, 8]}>
                {getNextTwoWeeksDates().slice(7, 14).map((item, index) => {
                  return (
                    <Col span={24}>
                      <Card title={item.toDateString()} bordered={true} onClick={() => {
                        handleCardClick(item)
                      }} className={styles.card}>
                        Number of Tees: 4
                      </Card>
                    </Col>
                  );
                }) }
              </Row>
            </Col>
            <Outlet/>
          </Row>
        }
      >
        <Route path=":date" element={
          <Col span={16}>
            <ChosenDateTeesheet date={chosenDate}/>
          </Col>
        }/>
      </Route>
    </Routes>
  );
};

export { TeeSheet };
