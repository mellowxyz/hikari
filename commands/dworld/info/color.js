module.exports = {
name: "color",
code:

`
$title[1;Color Information]
$description[1;\`\`\`
Name: Beauty Bush
HEX : #f3c8ce
RGB : (243, 200, 206)
CMYK: (0.0, 17.7, 15.23, 4.71)
HSV : (351.63, 17.7, 95.29)
HLS : (351.63, 86.86, 64.18)
YIQ : (0.84, 0.09, 0.04)
Int : 15976654
\`\`\`]
$color[1;$getVar[ecolor]]
$footer[1;Req by $usertag]
$addTimestamp[1]
$onlyPerms[admin;]
`
  
}
