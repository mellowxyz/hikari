module.exports = {
    name: "donate-heist",
    aliases: ["hdono"],
    code: `
      $deleteCommand
      
<@&960132569586880603>
      $title[1;Heist Donation]
      $description[1;Thank you for your donation $username!]
    
      $addField[1;<a:dwr_star:959068679205691512> Requirements:;> $splitText[3]]
      
      $addField[1;<a:dwr_star:959068679205691512> Amount:;> $splitText[2]]

      $addField[1;<a:dwr_star:959068679205691512> Type:;> $splitText[1]]
      
      $addField[1;<a:dwr_star:959068679205691512> Sponsor:;> <@$authorID>]
      
      $footer[1;Requested by $usertag]
      $color[1;$getVar[ecolor]]
      $addTimestamp[1]
      
      
      
$onlyIf[$splitText[3]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **requirement** for the donation.
If you don't want any reqs type \`None\` in its place.]
  
$onlyIf[$splitText[2]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **amount** for the donation.]

$onlyIf[$splitText[1]!=;<a:dwr_star:959068679205691512> $username, you didn't provide a **type** for the donation.
Types: \`bro/dank\`
Usage: \`$getServerVar[prefix]donate-heist <bro/dank>, <amount>, <req/none>\`]

      $textSplit[$message;,]
      
      $cooldown[30s;{newEmbed:
      {title:$username, you can use this again in %time%.}
      {color:$getVar[ecolor]}}
      {delete:5s}]
      $onlyForChannels[948456646647115827;843534604945850459;841710434813739068;**$usertag** you can't use this here.]
      
      $onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}
      {url:https://discord.gg/dworld}}]
      `
      }
    
    
      /*
    
      module.exports = {
      name: "donate-event",
      aliases: ["edono"],
      code: `
    $deleteCommand
    
    <@&847749007988359208>
    $title[1;Event Donation]
    $description[1;Thank you for your donation $username!]
    
    $addField[1;<a:dwr_star:959068679205691512> Event message:;> $splitText[4]]
    
    $addField[1;<a:dwr_star:959068679205691512> Event type:;> $splitText[3]]
    
    $addField[1;<a:dwr_star:959068679205691512> Event prize:;> $splitText[2]]
    
    $addField[1;<a:dwr_star:959068679205691512> Dono type:;> $splitText[1]]
    
    $addField[1;<a:dwr_star:959068679205691512> Event sponsor:;> <@$authorID>]
    
    $footer[1;Requested by $usertag]
    $color[1;$getVar[ecolor]]
    $addTimestamp[1]
    
    $onlyIf[$splitText[4]!=;{newEmbed:
    {title:Invalid Usage}
    {description:> $username, you didn't provide a **message** for the donation.}
    {field: Note#COLON#:> Seperate every arguments with \`,\`}
    {field: Usage#COLON#:> \`$getVar[prefix]donate-event , <prize>, <event type>, <message>\`}
    {field: Examples#COLON#:
    >>> - \`$getVar[prefix]donate-event Pepe Trophy, Rumble, hello members!\`
    - \`$getVar[prefix]donate-event Karuta, 10 Tickets, RLGL, donors are cool!\`
    - \`$getVar[prefix]donate-event Bro, 5 bro coin, GTN, my first dono!\`}
    {footer:Requested by $userTag}
    {timestamp}
    {color:$getVar[ecolor]}
    }]
    
    $onlyIf[$splitText[3]!=;{newEmbed:
    {title:<a:dwr_star:959068679205691512> Invalid Usage}
    {description:> $username, you didn't provide a **event type** for the donation.}
    {field: Note#COLON#:> Seperate every arguments with \`,\`}
    {field: Usage#COLON#:> \`$getVar[prefix]donate-event , <prize>, <event type>, <message>\`}
    {field: Examples#COLON#:
    >>> - \`$getVar[prefix]donate-event Pepe Trophy, Rumble, hello members!\`
    - \`$getVar[prefix]donate-event Karuta, 10 Tickets, RLGL, donors are cool!\`
    - \`$getVar[prefix]donate-event Bro, 5 bro coin, GTN, my first dono!\`}
    {footer:Requested by $userTag}
    {timestamp}
    {color:$getVar[ecolor]}
    }]
    
    
    $onlyIf[$splitText[2]!=;{newEmbed:
    {title:<a:dwr_star:959068679205691512> Invalid Usage}
    {description:> $username, you didn't provide a **prize** for the donation.}
    {field: Note#COLON#:> Seperate every arguments with \`,\`}
    {field: Usage#COLON#:> \`$getVar[prefix]donate-event , <prize>, <event type>, <message>\`}
    {field: Examples#COLON#:
    >>> - \`$getVar[prefix]donate-event Pepe Trophy, Rumble, hello members!\`
    - \`$getVar[prefix]donate-event Karuta, 10 Tickets, RLGL, donors are cool!\`
    - \`$getVar[prefix]donate-event Bro, 5 bro coin, GTN, my first dono!\`}
    {footer:Requested by $userTag}
    {timestamp}
    {color:$getVar[ecolor]}
    }]
    
    
    
    $onlyIf[$splitText[1]!=;{newEmbed:
    {title:<a:dwr_star:959068679205691512> Invalid Usage}
    {description:> $username, you didn't provide a **dono type** for the donation.}
    {field: Note#COLON#:> Seperate every arguments with \`,\`}
    {field: Usage#COLON#:> \`$getVar[prefix]donate-event , <prize>, <event type>, <message>\`}
    {field: Examples#COLON#:
    >>> - \`$getVar[prefix]donate-event Pepe Trophy, Rumble, hello members!\`
    - \`$getVar[prefix]donate-event Karuta, 10 Tickets, RLGL, donors are cool!\`
    - \`$getVar[prefix]donate-event Bro, 5 bro coin, GTN, my first dono!\`}
    {footer:Requested by $userTag}
    {timestamp}
    {color:$getVar[ecolor]}
    }]
    
    $textSplit[$message;,]
    
    $cooldown[30s;{newEmbed:
    {title:$username, you can use this again in %time%.}
    {color:$getVar[ecolor]}}
    {delete:5s}]
    $onlyForChannels[845710704945922098;843534604945850459;841710434813739068;**$usertag** you can't use this here.]
    
    $onlyForServers[840506530809643059;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}
    {url:https://discord.gg/dworld}}]
    `
    }
    
    */