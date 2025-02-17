function NewEmployee(firstName, lastName, exprience, languages) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.exprience = exprience;
  this.languages = languages;
};

const employee01 = new NewEmployee('ilya', 'revod', 4, ['english', 'french']);
const employee02 = new NewEmployee('john', 'wike', 3, ['english', 'spanish']);
const employee03 = new NewEmployee('donald', 'trump', 7, ['english', 'french', 'spanish']);

console.log(employee01);
console.log(employee02);
console.log(employee03);