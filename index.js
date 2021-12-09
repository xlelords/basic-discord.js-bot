const Discord = reuqire('discord.js')
const client = new Discord.Client()


client.on('message', message => {
  if(message.content === 'ping')
    message.channel.send(`pong: ${Math.round(client.ws.ping)}ms`)
})

client.login(process.env.token)
