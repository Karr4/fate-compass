import { prevStuffDestroyer } from './preveous-stuff-destroyer';
import { mod } from "./mod";
import { matrixCounter } from "./matrix-counter";
import { healthChart } from "./health-chart";

const matrix = document.querySelector("ul.matrix");
const matrixForm = document.querySelector(".matrix-form");
const physicChart = document.querySelector('.physic');
const energyChart = document.querySelector('.energy');
const emotionsChart = document.querySelector('.emotions');

matrixForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Removing the previous matrix from the page
    const prevMatrix = document.querySelectorAll(`[data-delete]`);
    prevStuffDestroyer(prevMatrix);
    

    let date = matrixForm.birthday.value.split(".");  

    const day = mod(parseInt(date[0]));
    const month = mod(parseInt(date[1]));
    const year = mod(parseInt(date[2]));

    // Counting new matrix
    const matrixData = matrixCounter(day, month, year);
    const healthChartData = healthChart(matrixData);

    // Adding matrix to the page
    matrixMarkupCreator(matrixData);
    healthChartMarkupCreator(healthChartData);
});

const matrixMarkupCreator = (array) => {
    const markup = array.map(element => 
        `<li class="matrix__number" data-delete>
            <p>${element}</p>
        </li>`
    ).join("");

    matrix.insertAdjacentHTML("beforeend", markup); 
}

const healthChartMarkupCreator = ({ physic, energy, emotions }) => {
    const physicMarkup = physic.map(element =>
        `<li class="chart__element" data-delete>
            <p>${element}</p>
        </li>`).join('');
    physicChart.insertAdjacentHTML('beforeend', physicMarkup);
    
    const energyMarkup = energy.map(element =>
        `<li class="chart__element" data-delete>
            <p>${element}</p>
        </li>`).join('');
    energyChart.insertAdjacentHTML('beforeend', energyMarkup);
    
    const emotionsMarkup = emotions.map(element =>
        `<li class="chart__element" data-delete>
            <p>${element}</p>
        </li>`).join('');
    emotionsChart.insertAdjacentHTML('beforeend', emotionsMarkup);
}

