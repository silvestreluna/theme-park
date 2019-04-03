// XHR - xmlHttpRequest
let rides = [];

const domStringBuilder = (arrayToPrint) => {
    console.log(arrayToPrint);
};

function executeThisCodeAfterFileLoads () {
    const data = JSON.parse(this.responseText);
    rides = data.rides;
    domStringBuilder(data.rides);
};

function executeThisCodeIfXHRFails(){
    console.error('oh crap!');
};


const getRidesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/rides.json');
    myRequest.send();
};


const init = () => {
    getRidesData();
};

init();