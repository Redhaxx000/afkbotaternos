const mineflayer = require('mineflayer');
const http = require('http');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'vanirmcpe.aternos.me', // your Aternos IP
    port: 20540,                  // your server port
    username: 'Vanir_',           // bot's name (use something human-like)
    auth: 'offline',              // cracked/offline server
    version: false                // auto-detect version
  });

  bot.once('spawn', () => {
    console.log('✅ Vanir_ joined and is AFK.');
  });

  bot.on('end', () => {
    console.warn('⚠️ Disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('kicked', (reason) => {
    console.warn('❌ Kicked:', reason);
  });

  bot.on('error', (err) => {
    console.error('❌ Error:', err.message);
  });
}

startBot();

// 🔁 Keep Render.com project alive
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AFK bot is active.\n');
}).listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Web server running on port ${process.env.PORT || 3000}`);
});
