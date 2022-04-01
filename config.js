module.exports = {
	Bot: {
		token: process.env.TOKEN,
		prefix: ["hikari", '$getServerVar[prefix]'],
		intents: "all" , 
    suppressAllErrors: true,
    database: {
        type:'default',
        db:require('dbdjs.db'),
        path:"./database/",
        tables:["main"],
        promisify:false
    }
	  }
}