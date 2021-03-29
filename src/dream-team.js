const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
let arr = [];
if (Array.isArray(members) === true && members.length > 0){
for (let i = 0; i < members.length; i++){
  if (typeof members[i] === 'string') 
 { let member = members[i].trim().toUpperCase();
  arr.push(member[0])}
}
arr.sort();
return arr.join('')}
else {return false}
};
