profil = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hey I'm ${profil.firstName}, I'm studying on ${profil.campus} remote.`,
    e: "^",
    T: "-",
  })
);

// importation pose soucis
