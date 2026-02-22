"use client"

import { useI18n } from "@/lib/i18n"
import { TrendingDown, Clock, LineChart, ArrowUpRight, Trophy } from "lucide-react"

const icons = [TrendingDown, Clock, LineChart, ArrowUpRight, Trophy]

interface BenefitItem {
  title: string
  description: string
}

export function Benefits() {
  const { t, tArray } = useI18n()
  const items = tArray<BenefitItem>("benefits.items")

  return (
    <section id="benefits" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("benefits.label")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            {t("benefits.title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-all hover:border-accent/40 hover:bg-primary-foreground/10"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
