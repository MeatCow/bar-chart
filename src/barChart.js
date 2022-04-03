import Options from "./Options.js";

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

  document.getElementsByTagName("HEAD")[0].appendChild(jQuery);
}

/**
 * Creates the HTML for a chart based on the data passed in, as well as the options.
 * @param {number[]} data
 * @param {Options} options
 * @returns {Element} div element of the exterior bar chart
 */
function createChart(data, options) {
  const containerDiv = document.createElement("div");
  containerDiv.id = uid();

  const outterDiv = document.createElement("div");
  outterDiv.className = "table";

  for (const value of data) {
    const newBar = document.createElement("div");
    newBar.className = "bar";

    const textBox = document.createElement("div");
    textBox.className = "label";
    textBox.textContent = value;

    newBar.appendChild(textBox);
    outterDiv.insertAdjacentElement("beforeend", newBar);
  }

  containerDiv.appendChild(outterDiv);

  return containerDiv;
}

/**
 *
 * @param {Element} containerDiv
 * @param {Options} options
 * @returns
 */
function generateCSS(data, containerDiv, options) {
  const chartCSS = document.createElement("style");
  const id = containerDiv.id;

  chartCSS.innerHTML += `
  #${id} > .table {
    width: ${options.width};
    height: ${options.height};
    margin: auto;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-color: #2196F3;
    display: flex;
    flex-direction: row;
  }
  #${id} > .table > .bar {
    width: calc(${options.width}/${data.length});
    background: ${options.barColour};
    text-align: ${options.valuePosition};
    border: 1px solid;
    animation: grow 2s forwards;
    margin-left: calc(${options.barSpacing}/2);
    margin-right: calc(${options.barSpacing}/2);
    align-self: flex-end;
    display: flex;
    align-items: ${options.valuePosition};
  }
  #${id} > .table > .bar > .label {
    all: unset;
    color: white;
    flex: auto;
  }
  @keyframes grow {
    0% {
      height: 0;
    }
  }
  `;

  for (const [i, bar] of containerDiv.querySelectorAll(".bar").entries()) {
    bar.style = `height: ${bar.firstChild.textContent}em;`;
  }

  return chartCSS;
}

/**
 * Render a bar chart horizontally, into the element passed as a parameter, using values from data, and height/width from options.
 * @param {number[]} data
 * @param {Objet} options
 * @param {Element} element
 */
export function drawBarChart(data, options, element) {
  if (!window.jQuery) {
    importJQuery();
  }
  window.onload = () => {
    const defaultOptions = new Options(options);

    const chartContainer = createChart(data, defaultOptions);
    const style = generateCSS(data, chartContainer, defaultOptions);
    jQuery("head").append(style);

    element.insertAdjacentElement("beforeend", chartContainer);
  };
}
