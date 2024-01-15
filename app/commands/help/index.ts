import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

export function help(bot: Telegraf<Context<Update>>) {
    bot.help((ctx) => ctx.reply('Send me a sticker'))
}
