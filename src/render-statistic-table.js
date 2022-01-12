import { NOTE_CATEGORIES } from "./constants";

const getHTMLMarkup = (activeNotes, archiveNotes) => `
  <table>
    <tr>
      <td>Note Category</td>
      <td>Active</td>
      <td>Archive</td>
    </tr>
    <tr>
      <td>${NOTE_CATEGORIES.TASK}</td>
      <td>${activeNotes.filter((item) => item.category === NOTE_CATEGORIES.TASK).length}</td>
      <td>${archiveNotes.filter((item) => item.category === NOTE_CATEGORIES.TASK).length}</td>
    </tr>
    <tr>
      <td>${NOTE_CATEGORIES.IDEA}</td>
      <td>${activeNotes.filter((item) => item.category === NOTE_CATEGORIES.IDEA).length}</td>
      <td>${archiveNotes.filter((item) => item.category === NOTE_CATEGORIES.IDEA).length}</td>
    </tr>
    <tr>
      <td>${NOTE_CATEGORIES.RANDOM_THOUGHT}</td>
      <td>${activeNotes.filter((item) => item.category === NOTE_CATEGORIES.RANDOM_THOUGHT).length}</td>
      <td>${archiveNotes.filter((item) => item.category === NOTE_CATEGORIES.RANDOM_THOUGHT).length}</td>
    </tr>
  </table>
`;

const getStatisticElement = () => {
  let element = document.querySelector('#statistic');
  if (!element) {
    element = document.createElement('div');
    element.id = 'statistic';

    document.body.append(element);
  }

  return element;
};

export const renderStatisticTable = (activeNotes, archiveNotes) => {
  const element = getStatisticElement();

  element.innerHTML = getHTMLMarkup(activeNotes, archiveNotes);
};
