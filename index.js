const mineflayer = require('mineflayer');
const http = require('http');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'vanirmcpe.aternos.me',  // Replace with your Aternos IP
    port: 20540,                   // Aternos Java port (not Bedrock)
    username: 'Vanir_',            // Use a normal-looking name
    auth: 'offline',               // Offline server
    version: false                 // Auto-detect version (1.21.5 compatible)
  });

  bot.once('spawn', () => {
    console.log('✅ Vanir_ joined and is AFK-safe.');

    // Walk forward for 1s every 30s
    setInterval(() => {
      bot.setControlState('forward', true);
      setTimeout(() => bot.setControlState('forward', false), 1000);
    }, 30000);

    // Jump every 45s
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 45000);

    // Chat every 5 minutes
    setInterval(() => {
      bot.chat('discord.gg/vanir 👀');
    }, 300000);
  });

  bot.on('kicked', reason => {
    console.log('❌ Kicked:', reason);
  });

  bot.on('end', () => {
    console.log('🔁 Disconnected. Reconnecting in 10s...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', err => {
    console.log('❌ Bot error:', err.message);
  });
}

startBot();

// 🔁 Prevent Render.com shutdown (fake web server)
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot running.');
}).listen(process.env.PORT || 3000, () =>
  console.log(`🌐 Web server running on port ${process.env.PORT || 3000}`)
);
