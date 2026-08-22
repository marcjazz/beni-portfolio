import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactEmail, linkedinUrl, whatsappUrl } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.18em] text-teal-300">
              Contact
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Prêt à valoriser vos données de recherche ?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Parlez-moi de votre problématique, de votre base ou de votre
              prochaine publication. Je suis particulièrement réactif sur
              WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "lg", className: "w-fit bg-teal-600 text-white hover:bg-teal-700" }))}
            >
              <MessageCircle className="size-5" />
              WhatsApp
              <ArrowUpRight className="size-5" />
            </a>
            
            <a 
              href={`mailto:${contactEmail}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg", className: "w-fit border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white" }))}
            >
              <Mail className="size-5" />
              Par Email
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-700 pt-7 text-sm">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-slate-300 hover:text-teal-300"
          >
            <span className="font-semibold">in</span> LinkedIn
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-teal-300"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="flex items-center gap-2 text-slate-300 hover:text-teal-300"
          >
            <Mail className="size-4" /> {contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
