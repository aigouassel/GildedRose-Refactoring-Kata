module.exports = {
  extends: "@istanbuljs/nyc-config-typescript",
  all: true,
  "check-coverage": true,
  extension: [".ts", ".js"],
  excludeNodeModules: true,
  include: ["lib/gilded-rose/**", "app/*.ts"],
  require: ["ts-node/register"],
  reporter: ["html", "text"],
  "report-dir": "./coverage",
  "temp-dir": "./coverage/temp",
};
