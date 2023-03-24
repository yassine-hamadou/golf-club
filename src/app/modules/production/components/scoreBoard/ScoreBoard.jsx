import axios from 'axios';
import { useState, useEffect } from 'react';
import Hole from './Hole';
import {KTCard} from "../../../../../_metronic/helpers";

const ScoreBoard = () => {
    // const [loading, setLoading] = useState(false);
    // const [course, setCourse] = useState(null);
    //
    // let content = {};
    //
    // useEffect(() => {
    //     fetchData();
    // }, [])
    //
    // const fetchData = async () => {
    //
    //     const TEE_SVC_URL = 'tees.json';
    //
    //     try {
    //         setLoading(true);
    //         const response = await axios.get(TEE_SVC_URL);
    //         const data = response.data
    //         setCourse(data);
    //         setLoading(false);
    //     } catch (e) {
    //         console.log(e);
    //         setLoading(false);
    //     }
    // }
    //
    // if (loading || course == null) {
    //     content.list = <div>Loading...</div>;
    // } else {
    //     let yardsOut,
    //       yardsIn,
    //       yards,
    //       parOut,
    //       parIn,
    //       par;
    //
    //     content.list = course.tees.map((item) => {
    //         yardsOut = 0;
    //         yardsIn = 0;
    //         yards = 0;
    //         parOut = 0;
    //         parIn = 0;
    //         par = 0;
    //         return (
    //           <div className="tee-container">
    //               <div className="scorecard">
    //                   <div className="header">
    //                       <div className="tee">{item.tee} {item.gender}</div>
    //                   </div>
    //                   {item.holes.map((hole, i) => {
    //                       yards = yards + Number(hole.yards);
    //                       par = par + Number(hole.par);
    //                       if (i < 9) {
    //                           yardsOut = yardsOut + Number(hole.yards);
    //                           parOut = parOut + Number(hole.par);
    //                       }
    //                       if (i > 8) {
    //                           yardsIn = yardsIn + Number(hole.yards);
    //                           parIn = parIn + Number(hole.par);
    //                       }
    //                       return (
    //                         <Hole index={i} item={hole} yardsOut={yardsOut} yardsIn={yardsIn} yards={yards} parOut={parOut} parIn={parIn} par={par} />
    //                       );
    //                   })}
    //                   <div className="footer">
    //                       <div>Slope {item.slope}</div>
    //                       <div>Rating {item.rating}</div>
    //                   </div>
    //               </div>
    //           </div>
    //         );
    //     });
    // }
    //
    // return (
    //   <div className="course">
    //       {content.list}
    //   </div>
    // )
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

export {ScoreBoard};
