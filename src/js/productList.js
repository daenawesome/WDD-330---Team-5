import { renderListWithTemplate } from "./utils";

export default class ProductList {

  constructor(category, dataSrc, element) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.element = element;
    this.dataSrc = dataSrc;
  }

  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const data = await this.dataSrc.getData();
    // render the list
    this.renderList(data)
  }

  renderList(list) {
    this.element.innerHTML = "";
    // Remove extra products
    shortenList(list, 4);

    // Make it reusable
    const template = document.getElementById("product-card-template");
    renderListWithTemplate(template, this.element, list, this.doTemplate);

    // Previous renderList method before moving the template logic to utils.js
    // renderList(list) {
    //     const template = document.getElementById("product-card-template");
    //     list.forEach(product => {
    //       const clone = template.content.cloneNode(true);
    //       const hydratedTemplate = this.prepareTemplate(clone, product);
    //       this.listElement.appendChild(hydratedTemplate);
    //     })
    //   }

  }

  doTemplate(template, product) {
    // fill in the rest of the data here...
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Image;
    template.querySelector("img").alt += product.Name;
    template.querySelector(".card__brand").innerHTML = product.Brand.Name;
    template.querySelector(".card__name").innerHTML = product.NameWithoutBrand;
    template.querySelector(".product-card__price").innerHTML += product.ListPrice;
    return template
  }

}

// Remove extra products
function shortenList(list, length) {
  if (list.length > length) {
    list.length = length;
  }
  return list
}