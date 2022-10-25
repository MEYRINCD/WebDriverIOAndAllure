const { config } = require("./wdio.conf");

const chromeConfig = {
  ...config,
  services: [["docker", { chrome: "latest" }]],
  //services: ['selenium-standalone'],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--window-size=1920,1020"],
      },
    },
  ],
  path: "/",
};

exports.config = chromeConfig;
