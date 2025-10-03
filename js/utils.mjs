export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const service = urlParams.get(param);

    return service;
}


export function renderListWithTemplate(templateFn, parentElement, list, position = "afterBegin", clear = false) {
    console.log(list);
    const htmlStrings = list.map(templateFn);

    if (clear) {
        parentElement.innerHTML = "";
    }
    parentElement.insertAdjacentHTML(position, htmlStrings.join(""));

}

export function renderWithTemplate(template, element) {
    element.innerHTML = template;

}


export async function loadTemplate(path){
    const res = await fetch(path);
    const template = await res.text();
    return template;
}

export async function loadHeaderfooter() {
    const headerTemplate = await loadTemplate('../partials/header.html');

    const headerElement = document.querySelector('.header');

    renderWithTemplate(headerTemplate, headerElement);

    const footerTemplate = await loadTemplate('../partials/footer.html');

    const footerElement = document.querySelector('.footer');

    renderWithTemplate(footerTemplate, footerElement);
}