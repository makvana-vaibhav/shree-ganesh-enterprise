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
  // ... keep DatabaseStorage ...
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private inquiries: Map<number, Inquiry>;
  private currentProductId: number;
  private currentInquiryId: number;

  constructor() {
    this.products = new Map();
    this.inquiries = new Map();
    this.currentProductId = 1;
    this.currentInquiryId = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = { ...insertInquiry, id, createdAt: new Date() };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length > 0) return;

    const initialProducts: InsertProduct[] = [
      {
        name: "Precision Guide Pin",
        description: "High-precision guide pin ensuring perfect alignment for mould bases. Durable and wear-resistant.",
        category: "Mould Alignment Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.02.55_PM_1766386139493.jpeg"
      },
      {
        name: "Square Support Block",
        description: "Robust support blocks for mould assembly stability during operation.",
        category: "Mould Alignment Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.04.09_PM_1766386151677.jpeg"
      },
      {
        name: "Custom CNC End Mill",
        description: "Specially designed end mills for intricate cutting and shaping of industrial components.",
        category: "Designer CNC Tools",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.02.56_PM_1766386143449.jpeg"
      },
      {
        name: "Precision Collet Chuck",
        description: "High-grip collet chucks for securing tools during high-speed milling operations.",
        category: "Milling Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.00.19_PM_1766386134790.jpeg"
      },
      {
        name: "Clamping Kit",
        description: "Comprehensive clamping kit for securing workpieces on milling tables.",
        category: "Milling Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.08.40_PM_1766386177412.jpeg"
      },
      {
        name: "Ejector Sleeve",
        description: "Precision-ground ejector sleeves for smooth mould ejection processes.",
        category: "Mould Alignment Accessories",
        imageUrl: "/images/WhatsApp_Image_2025-12-22_at_12.03.44_PM_1766386148076.jpeg"
      }
    ];

    for (const p of initialProducts) {
      await this.createProduct(p);
    }
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemStorage();
