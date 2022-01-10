const getEmptyPlaceholder = (notes) => {
  if (notes.length > 0) {
    return '';
  }

  return `
    <td colspan="5" rowspan="3">
      Your don't have notes here yet...
    </td>
  `;
}

const getHTMLMarkup = (notes) => `
  <table>
    <tr>
      <td>Content</td>
      <td>Category</td>
      <td>Created</td>
      <td>Dates</td>
      <td></td>
    </tr>
    ${getEmptyPlaceholder(notes)}
    ${notes.map(item => `
      <tr>
        <td>${item.content}</td>
        <td>${item.category}</td>
        <td>${item.created}</td>
        <td>${item.dates}</td>
        <td>
          <button>edit</button>
          <button>remove</button>
        </td>
      </tr>
    `).join('')}
  </table>
`;

const getContentElement = () => {
  let element = document.querySelector('#content');

  if (!element) {
    element = document.createElement('div');
    element.id = 'content';

    document.body.append(element);
  }

  return element;
}

export const renderNotes = (notes) => {
  const element = getContentElement();

  element.innerHTML = getHTMLMarkup(notes);
}