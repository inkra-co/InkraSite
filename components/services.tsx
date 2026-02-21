"use client"

import { useI18n } from "@/lib/i18n"
import { Brain, Cog, BarChart3, Link2, Sparkles } from "lucide-react"

const icons = [Brain, Cog, BarChart3, Link2, Sparkles]

interface ServiceItem {
  title: string
  description: string
  benefit: string
}

export function Services() {
  const { t, tArray } = useI18n()
  const items = tArray<ServiceItem>("services.items")

  return (
    <section id="services" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("services.label")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl lg:text-5xl text-balance">
            {t("services.title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                <div className="mt-5 flex items-center gap-2 rounded-lg bg-accent/5 px-4 py-2.5">
                  <Sparkles className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.benefit}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
