// console.log(Object.keys(process))
// console.log(Object.keys(process));
const index = require('./commands/index')
// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  if(cmd ==='date'){
     index[cmd]();

  }
  if(cmd ==='pwd'){
      index.pwd()
  }

  if(cmd === 'ls'){
      index.ls()
  }
  process.stdout.write('\nprompt > ');
});