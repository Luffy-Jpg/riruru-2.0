let handler = async m => m.reply(`
*Welcome to permanent premium member list.*\n\nJEFF\n\n\n
*This bot is created by JEFF.* 
`.trim())
handler.help = ['prem-list']
handler.tags = ['JEFF']
handler.command = ['prem-list', 'legend-2'] 
handler.group = true 

export default handler
