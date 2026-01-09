export function createAccount(initialBalance) {
    let balance = initialBalance;

    function canWithDraw(amount) {
        return amount <= balance;
    }

    function deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount cannot be zero or negative");
        }
        balance += amount;
    }

    function withdraw(amount) {
        if (!canWithDraw(amount)) {
            throw new Error("Amount should be less than balance");
        }
        balance -= amount;
    }

    function getBalance() {
        return balance;
    }

    // ✅ PUBLIC API — exposed methods
    return {
        deposit,
        withdraw,
        getBalance
    };
}
