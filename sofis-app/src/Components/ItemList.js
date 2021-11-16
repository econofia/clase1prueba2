const productos =  [
    { id: 1, name: 'Remeras', precio: 4500},
    { id: 2, name: 'Accesorios', precio: 5500},
    { id: 3, name: 'Maquillaje', precio: 4000},
    { id: 4, name: 'Ropa Interior', precio: 3500},
];

let is_ok = true;

let inventario = (timeout, tarea) => {
    return new Promise((resolve, reject) => {
    if (is_ok) {
    setTimeout(() => {
        resolve(tarea);
    }, timeout);
    } else {
        reject('Error');
}
});
};

inventario(0, console.log('Procesando inventario...'))
.then(() => inventario(2000, console.log(productos [0])))
.then(() => inventario(4000, console.log(productos [1])))
.then(() => inventario(6000, console.log(productos [2])))
.then(() => inventario(8000, console.log(productos [3])))

.catch((err) => console.log(err))

.finally(() => console.log('Proceso finalizado'));