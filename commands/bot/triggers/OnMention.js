module.exports = {
  name: "<@951544887810097182>",
  aliases: "<@!951544887810097182>",
  nonPrefixed: true,
  code: `
$title[1;Hello! I'm $userName[$clientID]] 
$description[1;I'm a utility bot made in JavaScript. ]

$addField[1;Join my server;[Click here to join dankers world](https://discord.gg/dworld).]

$footer[1;Requested by $userTag]
$color[1;$getVar[ecolor]]

$addField[1;Need help?;Type \`$getServerVar[prefix]help\` for the list of commands.]

$thumbNail[1;$userAvatar[$clientID]]

$reply[$messageID;no]
$cooldown[10s;]
`
}