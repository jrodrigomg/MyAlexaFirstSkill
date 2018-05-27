var Alexa =  require('alexa-sdk');

var SKILL_NAME = "Super Skill";

var MY_SUPER_POWER_LIST = [
    "I can sing a song whetever you want.",
    "I can survive years without food.",
    "I can listen everywhere.",
    "I don't have a other power, i am sorry."
];



var handlers = {
    "MySuperSkillIntent" : function(){
        var str_index = this.event.request.intent.slots.order.resolutions.resolutionsPerAuthority[0].values[0].value.id;
        var index = Number(str_index);
        var power = MY_SUPER_POWER_LIST[index];
        this.emit(":tell","Hi Rodrigo, my power is " + power);
    }
}


exports.handler = function(event,context,callback){
    var alexa = Alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}





