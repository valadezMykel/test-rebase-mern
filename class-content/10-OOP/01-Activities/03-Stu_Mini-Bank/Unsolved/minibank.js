function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  this.statement = [balance];
  this.setBalance = (value) => this.balance = value;
  this.updateStatement = (num) => this.statement.push(num);
  this.getStatement = () => this.statement;
  this.printStatement = () =>{
    for(var item of this.statement){
      console.log(item);
    }
  };
  this.deposit = (num) => {
    this.updateStatement(num);
    oldBalance = this.getBalance();
    this.setBalance(num+oldBalance);
  };

}

let myBank = new MiniBank(10000000000000);

let statment = myBank.getStatement();

console.log(statment);