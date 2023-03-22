function Hole(props: any) {
    let contentOut,
      contentIn,
      contentTotal,
      sum: any = false;

    if (props.index == 8) {
        contentOut =
          <div className="out">
              <div>OUT</div>
              <div className="yards">{props.yardsOut}</div>
              <div>{props.parOut}</div>
              <div>Hcp.</div>
          </div>;
        sum = true;
    } else if (props.index == 17) {
        contentIn =
          <div className="in">
              <div>IN</div>
              <div className="yards">{props.yardsIn}</div>
              <div>{props.parIn}</div>
              <div>Hcp.</div>
          </div>;
        contentTotal =
          <div>
              <div>&nbsp;</div>
              <div className="yards">{props.yards}</div>
              <div>{props.par}</div>
              <div>&nbsp;</div>
          </div>;
        sum = true;
    }

    return (
      <div className={`hole${sum = sum ? ' sum' : ''}`}>
          <div>
              <div>{props.item.number}</div>
              <div className="yards">{props.item.yards}</div>
              <div>{props.item.par}</div>
              <div>{props.item.handicap}</div>
          </div>
          {contentOut}
          {contentIn}
          {contentTotal}
      </div>
    );

}

export default Hole;
