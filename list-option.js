class ListOption extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get label() {
        return this.getAttribute('label');
    }

    render() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('span');
        label.textContent = this.label;

        this.appendChild(checkbox);
        this.appendChild(label);
    }
}

window.customElements.define('list-option', ListOption);