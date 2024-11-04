"use client"

import { Search as SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Найти на Spark"
        className="w-full pl-4 pr-10 h-10 dark:bg-[#161616]/90 bg-white/90 
        dark:placeholder:text-gray-500 placeholder:text-gray-400
        rounded-lg outline-none 
        dark:text-white text-gray-900"
      />
      <button className="absolute right-0 top-0 h-full px-3 flex items-center justify-center 
        dark:text-gray-500 text-gray-400">
        <SearchIcon className="h-5 w-5" />
      </button>
    </div>
  )
} 