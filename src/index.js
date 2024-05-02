const { Telegraf, session, Scenes } = require('telegraf');

const envs = require('./config/plugins/env.plugin');

const { Stage } = Scenes;

const scenes = require("./presentation/scenes");
const stage = new Stage(Object.values(scenes));
const bot = new Telegraf(envs.API_KEY);

bot.catch((err) => {
    const message = err.stack || err;
    console.log(message, err);
    bot.telegram.sendMessage(envs.DEV_ID, message);
});

// registration middlewares
bot.use(session()).use(stage.middleware());

console.log(envs);


bot.start((ctx) => {
    return ctx.scene.enter("main");
});

bot.help((ctx) => {
    ctx.reply('Mensaje de ayuda');
});

bot.launch().then(() => {
    const message = "Bot started";
    console.log(message);
    bot.telegram.sendMessage(envs.DEV_ID, message);
});