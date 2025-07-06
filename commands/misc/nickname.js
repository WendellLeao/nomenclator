const Commando = require('discord.js-commando')

module.exports = class NicknameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "nome",
            group: "misc",
            memberName: "nome",
            description: "Change the user's name",
            argsType: "multiple"
        })
    }

    run = (message, args) => {
        const target = message.mentions.users.first()
        const member = message.guild.members.cache.get(target.id)
        
        args.shift()
        message.delete({ timeout: 5000 })
        
        const nickname = args.join(' ')
        
        if(nickname == null || nickname == ""){
            return message.reply("Type the new name **after** the mention").then(msg => {
                msg.delete({ timeout: 5000 })
            })
        }

        if (member.id == message.guild.ownerID) {
            return message.reply("Unfortunately it's not possible to change the server owner's name").then(msg => {
                msg.delete({ timeout: 5000 })
            })
        }

        member.setNickname(nickname)

        message.reply("Awesome, you have changed the name to **" + nickname + "**").then(msg => {
            msg.delete({ timeout: 5000 })
        })
    }
}
