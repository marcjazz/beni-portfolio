"use client";
import { Activity, BarChart3, Database } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ankylosisAgeData,
  csproFeatures,
  dentalAgeData,
} from "@/lib/site-data";
import { motion } from "framer-motion";

const COLORS = ["#0d9488", "#0f766e", "#115e59", "#134e4a"];

export default function CaseStudies() {
  const projects = [
    {
      icon: <BarChart3 className="size-6 text-teal-600" />,
      title: "Séquelles des chirurgies de l’ankylose temporo-mandibulaire",
      meta: "N=25 · Étude transversale descriptive au CHU de Yaoundé",
      text: "Analyse des facteurs sociodémographiques et cliniques des patients. La répartition par tranches d'âge montre une prédominance chez les adolescents et jeunes adultes (10-30 ans).",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ankylosisAgeData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              fill="#8884d8"
              paddingAngle={5}
              stroke="none"
              dataKey="value"
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
            >
              {ankylosisAgeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => `${value}%`} 
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#0f172a' }}
              itemStyle={{ color: '#0f766e' }}
            />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      icon: <Activity className="size-6 text-teal-600" />,
      title: "Comparaison des méthodes du London Atlas et Camérière",
      meta: "N=174 · Biostatistiques · R 4.5.0",
      text: "Évaluation de la précision de deux méthodes d'estimation de l'âge dentaire sur une population camerounaise. La méthode de Camérière a démontré une erreur absolue moyenne (MAE) significativement plus faible.",
      chart: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dentalAgeData}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
            />
            <XAxis dataKey="method" stroke="#64748b" tick={{ fill: '#64748b' }} />
            <YAxis
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              label={{
                value: "MAE (Années)",
                angle: -90,
                position: "insideLeft",
                fill: "#64748b",
                offset: -10
              }}
            />
            <Tooltip 
              cursor={{ fill: "#f8fafc" }} 
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#0f172a' }}
            />
            <Bar
              dataKey="mae"
              name="Erreur Moyenne (MAE)"
              fill="#0d9488"
              radius={[6, 6, 0, 0]}
              barSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      icon: <Database className="size-6 text-teal-600" />,
      title: "Conception d’un masque de saisie CSPro pour la recherche",
      meta: "Architecture de données · Qualité et contrôles",
      text: "Développement d'un masque de saisie standardisé pour garantir la qualité des données collectées (socio-démographie, pathologies, impact psycho-social) avant analyse statistique.",
      chart: (
        <div className="flex flex-col justify-center h-full gap-4 p-6">
          <h4 className="font-semibold text-slate-900 mb-2">
            Contrôles de qualité implémentés :
          </h4>
          <ul className="space-y-4">
            {csproFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-slate-700 bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="size-2.5 rounded-full bg-teal-500 mr-4 shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section id="case-studies" className="bg-white py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-teal-700">
            Projets de Recherche
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Des analyses au service de la santé.
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Une trajectoire de projets où la rigueur méthodologique rencontre l'impact clinique.
          </p>
        </motion.div>

        {/* Roadmap Container */}
        <div className="relative">
          {/* Mobile Straight Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white via-teal-300 to-white md:hidden" />

          <div className="flex flex-col">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;
              const isLast = index === projects.length - 1;

              return (
                <div key={index} className={`relative py-16 md:py-32 flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Curved SVG line (Desktop only) */}
                  <div className="absolute inset-0 hidden md:block w-full h-full pointer-events-none z-0">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path 
                        d={
                          isEven
                          ? `M 50 ${isFirst ? '50' : '0'} C 65 ${isFirst ? '50' : '25'}, 65 25, 50 50 C 35 75, 35 75, 50 ${isLast ? '50' : '100'}`
                          : `M 50 ${isFirst ? '50' : '0'} C 35 ${isFirst ? '50' : '25'}, 35 25, 50 50 C 65 75, 65 75, 50 ${isLast ? '50' : '100'}`
                        }
                        fill="none" 
                        stroke="rgba(20, 184, 166, 0.4)" 
                        strokeWidth="2" 
                        strokeDasharray="8 8"
                        vectorEffect="non-scaling-stroke" 
                      />
                    </svg>
                  </div>

                  {/* Timeline Glowing Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 top-16 md:top-1/2 size-16 bg-white border-2 border-teal-200 rounded-full -translate-x-1/2 md:-translate-y-1/2 hidden sm:flex items-center justify-center z-10 shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                  >
                    <div className="absolute inset-2 rounded-full bg-teal-50 blur-[2px]" />
                    {project.icon}
                  </motion.div>

                  {/* Text Section */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full md:w-1/2 pl-20 sm:pl-28 md:pl-0 flex flex-col justify-center z-10 relative"
                  >
                    <div className="sm:hidden mb-6 grid size-14 place-items-center rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 shadow-sm">
                      {project.icon}
                    </div>
                    <p className="text-sm font-semibold text-teal-700 mb-4 tracking-wide uppercase">{project.meta}</p>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-slate-600">
                      {project.text}
                    </p>
                  </motion.div>

                  {/* Chart Section */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full md:w-1/2 pl-8 sm:pl-28 md:pl-0 z-10 relative"
                  >
                    <Card className="overflow-hidden border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl hover:border-teal-300 transition-all duration-500 rounded-3xl group">
                      <CardContent className="p-4 sm:p-6 lg:p-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="min-w-0 w-full h-[360px] bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-center relative z-10">
                          {project.chart}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
