const mineflayer = require('mineflayer');

// 🟢 Start AFK bot
function startBot() {
  const bot = mineflayer.createBot({
    host: 'vanirmcpe.aternos.me',
    port: 20540,
    username: 'vanir',
    auth: 'offline',
    version: '1.21.4' // make sure this matches your server version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has joined the server.');

    // Jump every 10 seconds
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);

    // Walk forward for 2 seconds every 30 seconds
    setInterval(() => {
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 2000);
    }, 30000);

    // Chat a keep-alive message every 5 minutes
    setInterval(() => {
      bot.chat('Caught a player cheat? make a ticket in our discord to report them! discord.gg/vanir');
    }, 300000);
  });

  bot.on('end', () => {
    console.warn('⚠️ Bot disconnected. Reconnecting in 5 seconds...');
    setTimeout(startBot, 5000);
  });

  bot.on('error', (err) => {
    console.error('❌ Bot error:', err.message);
    if (err.code === 'ECONNREFUSED' || err.message.includes('ECONNRESET')) {
      console.log('🔁 Retrying in 30 seconds...');
      setTimeout(startBot, 30000);
    }
  });
}

startBot();

// 🌐 Fake HTTP server for Render free tier
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AFK Bot is running!\n');
}).listen(process.env.PORT || 3000, () => {
  console.log(`🌐 HTTP server running on port ${process.env.PORT || 3000}`);
});
