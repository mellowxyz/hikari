module.exports = {
  name: "git",
  code: `
$exec[git $message]

$onlyForIDs[$botOwnerID;
	{
		"content":"Non."
	}
]
`
}