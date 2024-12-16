"use client"
import { BaggageClaim, BarChart4, Cable, ChevronLeft, Home, PlusCircle, ScrollText, ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Subscription from './Subscription'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


function Sidebar() {

  const [active, setActive] = useState({
    inventory: false,
    item: false,
  });

  const handleItemClick = () => {
    setActive({
      inventory: true, 
      item: !active.item,
    });
  };

  const handleInventoryClick = () => {
    setActive({
      inventory: !active.inventory,
      item: false,
    });
  }

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
        <Link href="#" className="flex items-center p-3 space-x-2 text-slate-50 rounded-md">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Collapsible>
          <CollapsibleTrigger onClick={handleInventoryClick} className={`flex items-center w-full mb-2 p-3 space-x-2 rounded-md ${active.inventory ? 'bg-blue-800' : 'bg-slate-800'} ${active.item? 'bg-blue-500' :''} text-slate-50`}>
              <BaggageClaim className="w-4 h-4" />
              <span className=''>Inventory</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
          
              <Link 
              href='#' 
              className={`flex items-center justify-between p-2.5 pr-6 rounded-lg hover:bg-blue-600 transition-all duration-300 ${active.item ? 'bg-blue-600' : ''}`}
              onClick={handleItemClick}
              >
              <span className='pl-8 font-medium'>Item</span>
              <PlusCircle className='w-4 h-4' />
              </Link> 
            
           
          </CollapsibleContent>
        </Collapsible>

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