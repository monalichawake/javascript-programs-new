
console.log(`===========Bank Details==============`);

function Bank (bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

const yesBank = new Bank('Yes Bank', 'Wardha', 'YES0001234', '8974');
const sbiBank = new Bank('SBI', 'Amaravti', 'SBIN0005678', '1345');
const mahBank = new Bank('mah Bank', 'Pune', 'MAH0009101', '1230');
const axisBank = new Bank('Axis Bank', 'MUmbai', 'AXIS0001121', '5863')

console.log(`Bank details:: ${"Bank Name:Yes Bank"} || ${"Location:Wardha"} || ${"IFSC Code:YES000234"} || ${"Branch Code:8974"}`);
console.log(`Bank details :: ${"BankName:SBI Bank"} || ${"Location:Amaravti"} || ${"IFSC Code:SBIN0005678"} || ${"Branch Code:1345"}`);
console.log(`Bank details:: ${"Bank Name:Mah Bank"} || ${"Location:Pune"} || ${"IFSC Code:MAH0009101"} || ${"Branch Code:1230"}`);
console.log(`Bank details:: ${"BankName:Axis Bank"} || ${"Location:Mumbai"} || ${"IFSC Code:AXIS0001121"} || ${"Branch Code:5863"}`);

console.log ("=====================Open Time and Close Time=================================")
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST"

console.log(`The open time At ${sbiBank.bankName} is ${sbiBank.openTime} and the close time At ${sbiBank.closeTime}`);

console.log(`The bank name is ${axisBank.bankName} and the close time is ${axisBank.closeTime}`);

console.log(`Bank Details: ${"Bank Namek:Yes Bank"} || ${"Branch Code:8974"} ||${"OpenTime:9 AM IST"}`);


