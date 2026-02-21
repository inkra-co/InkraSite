"use client"

import { useI18n } from "@/lib/i18n"
import { Target } from "lucide-react"

export function About() {
  const { t } = useI18n()

  const stats = [
    { value: t("about.stat1_value"), label: t("about.stat1_label") },
    { value: t("about.stat2_value"), label: t("about.stat2_label") },
    { value: t("about.stat3_value"), label: t("about.stat3_label") },
  ]

  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("about.label")}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("about.description")}
            </p>
          </div>

          {/* Right */}
          <div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {t("about.differentiator_title")}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.differentiator_text")}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-accent lg:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
