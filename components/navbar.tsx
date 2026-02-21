"use client"

import { useState } from "react"
import { useI18n, localeNames, type Locale } from "@/lib/i18n"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { FlagIcon } from "@/components/flag-icons"

export function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#benefits", label: t("nav.benefits") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight text-foreground">
          Inkra
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Select language"
            >
              <FlagIcon locale={locale} />
              <span>{localeNames[locale]}</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 rounded-lg border border-border bg-background p-1 shadow-lg">
                {(Object.keys(localeNames) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-md px-4 py-2 text-left text-sm transition-colors hover:bg-muted ${
                      locale === l ? "font-semibold text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <FlagIcon locale={l} />
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 border-t border-border pt-4">
              {(Object.keys(localeNames) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l)
                    setMobileOpen(false)
                  }}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                    locale === l
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <FlagIcon locale={l} />
                  {localeNames[l]}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
