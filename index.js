
function main(){
    console.log("IN MAIN");
    var model = new Model();
    var controller = new Controller(model);
    var view = new View(controller);
}

