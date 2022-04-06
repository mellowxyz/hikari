module.exports = [{
name: "play",
aliases: "p",
  code: `

$playTrack[youtube;$message]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID]; You are connected somewhere else.]

$onlyIf[$voiceID[$clientID]!=;Please summon me into your vc by using \`$getServerVar[prefix]join\` first.]

$onlyIf[$voiceID[$authorID]!=;Join a voice channel first.]

`

}]

/*
  $title[1;Now Playing]

$description[1;[$songInfo]($songInfo[url])]

$color[1;$getVar[ecolor]]
$thumbnail[1;$songInfo[thumbnail]]
$footer[1;Requested by $userTag]
$addTimestamp[1]
*/