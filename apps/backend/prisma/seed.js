const fakeUsers = require("./seeds/users");
const fakeRoles = require("./seeds/roles");

fakeRoles().then(()=>{
  console.log("Roles creados");
});
fakeUsers().then(() => {
  console.log('Se han creado los usuarios.');
})