import { HU_states } from "./states.js";
import { US_states } from "./states.js";

let selectedCountry = 'Choose...';
const country = document.querySelector('#country')
country.addEventListener('click', () => {
    if (selectedCountry !== country.value) {
        selectedCountry = country.value;
        addStates(country.value);
    }
})
const addStates = (country) => {
    const state = document.querySelector('#state')
    state.innerHTML = '';
    let template;
    if (country === 'Choose...') {
        template = `<option selected>Choose country first</option>`;
    } else if (country === 'Hungary') {
        template = `<option selected>Choose...</option>`;
        for (let i = 0; i < HU_states.length; i++) {
            template += `<option value="${i}">${HU_states[i]}</option>`;
        };
    } else {
        template = `<option selected>Choose...</option>`;
        for (let i = 0; i < US_states.length; i++) {
            template += `<option value="${i}">${US_states[i]}</option>`;
        };
    }
    state.insertAdjacentHTML("afterbegin", template);
}
