const { config } = require("./wdio.conf");

const firefoxConfig = {
  ...config,
  services: [["firefox-profile", { firefox: "latest" }]],
  //services: ['selenium-standalone'],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["--window-size=1920,1020"],
      },
    },
  ],
};

exports.config = firefoxConfig;
