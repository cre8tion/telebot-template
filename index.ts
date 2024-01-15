import './conf/index'
import { run } from './app/main'

try {
    if (process.env.BOT_TOKEN) {
        run(process.env.BOT_TOKEN)
    } else {
        throw new Error('"BOT_TOKEN" env var is required!')
    }
} catch (e) {
    console.log(e)
}
