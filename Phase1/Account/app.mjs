import {createWallet} from "./wallet.mjs"
let newWallet = createWallet(2000)
console.log(newWallet.getBalance())
newWallet.deposit(4000)
console.log(newWallet.getBalance())
newWallet.withDraw(2000)
console.log(newWallet.getBalance())
