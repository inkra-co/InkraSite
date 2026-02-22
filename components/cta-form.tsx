"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Send } from "lucide-react"

export function CtaForm() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - copy */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl lg:text-5xl text-balance">
              {t("cta.title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t("cta.subtitle")}
            </p>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">
                  {t("about.stat1_value")} {t("about.stat1_label")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">
                  {t("about.stat2_value")} {t("about.stat2_label")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">
                  {t("about.stat3_value")} {t("about.stat3_label")}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Send className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {"Gracias / Thank you / Danke"}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {"We'll be in touch soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {t("cta.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t("cta.form.name_placeholder")}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    {t("cta.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t("cta.form.email_placeholder")}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                    {t("cta.form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder={t("cta.form.company_placeholder")}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    {t("cta.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t("cta.form.message_placeholder")}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-all hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  {t("cta.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
