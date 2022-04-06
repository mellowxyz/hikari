module.exports = [{

name: "join",
aliases: "j",
code: `Joined <#$voiceID[$clientID]> .

$joinVC[$voiceID[$authorID]]

$onlyIf[$voiceID[$clientID]==;I'm connected somewhere else.]

$onlyIf[$voiceID[$authorID]!=;You are not connected to any voice channel.]  

`

}] // 