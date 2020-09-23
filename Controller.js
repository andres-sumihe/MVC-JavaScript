class Controller {
    constructor(model) {
        console.log("IN CONTROLLER");
        var self = this;
        this.model = model;
        //EVENTLISTENER INTERFACE
        this.handleEvent = function (e) {
            e.stopPropagation();
            switch (e.type) {
                case "click":
                    self.clickHandler(e.target);
                    break;
                default:
                    console.log(e.target);
            }
        };
        //GET MODEL HEADING
        this.getModelHeading = function () {
            return self.model.heading;
        };
        //CHANGE THE MODEL
        this.clickHandler = function (target) {
            self.model.heading = 'World';
            target.innerText = self.getModelHeading();
        };
    }
}