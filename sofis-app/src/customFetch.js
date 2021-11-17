const {data} = require('./Components/ItemList')

let is_ok = true;

const customFetch = () => {
    return new Promise((resolve, reject) => {
    if (is_ok) {
    setTimeout(() => {
        resolve(tarea);
    }, 2000);
    } else {
        reject('Error');
}
});
};

export default customFetch;