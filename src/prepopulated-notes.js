import { NOTE_CATEGORIES } from "./constants";

export const prepopulatedNotes = [
  {
    content: 'Buy batteries for a clock',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2022, 0, 8, 22, 10, 0),
  },
  {
    content: 'Is the moon new or old now?',
    category: NOTE_CATEGORIES.RANDOM_THOUGHT,
    created: new Date(2022, 0, 6, 14, 8, 54),
  },
  {
    content: 'Write a song about a cat living in three families',
    category: NOTE_CATEGORIES.IDEA,
    created: new Date(2021, 11, 29, 9, 45, 37),
  },
  {
    content: 'Pick up gifts from the post office on December 29, 2021 at 10:00',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2021, 11, 27, 18, 30, 46),
    dates: new Date(2021, 11, 29, 10, 0, 0)
  },
  {
    content: 'Invite friends for the new year',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2021, 11, 26, 15, 12, 2),
  },
  {
    content: "Why is Santa's deer named Rudolph?",
    category: NOTE_CATEGORIES.RANDOM_THOUGHT,
    created: new Date(2021, 11, 15, 2, 45, 33),
  },
  {
    content: 'Add into the salad olivier pomegranate',
    category: NOTE_CATEGORIES.IDEA,
    created: new Date(2021, 11, 10, 11, 7, 55),
  }
];
