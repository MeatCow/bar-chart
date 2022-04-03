export default class Options {
  constructor(options) {
    this.width = "250px";
    this.height = "100px";
    this.valuePosition = "center";
    this.barColour = "blue";
    this.labelColour = "white";
    this.barSpacing = "5px";
    this.chartAxes = {
      x: "X Axis",
      y: "Y Axis"
    };
    this.labelNames = [];
    this.tickInterval = 10;
    this.title = {
      name: "My Chart",
      fontSize: 11,
      fontColour: "blue"
    };
    //Set defaults from options parameter
    for (let option in options) {
      this[option] = options[option];
    }
  }
}
