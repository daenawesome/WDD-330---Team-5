"use strict";
// It eliminates silent errors and instead throws them so that 
// the code won't run with errors in the code.

import ProductData from "./productData.js";
import ProductList from "./productList.js";

// first create an instance of our ProductData class.
const TentsData = new ProductData("tents");
// then get the element we want the product list to render in
// then create an instance of our ProductList class and send it the correct information.
const ProdList = new ProductList("tents", TentsData, document.querySelector(".product-list"));
// finally call the init method to show our products
ProdList.init()