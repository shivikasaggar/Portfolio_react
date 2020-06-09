import React from 'react';
import { useSpring, animated } from 'react-spring'; 
function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <div>
            <animated.div className="s-card-info" style={style}>
                <p className="s-cardtitle textstyle">{props.title}</p>
                <p className="s-cardsub textstyle">{props.subtitle}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">HERE</a>
                
            </animated.div>
        </div>
    );
}
export default CardInfo;
