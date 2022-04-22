const Commando = require('discord.js-commando')

module.exports = class NicknameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nome',
            group: 'misc',
            memberName: 'nome',
            userPermissions: [
                'MANAGE_NICKNAMES',
                'CHANGE_NICKNAME',
                'MANAGE_MESSAGES',
            ],
            clientPermissions: [
                'MANAGE_NICKNAMES',
                'CHANGE_NICKNAME',
                'MANAGE_MESSAGES'
            ],
            description: 'Muda o nome de algum corno',
            argsType: 'multiple'
        })
    }

    run = (message, args) => {
        const target = message.mentions.users.first()
        const member = message.guild.members.cache.get(target.id)
        
        args.shift()
        message.delete({ timeout: 5000 })
        
        const nickname = args.join(' ')
        
        if(nickname == null || nickname == ""){
            return message.reply('coloca o novo nome depois da menção **BURRO**').then(msg => {
                msg.delete({ timeout: 5000 })
            })
        }

        if (member.id == message.guild.ownerID) {
            return message.reply('infelizmente não consigo mudar o nome desse desgraçado aí.').then(msg => {
                msg.delete({ timeout: 5000 })
            })
        }

        member.setNickname(nickname)

        message.reply('parabéns você mudou o nome do corno para **' + nickname + '**').then(msg => {
            msg.delete({ timeout: 5000 })
        })
    }
}