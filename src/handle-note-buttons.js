import { NOTE_CATEGORIES } from "./constants";

export const handleNoteButtons = ({ archiveNotes, unarchiveNotes, removeNote, editNote }) => {
  const tableElemennt = document.querySelector('table');
  
  tableElemennt.parentElement.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON') {
      return ;
    }

    if (event.target.id === 'archive') {
      const id = event.target.parentElement.parentElement.id.slice(5);
      archiveNotes(id);
      event.target.parentElement.parentElement.remove();
    }

    if (event.target.id === 'unarchive') {
      const id = event.target.parentElement.parentElement.id.slice(5);
      unarchiveNotes(id);
      event.target.parentElement.parentElement.remove();
    }

    if (event.target.id === 'remove') {
      const id = event.target.parentElement.parentElement.id.slice(5);
      removeNote(id);
      event.target.parentElement.parentElement.remove();
    }

    if (event.target.id === 'edit') {
      const rowElement = event.target.parentElement.parentElement;
      const id  = rowElement.id.slice(5);
      const content = rowElement.children[0].innerHTML;
      const category = rowElement.children[1].innerHTML;

      rowElement.children[0].innerHTML = `<input value="${content}">`;
      rowElement.children[1].innerHTML = `
        <select>
          ${Object.values(NOTE_CATEGORIES).map((item) => `
            <option ${item === category ? 'selected="selected"' : ''}>${item}</option>
          `)}
        </select>
      `;
      const saveButtonElement = rowElement.children[4].children[0];
      saveButtonElement.innerHTML = 'save';
      saveButtonElement.id = 'save';

      const listener = () => {
        const updatedContent = rowElement.querySelector('input').value;
        const updatedCategory = rowElement.querySelector('select').value;
        editNote(id, { content: updatedContent, category: updatedCategory });
        rowElement.children[0].innerHTML = updatedContent;
        rowElement.children[1].innerHTML = updatedCategory;
        setTimeout(() => {
          saveButtonElement.removeEventListener('click', listener);
          saveButtonElement.innerHTML = 'edit';
          saveButtonElement.id = 'edit';  
        }, 0);
      }
      saveButtonElement.addEventListener('click', listener);
    }
  });
};
