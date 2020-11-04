function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance]
  this.getBalance = () => this.balance;
  this.setBalance = function (value) {
    this.balance = value;
  };
  this.printBalance = function () {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.updateStatement = function (value) {
    this.statement.push(value);
  };
  this.getStatement = function (){
    return this.statement;
  };
  this.printStatement = () => {
    this.statement.forEach(item => console.log(item + "\r\n"))
  };
  this.deposit = (value) => {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  };
  this.withdraw = (value) => {
    const withdrawal = value * -1;
    this.updateStatement(withdrawal);
    this.setBalance(this.balance + withdrawal);
  }

}

const myBankAccount = new MiniBank(1000);
//console.log(myBankAccount);

myBankAccount.printBalance();
myBankAccount.deposit(2000);
myBankAccount.printBalance();
myBankAccount.withdraw(300);
myBankAccount.printBalance();

myBankAccount.printStatement();
