import { db } from "./db";
import {
  inquiries,
  products,
  type InsertInquiry,
  type Inquiry,
  type Product,
  type InsertProduct,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  seedProducts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values(insertProduct).returning();
    return product;
  }

  async seedProducts(): Promise<void> {
    // Basic check if products exist. 
    // In a real app we might want better seeding logic or allow dupes for dev.
    const existing = await this.getProducts();
    if (existing.length > 0) return;

    const initialProducts: InsertProduct[] = [
      {
        name: "Precision Guide Pin",
        description: "High tolerance guide pin for mould bases.",
        category: "Mould Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.00.19_PM_1766386134790.jpeg"
      },
      {
        name: "CNC Machined Gear",
        description: "Custom machined gear for industrial transmission.",
        category: "Precision CNC Components",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.02.55_PM_1766386139493.jpeg"
      },
      {
        name: "Stainless Steel Bracket",
        description: "Durable bracket for structural support.",
        category: "Custom Metal Parts",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.02.56_PM_1766386143449.jpeg"
      },
      {
        name: "Industrial Clamp",
        description: "Heavy duty clamp for fixture assemblies.",
        category: "Industrial Components",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.03.44_PM_1766386148076.jpeg"
      },
      {
        name: "Custom Shaft",
        description: "Precision ground shaft for rotating machinery.",
        category: "Precision CNC Components",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.04.09_PM_1766386151677.jpeg"
      },
      {
        name: "Mould Insert",
        description: "Heat treated insert for plastic injection moulds.",
        category: "Mould Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.05.35_PM_1766386157153.jpeg"
      }
    ];

    for (const p of initialProducts) {
      await this.createProduct(p);
    }
  }
}

export const storage = new DatabaseStorage();
