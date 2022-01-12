import { NOTE_CATEGORIES } from "./constants";
import { v4 as uuidv4 } from 'uuid';

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
  <td>${note.dates}</td>
  <td>
    <button id="edit">edit</button>
    <button id="archive">archive</button>
    <button id="remove">remove</button>
  </td>
`;
// new Date() 
// 10.01.2022 # dd.mm.yyyy | 
// \d{2}\.\d{2}\.\d{4}
// Monday 8, October 2020 # day of week number, month yyyy
// (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday) \d{1,2}, (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}
// 08.30.2020 
// Nov, 12
// 2022 March 8 # yyyy month number
// \d{4} (January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}

export const handleAddNewNote = ({ addNote }) => {
  document.querySelector('#create').addEventListener('click', () => {
    const tableElement = document.querySelector('table');

    const newRowElement = document.createElement('tr');
    newRowElement.innerHTML = getNewRowHTMLMarkup();

    tableElement.append(newRowElement);

    newRowElement.querySelector('button').addEventListener('click', () => {
      const regexpStandartDate = /\d{2}\.\d{2}\.\d{4}/g;

      const content = newRowElement.querySelector('input').value;
      const category = newRowElement.querySelector('select').value;
      const dates = [...content.matchAll(regexpStandartDate)].map((item) => item[0]);
      const note = { content, category, dates, id: uuidv4() };

      newRowElement.innerHTML = getFilledRowHTMLMarkup(note);
      newRowElement.id = `note-${note.id}`;
      addNote(note);
    });
  });
};

