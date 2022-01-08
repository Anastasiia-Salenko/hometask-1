const getHTMLMarkup = () => 
  `<button>Create note</button>`;

export const renderAddButton = () => {
  const element = document.createElement('div');

  element.innerHTML = getHTMLMarkup();

  document.body.append(element);
}