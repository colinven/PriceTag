class PropertyResponse {
    constructor(successful = null, data = null, message = null, price = null) {
        this.successful = successful;
        this.data = data;
        this.message = message;
        this.price = price;
    }
    
    success(boolean) {
        this.successful = boolean;
    }

    data(jsonData) {
        this.data = jsonData;
    }

    message(messageString) {
        this.message = msg;
    }

    price(priceArray) {
        this.price = priceArray;
    }
}

class PropertyResponseBuilder {
    constructor() {
        this.propertyResponse = new PropertyResponse();
    }

    success(boolean) {
        this.propertyResponse.successful = boolean;
        return this;
    }

    data(jsonData) {
        this.propertyResponse.data = jsonData;
        return this;
    }

    message(messageString) {
        this.propertyResponse.message = messageString;
        return this;
    }

    price(priceArray) {
        this.propertyResponse.price = priceArray;
        return this;
    }

    build() {
        return this.propertyResponse;
    }

}
module.exports = { PropertyResponse, PropertyResponseBuilder };