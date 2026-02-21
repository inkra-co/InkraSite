"use client"

import { useI18n } from "@/lib/i18n"

interface ProcessStep {
  step: string
  title: string
  description: string
}

export function Process() {
  const { t, tArray } = useI18n()
  const steps = tArray<ProcessStep>("process.steps")

  return (
    <section id="process" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {t("process.label")}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-border lg:block" style={{ width: 'calc(100% - 4rem)', left: '4rem' }} />
              )}
              <div className="flex flex-col">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
