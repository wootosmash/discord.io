var Discord = require('discord.io');
var drole = "261707832703975424"; /* roleid to be applied when someone joins the server */
var serverid = "261707171824271362"; /* your server id */
var bot = new Discord.Client({
  autorun: true, /* If false, you need to connect to the server using bot.connect(); */
  token: "MjYxNzA3MzM3MTIxNjYwOTM4.Cz47Iw.IBmLS-0K66dQYuxc8VbySsJLYRA" /* your discordapp token */
});

bot.on('ready', function() {
  console.log("Successfully connected: " + bot.username + " - (" + bot.id + ")");
});

bot.on('guildMemberAdd', function(callback) { /* Event called when someone joins the server */
  if(callback.guild_id == serverid)
    bot.addToRole({"serverID":serverid,"userID":callback.id,"roleID":drole},function(err,response) {
      if (err) console.error(err); /* Failed to apply role */
        /* some code */
  });
 });
