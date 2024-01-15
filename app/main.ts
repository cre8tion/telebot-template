import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { start } from './commands/start'
import { help } from './commands/help'
import { getLatestInfo } from './commands/latestinfo'

export function run(botToken: string) {
    try {
        const bot = new Telegraf(botToken)

        start(bot)
        help(bot)
        getLatestInfo(bot)

        bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
        bot.hears('hi', (ctx) => ctx.reply('Hey there'))
        bot.launch()

        // Enable graceful stop
        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
    } catch (e) {
        console.log(e)
    }
}
