module.exports = {
    name: "donate-event",
    aliases: ["edono"],
    code: `
  $deleteCommand
  
  <@&847749007988359208>
  $title[1;Event Donation]
  $description[1;Thank you for your donation $username!]
  
  $addField[1;<a:dwr_star:959068679205691512> Event Type;> $splitText[3]]
  
  $addField[1;<a:dwr_star:959068679205691512> Prize:;> $splitText[2]]

  $addField[1;<a:dwr_star:959068679205691512> Dono Type:;> $splitText[1]]
  
  $addField[1;<a:dwr_star:959068679205691512> Event sponsor:;> <@$authorID>]
  
  $footer[1;Requested by $usertag]
  $color[1;$getVar[ecolor]]
  $addTimestamp[1]
  

$onlyIf[$splitText[3]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **event type** for the donation.]
  
$onlyIf[$splitText[2]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **prize** for the donation.]

$onlyIf[$splitText[1]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **type** for the donation.
Usage: \`$getServerVar[prefix]donate-event <bro/dank/karuta>, <prize>, <event type>\`.]
  
  
  
  $textSplit[$message;,]
  
  $cooldown[30s;{newEmbed:
  {title:$username, you can use this again in %time%.}
  {color:$getVar[ecolor]}}
  {delete:5s}]
  $onlyForChannels[845710704945922098;843534604945850459;**$usertag** you can't use this here.]
  
  $onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}
  {url:https://discord.gg/dworld}}]
  `
  }


  