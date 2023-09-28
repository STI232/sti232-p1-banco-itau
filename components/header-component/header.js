class HeaderComponent extends HTMLElement {
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
        <link rel="stylesheet" href="../../components/header-component/style.css">
        <div class="header-component">
            <img src="../../src/public/icons/itau-logo.svg" alt="">
            <ul class="header-options">
                <li>
                    <a href="">Beneficios Itaú</a>
                </li>
                <li>
                    <a href="">Productos</a>
                </li>
                <li>
                    <a href="">Precios</a>
                </li>
                <li>
                    <a href="">Ayuda</a>
                </li>
            </ul>
            <div class="log-user">
                <a href="">Registrate</a>
                <a href="" class="log-user-white" style="color: #EC7404;">Ingresa</a>
            </div>
        </div>
        `;
    }
}

customElements.define('header-component', HeaderComponent)
export default HeaderComponent;