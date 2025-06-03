# 💤 Aternos AFK Bot

A smart, stealthy anti-AFK bot for **Aternos Java servers** with **Geyser/Floodgate** support. Perfect for keeping your Minecraft world alive — without anyone realizing it's a bot.

---

## ⚙️ What It Does

- 🧠 Joins your server automatically
- 🚶‍♂️ Moves, jumps & chats like a human
- 🔁 Reconnects if kicked or disconnected
- 💡 Avoids AFK detection without OP or plugins
- 🌐 Hosted free using [Render](https://render.com)

---

## 🛠 Setup Guide

### 🔧 Requirements
- Aternos server (PaperMC, Java edition, **offline-mode**, optional Geyser/Floodgate)
- Free Render account (for 24/7 hosting)
- Node.js environment (Render supports this)

---

### 📦 Deploy to Render

1. Upload all project files (including `index.js`, `package.json`)
2. In **Render Dashboard**:
   - Type: Web Service  
   - Build Command: `npm install`  
   - Start Command: `npm start`
3. Done ✅

---

### ✏️ Configuration

In `index.js`, change the bot settings:

```js
const bot = mineflayer.createBot({
  host: 'your-server.aternos.me',
  port: 25565, // Java port (not Bedrock)
  username: 'Vanir_', // Use a natural name
  auth: 'offline',
  version: false // Auto-detects server version
});

> 💡 TIP: Use spectator or creative mode to avoid death. Set OP to prevent AFK kicks (if allowed).




---

❓ FAQ

Q: Can Bedrock players join this bot?
A: No, but the bot can join Java servers that support Bedrock (via Geyser).

Q: Why does it disconnect after 15 mins?
A: Either the server shut down, it was killed by mobs, or AFK timeout kicked it.

Q: How to keep it safe?
A: Use /gamemode spectator or /op the bot. Also, avoid using suspicious usernames like AFK_Bot.


---

🧠 Advanced Ideas

Add random movement patterns

Use different chat messages every time

Hook a basic GUI to monitor uptime and status



---

⚠️ Disclaimer

This project is for educational purposes. Do not abuse hosting services, and make sure your server allows automation.

