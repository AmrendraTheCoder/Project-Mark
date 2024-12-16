import { BaggageClaim, BarChart4, Cable, ChevronLeft, Home, ScrollText, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Subscription from './Subscription'

function Sidebar() {
  return (
<div>
  <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed flex flex-col justify-between">
    {/* Top Part */}
    <div>
      {/* Logo */}
      <Link href="#" className="bg-slate-900 border-b h-[6.6vh] border-slate-900 shadow-slate-400 flex space-x-2 items-center justify-center pt-3 pb-3 px-2">
        <ShoppingCart />
        <span className="text-xl font-semibold">Inventory</span>
      </Link>
      {/* Links */}
      <nav className="flex flex-col gap-3 px-3 py-6">
        <Link href="#" className="flex items-center p-3 space-x-2 bg-blue-600 text-slate-50 rounded-md">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <button className="flex items-center p-3 space-x-2">
          <BaggageClaim className="w-4 h-4" />
          <span>Inventory</span>
        </button>
        <button className="flex items-center p-3 space-x-2">
          <ShoppingCart className="w-4 h-4" />
          <span>Sales</span>
        </button>
        <button className="flex items-center p-3 space-x-2">
          <ShoppingBag className="w-4 h-4" />
          <span>Purchases</span>
        </button>
        <Link href="#" className="flex items-center p-3 space-x-2">
          <Cable className="w-4 h-4" />
          <span>Integrations</span>
        </Link>
        <Link href="#" className="flex items-center p-3 space-x-2">
          <BarChart4 className="w-4 h-4" />
          <span>Reports</span>
        </Link>
        <Link href="#" className="flex items-center p-3 space-x-2">
          <ScrollText className="w-4 h-4" />
          <span>Documents</span>
        </Link>
      </nav>
    </div>

    {/* Bottom Part */}
    <div>
      {/* Subscription Card */}
      <Subscription />
      {/* Footer Icon */}
      <div className="bg-slate-950 flex space-x-2 justify-center pt-3 pb-3 px-2">
        <ChevronLeft />
      </div>
    </div>
  </div>
</div>
  )
}

export default Sidebar