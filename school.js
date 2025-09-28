const EventEmitter =require('events');


class School extends EventEmitter{
startPeriod(){
    console.log("Class Started");

////////raise event
setTimeout(() => {
    this.emit('belling', {
            period: 'first',
            text: 'period ended',
        });
}, 2000);

}
}

module.exports=School;
