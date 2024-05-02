
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.API_KEY);
// console.log('env',process.env);

bot.start((ctx) => {
    ctx.reply('Mensaje de bienvenida');
});

bot.help((ctx) => {
    ctx.reply('Mensaje de ayuda');
});

bot.hears('hola', (ctx) => ctx.reply('Hola que tal'));

bot.command('asistente', (ctx) => {
    ctx.reply('Aprendiz de Link');
});

if(process.env.APP_ENV == 'prod') {
    bot.launch({
        webhook: {
            domain: process.env.APP_URL,
            port: process.env.APP_PORT,
        },
      });
} else {
    bot.launch();
}