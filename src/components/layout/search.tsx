"use client"

import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchProps {
  isTransparent?: boolean
}

export function Search({ isTransparent }: SearchProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Найти на Spark"
        className={cn(
          "w-full pl-4 pr-10 h-10",
          isTransparent
            ? "bg-white/10 placeholder:text-white/70 text-white border-white/20"
            : "dark:bg-[#161616]/90 bg-white/90 dark:placeholder:text-gray-500 placeholder:text-gray-400 dark:text-white text-gray-900",
          "rounded-lg outline-none"
        )}
      />
      <button className={cn(
        "absolute right-0 top-0 h-full px-3 flex items-center justify-center",
        isTransparent
          ? "text-white/70"
          : "dark:text-gray-500 text-gray-400"
      )}>
        <SearchIcon className="h-5 w-5" />
      </button>
    </div>
  )
} 