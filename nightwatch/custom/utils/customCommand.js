const Events = require('events');

class CustomCommand extends Events {
	constructor() {
		super()
	}

	command() {
		let selector = arguments[0].__selector;
		arguments[0] = selector;

		// add parsing of arguments before starting custom command

		this.apiCommand.apply(this, arguments);
	}
	
	endCommand() {
		this.emit('complete');
	}
}

module.exports = CustomCommand;