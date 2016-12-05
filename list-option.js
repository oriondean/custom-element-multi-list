class ListOption extends HTMLElement {
    constructor() {
        super();
        this.connected = false;
    }

    static get observedAttributes() {
        return ['selected'];
    }

    connectedCallback() {
        this.init();
        this.render();

        this.addEventListener('click', () => this.selected = !this.selected);
        this.connected = true;
    }

    disconnectedCallback() {
        this.removeEventListener('click');
    }

    attributeChangedCallback() {
        if (this.connected) {
            this.render();
        }
    }

    get label() {
        return this.getAttribute('label');
    }

    get selected() {
        return this.hasAttribute('selected');
    }

    set selected(isSelected) {
        if (isSelected) {
            this.setAttribute('selected', 'selected')
        } else {
            this.removeAttribute('selected')
        }
    }

    init() {
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

    render() {
        this.querySelector('input').checked = this.selected;
    }
}

window.customElements.define('list-option', ListOption);