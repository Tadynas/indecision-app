class OldSyntax {
  constructor() {
    this.name = 'Ted';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Mi name ${this.name}`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//------------

class NewSyntax {
  name = 'Gret';
  getGreeting = () => {
    return `Mi name ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());