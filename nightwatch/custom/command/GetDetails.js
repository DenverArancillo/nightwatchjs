const CustomCommand = require('../utils/customCommand');

class GetDetails extends CustomCommand {
	constructor() {
		super()
	}

	apiCommand(a, b, c) {
		// console.log(arguments);
		this.endCommand();
	}

}

module.exports = GetDetails;