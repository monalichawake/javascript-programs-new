
// Define the Bank class
class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

    // Method to show the details of the bank
    showDetails() {
        console.log(`BankName : ${this.bankName} || Location: ${this.location} || AccountNo: ${this.accountNo} || IFSC: ${this.ifsc}|| InterestRate: ${this.interestRate}`);
    }
}

const sbiBank = new Bank("SBI", "Mumbai", "123456789", "SBIN0001234", "3.5%");
const axisBank = new Bank("Axis Bank", "Delhi", "9876544521", "UTIBn0001234", "3.0%");
const hdfcBank = new Bank("HDFC Bank", "Bangalore", "192837465", "HDFC0001234", "3.8%");
const yesBank = new Bank("Yes Bank", "Chennai", "564738291", "YESBf0001234", "3.7%");

// Invoke the showDetails method on each bank object
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();