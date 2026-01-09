function createWallet(initialBalance){
    let balance = initialBalance
    function canWithDraw(amount){
        return amount<=balance
    }
return {
     depositeNew(amount){
balance=balance+=amount
    },
    withDraw(amount){
        if (!canWithDraw(amount)){
throw new Error("Insufficientt balance ")
        }
        balance -=amount
    

    },
    getBalance(){
        return balance
    }
}

}

const createBankAccount = createWallet(2000)

console.log(createBankAccount.getBalance()
)
createBankAccount.depositeNew(2000)

console.log(createBankAccount.getBalance())
createBankAccount.withDraw(3500)
console.log(createBankAccount.getBalance())
