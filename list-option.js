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
        const container = document.createElement('div');
        container.className = 'list-option';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('span');
        label.textContent = this.label;

        container.appendChild(checkbox);
        container.appendChild(label);
        this.appendChild(container);
    }
}

window.customElements.define('list-option', ListOption);