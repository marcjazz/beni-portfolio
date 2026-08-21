'use client'

import Image from 'next/image'
import { ArrowDownRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { portraitUrl, scrollToId } from '@/lib/site-data'

export default function Hero() {
  return <section id="top" className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-44 lg:pb-28">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-teal-700"><span className="size-2 rounded-full bg-teal-500" /> Disponible pour de nouveaux projets</div>
        <p className="mb-4 text-sm font-semibold text-teal-700">Médecin Bucco-dentaire & Biostatisticien</p>
        <h1 className="max-w-3xl text-balance text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">Transformer les données de santé en <span className="text-teal-600">évidence scientifique.</span></h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate-600">J’accompagne les chercheurs et professionnels de santé de la préparation des données jusqu’à l’interprétation des résultats statistiques.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button onClick={() => scrollToId('case-studies')} className="bg-teal-600 text-white hover:bg-teal-700">Voir mes projets <ArrowDownRight data-icon="inline-end" /></Button><Button variant="outline" onClick={() => scrollToId('contact')} className="border-slate-300 text-slate-800">Me contacter</Button></div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600"><span className="flex items-center gap-2"><CheckCircle2 className="text-teal-600" /> Méthodes rigoureuses</span><span className="flex items-center gap-2"><CheckCircle2 className="text-teal-600" /> Communication claire</span></div>
      </div>
      <div className="relative mx-auto w-full max-w-md lg:ml-auto"><div className="absolute -inset-4 rounded-[2rem] bg-teal-500/15 blur-2xl" /><div className="relative overflow-hidden rounded-[1.75rem] border-8 border-white shadow-2xl shadow-teal-900/15"><Image src={portraitUrl} alt="Portrait professionnel de FEUKOUO Schamma Beni" width={800} height={960} className="aspect-[4/5] object-cover" priority /></div><div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><p className="text-2xl font-bold text-slate-900">5 ans</p><p className="text-xs text-slate-500">au service de la donnée clinique</p></div></div>
    </div>
  </section>
}
