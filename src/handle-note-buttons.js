

export const handleNoteButtons = ({ archiveNotes }) => {
  const tableElemennt = document.querySelector('table');
  
  tableElemennt.addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON') {
      return ;
    } 

    if (event.target.id === 'archive') {
      const id = event.target.parentElement.parentElement.id.slice(5);
      archiveNotes(id);
      event.target.parentElement.parentElement.remove();
    }

  })
}