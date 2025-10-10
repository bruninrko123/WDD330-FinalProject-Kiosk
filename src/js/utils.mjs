export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const service = urlParams.get(param);

  return service;
}

export async function convertToJson(res) {
  const jsonData = await res.json();
  if (res.ok) {
    return jsonData;
  } else {
    throw { name: "External Services Error:", message: jsonData };
  }
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  try {
    const items = JSON.parse(localStorage.getItem(key));
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterBegin",
  clear = false
) {
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

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderfooter() {
  const headerTemplate = await loadTemplate(
    "/WDD330-FinalProject-Kiosk/partials/header.html"
  );

  const headerElement = document.querySelector(".header");

  renderWithTemplate(headerTemplate, headerElement);

  const footerTemplate = await loadTemplate(
    "/WDD330-FinalProject-Kiosk/partials/footer.html"
  );


  const footerElement = document.querySelector(".footer");

  renderWithTemplate(footerTemplate, footerElement);

}
