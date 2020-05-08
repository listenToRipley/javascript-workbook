'use strict';

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
      //this is supposed to be the transaction history 
    this.transactions = [];
  }

  //~~isn't returning the correct values 
  //locate the amounts within the transactions array
    //create an array for each amount 
    //add them all together to show your current balance 
  balance() {
    
    let tally = this.transactions.map((event) => {
      // console.log('event',event)
      return event.amount
    })
      // ~~ is logging 12 transactions when there should be three? 
    // console.log('tally',tally)

    let balance = tally.reduce((curr, sum) => {
      // console.log('cur :', curr, 'sum :', sum)
     return curr + sum}, 0);

     return balance

   }

  deposits(amount) {
    // console.log('can we see inside the deposit?')
    //should always be the account number doing the deposit 
    let payee = this.owner
      //if we are just pushing in the account, would there be a way to default the payee information to just say deposit? 
    this.transactions.push(new Transaction(amount, payee))
  }

  charge(aTransaction) {
    //prevent a transaction being posted to the card if
      //the balance is zero or the amount is greater than balance 
    if (this.balance() <= 0 || this.balance() < this.amount || this.balance() === 'this is a new account, a deposit has not yet been made') {
      return 'insufficient funds'
    } else {
    return this.transactions.push(aTransaction)
  }
}
}

//need to add language so that only values can be put in the amount field? 

//this is where a transaction is created
class Transaction {
  constructor(amount, payee) {
    this.date = new Date()
    this.amount = amount; 
    this.payee = payee;
  } 
}

let myAccount = new BankAccount(123244, 'Natalie Kendrick')
// console.log(myAccount)
let yourAccount = new BankAccount(234236, 'Willie Nelson')
// console.log(yourAccount)

let silverSea = new Transaction(-313, 'Silver Sea')
let pTerrys = new Transaction(-24.53, 'P.Terry\'s')
// console.log(silverSea)
myAccount.deposits(1231)
// myAccount.balance()
// console.log(myAccount)
myAccount.charge(silverSea)
myAccount.charge(pTerrys)
// console.log(myAccount)
console.log(myAccount.balance())
// console.log(yourAccount)

