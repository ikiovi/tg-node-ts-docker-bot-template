import 'dotenv/config';
import { Telegraf } from 'telegraf';

const token = process.env.TOKEN;
if (!token) throw new Error('TOKEN must be provided!');

const bot = new Telegraf(token);

bot.start(ctx => ctx.reply('Hello World!'));

bot.catch(err => {
    // Handle errors here
    const { constructor: { name }, message } = <Error>err;
    console.error(`[${new Date().toLocaleString('uk')}] \x1b[41m${name}\x1b[0m | ${message}`);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));