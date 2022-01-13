import { NOTE_CATEGORIES } from "./constants";
import { v4 as uuidv4 } from 'uuid';
import { format, parse } from "date-fns";
import { DATE_FORMAT } from "./constants";

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
  <td>${format(note.created, DATE_FORMAT)}</td>
  <td>${note.dates.map((item) => format(item, DATE_FORMAT))}</td>
  <td>
    <button id="edit">edit</button>
    <button id="archive">archive</button>
    <button id="remove">remove</button>
  </td>
`;

export const handleAddNewNote = ({ addNote }) => {
  document.querySelector('#create').addEventListener('click', () => {
    const tableElement = document.querySelector('table');

    const newRowElement = document.createElement('tr');
    newRowElement.innerHTML = getNewRowHTMLMarkup();

    tableElement.append(newRowElement);

    newRowElement.querySelector('button').addEventListener('click', () => {
      const regexpStandartDate = /\d{2}\/\d{2}\/\d{4}/g;

      const content = newRowElement.querySelector('input').value;
      const category = newRowElement.querySelector('select').value;
      const dates = [...content.matchAll(regexpStandartDate)]
        .map((item) => item[0])
        .map((item) => parse(item, DATE_FORMAT, new Date()));
      const note = { content, category, dates, id: uuidv4(), created: new Date() };

      newRowElement.innerHTML = getFilledRowHTMLMarkup(note);
      newRowElement.id = `note-${note.id}`;
      addNote(note);
    });
  });
};

