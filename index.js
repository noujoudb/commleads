

'use strict'

//1
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  /********************/
  const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})


// for Facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})

/****************/
  
 app . post ( ' / webhook / ' , fonction ( req , res ) {
     laisser messaging_events =  req . body . entry [ 0 ]. message 
    pour ( let i =  0 ; i <  messaging_events . longueur ; i ++ ) {
	     let  event  =  req . corps . entrée [ 0 ].messagerie [i]
	     laisser l' expéditeur =  événement . expéditeur . id 
	    if ( événement . message  &&  événement . message . texte ) {
		     let text =  événement . un message . texte 
		    sendTextMessage (expéditeur, " Texte reçu, écho: "  +  texte . substring ( 0 , 200 )) 
	    } 
    } res . sendStatus
    ( 200 ) 
}) const token = "EAACJ9zhci60BAFByZBjeGWqvq3IISlWdovFmRwZCTe2bmbpQNgleWK9KH78LY1XidY8J7PdQzrVr3soLrYZBlCxeBYi5Kw5KLx0pBQabZA6E0ZCtOejtrTii0sK06qVtcEXz91AKAaGGDLSMz8RpCWBliu0rhx7C8xC5HOgkROQZDZD"

const  token  =  processus . env . FB_PAGE_ACCESS_TOKEN

function  sendTextMessage ( expéditeur , texte ) {
     let messageData = {text : text}
     demande ({ 
	    url :  ' https://graph.facebook.com/v2.6/me/messages ' , 
	    qs : {access_token : jeton}, 
	    méthode :  ' POST ' , 
		json : { 
		    destinataire : {id : expéditeur}, 
			message : messageData, 
		} 
	},function ( erreur , réponse , corps ) {
		 if (erreur) {
		     console . log ( ' envoi des messages d'erreur: ' , erreur) 
		} else  si ( réponse . corps . erreur ) {
		     console . log ( ' Erreur: ' , réponse . corps . erreur ) 
	    } 
    }) 
}
function sendGenericMessage(sender) {
    let messageData = {
	    "attachment": {
		    "type": "template",
		    "payload": {
				"template_type": "generic",
			    "elements": [{
					"title": "First card",
				    "subtitle": "Element #1 of an hscroll",
				    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
				    "buttons": [{
					    "type": "web_url",
					    "url": "https://www.messenger.com",
					    "title": "web url"
				    }, {
					    "type": "postback",
					    "title": "Postback",
					    "payload": "Payload for first element in a generic bubble",
				    }],
			    }, {
				    "title": "Second card",
				    "subtitle": "Element #2 of an hscroll",
				    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
				    "buttons": [{
					    "type": "postback",
					    "title": "Postback",
					    "payload": "Payload for second element in a generic bubble",
				    }],
			    }]
		    }
	    }
    }
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
	    json: {
		    recipient: {id:sender},
		    message: messageData,
	    }
    }, function(error, response, body) {
	    if (error) {
		    console.log('Error sending messages: ', error)
	    } else if (response.body.error) {
		    console.log('Error: ', response.body.error)
	    }
    })
}
/************************************/ 
  
  //2
app.get('/times', (req, res) => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  res.send(result)
})

  /****************************************************************************************************************************************/

console.log("Test"); 
/*  
  const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 8081))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hello world, I am a chat bot')
})
*/

/*
// for Facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// Spin up the server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})

*/
  /****************************************************************************************************************************************/
 
 /*
 function sendGenericMessage(sender) {
    let messageData = {
	    "attachment": {
		    "type": "template",
		    "payload": {
				"template_type": "generic",
			    "elements": [{
					"title": "First card",
				    "subtitle": "Element #1 of an hscroll",
				    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
				    "buttons": [{
					    "type": "web_url",
					    "url": "https://www.messenger.com",
					    "title": "web url"
				    }, {
					    "type": "postback",
					    "title": "Postback",
					    "payload": "Payload for first element in a generic bubble",
				    }],
			    }, {
				    "title": "Second card",
				    "subtitle": "Element #2 of an hscroll",
				    "image_url": "http://messengerdemo.parseapp.com/img/gearvr.png",
				    "buttons": [{
					    "type": "postback",
					    "title": "Postback",
					    "payload": "Payload for second element in a generic bubble",
				    }],
			    }]
		    }
	    }
    }
    request({
	    url: 'https://graph.facebook.com/v2.6/me/messages',
	    qs: {access_token:token},
	    method: 'POST',
	    json: {
		    recipient: {id:sender},
		    message: messageData,
	    }
    }, function(error, response, body) {
	    if (error) {
		    console.log('Error sending messages: ', error)
	    } else if (response.body.error) {
		    console.log('Error: ', response.body.error)
	    }
    })
}
*/
