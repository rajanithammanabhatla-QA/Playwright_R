class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected accountType: string;

    constructor(
        accountHolder: string,
        balance: number,
        accountType: string
    ) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.accountType = accountType;
    }

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {

    constructor(
        accountHolder: string,
        balance: number,
        accountType: string
    ) {
        super(accountHolder, balance, accountType);
    }

    showAccountDetails(): void {
        console.log("Account Holder:", this.accountHolder);

        // Protected property can be accessed
        console.log("Account Type:", this.accountType);

        // Private property cannot be accessed directly
        // console.log(this.balance);

        console.log("Balance:", this.getBalance());
    }
}

const account = new SavingsAccount(
    "Anil",
    50000,
    "Savings"
);

account.showAccountDetails();