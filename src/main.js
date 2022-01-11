import { handleAddNewNote } from './handle-add-new-note';
import { handleNoteButtons } from './handle-note-buttons';
import './main.css';

import { prepopulatedNotes } from './prepopulated-notes';
import { renderAddButton } from './render-add-button';
import { renderFilterButton } from './render-filters';
import { renderNotes } from './render-notes';

const activeNotes = [...prepopulatedNotes];
const archivedNotes = [];
let notesFilter = 'active';

function showArchivedNotes() {
  notesFilter = 'archived';
  renderNotes(archivedNotes);
}

function showActiveNotes() {
  notesFilter = 'active';
  renderNotes(activeNotes);
}

function archiveNotes(id) {
  let neededNote = activeNotes.find((item) => item.id === id);
  const index = activeNotes.indexOf(neededNote)
  activeNotes.splice(index, 1);
  archivedNotes.push(neededNote);
}

function addNote(note) {
  const notes = notesFilter === 'active'
    ? activeNotes
    : archivedNotes;

  notes.push(note);
}

function main() {
  renderFilterButton({ showArchivedNotes, showActiveNotes });
  showActiveNotes();
  renderAddButton();
  handleAddNewNote({ addNote });
  handleNoteButtons({ archiveNotes });
};

main();
