import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Code2,
  Rocket,
  Wrench,
  Zap,
  Layers,
  Headphones,
  ArrowRight,
  MessageCircle,
  Phone,
  ExternalLink,
} from "lucide-react";
import logo from "@/assets/aven-logo-v2.png";

export const Route = createFileRoute("/")({
  const SITE_URL = "https://aven-sooty-ten.vercel.app";
const TITLE = "Aven — Código de alta performance";
const DESCRIPTION =
  "Criação de sites, landing pages de alta conversão e ajustes técnicos com a melhor stack do mercado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Aven" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Aven — Código de alta performance" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});
  component: Index,
});

const WHATSAPP = "https://wa.me/5581983755704?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento";
const PHONE_DISPLAY = "(81) 9 8375-5704";
const PHONE_TEL = "tel:+5581983755704";

const services = [
  {
    icon: Code2,
    title: "Criação de Sites",
    desc: "Especialistas em performance, SEO e responsividade. Sites rápidos que encontram e encantam seus clientes.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Páginas de vendas de alto impacto, pensadas para conversão rápida e campanhas que dão resultado.",
  },
  {
    icon: Wrench,
    title: "Ajustes e Otimizações",
    desc: "Melhorias de desempenho, refatoração de código e novas features no seu projeto existente.",
  },
];

const projects = [
  {
    title: "Landing Page SaaS",
    tags: ["React", "Tailwind", "Vite"],
    grad: "from-primary to-violet",
  },
  {
    title: "E-commerce Moda",
    tags: ["Next.js", "Stripe", "SEO"],
    grad: "from-violet to-primary-glow",
  },
  {
    title: "Ajuste de Performance",
    tags: ["Lighthouse 98", "Core Web Vitals"],
    grad: "from-primary-glow to-secondary",
  },
  {
    title: "App Web Financeiro",
    tags: ["TypeScript", "Node", "Charts"],
    grad: "from-secondary to-primary",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Performance máxima",
    desc: "Carregamento instantâneo e notas altas no Google.",
  },
  {
    icon: Layers,
    title: "Código limpo e escalável",
    desc: "Base sólida para crescer sem dor de cabeça.",
  },
  {
    icon: Headphones,
    title: "Suporte ágil",
    desc: "Atendimento direto e rápido sempre que precisar.",
  },
];

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:scale-105";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 font-semibold text-foreground transition hover:border-violet hover:text-violet";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Aven"
              className="h-9 w-9 shrink-0 object-contain drop-shadow-[0_0_14px_rgba(139,54,223,0.55)]"
            />
            <span className="text-xl font-bold tracking-widest text-gradient">AVEN</span>
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition hover:text-violet"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className={`${btnPrimary} hidden py-2! text-sm md:inline-flex`}
          >
            Fazer Orçamento
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="flex flex-col gap-4 border-t border-border bg-background px-6 py-6 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-violet"
              >
                {n.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className={btnPrimary}>
              Fazer Orçamento
            </a>
          </div>
        )}
      </header>

      <section className="relative flex min-h-screen items-center px-6 pt-16">
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-112 w-md rounded-full bg-violet/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-block rounded-full border border-border bg-card/60 px-4 py-1 text-xs uppercase tracking-widest text-violet">
            Tecnologia que converte
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-7xl">
            Transformamos ideias em{" "}
            <span className="text-gradient">códigos de alta performance</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Criação de sites, landing pages de alta conversão e ajustes técnicos com a melhor stack
            do mercado.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className={btnPrimary}>
              Falar com Especialista <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className={btnGhost}>
              Ver Projetos
            </a>
          </div>
        </div>
      </section>

      <section id="servicos" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Serviços" title="O que fazemos de melhor" />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glow-card rounded-2xl border border-border bg-card p-8">
                <div className="mb-6 inline-flex rounded-xl bg-gradient-brand p-3 text-primary-foreground">
                  <Icon />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-card/40 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Portfólio" title="Projetos recentes" />
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="glow-card overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className={`relative h-48 bg-linear-to-br ${p.grad}`}>
                  <div className="absolute inset-6 rounded-lg border border-foreground/20 bg-background/30 p-4 backdrop-blur-sm">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-foreground/50" />
                      <span className="h-2 w-2 rounded-full bg-foreground/50" />
                      <span className="h-2 w-2 rounded-full bg-foreground/50" />
                    </div>
                    <div className="mb-2 h-3 w-2/3 rounded bg-foreground/40" />
                    <div className="h-3 w-1/2 rounded bg-foreground/25" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-lg font-semibold">{p.title}</h3>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-violet"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:text-foreground"
                  >
                    Ver Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Diferenciais" title="Por que a Aven" />
          <div className="grid gap-10 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <Icon className="mx-auto mb-4 text-violet" size={36} />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato" className="relative overflow-hidden px-6 pt-24">
        <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-160 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-border bg-card/80 p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Pronto para <span className="text-gradient">acelerar o seu negócio?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fale com a gente e receba um orçamento sem compromisso.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className={btnPrimary}>
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a href={PHONE_TEL} className={btnGhost}>
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Fale direto no WhatsApp: {PHONE_DISPLAY}
          </p>
        </div>
        <div className="relative mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border py-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Aven" className="h-7 w-7 object-contain" />
            <span>© {new Date().getFullYear()} Aven. Todos os direitos reservados.</span>
          </div>
          <div className="flex gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-violet">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <span className="text-sm uppercase tracking-widest text-violet">{kicker}</span>
      <h2 className="mt-2 text-3xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}
