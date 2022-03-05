const fs =require('fs')

const ls = () => {
    fs.readdir('.' , function (err ,files) {
        if(err) throw err;

        files.forEach(function(file){
            process.stdout.write(file.toString() + "\n")
        })
        process.stdout.write("prompt > ")
    })
}

module.exports = {
pwd : function(){process.stdout.write(process.cwd()) },
date: function(){process.stdout.write(Date())},
ls
}


// en module exports es mejor declarar las funciones 
//afuera y solo exportar las nesesarias