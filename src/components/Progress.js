import React from "react";
import { useEffect, useState } from "react";


function Progress({ width, percent,tech }) {
    const [progress, setValue] = React.useState(0);

    React.useEffect(() => {
        setValue((percent * width)/10);
    });
    return (
        <div >
            <div>
                <h5>{tech}</h5>
            </div>
            <div className="progress-div">
                <div style={{ width: `${progress}px` }} className="percen" />
            </div>
        </div>	
		);	
    
}
export default Progress; 