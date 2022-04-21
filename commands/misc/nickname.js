const Commando = require('discord.js-commando')

module.exports = class NicknameCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'nick',
            group: 'misc',
            memberName: 'nick',
            userPermissions: [
                'MANAGE_NICKNAMES',
                'CHANGE_NICKNAME',
                'MANAGE_MESSAGES'
            ],
            clientPermissions: [
                'MANAGE_NICKNAMES',
                'CHANGE_NICKNAME',
                'MANAGE_MESSAGES'
            ],
            description: 'Changes the nickname of a user',
            argsType: 'multiple'
        })
    }

    run = (message, args) => {
        const target = message.mentions.users.first()
        const member = message.guild.members.cache.get(target.id)

        args.shift()
    
        const nickname = args.join(' ')

        if(nickname == null || nickname == ""){
            message.reply('type the new name after the mention')

            return;
        }

        if (member.id == message.guild.ownerID) {
            message.reply('I have no permission to change the name of the owner :(');

            return;
        }

        member.setNickname(nickname)

        message.reply('you changed the nickname!')
    }
}