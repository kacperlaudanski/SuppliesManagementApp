import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Items - StockWise",
};
export default function ItemsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
