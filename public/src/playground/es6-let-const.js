var nameVar = 'Ted';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Jenny';
console.log('nameLet', nameLet);

const nameConst = 'Bob';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = 'Ted Greek';

let firstName;
if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);