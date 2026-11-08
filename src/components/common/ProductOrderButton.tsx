"use client";

import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsAppOrderUrl } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface ProductOrderButtonProps {
  productName: string;
  variant?: "primary" | "secondary" | "outline" | "compact";
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export default function ProductOrderButton({
  productName,
  variant = "primary",
  className,
  label = "Commander sur WhatsApp",
  showIcon = true,
}: ProductOrderButtonProps) {
  const url = getWhatsAppOrderUrl(productName);

  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] select-none text-center";

  const variants = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-orange hover:shadow-lg px-5 py-3 text-sm md:text-base gap-2.5",
    secondary:
      "bg-copo-800 hover:bg-copo-900 text-white shadow-card hover:shadow-elevated px-5 py-3 text-sm md:text-base gap-2.5",
    outline:
      "border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-4 py-2 text-sm gap-2",
    compact:
      "bg-orange-500 hover:bg-orange-600 text-white px-3.5 py-2 text-xs md:text-sm gap-1.5 shadow-sm",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseStyles, variants[variant], className)}
      aria-label={`Commander ${productName} directement sur WhatsApp`}
    >
      {showIcon && (
        <MessageSquare className="h-4 w-4 shrink-0 fill-current opacity-90" />
      )}
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
