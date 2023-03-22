// @ts-ignore

import axios from 'axios';
import { useState, useEffect } from 'react';
import Hole from './Hole'
import './scoreboard.scss';

function ScoreBoard() {
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState(null);

    let content = {};

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const TEE_SVC_URL = 'tees.json';

        try {
            setLoading(true);
            const response = await axios.get(TEE_SVC_URL);
            const data = response.data
            setCourse(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    if (loading || course == null) {
        content.list = <div>Loading...</div>;
    } else {
        let yardsOut,
            yardsIn,
            yards,
            parOut,
            parIn,
            par;

        content.list = course.tees.map((item) => {
            yardsOut = 0;
            yardsIn = 0;
            yards = 0;
            parOut = 0;
            parIn = 0;
            par = 0;
            return (
                <div className="tee-container">
                    <div className="scorecard">
                        {/*<div className="header">*/}
                        {/*</div>*/}
                            <div className="tee">{item.tee} {item.gender}</div>
                        {item.holes.map((hole, i) => {
                            yards = yards + Number(hole.yards);
                            par = par + Number(hole.par);
                            if (i < 9) {
                                yardsOut = yardsOut + Number(hole.yards);
                                parOut = parOut + Number(hole.par);
                            }
                            if (i > 8) {
                                yardsIn = yardsIn + Number(hole.yards);
                                parIn = parIn + Number(hole.par);
                            }
                            return (
                                <Hole
                                    index={i}
                                    item={hole}
                                    yardsOut={yardsOut}
                                    yardsIn={yardsIn}
                                    yards={yards}
                                    parOut={parOut}
                                    parIn={parIn}
                                    par={par}
                                />
                            );
                        })}
                        <div className="footer">
                            <div>Slope {item.slope}</div>
                            <div>Rating {item.rating}</div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="course">
            {content.list}
        </div>
    )
}

export default ScoreBoard;
