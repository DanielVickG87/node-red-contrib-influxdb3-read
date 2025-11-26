# node-red-contrib-influxdb3-read

A Node-RED node that allows querying **InfluxDB 3** using **SQL over the HTTP API**.

This node complements write-only packages such as `node-red-contrib-influxdb3`, enabling complete read/write workflows.

---

## ⭐ Features

- Execute SQL queries against InfluxDB 3
- HTTP-based implementation
- Custom host, database and authentication token
- Node-RED–friendly output format
- Fully open source and extensible

---

## 🚀 Requirements

| Component   | Version |
|-------------|---------|
| Node.js     | **≥ 16** |
| npm         | **≥ 8** |
| Node-RED    | **≥ 3.0.0** |
| InfluxDB 3  | Any HTTP-compatible edition |

---

## 📦 Installation

### Node-RED Palette Manager  
Search for:

node-red-contrib-influxdb3-read


### Or install manually:



cd ~/.node-red
npm install node-red-contrib-influxdb3-read


Restart Node-RED afterwards.

---

## ⚙️ Configuration

The node requires:

- **Host** → `http://host.docker.internal:8181` or `http://localhost:8181` or host in the cloud
- **Database** → the InfluxDB 3 database name
- **Token** → an InfluxDB 3 API token

---

## 📥 Input Format

Send a message with a SQL query in:

```json
{
  "q": "SELECT * FROM tanque LIMIT 10"
}
```

---

# Node-RED example:

msg.payload = {
  q: "SELECT * FROM tanque WHERE sensor = 'ultrasonico'"
};
return msg;

---

## 📤 Output Format

The result is returned inside:

{
  "payload": {
    "results": [...]
  }
}

---

## 📚 Example Flows
1. Read last 5 minutes of data
msg.payload = {
  q: "SELECT * FROM tanque WHERE time >= now() - interval '5 minutes'"
};
return msg;

2. Filter by tag
msg.payload = {
  q: "SELECT * FROM tanque WHERE sensor IN ('ultrasonico')"
};
return msg;

3. Select specific fields
msg.payload = {
  q: "SELECT time, value FROM tanque ORDER BY time DESC LIMIT 20"
};
return msg;

---

## 🛠 Development

Clone this repo:

git clone https://github.com/DanielVickG87/node-red-contrib-influxdb3-read.git


Install dependencies:

npm install


Link into Node-RED:

npm link
cd ~/.node-red
npm link node-red-contrib-influxdb3-read


Restart Node-RED.

---

## 🐛 Issues

Report bugs at:

https://github.com/DanielVickG87/node-red-contrib-influxdb3-read/issues

---

## 📜 License

MIT License

© 2025 Daniel Vick
