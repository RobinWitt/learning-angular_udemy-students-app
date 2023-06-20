import { nanoid } from 'nanoid';
import { Student } from './student';

export const Students: Student[] = [
  {
    id: '1dflah',
    firstName: 'Max',
    lastName: 'Muster',
    mainClass: 'Mathematics',
    isActive: true,
  },
  {
    id: '2eqot',
    firstName: 'Jane',
    lastName: 'Doe',
    mainClass: 'Biology',
    isActive: true,
  },
  {
    id: '3lbvy',
    firstName: 'John',
    lastName: 'Roe',
    mainClass: 'Sports',
    isActive: false,
  },
];
