const fs = require("node:fs");
const readline = require("node:readline");
const path = require("node:path");
const { stdin: input, stdout: output } = require("node:process");

export function main() {
  // load json exported from tana

  const rl = readline.createInterface({
    input: input,
    output: output,
    prompt: "✨> ",
  });

  var tana_export_dir_path = "";

  rl.prompt();
  rl.on("line", (input: string) => {
    tana_export_dir_path = path.resolve(input.trim());

    fs.readdir(tana_export_dir_path, (err: Error, files: string[]) => {
      if (err) throw err;

      for (let index = 0; index < 1; index++) {
        const json_file = files[index];
        const file_path = `${tana_export_dir_path}/${json_file}`;

        fs.readFile(file_path, (err: Error, data: string) => {
          if (err) throw err;
          const json_data = JSON.parse(data);
          parse_tana_export(json_data);
        });
      }
    });

    rl.close();
  });
}

function parse_tana_export(json: Object) {
  console.log(json);
}

main();
