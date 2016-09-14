// General help / greeting
var about = 'Hey, this is the BDO World Boss Timers bot!\r\n'
  + 'Two commands exist: `query` & `notify`\r\n'
  + 'Send me one of those commands on their own to learn how to use them.\r\n'
  + 'You can communicate with me via Direct Message, the #talkbot channel or by '
  + 'mentioning me first.';

// Help text for Commands
var notifyHelp = '__***notify***__ allows you to update me on your boss '
  + 'vanquishing and seeing skills.\r\n'
  + 'Use the following format:\r\n\r\n'
  + '`notify {server} {channel} {boss} {status}`\r\n'
  + 'ex: `notify alustin mediah1 bheg dead`\r\n\r\n'
  + 'Servers: `alustin`, `croxus`, `edan`, `jordine`, `orwen`, and `uno`.\r\n'
  + 'Channels: `velia1`, `balenos1`, `balenos2`, `calpheon1`, `calpheon2`, '
  + '`serendia1`, `serendia2`, `mediah1`, `mediah2`, `valencia1`, `valencia2`, '
  + 'and `velia2`.\r\n'
  + 'Bosses: `mudster`, `rednose`, `bheg`, `dimtree`, `karanda`, and `kzarka`.\r\n'
  + 'Status: `dead` or `alive`!';

var queryHelp = '__***query***__ will tell you the status of each boss.\r\n'
  + 'Just let me know the Server and Channel, like so:\r\n\r\n'
  + '`query {server} {channel(optional)}`\r\n'
  + 'ex: `query alustin mediah1`\r\n\r\n'
  + 'Servers: `alustin`, `croxus`, `edan`, `jordine`, `orwen`, and `uno`.\r\n'
  + 'Channels: `velia1`, `balenos1`, `balenos2`, `calpheon1`, `calpheon2`, '
  + '`serendia1`, `serendia2`, `mediah1`, `mediah2`, `valencia1`, `valencia2`, '
  + 'and `velia2`';

// Error messages for Notify command
var notifyParamsMin = 'You holding out on me? I was promised 4 parameters!\r\n'
  + 'If you need a refresher on how to talk to me, send me the command `notify`.';
var notifyWrongServer = '{server} ain\'t no server I ever heard of.\r\n'
  + 'You can see a list of valid servers by sending me the `notify` command!';
var notifyWrongChannel = '{channel} ain\'t no channel I ever heard of.\r\n'
  + 'You can see a list of valid channels by sending me the `notify` command!';
var notifyWrongBoss = '{boss} ain\'t no boss I ever heard of.\r\n'
  + 'You can see a list of valid bosses by sending me the `notify` command!';
var notifyWrongStatus = 'Look... they\'re either `dead` or `alive`. Not both. '
  + 'Not anything inbetween. Just plain binary up in this shtuff.\r\n'
  + 'Just send me the `notify` command on its own for a recap.';

// Error messages for Query command
var queryWrongServer = '{server} ain\'t no server I ever heard of.\r\n'
  + 'You can see a list of valid servers by sending me the `query` command!';
var queryWrongChannel = '{channel} ain\'t no channel I ever heard of.\r\n'
  + 'You can see a list of valid channels by sending me the `query` command!';

// Success messages for Notify command
var aliveConfirm = '***Whoah!*** Don\'t run into {boss} without some friends.\r\n'
  + 'Thanks for letting me know. Confirmations: {confNum} / {maxConf}.';
var deadConfirm = '***Nice!*** Glad to hear that {boss} is dead on {channel}.\r\n'
  + 'Thanks for letting me know. Confirmations: {confNum} / {maxConf}.';
var alreadyStatus = 'Thanks for letting me know, but we already knew you were '
  + 'going to say that. Keep on reporting though, it\'s the only way we can '
  + 'get our information <3';

// Notification messages
var serverWide = '__***Hell\'s breaking loose!***__ {boss} is now alive in all of {server}\'s channels!';
var bossAlive = '__***Let\'s go!***__ {boss} is now alive on {channel}.';
var bossDead = '__***Good job!***__ A little bird told me that {boss} is dead on {channel}.';

module.exports = {
  about: about,
  notifyHelp: notifyHelp,
  queryHelp: queryHelp,
  notifyParamsMin: notifyParamsMin,
  notifyWrongServer: notifyWrongServer,
  notifyWrongChannel: notifyWrongChannel,
  notifyWrongBoss: notifyWrongBoss,
  notifyWrongStatus: notifyWrongStatus,
  queryWrongServer: queryWrongServer,
  queryWrongChannel: queryWrongChannel,
  aliveConfirm: aliveConfirm,
  deadConfirm: deadConfirm,
  bossAlive: bossAlive,
  bossDead: bossDead,
  alreadyStatus: alreadyStatus,
  serverWide: serverWide,
};
