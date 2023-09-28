class TopBar extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return []; 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue
        this.render;
    }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../components/top-bar/style.css">
        <ul class="top-bar">
            <li>
                <a href="">
                    <img src="../src/public/icons/top-bar-people.svg" alt="">
                    <p>Personas</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="../src/public/icons/top-bar-business.svg" alt="">
                    <p>Empresas</p>
                </a>
            </li>
            <li>
                <a href="" class="investment-option">
                    <img src="../src/public/icons/top-bar-investment.svg" alt="">
                    
                    <p style="color: #EC7404;"">Inversión</p>
                </a>
            </li>
        </ul>
        `;
    }
}

customElements.define('top-bar', TopBar)
export default TopBar;