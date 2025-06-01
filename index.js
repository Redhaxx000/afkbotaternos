const mineflayer = require('mineflayer');

// 🟢 Start AFK bot
function startBot() {
  const bot = mineflayer.createBot({
    host: 'vanirmcpe.aternos.me', // 🔁 Replace with your Aternos server IP
    port: 20540,                    // 🔁 Replace with the Java server port from Aternos
    username: 'vanir',         // Change if needed
    auth: 'offline',                // Use 'offline' for cracked servers
    version: '1.21.4'               // Must match your Aternos version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has joined the server.');

    // Basic AFK behavior: jump every 10 sec
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 10000);
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
