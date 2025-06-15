import { Navbar } from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer";

import React from 'react'

export default function SportsPage() {
  return (
    <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Sports Page</h1>
            <p className="text-lg">This is the sports page content.</p>
        </div>
        <Footer/>
    </>
  )
}
