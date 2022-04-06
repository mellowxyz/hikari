module.exports = [{

name: "nowplaying",
aliases: "np",
code: `

$title[1;Now Playing - ]
$description[1;$songInfo[title]]
$addTimestamp[1]
$thumbnail[1;$songInfo[thumbnail]]
$color[1;$getVar[ecolor]]

$onlyIf[$voiceID[$authorID]!=;You are not connected to any voice channel.]  

`

}] // 