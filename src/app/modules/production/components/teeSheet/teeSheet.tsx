  import { Card, Col, Form, Input, message, Modal, Row, Select } from "antd";
import axios from 'axios';
import { add } from "date-fns";
import styles from "./Calendar.module.css";
import { useEffect, useState } from "react";
import { KTCard, KTCardBody } from "../../../../../_metronic/helpers";
import { BASE_URL } from "../../../../urls";
import { Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
  import { MailOutlined, UserOutlined } from "@ant-design/icons";
  import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";


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

  useEffect(() => {
    axios.get(`${BASE_URL}/members`).then((res) => {
      setMembers(res.data);
    });
  }, [])
  //////////////////////////////
  // Modal state and function //
  //////////////////////////////
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [members, setMembers] = useState<any>()
    console.log('membersAPI', members);
  const [modalContent, setModalContent] = useState({
    date: "",
    rowIndex: 1,
    columnIndex: 1,
  });
  const getDatestring = () => new Date(`${modalContent.date.split("T")[0]}${teeSlot[(modalContent.rowIndex)-1][(modalContent.columnIndex)-1]}`)
  const handleOk = (values: any) => {
    setConfirmLoading(true);
    form.submit();
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  //////////////////////////////////
  // End Modal state and function //
  /////////////////////////////////

  //////////////////////////////
  // Dynamic form item /////////
  //////////////////////////////
  const [hostMembership, setHostMembership] = useState<string>();
  const [player2Membership, setplayer2Membership] = useState<string>();
  const [player3Membership, setplayer3Membership] = useState<string>();
  const [player4Membership, setplayer4Membership] = useState<string>();


  // const getMembers = async () => {
  //   const response = await axios.get(`${BASE_URL}/members`);
  //   return response.data;
  //   console.log('members', response.data);
  // }

  const memberships = [
    { label: 'Member', value: 'member' },
    { label: 'Non-Member', value: 'non-member' },
  ];
  // type SightsKeys = keyof typeof sights;

    const onFinish = (values: any) => {
      console.log('Received values of form onfinish:', values);
      console.log('Received values of form onfinish:', getDatestring().toISOString());
      const data = {
        date: getDatestring().toISOString(),
        host: {
          membership: values.hostMembership,
          player: values.hostMembership === 'member' ? values.host : values.enteredHost,
        },
        player2: {
          membership: values.player2Membership,
          player: values.player2Membership === 'member' ? values.player2 : values.enteredPlayer2,
        },
        player3: {
          membership: values.player3Membership,
          player: values.player3Membership === 'member' ? values.player3 : values.enteredPlayer3,
        },
        player4: {
          membership: values.player4Membership,
          player: values.player4Membership === 'member' ? values.player4 : values.enteredPlayer4,
        }
      }
      console.log('data', data);
      setConfirmLoading(false);
    };

    const handleChange = (selectedMembership: any) => {
      console.log('membership change', selectedMembership);
       setHostMembership(selectedMembership);
    };
    function handlePlayer2HostChange(selectedMembership: any) {
      console.log('handlePlayer2HostChange change', selectedMembership);
      setplayer2Membership(selectedMembership)
    }
    function handlePlayer3HostChange(selectedMembership: any) {
      console.log('handlePlayer3HostChange change', selectedMembership);
      setplayer3Membership(selectedMembership)
    }
    function handlePlayer4HostChange(selectedMembership: any) {
      console.log('handlePlayer4HostChange change', selectedMembership);
      setplayer4Membership(selectedMembership)
    }
    ///////////////////////////
    // End Dynamic form item //
    ///////////////////////////

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
    function Range() {
      const params: any = useParams();
      const isoDateFromUrl = params.date;
      const dateSelected = isoDateFromUrl ? new Date(isoDateFromUrl).toISOString() : undefined;

      const minDate: Date = new Date();
      const maxDate: Date = getNextTwoWeeksDates()[13]; //get the last date in the array
      const dateValue: Date | undefined = dateSelected ? new Date(dateSelected) : undefined;
      return (
        <div className='control-pane'>
          <div className='control-section'>
            <div className='datepicker-control-section'>
              <DatePickerComponent id="calendar" min={minDate} max={maxDate} value={dateValue ? dateValue : undefined} onChange={(e: any) => handleCardClick(e.value)} placeholder={'Select Date to view tee sheet'}></DatePickerComponent>
            </div>
          </div>
        </div>
      )
    }
  function ChosenDateTeesheet() {
    //get params from url
    const params: any = useParams();
    const isoDateFromUrl = params.date;
    const dateSelected = new Date(isoDateFromUrl).toISOString();
    console.log(dateSelected); //2021-08-02T00:00:00.000Z

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
    console.log("item", item)
    navigate(`/tee-sheet/${item.toISOString().split("T")[0]}`)
    message.success('You have selected ' + item.toDateString()).then(r => r);
  }

  const [form] = useForm();
  const Option = Select.Option;
  return (
    <Routes>
      <Route
        path="/"
        element={
        <>
          <Row>
            <Col span={24} lg={0}>
              <KTCard>
                <KTCardBody>
                  <Range />
                </KTCardBody>
              </KTCard>
            </Col>
          </Row>
          <Row gutter={16}>
            {/*//map through getNextTwoWeeksDates time*/}
            <Col span={0} lg={4}>
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
            <Col span={0} lg={4} >
              <Row gutter={[8, 8]}>
                {getNextTwoWeeksDates().slice(7, 14).map((item) => {
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
            </Col >
            <Outlet/>
          </Row>
        </>
        }
      >
        <Route path=":date" element={
          <Col span={24} lg={16} >
            <ChosenDateTeesheet />
            <Modal
              // title={`Book for ${new Date(modalContent.date).toDateString()} at ${teeSlot[(modalContent.rowIndex)-1][(modalContent.columnIndex)-1]}`}
              title={`Book tee time for ${getDatestring().toDateString()} ${getDatestring().toLocaleTimeString()}`}
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
              <Form
                form={form}
                name='control-hooks'
                labelCol={{span: 8}}
                wrapperCol={{span: 14}}
                title='Book tee time'
                onFinish={onFinish}
              >
                <Form.Item name="hostMembership" label="Host" rules={[{ required: true, message: 'Missing Host Membership' }]}>
                  <Select options={memberships} onChange={(value) => handleChange(value)} placeholder={"Select"}/>
                </Form.Item>
                {hostMembership === 'member' ? (
                  <Form.Item name="host" label="Name" rules={[{ required: true, message: 'Missing Host' }]}>
                    <Select placeholder='Select Host'>
                      {members.map((member: any) => (
                        <Option key={member.player} value={member.player}>
                          {member.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                ) : hostMembership === 'non-member' ? (
                  <> <Form.Item name='enteredHost' label='Name'>
                    <Input
                      placeholder="Name"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                     <Form.Item name='enteredHost' label='Email'>
                      <Input
                        type='email'
                        placeholder="Email"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                      />
                    </Form.Item>
                  </>
                ) : null}


                <Form.Item name="player2Membership" label="Player 2" rules={[{ required: true, message: 'Missing player2 Membership' }]}>
                  <Select options={memberships} onChange={(value) => handlePlayer2HostChange(value)} placeholder={"Select"}/>
                </Form.Item>
                {player2Membership === 'member' ? (
                  <Form.Item name="player2" label="Name" rules={[{ required: true, message: 'Missing player2' }]}>
                    <Select placeholder='Select Player2'>
                      {members.map((member: any) => (
                        <Option key={member.player} value={member.player}>
                          {member.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                ) : player2Membership === 'non-member' ? (
                  <>
                  <Form.Item name='enteredPlayer2' label='Name'>
                    <Input
                      placeholder="Name"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                     <Form.Item name='enteredHost' label='Email'>
                      <Input
                        type='email'
                        placeholder="Email"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                      />
                    </Form.Item>
                    </>
                ) : null}


                <Form.Item name="player3Membership" label="Player 3" rules={[{ required: true, message: 'Missing player3 Membership' }]}>
                  <Select options={memberships} onChange={(value) => handlePlayer3HostChange(value)} placeholder={"Select"}/>
                </Form.Item>
                {player3Membership === 'member' ? (
                  <Form.Item name="player3" label="Name" rules={[{ required: true, message: 'Missing player3' }]}>
                    <Select placeholder='Select Player3'>
                      {members.map((member: any) => (
                        <Option key={member.player} value={member.player}>
                          {member.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                ) : player3Membership === 'non-member' ? (
                  <>
                  <Form.Item name='enteredPlayer3' label='Name'>
                    <Input
                      placeholder="Name"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                     <Form.Item name='enteredHost' label='Email'>
                      <Input
                        type='email'
                        placeholder="Email"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                      />
                    </Form.Item>
                    </>
                ) : null}


                <Form.Item name="player4Membership" label="Player 4" rules={[{ required: true, message: 'Missing player4 Membership' }]}>
                  <Select options={memberships} onChange={(value) => handlePlayer4HostChange(value)} placeholder={"Select"}/>
                </Form.Item>
                {player4Membership === 'member' ? (
                  <Form.Item name="player4" label="Name" rules={[{ required: true, message: 'Missing player4' }]}>
                    <Select placeholder='Select Player4'>
                      {members.map((member: any) => (
                        <Option key={member.player} value={member.player}>
                          {member.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                ) : player4Membership === 'non-member' ? (
                  <>
                  <Form.Item name='enteredPlayer4' label='Name'>
                    <Input
                      placeholder="Name"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                     <Form.Item name='enteredHost' label='Email'>
                      <Input
                        type='email'
                        placeholder="Email"
                        prefix={<MailOutlined className="site-form-item-icon" />}
                      />
                    </Form.Item>
                    </>
                ) : null}
              </Form>
            </Modal>
          </Col>
        }/>
      </Route>
    </Routes>
  );
};

export { TeeSheet };
