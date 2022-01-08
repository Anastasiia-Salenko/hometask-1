const getHTMLMarkup = (notes) => `
  <table>
    <tr>
      <td>Content</td>
      <td>Category</td>
      <td>Created</td>
      <td>Dates</td>
      <td></td>
    </tr>
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
  </table>`;

export const renderInitialNotes = (notes) => {
  const element = document.createElement('div');

  element.innerHTML = getHTMLMarkup(notes);

  document.body.append(element);
}