import PublicLayout from "@/components/layout/PublicLayout";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Car Rent",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <PublicLayout>{children}</PublicLayout>;
}
