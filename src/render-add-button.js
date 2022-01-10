const getHTMLMarkup = () => `
  <button id="create">Create note</button>
`;

export const renderAddButton = () => {
  const element = document.createElement('div');

  element.innerHTML = getHTMLMarkup();

  document.body.append(element);
}