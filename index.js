const School=require('./school');
const school =new School();
/// register a listner
school.on('belling', ({period,text}) => {
    console.log(`we need to run because ${period} ${text}`);
    
});
school.startPeriod();
//raied an event



