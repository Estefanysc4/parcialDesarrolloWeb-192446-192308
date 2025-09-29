class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const price = this.getAttribute("price");
    const description = this.getAttribute("description");
    const image = this.getAttribute("image");

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          width: 200px;
          display: inline-block;
          background: #fff;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        img {
          max-width: 100%;
          border-radius: 6px;
        }
        h3 { color: #5a3825; margin: 10px 0 5px; }
        p { font-size: 14px; margin: 5px 0; }
        span { font-weight: bold; color: #3e2723; }
      </style>
   
    `;
  }
}

customElements.define("product-card", ProductCard);
