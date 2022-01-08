import './main.css';

import { prepopulatedNotes } from './prepopulated-notes';
import { renderInitialNotes } from './render-initial-notes';

function main() {
  renderInitialNotes(prepopulatedNotes);
}

main();
