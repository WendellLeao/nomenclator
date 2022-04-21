const path = require('path')
const { CommandoClient } = require('discord.js-commando')
const Config = require('./config.json')

const client = new CommandoClient({
    commandPrefix: "!",
    owner: "425446323542687756"
})

client.on('ready', async () => {
    console.log('The client is ready!')

    client.registry
        .registerGroups([
            ['misc','Misc Commands']
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'commands'))
})

client.login(Config.TOKEN)