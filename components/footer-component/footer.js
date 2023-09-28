class FooterComponent extends HTMLElement {
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
        <link rel="stylesheet" href="../../components/footer-component/style.css">
        <div class="footer-component">
        <div>
            <h3>Sobre nosotros</h3>
            <a href="">Acerca de Itaú</a>
            <a href="">Sostenibilidad</a>
            <a href="">Información financiera</a>
            <a href="">Gobierno corporativo</a>
        </div>
        <div>
            <h3>Atención al cliente</h3>
            <a href="">Servicio en línea</a>
            <a href="">Preguntas frecuentes</a>
            <a href="">Tutoriales digitales</a>
            <a href="">Contáctanos</a>
        </div>
        <div>
            <h3>Información extra</h3>
            <a href="">Tasas y tarifas</a>
            <a href="">Bienes en venta</a>
            <a href="">Transparencia</a>
            <a href="">Trabaja con nosotros</a>
        </div>
    </div>
    <p class="copyright">Banco Itaú 2023. Todos los derechos reservados</p>
        `;
    }
}

customElements.define('footer-component', FooterComponent)
export default FooterComponent;