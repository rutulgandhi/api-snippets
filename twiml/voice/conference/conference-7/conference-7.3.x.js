const VoiceResponse = require('twilio').twiml.VoiceResponse;

const response = new VoiceResponse();
const dial = response.dial();
dial.conference({
    beep: false
}, 'Customer Waiting Room');

console.log(response.toString());
