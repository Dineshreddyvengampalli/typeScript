// using interface as function parameter type
var obj = {
    firstname: "dinesh",
    lastname: "Reddy",
    hai: "hai"
};
function fullName(input) {
    console.log(input.firstname + input.lastname);
}
// Declaring object in interface structure
fullName(obj);
