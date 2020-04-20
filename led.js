
const telegrambot = require('../bot-telegram/node_modules/node-telegram-bot-api');
var token = 'Token Bot Telegram';
var bot = new telegrambot(token, { polling: true });
const { Board, Led } = require("johnny-five");
const board = new Board();


board.on('ready', () => {
    var led = new Led(13);
    bot.onText(/\/echo (.+)/, (msg, match) => {

        var echo = match[1];
        switch (echo) {
            case "on":
                led.blink(1000);
                break;
            case "off":
                led.stop().off();
            default:

                console.log('void');

                break;
        }


    })


})

