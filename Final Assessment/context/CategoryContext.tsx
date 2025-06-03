import { createContext, useContext, useState } from "react";

interface CategoryContextType {
  category: string;
  setCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [category, setCategory] = useState<string>("All");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
