

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://ytshidan50:dcbot50@database.sdm0z.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YTS Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://dsc.gg/magmc",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
  /*   {
      name: "Koi Node V4",
      password: "prplmoe.me",
      host: "lavav4.prplmoe.me",
      port: 1118,
      secure: false
    },
    {
      name: "ChalresNaig Node",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    } */
    {
      name: "Catfein ID",
      password: "catfein",
      host: "lava.catfein.com",
      port: 4000,
      secure: false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
