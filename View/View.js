
class View {
    constructor(controller) {
        console.log("IN VIEW");
        this.controller = controller;
        this.heading = document.getElementById('heading');
        this.heading.innerText = controller.getModelHeading();
        this.heading.addEventListener('click', controller);
    }
} 