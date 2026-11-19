class BankAccount {
  accountHolderName;
  accountNumber;
  balance;

  constructor(accountHolderName, accountNumber, intialbalance) {
    this.accountHolderName = accountHolderName;
    this.accountNumber = accountNumber;
    this.balance = intialbalance;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(
      `Deposit of ₹${amount.toFixed(1)} successful. Updated balace. ₹${this.balance.toFixed(1)}`,
    );
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance = this.balance - amount;
      console.log(
        `Withdrawal of ₹${amount.toFixed(1)}. successful. Updated balance: ₹${this.balance.toFixed(1)}`,
      );
    } else {
      console.log(
        `Insufficient balance. Current balance: ₹${this.balance.toFixed(1)}`,
      );
    }
  }

  checkBalance() {
    console.log(`Current balance:₹${this.balance.toFixed(1)}`);
  }
}

let obj = new BankAccount("Priya Sharma", 987654321, 5000);
obj.checkBalance();
console.log(obj.accountHolderName);
console.log(obj.accountNumber);
obj.deposit(10000);
obj.checkBalance();
obj.withdraw(3000);
obj.checkBalance();
