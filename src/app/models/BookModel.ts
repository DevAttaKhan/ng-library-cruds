export interface BookModel {
  id: string;
  title: string;
  author: string;
  genre: { id: number; value: string };
  publisher: string;
  date: string;
}
