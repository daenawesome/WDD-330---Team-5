"use strict";
// It eliminates silent errors and instead throws them so that 
// the code won't run with errors in the code.

// wrapper for querySelector...returns matching element
// or a more concise version:
// export const qs = (selector, parent = document) => parent.querySelector(selector);
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

// Make it reusable
// to render data to a template 
export function renderListWithTemplate(template, parentElement, list, callback) {
  list.forEach(item => {
    const clone = template.content.cloneNode(true);
    const doneTemplate = callback(clone, item);
    parentElement.appendChild(doneTemplate);
  })
}