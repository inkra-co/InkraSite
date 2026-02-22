"use client"

import { useI18n } from "@/lib/i18n"
import { ArrowRight, Calendar } from "lucide-react"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">AI-Powered Solutions</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              {t("hero.title")}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70 lg:text-xl text-pretty">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:opacity-90"
              >
                {t("hero.cta_primary")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                <Calendar className="h-4 w-4" />
                {t("hero.cta_secondary")}
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/hero-ai.jpg"
                alt="Artificial Intelligence visualization"
                className="h-[480px] w-full rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-primary/30" />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-accent/20 bg-primary/90 backdrop-blur-md p-4 shadow-2xl">
              <div className="text-2xl font-bold text-accent">40%</div>
              <div className="text-sm text-primary-foreground/70">Cost Reduction</div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl border border-accent/20 bg-primary/90 backdrop-blur-md p-4 shadow-2xl">
              <div className="text-2xl font-bold text-accent">150+</div>
              <div className="text-sm text-primary-foreground/70">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
