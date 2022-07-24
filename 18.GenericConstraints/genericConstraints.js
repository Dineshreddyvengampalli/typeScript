var details = {
    lastname: 'vengampalli',
    firstName: 'dinesh'
};
function getName(naame) {
    return naame;
}
console.log(getName(details));
//**********************************************
var employees = {
    id: 20,
    name: 'Ajay',
    salary: 30000
};
function getData(obj, key) {
    return obj[key];
}
console.log(getData(employees, 'name'));
