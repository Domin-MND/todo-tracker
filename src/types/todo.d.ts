/** A firestore timestamp provided after a useCollection call */
interface FirestoreTimestamp {
  /** Unix formatted seconds */
  seconds: number;
  /** Ugh... Nanoseconds */
  nanoseconds: number;
}

/** Todo object interface, is in firebase */
interface Todo {
  /** Autogenerated ID by firestore */
  id: string;
  /** Todo title */
  title: string;
  /** Text of todo object */
  description: string;
  /** Finished state of todo object */
  finished: boolean;
  /** Created date of todo object formatted by firestore */
  createdAt: FirebaseTimestamp;
}

/** Date Todo interface after mapping todo by date */
interface DateTodo {
  /** toDateString() date */
  date: string;
  /** An array of todos matching the date */
  todos: Todo[];
}