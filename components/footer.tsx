"use client"

import { useI18n, localeNames, type Locale } from "@/lib/i18n"
import { Mail, Globe } from "lucide-react"
import { FlagIcon } from "@/components/flag-icons"

export function Footer() {
  const { t, locale, setLocale } = useI18n()

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#benefits", label: t("nav.benefits") },
    { href: "#process", label: t("nav.process") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-2xl font-bold text-primary-foreground">Inkra</span>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              {t("footer.description")}
            </p>
            {/* Social icons placeholder */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-primary-foreground/40 transition-colors hover:text-accent" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="text-primary-foreground/40 transition-colors hover:text-accent" aria-label="X (Twitter)">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              {t("footer.nav_title")}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              {t("footer.contact_title")}
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${t("footer.email")}`}
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              <Globe className="mb-2 h-4 w-4 inline-block mr-1" />
              Language
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {(Object.keys(localeNames) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`flex items-center gap-2.5 text-left text-sm transition-colors ${
                    locale === l
                      ? "font-semibold text-accent"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  <FlagIcon locale={l} />
                  {localeNames[l]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Inkra. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
