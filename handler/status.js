module.exports = (bot) => {

	bot.status({
		text: "$allmembersCount members",
		type: "STREAMING", 
		status: "dnd", 
		time: 6
	}) 
}