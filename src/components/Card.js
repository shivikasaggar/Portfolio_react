import React from 'react';
import CardInfo from '../components/CardInfo';
function Card(props) {
    return (
        <div className="d-inline-block s-card" onClick={(e)=>props.click(props.item)}>
            <img className="s-card-image " src={props.item.imgsrc} alt={props.item.imgsrc} />
            {props.item.selected &&
                <CardInfo
                    title={props.item.title}
                    subtitle={props.item.subtitle}
                    link={props.item.link}
                />}
        </div>
    );
}
export default Card;