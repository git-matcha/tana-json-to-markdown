const readline = require("node:readline");

function main() {
  // load json exported from tana

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "✨> ",
  });

  rl.on("line", (line) => {
    console.log(`received: ${line}`);
  });
  tana_export = JSON.parse();
}

main();
