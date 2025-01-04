// controllers/hello_controller.js
export default class extends Stimulus.Controller {
    static targets = ["output"];
  
    greet() {
      this.outputTarget.textContent = "Hello, Stimulus and TailwindCSS!";
    }
  }