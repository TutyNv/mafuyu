const cfonts = require("cfonts")
const moment = require("moment-timezone")

const banner = cfonts.render(("Mafuyu|Bot"), {
font: "block",
align: "center",
colors: ["white", "blue"]
})

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})




const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var time = '🤫 Buenas Madrugadas'
}
if(time2 > "05:00:00"){
var time = '😎Buenos Dias'
}
if(time2 > "12:00:00"){
var time = '😑Buenas Tardes'
}
if(time2 > "18:00:00"){
var time = '💤Buenas noches'
}
const timee = moment.tz("America/Lima").format("HH:mm:ss")

const banner2 = cfonts.render((`${time} ${timee}`), {
font: "console",
align: "center",
})

module.exports = {
banner,
banner2
}