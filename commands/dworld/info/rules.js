module.exports = [{
    name: "rules",
    code: `
    
    $deleteCommand
    $image[1;https://media.discordapp.net/attachments/958433734795874394/959069843150229574/Open_3.png]
    
    $description[2;> Breaking any of these rules can result in punishment ranging from mute all the way to permanent ban from the server.
    
<a:dwr_star:959068679205691512> **No Spamming**
> this includes mass mention, emoji spam, sticker spam, images spam, dm spam, line splitting. anyone found spamming will be muted/warned depending on the situation.
    
<a:dwr_star:959068679205691512> **No NSFW**
> no gore, no pornographic content. this includes still images depicting explicit sexual actions, whether real or illustrated, detailed verbal descriptions of explicit sexual acts, inappropriate username and profile. literally keep the chats absolutely nsfw free.
    
<a:dwr_star:959068679205691512> **No Toxicity/Swearing**
> be nice and friendly to everyone. hate/toxicity towards other users will never be tolerated. this includes discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation, religious affiliation, or disabilities) or making verbal abuse, insults, threats towards others, or displaying offensive, derogatory or explicit content. offenders will get a straight ban.
    
<a:dwr_star:959068679205691512> **No Advertising/Promotion**
> no promotion of other servers, events, your social media, bots, unless accepted partnerships or authorized by the owner or admins.
    
<a:dwr_star:959068679205691512> **No Begging**
> no begging (including coins, items, nitro, etc) or repeatedly asking for help in the chat or server members dm's. 
    
<a:dwr_star:959068679205691512> **Respect The Staffs**
> always respect the server staffs. never argue with the admins as they make the final decisions. don't ping the admins for help. we have support staffs for that, admins or moderators can be pinged if you find someone breaking the rules or in any serious situation that requires a admin/mod's help. the staff do not need to explain their actions/decisions to the community. 
    
<a:dwr_star:959068679205691512> **Unnecessary Pings** 
> please avoid pinging people without any reason. do not just spam ping staffs to get support. do not ping people to check their balance or stats. do not ping the owner for no reason. Please avoid pinging our special guests.
    
<a:dwr_star:959068679205691512> **Impersonation**
> impersonating any staff, or normal member will result in a warn or mute/ban, depending of the context of the situation.
    
<a:dwr_star:959068679205691512> **Voice Channels**
> no earrape or jumpscare in voice channels and if there are people in the voice channel you want to join ask their permission before joining as if some people want privacy. offenders will be punished depending on the situation.
    
<a:dwr_star:959068679205691512> **Only English**
> this server is strictly a english server even though some people understand your language but there are some that don't and we want everyone to understand what you are saying.
    
<a:dwr_star:959068679205691512> **No Freeloading**
> no freeloaders allowed, any members found joining-and-leaving continuously or for the sake of gaining from this server will be automatically banned. however you can appeal for this if u haven't joined any heists or giveaways.
    
<a:dwr_star:959068679205691512> **Terms Of Services & Guidelines**
> we strictly follow discord's tos and guidelines, If you break the tos or guidelines of discord, you would be breaking our rules too.
    
<a:dwr_star:959068679205691512> **Use Common Sense**
> if you think that you're doing something wrong then don't do it! our rules don't have all the universe rules, so use the common sense. "that's not in the rules" is not a valid excuse.]
    
    $image[2;https://media.discordapp.net/attachments/951703123066515478/958753400068112474/Untitled122_20201125162147.png]
    
    $color[1;$getVar[ecolor]]
    $color[2;$getVar[ecolor]]

    $addSelectMenu[1;rulesmenu;・select a option;1;1;no;No Spamming::rule1:<a:dwr_star:959068679205691512>;No NSFW::rule2:<a:dwr_star:959068679205691512>;No Toxicity/Swearing::rule3:<a:dwr_star:959068679205691512>;No Advertising/Promotion::rule4:<a:dwr_star:959068679205691512>;No Begging::rule5:<a:dwr_star:959068679205691512>;Respect The Staffs::rule6:<a:dwr_star:959068679205691512>;Unnecessary Pings::rule7:<a:dwr_star:959068679205691512>;Impersonation::rule8:<a:dwr_star:959068679205691512>;Voice Channels::rule9:<a:dwr_star:959068679205691512>;Only English::rule10:<a:dwr_star:959068679205691512>;No Freeloading::rule11:<a:dwr_star:959068679205691512>;Terms Of Services & Guidelines::rule12:<a:dwr_star:959068679205691512>;Use Common Sense::rule13:<a:dwr_star:959068679205691512>]

$addButton[2;discord tos;5;https://discord.com/terms;no;<a:dwr_star:959068679205691512>]
$addButton[2;appeals;5;https://discord.gg/NhhJujC7ec;no;<a:dwr_star:959068679205691512>]
    
    
    $onlyPerms[admin;]
    
    `
},
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No Spamming}
{description:This includes mass mention, emoji spam, sticker spam, images spam, dm spam, line splitting. anyone found spamming will be muted/warned depending on the situation.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule1;]
`

                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No NSFW}
{description:No gore, no pornographic content. this includes still images depicting explicit sexual actions, whether real or illustrated, detailed verbal descriptions of explicit sexual acts, inappropriate username and profile. literally keep the chats absolutely nsfw free}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule2;]
`
                                        },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No Toxicity/Swearing}
{description:Be nice and friendly to everyone. hate/toxicity towards other users will never be tolerated. this includes discriminatory jokes and hate speech (attacks on an individual or group based on their race, ethnicity, national origin, sex, gender, sexual orientation, religious affiliation, or disabilities) or making verbal abuse, insults, threats towards others, or displaying offensive, derogatory or explicit content. offenders will get a straight ban.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule3;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No Advertising/Promotion}
{description:No promotion of other servers, events, your social media, bots, unless accepted partnerships or authorized by the owner or admins.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule4;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No Begging}
{description:no begging (including coins, items, nitro, etc) or repeatedly asking for help in the chat or server members dm's.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule5;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Respect The Staffs}
{description:Always respect the server staffs. never argue with the admins as they make the final decisions. don't ping the admins for help. we have support staffs for that, admins or moderators can be pinged if you find someone breaking the rules or in any serious situation that requires a admin/mod's help. the staff do not need to explain their actions/decisions to the community.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule6;]
`
      },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Unnecessary Pings}
{description:Please avoid pinging people without any reason. do not just spam ping staffs to get support. do not ping people to check their balance or stats. do not ping the owner for no reason. Please avoid pinging our special guests.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule7;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Impersonation}
{description:Impersonating any staff, or normal member will result in a warn or mute/ban, depending of the context of the situation..}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule8;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Voice Channels}
{description:No earrape or jumpscare in voice channels and if there are people in the voice channel you want to join ask their permission before joining as if some people want privacy. offenders will be punished depending on the situation.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule9;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Only English}
{description:This server is strictly a english server even though some people understand your language but there are some that don't and we want everyone to understand what you are saying.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule10;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:No Freeloading}
{description:No freeloaders allowed, any members found joining-and-leaving continuously or for the sake of gaining from this server will be automatically banned. however you can appeal for this if u haven't joined any heists or giveaways.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule11;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Terms Of Services & Guidelines}
{description:We strictly follow discord's tos and guidelines, If you break the tos or guidelines of discord, you would be breaking our rules too}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule12;]
`
                    },
                  {
name: "rulesmenu",
type: "interaction",
prototype: "selectMenu",
code: `
$interactionReply[;{newEmbed:
{title:Use Common Sense}
{description:If you think that you're doing something wrong then don't do it! our rules don't have all the universe rules, so use the common sense. "that's not in the rules" is not a valid excuse.}
{color:$getVar[ecolor]}
{timestamp:ms}
{thumbnail:$serverIcon}
{footer:$userTag}};;;;yes]

$onlyIf[$interactionData[values[0]]==rule13;]
`
    }]