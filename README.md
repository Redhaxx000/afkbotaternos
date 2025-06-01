# Aternos AFK Bot

A simple Node.js bot using [mineflayer](https://github.com/PrismarineJS/mineflayer) that keeps your **cracked Aternos Minecraft server** online 24/7.

## 🌐 Features
- Works on offline (cracked) servers.
- Automatically reconnects if disconnected.
- Stays active by jumping every 10 seconds.

## 🚀 Deploy on Render.com

1. [Fork this repo](https://github.com/your-username/aternos-afk-bot)
2. Go to [Render.com](https://render.com/)
3. Create a **Web Service**
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Done!

## 🔧 Configuration

In `index.js`, replace:

```js
host: 'your-server.aternos.me',
username: 'AFK_Bot_01',
```

with your Aternos server IP and preferred bot name.

## 📦 Dependencies

- [mineflayer](https://www.npmjs.com/package/mineflayer)

---

MIT License © 2025
