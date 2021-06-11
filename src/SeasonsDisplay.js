import React from 'react';


const getSeason = (lat,month)=>{
    if (month > 2 && month < 9) {
        //if lat >  0 then we are in northern hemisphere, then there is summer
        //in 3 to 8 means april to semtember
       return lat > 0 ? 'summer' : 'winter';
    } else {
        //if lat > 0 then we are in northern hemisphere , else means it's winter
        // without 3 to 8 means april to september
        // we have 0 to 2 and 9 to 11 means january to march and october to december
       return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    //this props is this.state.lat means just the latitude portion
    //on northern hemisphere  summer is (april to september)
    //on southern hemisphere summer is (jan to march) and (oct to dec)
    //month range is 0 to 11
    console.log(props.lat);
    const season = getSeason(props.lat,new Date().getMonth())
    console.log(season)
    //props.lat = lattitude, new Date().getMonth() is javascript code for current month
    return <div>Season Display</div>
};

export default SeasonDisplay;

// developer.mozilla.org/en-US/docs/Web/API/Geolocation_API