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
}