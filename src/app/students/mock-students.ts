import { nanoid } from 'nanoid';
import { Student } from './student';

export const Students: Student[] = [
  {
    id: '1',
    firstName: 'Max',
    lastName: 'Muster',
    mainClass: 'Mathematics',
    isActive: true,
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Doe',
    mainClass: 'Biology',
    isActive: true,
  },
  {
    id: '3',
    firstName: 'John',
    lastName: 'Roe',
    mainClass: 'Sports',
    isActive: false,
  },
];
