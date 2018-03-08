var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: domp');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
var answers = [
    "the price is gonna go back up",
    "can you guys stop making fun of everything I say",
    "i deadass want to just leave and sleep in the forest preserve",
    "i literally want to run away",
    "I'm fucking trapped in my house with my mom whos going psycho",
"i have no privacy",
"cant do anything this weekend then I have to go to school for the next 5 days i love my life",
"Bitcoin is like buying bonds",
"Peter, you dont know anything about crypto",
"my favorite soup, rustic beef barley",
"BRB going climbing",
"I wanna go climbing so bad rn",
"yaga",
"buy LSK",
"youre literally mocking me for saying stop mocking me",
"i will make a living off HQ"
  ]
  
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  
  
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            
            case 'domp':
                bot.sendMessage({
                    to: channelID,
                    message: randomAnswer
                });
            break;
         
        }

            // Just add any case commands if you want to..
         
     }
});