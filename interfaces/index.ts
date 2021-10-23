// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type NavbarItemType = {
  id: number;
  icon: string;
  title: string;
};

export type Tasks = {
  id: string;
  tasktitle: string;
  time: string;
  date: string;
};
