const app = require("./services/express");
const logger = require("./services/logger");
const { port } = require("./services/vars");

app.listen(port, () => {
  logger.info(`Server started at http://localhost:${port}`);
});
