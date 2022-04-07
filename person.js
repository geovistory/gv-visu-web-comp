class Person extends HTMLElement {

    constructor() {
        super();

        const mode = this.getAttribute('mode')
        const name = this.getAttribute('name')
        const lastname = this.getAttribute('lastname')
        const birthdate = this.getAttribute('birthdate')

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
        ${mode == 'short' ?
                getInnerHTML_short(name, lastname, birthdate) :
                getInnerHTML_long(name, lastname, birthdate)
            }`;
    }
}
customElements.define('gv-person', Person);


function getInnerHTML_long(name, lastname, birthdate) {
    return `<h1><span id="name">${name}</span> - <span id="lastname">${lastname}</span> <span style="font-size:12px">${birthdate}</span></h1>`
}

function getInnerHTML_short(name, lastname, birthdate) {
    shortName = name.charAt(0)
    age = new Date() - new Date(birthdate)
    age /= (1000 * 3600 * 24 * 365.25)

    return `<h3>${shortName}. ${lastname} <span style="font-size:12px">${parseInt(age)} years</span></h3>`
}