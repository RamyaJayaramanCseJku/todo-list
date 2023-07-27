export interface ToDo {
  id: number;
  notes: string | number;
  completed: boolean;
  creationDate: number;
  completionDate: number | null;
}
