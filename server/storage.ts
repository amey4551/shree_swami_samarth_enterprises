import { users, type User, type InsertUser } from "@shared/schema";

// Contact form submission type
export interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  material: string;
  message: string;
  submittedAt: Date;
}

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactSubmission(submission: Omit<ContactSubmission, 'id' | 'submittedAt'>): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  currentId: number;
  contactSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.currentId = 1;
    this.contactSubmissionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactSubmission(submission: Omit<ContactSubmission, 'id' | 'submittedAt'>): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const newSubmission: ContactSubmission = {
      ...submission,
      id,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, newSubmission);
    console.log(`Contact form submission saved: ${newSubmission.name} (${newSubmission.email})`);
    return newSubmission;
  }
}

export const storage = new MemStorage();
