class CustomError extends Error {
	constructor(params) {
		// Pass remaining arguments (including vendor specific ones) to parent constructor
		super(params)

		this.name = 'CustomError'
		// Custom debugging information
	}
}

export default CustomError