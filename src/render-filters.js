const getHTMLMarkup = () => `
  <button id="active">Active notes</button>
  <button id="archived">Archived notes</button>
`;

export const renderFilterButton = ({ showArchivedNotes, showActiveNotes }) => {
  const element = document.createElement('div');
  
  element.innerHTML = getHTMLMarkup();
  
  document.body.append(element);

  const buttonActive = document.querySelector('#active');
  const buttonArchived = document.querySelector('#archived')
  buttonActive.disabled = true;
  
  element.addEventListener('click', (event) => {

    if (event.target.tagName === 'DIV') {
      return ;
    }

    if (event.target.id === 'archived') {
      buttonActive.disabled = false;
      buttonArchived.disabled = true;
      showArchivedNotes();
    }

    if (event.target.id === 'active') {
      buttonArchived.disabled = false;
      buttonActive.disabled = true;
      showActiveNotes();
    }
  })
};
