import { useState, useEffect } from 'react';
// import axios from 'axios'; // for REST API
import HoleScore from './hole-score'
import {Button} from "antd";

function Score(props) {
    const [loading, setLoading] = useState(false);
    const [locked, setLocked] = useState(null);
    const [posted, setPosted] = useState(null);
    const [strokesOut, setStrokesOut] = useState(0);
    const [strokesIn, setStrokesIn] = useState(0);
    const [strokesTotal, setStrokesTotal] = useState(0);
    const [puttsOut, setPuttsOut] = useState(0);
    const [puttsIn, setPuttsIn] = useState(0);
    const [puttsTotal, setPuttsTotal] = useState(0);
    const [fairwayOut, setFairwayOut] = useState(0);
    const [fairwayIn, setFairwayIn] = useState(0);
    const [fairwayTotal, setFairwayTotal] = useState(0);
    const [bunkerOut, setBunkerOut] = useState(0);
    const [bunkerIn, setBunkerIn] = useState(0);
    const [bunkerTotal, setBunkerTotal] = useState(0);
    const [penaltyOut, setPenaltyOut] = useState(0);
    const [penaltyIn, setPenaltyIn] = useState(0);
    const [penaltyTotal, setPenaltyTotal] = useState(0);

    let content = {};

    useEffect(() => {
        init();
    }, []);

    const postData = async (data) => {
        /** In the real world, this would post to a REST API.
         For this demo, we will use session storage and sessionScore state. */

          // const SCORE_SVC_URL = `${rest_api_base_url}/score`;
        const body = JSON.stringify(data);

        try {
            // setLoading(true);
            // const response = await axios.post(SCORE_SVC_URL, body, {
            // 	headers: {
            // 		'Content-Type': 'application/json'
            // 	}
            // });

            setLoading(false);

            /** for REST API */
            // handleResponse(response);

            /** for demo */
            window.sessionStorage.setItem('golf_scorecard', body)
            setPosted(
              <div>
                  <div>Score: <b>{data.strokesTotal}</b></div>
                  <div>{data.course}, {data.location}</div>
                  <div>{data.tee}, {data.gender}, rating {data.rating} / slope {data.slope}</div>
                  <div>{data.date}, {data.time}</div>
                  <div>Notes: {data.notes}</div>
              </div>);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    let score,
      yardsOut = 0,
      yardsIn = 0,
      yards = 0,
      parOut = 0,
      parIn = 0,
      par = 0;

    function init() {
        const allowed = ['L', 'F', 'R'];

        [].slice.call(document.querySelectorAll(`input[name^='fairway_']`)).forEach((el) => {
            el.addEventListener('keydown', function (evt) {
                switch (evt.key) {
                    case 'Up': // IE/Edge
                    case 'ArrowUp':
                        evt.target.value = 'F';
                        break;
                    case 'Left': // IE/Edge
                    case 'ArrowLeft':
                        evt.target.value = 'L';
                        break;
                    case 'Right': // IE/Edge
                    case 'ArrowRight':
                        evt.target.value = 'R';
                        break;
                    default:
                        evt.target.value = evt.target.value.toUpperCase();
                        if (allowed.includes(evt.target.value)) {
                            return;
                        }
                        if (evt.key && !allowed.includes(evt.key.toUpperCase())) {
                            evt.target.value = '';
                        }
                }

                handleScoreChange(evt);
            }, true);
        });

        if (props.action == 'update') {
            setLocked('readonly');
            setStrokesOut(props.content.strokesOut);
            setStrokesIn(props.content.strokesIn);
            setStrokesTotal(props.content.strokesTotal);
            setPuttsOut(props.content.puttsOut);
            setPuttsIn(props.content.puttsIn);
            setPuttsTotal(props.content.puttsTotal);
            setFairwayOut(props.content.fairwayOut);
            setFairwayIn(props.content.fairwayIn);
            setFairwayTotal(props.content.fairwayTotal);
            setBunkerOut(props.content.bunkerOut);
            setBunkerIn(props.content.bunkerIn);
            setBunkerTotal(props.content.bunkerTotal);
            setPenaltyOut(props.content.penaltyOut);
            setPenaltyIn(props.content.penaltyIn);
            setPenaltyTotal(props.content.penaltyTotal);
        }
    }

    function advToggle(evt) {
        evt.preventDefault();

        [].slice.call(document.querySelectorAll('.edit .hole .adv')).forEach((el) => {
            if (el.classList.contains('hide')) {
                el.classList.remove('hide');
            } else {
                el.classList.add('hide');
            }
        }, true);
    }

    function lockToggle(evt) {
        evt.preventDefault();

        if (locked == 'readonly') {
            setLocked(null);
        } else {
            setLocked('readonly');
        }
    }

    function sumScores(nodeList) {
        let sum = {};
        sum.out = 0;
        sum.in = 0;

        [].slice.call(nodeList).forEach((el, index) => {
            if (index < 9) {
                sum.out = sum.out + Number(el.value);
            } else {
                sum.in = sum.in + Number(el.value);
            }
        });

        return sum;
    }

    /**
     * Replaces non-digit element value with an empty string
     * @param {*} el
     * @returns
     */
    function digitVal(el) {
        if (el.value && isNaN(el.value)) {
            return el.value.replace(/[^\d]+/g,'');
        } else {
            return el.value;
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        score = props.content;

        score['yardsOut'] = yardsOut;
        score['yardsIn'] = yardsIn;
        score['yards'] = yards;
        score['parOut'] = parOut;
        score['parIn'] = parIn;
        score['par'] = par;
        score['strokesOut'] = strokesOut;
        score['strokesIn'] = strokesIn;
        score['strokesTotal'] = strokesTotal;
        score['puttsOut'] = puttsOut;
        score['puttsIn'] = puttsIn;
        score['puttsTotal'] = puttsTotal;
        score['fairwayOut'] = fairwayOut;
        score['fairwayIn'] = fairwayIn;
        score['fairwayTotal'] = fairwayTotal;
        score['bunkerOut'] = bunkerOut;
        score['bunkerIn'] = bunkerIn;
        score['bunkerTotal'] = bunkerTotal;
        score['penaltyOut'] = penaltyOut;
        score['penaltyIn'] = penaltyIn;
        score['penaltyTotal'] = penaltyTotal;

        score['date'] = evt.target.elements.date.value;
        score['time'] = evt.target.elements.time.value;
        score['notes'] = evt.target.elements.notes.value;

        Array.prototype.map.call(evt.target.elements, (el) => {
            let name = el.name.split('_');
            if (name[1] && el.value.length == 0) {
                delete score.holes[name[1]-1][name[0]];
            } else if (name[1]) {
                score.holes[name[1]-1][name[0]] = el.value;
            }
        });

        postData(score);
    }

    function handleScoreChange(evt) {
        if (evt.target.name.startsWith('strokes_')) {
            evt.target.value = digitVal(evt.target);
            const strokes = document.querySelectorAll(`input[name^='strokes_']`);
            const sumStrokes = sumScores(strokes);

            setStrokesOut(sumStrokes.out);
            setStrokesIn(sumStrokes.in);
            setStrokesTotal(sumStrokes.in + sumStrokes.out);
        }
        if (evt.target.name.startsWith('putts_')) {
            evt.target.value = digitVal(evt.target);
            const putts = document.querySelectorAll(`input[name^='putts_']`);
            const sumPutts = sumScores(putts);

            setPuttsOut(sumPutts.out);
            setPuttsIn(sumPutts.in);
            setPuttsTotal(sumPutts.in + sumPutts.out);
        }
        if (evt.target.name.startsWith('bunker_')) {
            evt.target.value = digitVal(evt.target);
            const bunker = document.querySelectorAll(`input[name^='bunker_']`);
            const sumBunker = sumScores(bunker);

            setBunkerOut(sumBunker.out);
            setBunkerIn(sumBunker.in);
            setBunkerTotal(sumBunker.in + sumBunker.out);
        }
        if (evt.target.name.startsWith('penalty_')) {
            evt.target.value = digitVal(evt.target);
            const penalty = document.querySelectorAll(`input[name^='penalty_']`);
            const sumPenalty = sumScores(penalty);

            setPenaltyOut(sumPenalty.out);
            setPenaltyIn(sumPenalty.in);
            setPenaltyTotal(sumPenalty.in + sumPenalty.out);
        }
        if (evt.target.name.startsWith('fairway_')) {
            const fairway = document.querySelectorAll(`input[name^='fairway_']`);
            let sum = {};
            sum.out = 0;
            sum.in = 0;

            [].slice.call(fairway).forEach((el, index) => {
                if (el.value == 'F') {
                    if (index < 9) {
                        sum.out = sum.out + 1;
                    } else {
                        sum.in = sum.in + 1;
                    }
                }
            });

            setFairwayOut(sum.out);
            setFairwayIn(sum.in);
            setFairwayTotal(sum.in + sum.out);
        }
    }

    /** Uncomment this function when using a REST API **/
    // function handleResponse(response) {
    // 	const data = JSON.parse(response.config.data);
    // 	if (response.status == 200) {
    // 		setPosted(
    // 			<div>
    // 				<div>Score: <b>{data.strokesTotal}</b></div>
    // 				<div>{data.course}, {data.location}</div>
    // 				<div>{data.tee}, {data.gender}, rating {data.rating} / slope {data.slope}</div>
    // 				<div>{data.date}, {data.time}</div>
    // 				<div>Notes: {data.notes}</div>
    // 			</div>);
    // 	} else {
    // 		setPosted(
    // 			<div>
    // 				<div>Error: <b>{response.status}</b> {response.statusText}</div>
    // 			</div>);
    // 	}
    // }

    if (posted) {
        content =
          <div>Score Posted</div>
    } else {
        content =
          <form onSubmit={(evt) => handleSubmit(evt)}>
              <div className="tee-container">
                  <div className="scorecard">
                      <div className="header">
                          <div className="tee">{props.content.tee} {props.content.gender}</div>
                          {props.action === 'update' &&
                              <Button click={lockToggle} label={`${locked === 'readonly' ? 'edit' : 'view'}`} />
                          }
                      </div>
                      {props.content.holes.map((hole, i) => {
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
                            <HoleScore
                              locked={locked}
                              index={i}
                              item={hole}
                              yardsOut={yardsOut}
                              yardsIn={yardsIn}
                              yards={yards}
                              parOut={parOut}
                              parIn={parIn}
                              par={par}
                              strokesOut={strokesOut}
                              strokesIn={strokesIn}
                              strokesTotal={strokesTotal}
                              puttsOut={puttsOut}
                              puttsIn={puttsIn}
                              puttsTotal={puttsTotal}
                              fairwayOut={fairwayOut}
                              fairwayIn={fairwayIn}
                              fairwayTotal={fairwayTotal}
                              bunkerOut={bunkerOut}
                              bunkerIn={bunkerIn}
                              bunkerTotal={bunkerTotal}
                              penaltyOut={penaltyOut}
                              penaltyIn={penaltyIn}
                              penaltyTotal={penaltyTotal}
                              advToggle={advToggle}
                              scoreChange={handleScoreChange} />
                          );
                      })}
                      <div className="footer">
                          <div className="date-field">
                              <input type="date" name="date" id="date" defaultValue={props.content.date} readOnly={locked} />
                          </div>
                          <div className="time-field">
                              <input type="time" name="time" id="time" defaultValue={props.content.time} readOnly={locked} />
                          </div>
                          <div className="info">
                              <div>Slope {props.content.slope}</div>
                              <div>Rating {props.content.rating}</div>
                          </div>
                          <div>
                              <div className="notes">
                                  <label htmlFor="notes">Notes</label>
                                  <textarea name="notes" id="notes" defaultValue={props.content.notes} readOnly={locked} />
                              </div>
                              <div className="submit">
                                  <input type="submit" value="Submit" disabled={`${locked == 'readonly' ? 'disabled' : ''}`} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
    }

    return (
      <div className="score">
          {content}
          <div>{posted}</div>
      </div>
    );
}

export default Score;
