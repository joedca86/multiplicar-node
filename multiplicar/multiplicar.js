const fs = require('fs');
const colores = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`==== tabla de ${ base } ===========`.green);
    console.log('============================'.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
            //console.log(`El archivo ${colores.green(`tabla-${ base }.txt`)} ha sido creado`);
            console.log(`El archivo`, colores.green(`tabla-${ base }.txt`), `ha sido creado`);

        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}