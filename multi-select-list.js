class MultiSelectList extends HTMLElement {
    connectedCallback() {
        this.init();
    }

    get options() {
        return JSON.parse(this.getAttribute('options'));
    }

    init() {
        const allOption = this.createListOption('All');
        allOption.addEventListener('click', () => this.handleAllOptionClick(!allOption.hasAttribute('selected')));

        const list = document.createElement('div');
        list.className = 'list-options';
        list.style.display = 'inline-block';
        list.style.height = '200px';
        list.style.overflowY = 'auto';
        list.style.paddingRight = '10px';

        this.options.forEach((option) => list.appendChild(this.createListOption(option)));

        this.appendChild(allOption);
        this.appendChild(list);
    }

    createListOption(label) {
        const option = document.createElement('list-option');
        option.setAttribute('label', label);
        option.setAttribute('selected', 'selected');
        return option;
    }

    handleAllOptionClick(isSelected) {
        this.querySelectorAll('.list-options > list-option').forEach((option) => option.selected = isSelected);
    }
}

window.customElements.define('multi-select-list', MultiSelectList);