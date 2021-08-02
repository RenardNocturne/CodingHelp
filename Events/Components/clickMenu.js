const { MessageEmbed, MessageAttachment } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord-buttons')

let remove = false;

module.exports = (bot, menu) => {
    if (menu.id === 'autoroles') {
        menu.values.forEach(async value => {
            
            if (value === 'hold') {
                remove = true;
                console.log(remove);
                await menu.reply.send(`${menu.clicker.user.username}, tu peux désormais choisir un rôle à retirer !`, true);  
            }

            if (value === 'anotif') {
                const notif = '849313732785733732';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'botnotif') {
                const notif = '851824887597105192';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'partnotif') {
                const notif = '859031598590459924';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'helper') {
                const notif = '825763643688878101';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'webFrontend') {
                const notif = '825761106135613491';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'webBackend') {
                const notif = '826942146153414686';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'javascript') {
                const notif = '825761100368183327';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'python') {
                const notif = '825762615170826250';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'csharp') {
                const notif = '825763158370942986';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'java') {
                const notif = '825761090980937748';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }

            if (value === 'other') {
                const notif = '834857783802986566';

                if (remove === true) {
                    if (menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.remove(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens de perdre le rôle <@&${notif}> !`, true);
                        remove = false; 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu ne possède pas le rôle <@&${notif}> !`, true);
                    } 
                } else {
                    if (!menu.clicker.member.roles.cache.has(notif)) {             
                        await menu.clicker.member.roles.add(notif)
                        await menu.reply.send(`${menu.clicker.user.username}, tu viens d'obtenir le rôle <@&${notif}> !`, true); 
                    } else {
                        await menu.reply.send(`${menu.clicker.user.username}, tu possède déjà le rôle <@&${notif}> !`, true);
                    } 
                }
                
            }
        });
    }

    if (menu.id === 'ticket') {menu
        menu.values.forEach(value => {

            async function createTicket (ticketReason, ticketName = 'ticket') {

                if (ticketReason === 'Partenariat' || ticketReason === 'Candidature') {
                    await menu.guild.channels.create(`${ticketName}-de-${menu.clicker.user.username}`, {
                        type: 'text',
                        topic: `**${menu.clicker.user.username}** a ouvert ce ticket pour la raison **"${ticketReason}"** !`,
                        position: 0,
                        reason: ticketReason,
                        parent: '855119683081338891',
                        permissionOverwrites: [
                            {
                                id: menu.guild.id,
                                deny: ['VIEW_CHANNEL'],
                            },
                            {
                                id: menu.clicker.user.id,
                                allow: ['VIEW_CHANNEL'],
                            },
                            {
                                id: '825764558093156372',
                                allow: ['VIEW_CHANNEL']
                            },
                        ],
                    }).then(newChannel => {
                        const embed = new MessageEmbed()
                            .setTitle('Nouveau ticket en vue !')
                            .setDescription(`Ticket ouvert par <@!${menu.clicker.user.id}>: \n \n **__Raison:__** \n > ${ticketReason} \n \n *Utilisez le bouton ci-dessous une fois que le problème est réglé !*`)
                            .setColor('5D6C9D')
                            .setTimestamp()
                            .setThumbnail('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/169842009/original/46a0b436c0aee26427e93e58dcc839a5d5002f9f/give-a-python-ticket-system-for-discord-bot.png')
                            .setFooter(`Ticket ouvert par ${menu.clicker.user.username}`, menu.clicker.user.avatarURL());
                        
                            const button = new MessageButton()
                            .setLabel('Fermer le ticket !')
                            .setStyle('red')
                            .setID('closeTicket');
                        
                        const row = new MessageActionRow()
                            .addComponent(button);

                        bot.channels.cache.find(channel => channel.id === newChannel.id).send(embed, {components: [row]}).then(msg => msg.pin())
                        menu.reply.send(`${menu.clicker.user.username}, votre ticket <#${newChannel.id}> a été créé pour la raison "${ticketReason.toLowerCase()}" !`, true);
                    })
                } else {
                    await menu.guild.channels.create(`${ticketName}-de-${menu.clicker.user.username}`, {
                        type: 'text',
                        topic: `**${menu.clicker.user.username}** a ouvert ce ticket pour la raison **"${ticketReason}"** !`,
                        position: 0,
                        reason: ticketReason,
                        parent: '855119683081338891',
                        permissionOverwrites: [
                            {
                                id: menu.guild.id,
                                deny: ['VIEW_CHANNEL'],
                            },
                            {
                                id: menu.clicker.user.id,
                                allow: ['VIEW_CHANNEL'],
                            },
                            {
                                id: '825764558093156372',
                                allow: ['VIEW_CHANNEL']
                            },
                            {
                                id: '830056374876110848',
                                allow: ['VIEW_CHANNEL']
                            },
                            {
                                id: '825763643688878101',
                                allow: ['VIEW_CHANNEL']
                            },
                        ],
                    }).then(newChannel => {
                        const embed = new MessageEmbed()
                            .setTitle('Nouveau ticket en vue !')
                            .setDescription(`Ticket ouvert par <@!${menu.clicker.user.id}>: \n \n **__Raison:__** \n > ${ticketReason} \n \n *Utilisez le bouton ci-dessous une fois que le problème est réglé !*`)
                            .setColor('5D6C9D')
                            .setThumbnail('https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/169842009/original/46a0b436c0aee26427e93e58dcc839a5d5002f9f/give-a-python-ticket-system-for-discord-bot.png')
                            .setFooter(`Ticket ouvert par ${menu.clicker.user.username}`, menu.clicker.user.avatarURL())
                            .setTimestamp();
    
                        const button = new MessageButton()
                            .setLabel('Fermer le ticket !')
                            .setStyle('red')
                            .setID('closeTicket');
                        
                        const row = new MessageActionRow()
                            .addComponent(button);
                        
                        bot.channels.cache.find(channel => channel.id === newChannel.id).send(embed, {components: [row]}).then(msg => msg.pin());
                        menu.reply.send(`${menu.clicker.user.username}, votre ticket <#${newChannel.id}> a bien été créé !`, true);
                    })
                }
            }

            if (value === 'help') {
                createTicket('Beson d\'aide !');
            }
            if (value === 'candidature') {
                createTicket('Candidature', 'candidature');
            }
            if (value === 'partenariat') {
                createTicket('Partenariat', 'partenariat');
            }
            if (value === 'other') {
                createTicket('Autre, **à préciser** !');
            }
            if (value === 'blank') {
                menu.reply.send('Vous pouvez désormais choisir une raison pour laquelle ouvrir un ticket !', true)
            }
        })
    }
}