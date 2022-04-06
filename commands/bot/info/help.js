module.exports =
  {
    name: "help",
    code: `
$author[1;$userName[$clientID];$userAvatar[$clientID]]
$description[1;Default Prefix: \`w.\`]

$addField[1;Perks;\`booster\`, \`investor\`]

$addField[1;Information;\`appeal\`, \`color\`, \`help\`, \`ping\`, \`uptime\`, \`rules\`, \`verifyinfo\`]

$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]
$addButton[1;Vote;5;https://top.gg/servers/840506530809643059/vote]
$addButton[1;.gg/dworld;5;https://discord.gg/dworld]

$onlyPerms[admin;]
`
  }