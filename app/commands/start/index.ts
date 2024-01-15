import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'

export function start(bot: Telegraf<Context<Update>>) {
    bot.start((ctx) => ctx.reply('Welcome'))
}
