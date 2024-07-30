import { Star, User, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link href="/">
          <h1 className="hover:text-gray-400">MyApp</h1>
        </Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/">
        <Users className="w-6 h-6"/>
        </Link>
        <Link href="/favorites">
          <Star className="w-6 h-6"/>
        </Link>
      </nav>
    </div>
  </header>
  )
}
