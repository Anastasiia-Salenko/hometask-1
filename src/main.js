import { handleAddNewNote } from './handle-add-new-note';
import './main.css';

import { prepopulatedNotes } from './prepopulated-notes';
import { renderAddButton } from './render-add-button';
import { renderFilterButton } from './render-filters';
import { renderNotes } from './render-notes';

const activeNotes = [...prepopulatedNotes];
const archivedNotes = [];

function showArchivedNotes() {
  renderNotes(archivedNotes);
}

function showActiveNotes() {
  renderNotes(activeNotes);
}

function main() {
  renderFilterButton({ showArchivedNotes, showActiveNotes });
  showActiveNotes()
  renderAddButton()
  handleAddNewNote()
}

main();
