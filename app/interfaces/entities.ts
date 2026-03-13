// Interfaces for class record system
export interface IStudent {
  id: number;
  name: string;
  email: string;
  classId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClass {
  id: number;
  name: string;
  description?: string;
  teacherId: number;
  createdAt: Date;
  updatedAt: Date;
}