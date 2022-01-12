import { handleAddNewNote } from './handle-add-new-note';
import { handleNoteButtons } from './handle-note-buttons';
import './main.css';

import { prepopulatedNotes } from './prepopulated-notes';
import { renderAddButton } from './render-add-button';
import { renderFilterButton } from './render-filters';
import { renderNotes } from './render-notes';
import { renderStatisticTable } from './render-statistic-table';

const activeNotes = [...prepopulatedNotes];
const archivedNotes = [];
let notesFilter = 'active';

function showArchivedNotes() {
  notesFilter = 'archived';
  renderNotes(archivedNotes, notesFilter);
};

function showActiveNotes() {
  notesFilter = 'active';
  renderNotes(activeNotes, notesFilter);
};

function archiveNotes(id) {
  let neededNote = activeNotes.find((item) => item.id === id);
  const index = activeNotes.indexOf(neededNote)
  activeNotes.splice(index, 1);
  archivedNotes.push(neededNote);

  renderStatisticTable(activeNotes, archivedNotes);
};

function unarchiveNotes(id) {
  let neededNote = archivedNotes.find((item) => item.id === id);
  const index = archivedNotes.indexOf(neededNote)
  archivedNotes.splice(index, 1);
  activeNotes.push(neededNote);

  renderStatisticTable(activeNotes, archivedNotes);
};

function addNote(note) {
  const notes = notesFilter === 'active'
    ? activeNotes
    : archivedNotes;

  notes.push(note);

  renderStatisticTable(activeNotes, archivedNotes);
};

function removeNote(id) {
  const notes = notesFilter === 'active'
    ? activeNotes
    : archivedNotes;

  let neededNote = notes.find((item) => item.id === id);
  const index = notes.indexOf(neededNote)
  notes.splice(index, 1);

  renderStatisticTable(activeNotes, archivedNotes)
};

function editNote(id, updatedNote) {
  const notes = notesFilter === 'active'
    ? activeNotes
    : archivedNotes;

  let neededNoteIndex = notes.findIndex((item) => item.id === id);
  notes[neededNoteIndex] = {
    ...notes[neededNoteIndex],
    ...updatedNote,
  };

  renderStatisticTable(activeNotes, archivedNotes);
}

function main() {
  renderFilterButton({ showArchivedNotes, showActiveNotes });
  showActiveNotes();
  renderAddButton();
  handleAddNewNote({ addNote });
  handleNoteButtons({ archiveNotes, unarchiveNotes, removeNote, editNote });
  renderStatisticTable(activeNotes, archivedNotes);
};

main();
