module.exports = (bot) => {
	bot.readyCommand({
		channel: "", 
		code: `
		$log[Hiii! $userTag[$clientID] is ready !]
		`
	})
}