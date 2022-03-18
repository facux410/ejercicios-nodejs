const fs = require("fs");
const request = require("request");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("prompt > ");
};
const pwd = (file) => {
  done(process.cwd());
};

const date = () => {
  done(Date());
};

const ls = (file) => {
  fs.readdir(".", (err, files) => {
    if (err) throw err;
    let res = "";
    files.forEach((file) => {
      res = res + file.toString() + "\n";
    });
    done(res);
  });
};
const echo = (arg) => {
  done(arg);
};

const curl = (file) => {
  request(file, (err, response, body) => {
    done(body);
  });
};

module.exports = {
  pwd,
  date,
  ls,
  echo,
  curl,
};


// en module exports es mejor declarar las funciones 
//afuera y solo exportar las nesesarias