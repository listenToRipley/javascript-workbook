'use strict';

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transaction = [0];
    this.history = []
    
  }

  balance() {
    //shows the total of the transaction array
      //can never reach less than 0
    return this.transaction.reduce(acc, value => acc + value)
  }

  deposits(amount) {
    //shows are refunds or deposits by account holder to the account
      // will always be a positive number 
    this.transaction.push(amount)
  }

  charge(payee, amount) {
  //shows are charges to the account 
    //prevent a transaction being posted to the card if
      //the balance is zero or the amount is greater than balance 
    if (this.balance() <= 0 || this.balance() < amount) {
      console.log('insufficient funds')
    } else {
    //will always be a negative number
      this.transaction.push(-Math.abs(amount))
    }
  }
}

//this is where a transaction is created
class Transaction extends BankAccount {
  super(date, amount, payee) {
    this.date = date;
    this.amount = amount; 
    this.payee = payee;
  } 
    //we want to store all transactions associated with the card
    history(aTransaction) {
      //shows the complete details of the transaction 
      //this will be a complete history of all transactions 
    this.history.push(aTransaction)
}
}