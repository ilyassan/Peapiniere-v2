"use client";

import { create } from "zustand";
import { clientFetch } from "@/lib/clientFetch";

export interface Category {
  id: number;
  name: string;
}

interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  createCategory: (name: string) => Promise<void>;
  deleteCategory: (categoryId: number) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  isLoading: false,
  error: null,

  fetchCategories: async () => {
    try {
      set({ isLoading: true });
      const data = await clientFetch.get("/categories");
      set({ categories: data, isLoading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to fetch categories",
        isLoading: false,
      });
    }
  },

  createCategory: async (name: string) => {
    try {
      const newCategory = await clientFetch.post("/categories", { name });
      set((state) => ({
        categories: [...state.categories, newCategory],
      }));
    } catch (err) {
      throw new Error("Failed to create category");
    }
  },

  deleteCategory: async (categoryId: number) => {
    try {
      await clientFetch.delete(`/categories/${categoryId}`);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== categoryId),
      }));
    } catch (err) {
      throw new Error("Failed to delete category");
    }
  },
}));