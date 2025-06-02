const mineflayer = require('mineflayer');
const http = require('http');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'vanirmcpe.aternos.me',
    port: 20540,
    username: 'Vanir',       // looks like a real player
    auth: 'offline',
    version: false            // auto-detect version
  });

  bot.once('spawn', () => {
    console.log('✅ Vanir_ joined and is AFK.');

    // 🔄 Subtle anti-AFK movements
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);

      // Random look direction
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * Math.PI;
      bot.look(yaw, pitch, true);
    }, 60000); // every 60 seconds

    // 💬 Optional: send a non-bot-looking chat message occasionally
    setInterval(() => {
      const msgs = ['Caught a cheater? Report them in our discord server!', 'ok', 'discord.gg/vanir', 'yo', 'nice'];
      bot.chat(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 5 * 60 * 1000); // every 5 minutes
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

// 🌐 Keep Render.com project alive
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('AFK bot is active.\n');
}).listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Web server running on port ${process.env.PORT || 3000}`);
});
