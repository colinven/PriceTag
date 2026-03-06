class PropertyResponse {
    constructor(successful, data, message) {
        this.successful = successful;
        this.data = data;
        this.message = message;
    }
}

module.exports = PropertyResponse;