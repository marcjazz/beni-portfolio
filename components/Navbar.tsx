'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems, scrollToId } from '@/lib/site-data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const go = (id: string) => { scrollToId(id); setOpen(false) }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => go('top')} className="flex items-center gap-3" aria-label="Retour en haut">
          <span className="grid size-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white">FS</span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:block">FEUKOUO Schamma Beni</span>
        </button>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="text-sm text-slate-600 transition hover:text-teal-700">{label}</button>)}
        </nav>
        <Button onClick={() => go('contact')} className="hidden bg-teal-600 text-white hover:bg-teal-700 sm:inline-flex">Parlons de votre étude</Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="flex flex-col gap-1 border-t border-slate-200 bg-white px-5 py-4 lg:hidden" aria-label="Navigation mobile">{navItems.map(([label, id]) => <button key={id} onClick={() => go(id)} className="rounded-lg px-3 py-3 text-left text-sm text-slate-700 hover:bg-slate-50">{label}</button>)}</nav>}
    </header>
  )
}
