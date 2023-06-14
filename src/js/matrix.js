import { prevStuffDestroyer } from './preveous-stuff-destroyer';
import { mod } from "./mod";
import { matrixCounter } from "./matrix-counter";
import { healthChart } from "./health-chart";
import { skySmthCounter } from "./sky-smth-counter";


const refs = {
    matrix: document.querySelector(".matrix"),
    matrixForm: document.querySelector(".matrix-form"),
    physicChart: document.querySelector('.physic'),
    energyChart: document.querySelector('.energy'),
    emotionsChart: document.querySelector('.emotions'),
    matrixShit: document.querySelector(".matrix-data"),
    skySmth: document.querySelector('.sky-smth-list'),
}

const {
    matrix, matrixForm, physicChart, energyChart, emotionsChart, matrixShit, skySmth
} = refs;

matrixForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = matrixForm.birthday.value.trim()

    if (!value) {
        matrixForm.reset();
        return;
    }

    matrixShit.classList.remove('hidden');

    // Removing the previous matrix from the page
    const prevMatrix = document.querySelectorAll(`[data-delete]`);
    prevStuffDestroyer(prevMatrix);
    
    let date = value.split(".");  

    const day = mod(parseInt(date[0]));
    const month = mod(parseInt(date[1]));
    const year = mod(parseInt(date[2]));

    // Counting new matrix
    const matrixData = matrixCounter(day, month, year);
    const healthChartData = healthChart(matrixData);
    const skySmthData = skySmthCounter(matrixData);

    // Adding data to the page
    matrixMarkupCreator(matrixData);
    healthChartMarkupCreator(healthChartData);
    skySmthMarkupCreator(skySmthData);
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

const skySmthMarkupCreator = (array) => {
    const markup = array.map(element => 
        `<li class="sky__item" data-delete>
            <p>${element}</p>
        </li>`
    ).join("");

    skySmth.insertAdjacentHTML("beforeend", markup); 
}

