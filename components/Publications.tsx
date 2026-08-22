import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { publications } from "@/lib/site-data";

export default function Publications() {
  return (
    <section id="publications" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
              Publications & travaux
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Quelques sujets qui m’animent.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-slate-500">
            Des projets sélectionnés à la rencontre de la clinique et de la
            statistique, illustrés par des données et rendus réels.
          </p>
        </div>
        <div className="mt-16">
          {publications.map((item, i) => (
            <div key={item.title}>
              <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-10">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <Image
                        src={item.thumbnail}
                        alt=""
                        role="presentation"
                        width={48}
                        height={48}
                        className="size-7 object-contain"
                      />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">
                      0{i + 1} / Projet sélectionné
                    </p>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
                
                {item.images && item.images.length > 0 && (
                  <div className="w-full lg:w-7/12 flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.images.map((img, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${item.images.length === 1 ? 'sm:col-span-2' : item.images.length === 3 && imgIdx === 0 ? 'sm:col-span-2' : ''}`}
                        >
                          <Image
                            src={img}
                            alt={`Illustration du projet ${item.title}`}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {i < publications.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
