"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Process } from "@/components/process"
import { CtaForm } from "@/components/cta-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <CtaForm />
      </main>
      <Footer />
    </I18nProvider>
  )
}
