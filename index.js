//faire "npm install discord.js" et "npm i fs" dans le terminal
//crée un nouveau fichier "warns.json" 
 
//Tout d'abord pour allumer le bot 24/24, installez la PM2 avec "npm install pm2 -g" dans le terminal
//pour allumer le bot 24/24 "pm2 start nomdevotrefichier.js"
//pour redémarer le bot "pm2 restart nomdevotrefichier.js"
//pour le stopper "npm stop nomdufichier.js"
 
const Discord = require("discord.js")
const fs = require('fs')
const bot = new Discord.Client()
 
let prefix = "!"
 
const warns = JSON.parse(fs.readFileSync('./warns.json'))
 
 
bot.on('ready', function(){
    console.log("je suis prêt!!!")
    setInterval(function() {
 
        let Statuses = [
      
          "Objectif "nombres de users tu voudrais"  users !",
          `${bot.users.size} Users | "!"help`,
          "invite le | "!"bot",
        ]
      
        let status = Statuses[Math.floor(Math.random() * Statuses.length)];
        bot.user.setActivity( status , { type : "WATCHING"})}, 3000)
    
      return
        });
 
 
bot.login('Zzz');
 
bot.on('message', message => {
    if(message.content === prefix + "bot"){
    message.reply("ton invitation")
    console.log("invitation du bot demmander!!!");
    }
    if(message.content === prefix + "créateur"){
        message.channel.sendMessage("Le créateur est "𝚉𝙰𝚁𝙰  | 🥀 Glow 力🥀#6022" !!!")
        console.log("commande créateur réussi !!!")
        message.delete();
    }
    if(message.content === prefix + "serveurcréa"){
        message.author.sendMessage("Tien le serveur du créateur "https://discord.gg/QFVrkjbK7t" ")
        message.channel.sendMessage("regarde tes message privés")
        console.log("commande serveur créateur réussi !!!")
        message.delete();
    }
    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#EE82EE")
        .setThumbnail("https://fr.best-wallpaper.net/wallpaper/2560x1600/1401/Violet-space-black-hole-stars_2560x1600.jpg")
        .setTitle("Voici les commandes pour admin : ")
        .setDescription("Vous pouvez utilisez mes commandes avec le préfixe ``!``")
        .addField("**ADMIN**", "_______________")
        .addField("``ban``, ``kick``, ``mute``, ``clear [chiffre entre 1 et 100]``, ``unmute``, ``warn``, ``unwarn``, ``infraction [mentionner un utilisateur]``", "____________________")
        .addField("**FUN**", "__________________")
        .addField("``8ball [ta question que tu veut]``", "___________________")
        .addField("**INFO**", "_________________ ")
        .addField("``bot``", "pour avoir le bot")
        .addField("serveurcréa", "Te donne le serveur du créateur")
        .setTimestamp() 
        .setFooter("signaler un bug? faite "ton préfixe"créateur")
        message.author.sendMessage(help_embed)
        message.channel.sendMessage(":white_check_mark:| Les commandes vous ont été envoyés en messages privés")
        console.log("commandes envoyés !!!!");
        message.delete();
 
}
})
 
 
/*Kick*/
bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});
 
 
/*Ban*/
bot.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});
 
 
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "purge") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
})
 
 
bot.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    //Muted
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            })
        }
    }
 
 
if (args[0].toLowerCase() === prefix + "infractions") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    let embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField('10 derniers warns', ((warns[member.id]) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
        .setTimestamp()
    message.channel.send(embed)
}
 
 
//infraction
if (args[0].toLowerCase() === prefix + "infractions") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    let embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.displayAvatarURL)
        .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
        .setTimestamp()
    message.channel.send(embed)
}
 
 
//unmute
if(args[0].toLowerCase() === prefix + "unmute"){
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    let member = message.mentions.members.first()
    if(!member) return message.channel.send("Membre introuvable")
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
    if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unmute ce membre.")
    let muterole = message.guild.roles.find(role => role.name === 'Muted')
    if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
    message.channel.send(member + ' a été unmute :white_check_mark:')
}
 
//unwarn
if(args[0].toLowerCase() === prefix + "unwarn"){
    let member = message.mentions.members.first()
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
    if(!member) return message.channel.send("Membre introuvable")
    if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
    if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unwarn ce membre.")
    if(!warns[member.id]|| !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
    warns[member.id].shift()
    fs.writeFileSync('./warns.json',JSON.stringify(warns))
    message.channel.send("Le dernier warn de " +member+ " a été retiré :white_check_mark:")
     }
    
 
//warns
if (args[0].toLowerCase() === prefix + "warn") {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
    let member = message.mentions.members.first()
    if (!member) return message.channel.send("Veuillez mentionner un membre")
    if (member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
    let reason = args.slice(2).join(' ')
    if (!reason) return message.channel.send("Veuillez indiquer une raison")
    if (!warns[member.id]) {
        warns[member.id] = []
    }
    warns[member.id].unshift({
        reason: reason,
        date: Date.now(),
        mod: message.author.id
    })
    fs.writeFileSync('./warns.json', JSON.stringify(warns))
    message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
}
 
})
 
 
//8ball
bot.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("ORANGE")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }
})
//faire "npm install discord.js" et "npm i fs" dans le terminal
//crée un nouveau fichier "warns.json" 

//Tout d'abord pour allumer le bot 24/24, installez la PM2 avec "npm install pm2 -g" dans le terminal
//pour allumer le bot 24/24 "pm2 start nomdevotrefichier.js"
//pour redémarer le bot "pm2 restart nomdevotrefichier.js"
//pour le stopper "npm stop nomdufichier.js"

const Discord = require("discord.js")
const fs = require('fs')
const bot = new Discord.Client()
 
let prefix = "ton préfixe"