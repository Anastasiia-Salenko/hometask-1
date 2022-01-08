import './main.css';

import { prepopulatedNotes } from './prepopulated-notes';
import { renderAddButton } from './render-add-button';
import { renderInitialNotes } from './render-initial-notes';

function main() {
  renderInitialNotes(prepopulatedNotes);
  renderAddButton()
}

main();
