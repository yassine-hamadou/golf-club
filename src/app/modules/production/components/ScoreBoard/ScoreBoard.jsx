import {Table} from "antd";
import {KTCard, KTCardBody} from "../../../../../_metronic/helpers";
import styles from "../teeSheet/Calendar.module.css";
import axios from "axios";
import {useEffect, useState} from "react";
import {th} from "date-fns/locale";

function ScoreBoard() {
    const [data, setData] = useState([]);
    async function fetchData() {
        const data = await axios.get('tees.json');
        setData(data.data.tees[0].holes);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <KTCard>
            <div className="table-responsive">
                <table className="table border gy-5 gs-5" id={"myTable"}
                       onClick={(e) => {
                           // clickCell(e, dateSelected);
                       }}>
                    <thead className="border">
                    <tr className="fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                        <th className="min-w-50px bg-secondary"></th>
                        {data.map((item) => {
                            return (
                                <th className="min-w-100px bg-secondary" key={item.number}>Hole {item.number}</th>
                            )
                        })}
                        <th className="min-w-100px bg-secondary">Total</th>
                    </tr>
                    </thead>
                    <tbody
                        className="border"
                    >
                    <tr>
                        <th className="fw-bold fs-6 text-gray-800 bg-primary">Yards</th>
                        {data.map((item) => {
                            let total = 0;
                            return (
                                <>
                                    <td className={'bg-primary'} key={item.number}>{item.yards}</td>
                                </>
                            )
                        })}
                        <td className={'bg-primary'}>
                            {data.reduce((total, item) => {
                                return total + Number(item.yards)
                            }, 0)}
                        </td>
                    </tr>
                    <tr>
                        <th className="fw-bold fs-6 text-gray-800 bg-success">Par</th>
                        {data.map((item) => {
                            return (
                                <td className={'bg-success'} key={item.number}>{item.par}</td>
                            )
                        })}
                        <td className={'bg-success'}>
                            {data.reduce((total, item) => {
                                return total + Number(item.par)
                            }, 0)}
                        </td>
                    </tr>
                    <tr>
                        <th className="fw-bold fs-6 text-gray-800">Stroke</th>
                        {data.map((item) => {
                            return (
                                <td contentEditable={true} key={item.number}>{item.stroke}</td>
                            )
                        }   )}
                    </tr>
                    </tbody>
                </table>
            </div>

        </KTCard>
    );
}

export default ScoreBoard;
