import { NOTE_CATEGORIES } from "./constants";

const getNewRowHTMLMarkup = () =>  `
  <td><input /></td>
  <td>
    <select>
      ${Object.values(NOTE_CATEGORIES).map((item) => `
        <option>${item}</option>
      `)}
    </select>
  </td>
  <td></td>
  <td></td>
  <td>
    <button>save</button>
    <button>cancel</button>
  </td>
`;

const getFilledRowHTMLMarkup = (note) => `
  <td>${note.content}</td>
  <td>${note.category}</td>
  <td>${new Date()}</td>
  <td></td>
  <td>
    <button>edit</button>
    <button>remove</button>
  </td>
`;

export const handleAddNewNote = () => {
  document.querySelector('#create').addEventListener('click', () => {
    const tableElement = document.querySelector('table');

    const newRowElement = document.createElement('tr');
    newRowElement.innerHTML = getNewRowHTMLMarkup();

    tableElement.append(newRowElement);

    newRowElement.querySelector('button').addEventListener('click', () => {
      const content = newRowElement.querySelector('input').value;
      const category = newRowElement.querySelector('select').value;

      newRowElement.innerHTML = getFilledRowHTMLMarkup({ content, category });
    });
  });
};

