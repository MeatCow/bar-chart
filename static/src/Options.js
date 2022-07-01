export default class Options {
  constructor(options) {
    this.width = "250px";
    this.height = "100px";
    this.valuePosition = "center";
    this.barColour = "blue";
    this.barWidth = "40px";
    this.labelColour = "white";
    this.barSpacing = "5px";
    this.labelNames = ["val1", "val2", "val3", "val4", "val5"];
    this.tickInterval = 5;
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
