import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(10, "Please provide a valid phone number"),
  material: z.string().min(1, "Please select a material"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate incoming data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact form submission
      // In a real app, you would typically:
      // 1. Send an email using a service like SendGrid, Mailgun, etc.
      // 2. Store the submission in a database
      
      // Here we'll just use our in-memory storage
      const result = await storage.saveContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        id: result.id 
      });
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to process your request. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
