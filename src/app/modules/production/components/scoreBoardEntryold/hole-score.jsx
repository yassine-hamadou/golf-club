import {Button} from "antd";

function HoleScore(props) {
    let contentLabels,
        contentOut,
        contentIn,
        contentTotal,
        bunkerInput = `bunker_${props.item.number}`,
        fairwayInput = `fairway_${props.item.number}`,
        penaltyInput = `penalty_${props.item.number}`,
        puttsInput = `putts_${props.item.number}`,
        strokesInput = `strokes_${props.item.number}`,
        labels = false,
        sum = false;

    if (props.index == 0 || props.index == 9) {
        contentLabels =
            <div className="label-wrap">
                <div>&nbsp;</div>
                <div>Yards</div>
                <div>Par</div>
                <div className="label">Strokes</div>
                <div className="adv-toggle">
                    <Button click={props.advToggle} label="adv" />
                </div>
                <div className="label adv">Putts</div>
                <div className="label adv">Fairway</div>
                <div className="label adv">Bunker</div>
                <div className="label adv">Penalty</div>
            </div>;
        labels = true;
    } else if (props.index == 8) {
        contentOut =
            <div className="out">
                <div>OUT</div>
                <div className="yards">{props.yardsOut}</div>
                <div>{props.parOut}</div>
                <div className="label strokes">{props.strokesOut}</div>
                <div>Hcp.</div>
                <div className="label adv putts">{props.puttsOut}</div>
                <div className="label adv fairway">{props.fairwayOut}</div>
                <div className="label adv bunker">{props.bunkerOut}</div>
                <div className="label adv penalty">{props.penaltyOut}</div>
            </div>;
        sum = true;
    } else if (props.index == 17) {
        contentIn =
            <div className="in">
                <div>IN</div>
                <div className="yards">{props.yardsIn}</div>
                <div>{props.parIn}</div>
                <div className="label strokes">{props.strokesIn}</div>
                <div>Hcp.</div>
                <div className="label adv putts">{props.puttsIn}</div>
                <div className="label adv fairway">{props.fairwayIn}</div>
                <div className="label adv bunker">{props.bunkerIn}</div>
                <div className="label adv penalty">{props.penaltyIn}</div>
            </div>;
        contentTotal =
            <div>
                <div>&nbsp;</div>
                <div className="yards">{props.yards}</div>
                <div>{props.par}</div>
                <div className="label strokes">{props.strokesTotal}</div>
                <div>&nbsp;</div>
                <div className="label adv putts">{props.puttsTotal}</div>
                <div className="label adv fairway">{props.fairwayTotal}</div>
                <div className="label adv bunker">{props.bunkerTotal}</div>
                <div className="label adv penalty">{props.penaltyTotal}</div>
            </div>;
        sum = true;
    }

    return (
        <div className={`hole${sum = sum ? ' sum' : ''}${labels = labels ? ' labels' : ''}`}>
            {contentLabels}
            <div>
                <div>{props.item.number}</div>
                <div className="yards">{props.item.yards}</div>
                <div>{props.item.par}</div>
                <div><input name={strokesInput} type="tel" required="" aria-required="true" onChange={props.scoreChange} maxLength="2" defaultValue={props.item.strokes} readOnly={props.locked} /></div>
                <div>{props.item.handicap}</div>
                <div className="adv"><input name={puttsInput} type="tel" required="" aria-required="false" onChange={props.scoreChange} maxLength="1" defaultValue={props.item.putts} readOnly={props.locked} /></div>
                <div className="adv"><input name={fairwayInput} type="text" required="" aria-required="false" maxLength="1" defaultValue={props.item.fairway} readOnly={props.locked} /></div>
                <div className="adv"><input name={bunkerInput} type="tel" required="" aria-required="false" onChange={props.scoreChange} maxLength="1" defaultValue={props.item.bunker} readOnly={props.locked} /></div>
                <div className="adv"><input name={penaltyInput} type="tel" required="" aria-required="false" onChange={props.scoreChange} maxLength="1" defaultValue={props.item.penalty} readOnly={props.locked} /></div>
            </div>
            {contentOut}
            {contentIn}
            {contentTotal}
        </div>
    );

}

export default HoleScore;
