import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

export function getLatestInfo(bot: Telegraf<Context<Update>>) {
    bot.command('latestinfo', (ctx) => {
        ctx.reply('Loading Latest Info')
    })
}
