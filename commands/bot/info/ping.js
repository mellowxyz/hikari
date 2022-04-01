module.exports = {
  name : "ping",
  code: `
$title[1;Pong!]
$addField[1;Message Send;\`$messagepingms\`]
$addField[1;API Latency;\`$pingms\`]
$footer[1;Request by $usertag]
$addTimestamp[1]
$color[1;$getVar[ecolor]]
$reply[$messageID;no]
$onlyPerms[admin;]
`
}