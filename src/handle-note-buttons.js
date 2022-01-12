export const handleNoteButtons = ({ archiveNotes, unarchiveNotes, removeNote }) => {
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
  });
};
