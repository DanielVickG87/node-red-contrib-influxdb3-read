const axios = require("axios");

module.exports = function (RED) {

    function InfluxDB3ReadNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        node.host = config.host;
        node.token = config.token;
        node.database = config.database;
        node.query = config.query;

        node.on("input", async function (msg, send, done) {

            const sqlQuery = msg.query || node.query;

            if (!sqlQuery) {
                node.error("No SQL query provided.", msg);
                return;
            }

            try {
                const response = await axios.post(
                    `${node.host}/api/v3/query_sql`,
                    {
                        namespace: "default",
                        db: node.database,
                        q: sqlQuery
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${node.token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );

                msg.payload = response.data;
                send(msg);
                done && done();

            } catch (err) {
                node.error("Query failed: " + err.message, msg);
                done && done(err);
            }
        });
    }

    RED.nodes.registerType("influxdb3-read", InfluxDB3ReadNode);
};


