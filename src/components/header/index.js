class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="header">
            <div><a href="../dashboard/index.html">Inicio</a></div>
            <div><a href="#">Quem somos</a></div>
            <div><a href="#">Hospedagem</a></div>
            <div><a href="#">Contatos</a></div>
            <div><a href="#">Pontos Turisticos</a></div>
        </header>
      `;
    }
  }
  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
        <footer>            
          {*footer code goes here *}         
        </footer>     
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);