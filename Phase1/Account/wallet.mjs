import {createAccount} from "./core.mjs"
export function createWallet(initialBalance){
let newAccount = createAccount(initialBalance)
return{
deposit(amount){
    newAccount.deposit(amount)
},
withDraw(amount){
newAccount.withdraw(amount)
},
getBalance(){
   return newAccount.getBalance()
}
}

}