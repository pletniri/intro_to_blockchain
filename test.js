const Blockchain = require("./blockchain");

let fish = new Blockchain();
console.log(fish);

fish.createNewTransaction(
    "100",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
  "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720"
);
console.log(fish);
fish.createNewBlock();
console.log(fish);
console.log("\n");
console.log("Second Block transactions", fish.chain[1].transactions);


 