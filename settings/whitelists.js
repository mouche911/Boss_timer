/**
 * Channels the bot should monitor for messages
*/
var channelNames = [
  'talkbot',
  'notifybot',
  'bossbot',
  'alustin-bosses',
  'croxus-bosses',
  'edan-bosses',
  'jordine-bosses',
  'orwen-bosses',
  'uno-bosses'
];

/**
 * Any extra channels/users to notify directly
*/
var notifyExtra = [
  '172801958191562753' // Cash (Dylan)'s bot
];

module.exports = {
  channelNames: channelNames,
  notifyExtra: notifyExtra
};
