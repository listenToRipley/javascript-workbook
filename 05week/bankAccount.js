'use strict';

class BankAccount {
  constructor(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.transaction = [0];
  }

  balance() {
    //shows the total of the transaction array
      //can never reach less than 0
    return this.transaction[0]
  }

  deposits(amt) {
    //shows are refunds or deposits by account holder to the account
      // will always be a positive number 
     this.transaction = amt + this.transaction[0]
  }

  charge(payee, amt) {
    //shows are charges to the account 
      //will always be a negative number 
        //cannot subtract from a balance of zero
      this.transaction = this.transaction[0] + amt 

    if (this.transaction[0] <= 0 || this.transaction < amt) {
      console.log('insufficient funds')
    }
  }
}

class Transaction {
  constructor(date, amount, payee, vendorName) {
    this.date = date;
    this.amount = amount; 
    this.payee = payee;
    this.vendorName = vendorName
  } 
    history() {
      //shows the complete details of the transaction 
    }
}