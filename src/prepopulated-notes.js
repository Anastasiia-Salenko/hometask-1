import { NOTE_CATEGORIES } from "./constants";
import { format } from "date-fns";

export const prepopulatedNotes = [
  {
    content: 'Buy batteries for a clock',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2022, 0, 8),
    dates: [],
    id: '2fb5c10f-45c3-4e2d-9905-94f7809c3985',
  },
  {
    content: 'Is the moon new or old now?',
    category: NOTE_CATEGORIES.RANDOM_THOUGHT,
    created: new Date(2022, 0, 6),
    dates: [],
    id: '29e6f760-396b-474e-9e33-3bcb1ba031be',
  },
  {
    content: 'Write a song about a cat living in three families',
    category: NOTE_CATEGORIES.IDEA,
    created: new Date(2021, 11, 29),
    dates: [],
    id: '47c4431d-e90c-433a-b70e-5be430494447',
  },
  {
    content: 'Pick up gifts from the post office on 29/12/2021',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2021, 11, 27),
    dates: [new Date(2021, 11, 29)],
    id: 'e5b1e80a-746f-4b11-97e0-f1486a6b7564',
  },
  {
    content: 'Invite friends for the new year',
    category: NOTE_CATEGORIES.TASK,
    created: new Date(2021, 11, 26),
    dates: [],
    id: '37395d84-84bf-4efd-b2ca-6638c235d35d',
  },
  {
    content: "Why is Santa's deer named Rudolph?",
    category: NOTE_CATEGORIES.RANDOM_THOUGHT,
    created: new Date(2021, 11, 15),
    dates: [],
    id: '46f4b96f-5d62-45ae-b32c-660a8ce7a47e',
  },
  {
    content: 'Add into the salad olivier pomegranate',
    category: NOTE_CATEGORIES.IDEA,
    created: new Date(2021, 11, 10),
    dates: [],
    id: 'de6f561e-4a47-4c1a-aad2-28a847e6a7f1',
  }
];
