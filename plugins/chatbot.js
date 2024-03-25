const {
        inrl,
        getJson,
        config,
        mode
} = require('../lib-2');


inrl({
        on: 'text',
        fromMe: mode
}, async (m, match) => {
        //if(m.isCreator) return;
        if(arju.CHATBOT == 'true') {
                let data = await getJson(
                        `http://api.brainshop.ai/get?bid=${arju.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`
                )
                return await m.reply(data.cnt)
        } else if(arju.CHATBOT == 'group' && m.isGroup) {
                let data = await getJson(
                        `http://api.brainshop.ai/get?bid=${arju.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`
                )
                return await m.reply(data.cnt)
        } else if(arju.CHATBOT == 'pm' && !m.isGroup) {
                let data = await getJson(
                        `http://api.brainshop.ai/get?bid=${arju.BRAINSHOP.split(/[,;|]/)[0]}&key=${config.BRAINSHOP.split(/[,;|]/)[1]}&uid=[${m.sender.split('@')[0]}]&msg=[${m.body}]`
                )
                return await m.reply(data.cnt)
        }
});
