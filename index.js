const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '5090780460:AAFF7GVbMnv72b_HkG6xSi7r2VeB4GH6G5w'
const debug = require('./helpers')

console.log('Bot has been started ....')

const bot = new TelegramBot (TOKEN, {
    polling: {
        interval: 300,
        autoStart: true
    }
})

bot.onText(/\/start/, msg => {
    const { id } = msg.chat
    const html = `
    <strong>Привет дорогой читатель по имени, ${msg.from.first_name}</strong>
    <i>Я бот Богини Ольги, и я помогу купить книгу просвящения</i>
    <i>Напиши команду /info, чтобы узнать в чём моя сила</i>
    `

    bot.sendMessage(msg.chat.id, html,  {
        parse_mode: 'HTML'
    })
    
    bot.sendPhoto(msg.chat.id, `https://memepedia.ru/wp-content/uploads/2017/08/%D0%B4%D1%80%D1%83%D0%B6%D0%B8%D1%89%D0%B5-%D0%B8%D0%B8%D1%81%D1%83%D1%81.jpg`)
})

bot.onText(/\/info/, msg => {
    const { id } = msg.chat
    const html = `
    <strong>Сейчас ты увидишь силу великого Jarmail</strong>
    <strong>Ты можешь купить книгу, выбрать жанр, а также заказать доставку</strong>
    <i>Все доступные команды бога всевышнего:
    -/start
    -/info
    -/katalog
    -/pay
    -/delivery
    </i>
    `

    bot.sendMessage(msg.chat.id, html,  {
        parse_mode: 'HTML'
    })
})

bot.onText(/\/katalog/, msg => {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Выбери жанр', {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Акции',
                        url: 'https://goo.su/aDXF'
                    }
                ],
                [
                    {
                        text: 'Романы',
                        url: 'https://goo.su/Pls'
                    }
                ],
                [
                    {
                        text: 'Детективы',
                        url: 'https://goo.su/NA8'
                    }
                ]
            ]
        }
    })

})

bot.onText(/\/delivery/, msg => {
    const { id } = msg.chat

    const html = `
    <strong>Сейчас вы можете заказать доставку, следуйте инструкциям</strong>
    <i>Напишите мне: адрес, номерт телефона, имя и фамилию и книгу которую выбрали</i>
    `

    bot.sendMessage(msg.chat.id, html,  {
        parse_mode: 'HTML'
    })
})

// 401643678:TEST:a0420f67-bd4b-4408-a688-c61a427ba9ae

bot.onText(/\/pay/, msg => {
    const chatId = msg.chat.id

    bot.sendInvoice(
        chatId,
        'Библия',
        'Лучшая из лучших',
        'payload',
        '401643678:TEST:a0420f67-bd4b-4408-a688-c61a427ba9ae',
        'SOME_RANDOM_STRING_KEY',
        'RUB',
        [
            {
                label: 'jarmail',
                amount: 1500000
            }
        ] ,
        {
            photo_url: 'https://i2.wp.com/sokrsokr.net/wp-content/uploads/2016/06/bibliya11.jpg?fit=368%2C480&ssl=1',
            need_name: true,
            is_flexible: true
        }
    )

    bot.sendInvoice(
        chatId,
        'Великий Гетсби',
        'Если смотрели фильм, то забудьте о нём, это будут новые гастрономические ощущения',
        'payload',
        '401643678:TEST:a0420f67-bd4b-4408-a688-c61a427ba9ae',
        'SOME_RANDOM_STRING_KEY',
        'RUB',
        [
            {
                label: 'getsbi',
                amount: 120000
            }
        ] ,
        {
            photo_url: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/3/2/321822_68945290.jpg',
            need_name: true,
            is_flexible: true
        }
    )

    bot.sendInvoice(
        chatId,
        'Гордость и предубеждение',
        'Эта книга имеет много смыслов, прочитав её, каждый может сделать для себя выводы',
        'payload',
        '401643678:TEST:a0420f67-bd4b-4408-a688-c61a427ba9ae',
        'SOME_RANDOM_STRING_KEY',
        'RUB',
        [
            {
                label: 'god',
                amount: 180000
            }
        ] ,
        {
            photo_url: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/31b681157c4c1a5551b0db4896e7972f/i/m/img_0001_23_11.jpg',
            need_name: true,
            is_flexible: true
        }
    )

})


