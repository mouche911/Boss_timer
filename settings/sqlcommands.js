// Table Creation
var createNotifys = 'CREATE TABLE IF NOT EXISTS notifys '
  + '("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, '
  + '"author_name" TEXT(100) NOT NULL, '
  + '"author_id" TEXT(70) NOT NULL, '
  + '"server" TEXT(20) NOT NULL, '
  + '"channel" TEXT(20) NOT NULL, '
  + '"boss" TEXT(20) NOT NULL, '
  + '"status" TEXT(10) NOT NULL, '
  + '"timestamp" INTEGER NOT NULL)';

var createCommands = 'CREATE TABLE IF NOT EXISTS commands '
  + '("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, '
  + '"author_name" TEXT(100) NOT NULL, '
  + '"author_id" TEXT(70) NOT NULL, '
  + '"cmd" TEXT(60) NOT NULL, '
  + '"params" TEXT(100) NOT NULL, '
  + '"timestamp" INTEGER NOT NULL)';

// Inserts
var insertNotify = 'INSERT INTO notifys '
  + '(author_name, author_id, server, channel, boss, status, timestamp) '
  + 'VALUES (?, ?, ?, ?, ?, ?, ?)';
  
var insertCommand = 'INSERT INTO commands '
  + '(author_name, author_id, cmd, params, timestamp) '
  + 'VALUES(?, ?, ?, ?, ?)';

module.exports = {
  createNotifys: createNotifys,
  createCommands: createCommands,
  insertNotify: insertNotify,
  insertCommand: insertCommand,
};
