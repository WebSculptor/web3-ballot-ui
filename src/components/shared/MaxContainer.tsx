import { cn } from "@/lib/utils";
import React from "react";

export default function MaxContainer({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("container px-3 md:px-10 lg:px-20", className)}>
      {children}
    </div>
  );
}
