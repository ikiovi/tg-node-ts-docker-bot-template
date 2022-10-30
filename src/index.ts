import 'dotenv/config';
import { Telegraf } from 'telegraf';

const token = process.env.TOKEN;
if (!token) throw new Error('TOKEN must be provided!');

const bot = new Telegraf(token);

bot.start(ctx => ctx.reply('Hello World!'));

bot.catch(err => {
    const color = {
        red: '\x1b[41m',
        reset: '\x1b[0m'
    };

    const date = new Date();
    const dateString = `${color.red}[${date.toLocaleDateString()} ${date.toLocaleTimeString()}]${color.reset}`;
    const { message, name } = err as Error;
    console.error(dateString, `${name}: ${message}`);
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
