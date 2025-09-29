fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products");
    const template = document.getElementById("product-template");

    products.forEach(item => {
     
      const clone = template.content.cloneNode(true);
      clone.querySelector("img").src = item.image;
      clone.querySelector("h3").textContent = item.name;
      clone.querySelector("p").textContent = item.description;
      clone.querySelector("span").textContent = "$" + item.price;
      container.appendChild(clone);

    
      const card = document.createElement("product-card");
      card.setAttribute("name", item.name);
      card.setAttribute("price", item.price);
      card.setAttribute("description", item.description);
      card.setAttribute("image", item.image);
      container.appendChild(card);
    });
  });
