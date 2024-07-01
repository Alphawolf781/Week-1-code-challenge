function speedDetector(speed){
 const speedLimit = 70;
 const kmPerDemeritPoint = 5;
 const pointsPerkmOverDem=1;

 if (speed < speedLimit){
    console.log("ok")
    return;
 }
 let DemeritPoints = Math.floor((speed-speedLimit)/kmPerDemeritPoint)

 if (DemeritPoints > 12){
    console.log("License suspended");
 }
 else{
    console.log(`points: ${DemeritPoints}`);

 }
}

speedDetector()