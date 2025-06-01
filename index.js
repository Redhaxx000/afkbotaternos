const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'your-server.aternos.me', // Replace with your server address
    port: 25565,                    // Replace with your server port
    username: 'AFK_Bot_01',         // Customize your bot's username
    auth: 'offline',                // Use 'offline' for cracked servers
    version: '1.21.4'               // Ensure this matches your server version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot has joined the server.');

    // Jump every 10 seconds to prevent AFK kick
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
    console.error('❌ Bot encountered an error:', err.message);
    if (err.code === 'ECONNREFUSED' || err.message.includes('EPIPE')) {
      console.log('🔁 Retrying connection in 15 seconds...');
      setTimeout(startBot, 15000);
    }
  });
}

startBot();
