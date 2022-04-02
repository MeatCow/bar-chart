var defaultOptions = {
  width: "250px",
  height: "100px",
  valuePosition: "center",
  barColour: "blue",
  labelColour: "white",
  barSpacing: "5px",
  chartAxes: {
    x: "X Axis",
    y: "Y Axis"
  },
  labelNames: [],
  tickInterval: 10,
  title: {
    name: "My Chart",
    fontSize: 11,
    fontColour: "blue"
  }
};

/**
 * Creates a unique ID based on Math.random. To be used for generating CSS targeting a single element.
 * @returns <string> A unique ID "id_randomNumber"
 */
const uid = () => {
  return "id_" + Math.random().toString(16).slice(2);
};

/**
 * Adds JQuery support to the current document
 */
function importJQuery() {
  const jQuery = document.createElement("script");

  jQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
  jQuery.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
  jQuery.crossOrigin = "anonymous";
  jQuery.type = "text/javascript";

  document.getElementsByTagName("HEAD")[0].prepend(jQuery);
}

/**
 * Creates the HTML for a chart based on the data passed in, as well as the options.
 * @param {number[]} data
 * @param {Object} options
 * @returns {Element} div element of the exterior bar chart
 */
function createChart(data, options) {
  const outterDiv = document.createElement("div");
  outterDiv.id = uid();

  for (const value of data) {
    const newBar = document.createElement("div");
    newBar.className = "bar";
    newBar.setAttribute("a", value);
    newBar.textContent = value;

    outterDiv.insertAdjacentElement("beforeend", newBar);
  }

  return outterDiv;
}

/**
 *
 * @param {Element} chartDiv
 * @param {Object} options
 * @returns
 */
function generateCSS(chartDiv, options) {
  let chartCSS = document.createElement("style");

  chartCSS.innerHTML += `
  #${chartDiv.id} {
    width: ${options.width};
    height: ${options.height};
    margin: auto;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-color: #2196F3;
    position: relative;
  }
  #${chartDiv.id} > .bar {
    width: calc(${options.width}/5);
    background: ${options.barColour};
    position: absolute;
    bottom:0;
    color: white;
    text-align: ${options.valuePosition};
  }
  `;

  for (const [i, bar] of chartDiv.querySelectorAll(".bar").entries()) {
    bar.style = `height: ${bar.getAttribute("a")}em; left: calc(calc(${options.width}/5) * ${i})`;
  }

  return chartCSS;
}

/**
 * Render a bar chart horizontally, into the element passed as a parameter, using values from data, and height/width from options.
 * @param {number[]} data
 * @param {Object} options
 * @param {Element} element
 */
function drawBarChart(data, options = defaultOptions, element) {
  if (!window.jQuery) {
    importJQuery();
  }
  for (const opt in options) {
    defaultOptions[opt] = options[opt];
  }

  let chartHTML = createChart(data, defaultOptions);
  document.getElementsByTagName("HEAD")[0].appendChild(generateCSS(chartHTML, defaultOptions));

  element.insertAdjacentElement("beforeend", chartHTML);


}
