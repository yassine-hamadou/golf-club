import { Card, Col, Divider, message, Modal, Row } from "antd";
import axios from 'axios';
import { add } from "date-fns";
import styles from "./Calendar.module.css";
import { useState } from "react";
import { KTCard, KTCardBody } from "../../../../../_metronic/helpers";
import { BASE_URL } from "../../../../urls";
import { Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";


const teeSlot = [
  ["T06:00:00Z", "T06:10:00Z", "T06:20:00Z", "T06:30:00Z", "T06:40:00Z", "T06:50:00Z"],
  ["T07:00:00Z", "T07:10:00Z", "T07:20:00Z", "T07:30:00Z", "T07:40:00Z", "T07:50:00Z"],
  ["T08:00:00Z", "T08:10:00Z", "T08:20:00Z", "T08:30:00Z", "T08:40:00Z", "T08:50:00Z"],
  ["T09:00:00Z", "T09:10:00Z", "T09:20:00Z", "T09:30:00Z", "T09:40:00Z", "T09:50:00Z"],
  ["T10:00:00Z", "T10:10:00Z", "T10:20:00Z", "T10:30:00Z", "T10:40:00Z", "T10:50:00Z"],
  ["T11:00:00Z", "T11:10:00Z", "T11:20:00Z", "T11:30:00Z", "T11:40:00Z", "T11:50:00Z"],
  ["T12:00:00Z", "T12:10:00Z", "T12:20:00Z", "T12:30:00Z", "T12:40:00Z", "T12:50:00Z"],
  ["T13:00:00Z", "T13:10:00Z", "T13:20:00Z", "T13:30:00Z", "T13:40:00Z", "T13:50:00Z"],
  ["T14:00:00Z", "T14:10:00Z", "T14:20:00Z", "T14:30:00Z", "T14:40:00Z", "T14:50:00Z"],
  ["T15:00:00Z", "T15:10:00Z", "T15:20:00Z", "T15:30:00Z", "T15:40:00Z", "T15:50:00Z"],
  ["T16:00:00Z", "T16:10:00Z", "T16:20:00Z", "T16:30:00Z", "T16:40:00Z", "T16:50:00Z"],
]
const TeeSheet = () => {
  //////////////////////////////
  // Modal state and function //
  //////////////////////////////
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalContent, setModalContent] = useState({
    date: "",
    rowIndex: 1,
    columnIndex: 1,
  });

  const handleOk = () => {
    // setModalContent();
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  //////////////////////////////////
  // End Modal state and function //
  /////////////////////////////////
  const navigate = useNavigate();
// get data from api
  const getData = async () => {
    const response = await axios.get(`${BASE_URL}/teeSheetDate`);
    console.log(response);
  };




  function clickCell(e: any, date: any) {
    if (e.target.tagName !== "TD") return;  //ignore the click if it is not on a cell
    e.target.style.backgroundColor = "red"
    setModalContent({
      date: date,
      rowIndex: e.target.parentNode.rowIndex,
      columnIndex: e.target.cellIndex,
    })
    setOpen(true);

    //get row that was click
    console.log("row", e.target.parentNode.rowIndex);
    //get column that was click
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

  function ChosenDateTeesheet() {
    //get params from url
    const params: any = useParams();
    const isoDateFromUrl = params.date;
    const dateSelected = new Date(isoDateFromUrl).toISOString();
    console.log(dateSelected);
    const [date, setDate] = useState(dateSelected);

    return (
      <>
        <KTCard className={styles.sheet}>
          <KTCardBody>
            <div className="table-responsive">
              {/*title for the table*/}
              <div className="d-flex justify-content-center">
                <h2>
                  <strong>{`${new Date(dateSelected).toDateString()}`}</strong>
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
                       clickCell(e, dateSelected);
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
      </>
    );
  }

  function handleCardClick(item: Date) {
    navigate(`/tee-sheet/${item.toISOString().split("T")[0]}`)
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
            <ChosenDateTeesheet />
            <Modal
              title={`Tee Time for ${new Date(modalContent.date).toDateString()} at ${teeSlot[(modalContent.rowIndex)-1][(modalContent.columnIndex)-1]}`}
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              {/*
                Splitting the date to remove the old time part and concatenate
                the time from the tee sheet to it
              */}
              {/*<p>*/}
              {/*  {`${modalContent.date.split("T")[0]} */}
              {/*   ${teeSlot[(modalContent.rowIndex)-1][(modalContent.columnIndex)-1]}`}*/}
              {/*</p>*/}
            </Modal>
          </Col>
        }/>
      </Route>
    </Routes>
  );
};

export { TeeSheet };
