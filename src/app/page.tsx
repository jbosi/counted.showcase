export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gh-bg text-gh-neutral">
      <header className="w-full border-b border-gh-border bg-gh-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-gh-canvas/80 sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center gap-8">
          <span className="text-xl font-semibold tracking-tight select-none">Counted</span>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <a className="text-gh-neutral hover:text-gh-accent transition-colors" href="#features">Fonctionnalités</a>
            <a className="text-gh-neutral hover:text-gh-accent transition-colors" href="#philosophy">Philosophie</a>
            <a className="text-gh-neutral hover:text-gh-accent transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="ml-auto hidden sm:flex gap-3">
            <a href="#contact" className="inline-flex items-center rounded-md border border-gh-border bg-gh-canvas px-3 py-1.5 text-sm font-semibold text-gh-neutral hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-[#161b22] transition-colors">Essayer</a>
            <a href="https://github.com" className="inline-flex items-center rounded-md bg-gh-accent px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gh-accent-emphasis focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gh-accent">Code source</a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 flex flex-col md:flex-row gap-16">
            <div className="flex-1 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">Gérez vos comptes simplement.</h1>
              <p className="text-lg text-[var(--fg-muted)] mb-6">L’alternative moderne, libre et éthique à Tricount.</p>
              <ul className="space-y-2 text-sm mb-8">
                <li className="flex gap-2"><span className="text-gh-success">✔</span><span>Open source, gratuit et sans pub</span></li>
                <li className="flex gap-2"><span className="text-gh-success">✔</span><span>Respect total de la vie privée</span></li>
                <li className="flex gap-2"><span className="text-gh-success">✔</span><span>Développé en Rust pour la performance</span></li>
                <li className="flex gap-2"><span className="text-gh-success">✔</span><span>Redistribution des bénéfices choisie par les utilisateurs</span></li>
              </ul>
              <div className="flex gap-3">
                <a href="#contact" className="inline-flex items-center rounded-md bg-gh-accent px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gh-accent-emphasis focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gh-accent">Rejoindre</a>
                <a href="#features" className="inline-flex items-center rounded-md border border-gh-border bg-gh-canvas px-5 py-2 text-sm font-semibold text-gh-neutral hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-[#161b22]">Fonctionnalités</a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md border border-dashed border-gh-border rounded-lg p-6 bg-gh-canvas">
                <div className="h-52 flex items-center justify-center text-sm text-[var(--fg-muted)]">(Aperçu / capture à venir)</div>
              </div>
            </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-8">Fonctionnalités principales</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Ajout rapide', desc: 'Ajoutez des dépenses en un clic, seul ou en groupe.' },
              { title: 'Calculs automatiques', desc: 'Les comptes sont toujours justes, sans prise de tête.' },
              { title: 'Export & historique', desc: 'Gardez une trace et exportez à tout moment.' },
            ].map(f => (
              <div key={f.title} className="border border-gh-border rounded-md bg-gh-canvas p-5 flex flex-col gap-2">
                <h3 className="font-medium">{f.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="philosophy" className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-8">Notre philosophie</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Respect de la vie privée', desc: 'Vos données ne sont jamais collectées ni revendues.' },
              { title: 'Open source & transparent', desc: 'Le code est public, chacun peut contribuer ou auditer.' },
              { title: 'Redistribution éthique', desc: 'Vous choisissez où vont les bénéfices générés.' },
            ].map(f => (
              <div key={f.title} className="border border-gh-border rounded-md bg-gh-canvas p-5 flex flex-col gap-2">
                <h3 className="font-medium">{f.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Contact & communauté</h2>
          <div className="border border-gh-border rounded-md bg-gh-canvas p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <p className="text-sm leading-relaxed mb-2">Envie de contribuer, de suivre le projet ou de donner votre avis ?</p>
              <p className="text-xs text-[var(--fg-muted)]">Écrivez-nous, on répond vite.</p>
            </div>
            <a className="inline-flex items-center rounded-md border border-gh-border bg-gh-canvas px-4 py-2 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 dark:hover:bg-[#161b22]" href="mailto:contact@counted.app">contact@counted.app</a>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gh-border bg-gh-canvas text-center text-xs text-[var(--fg-muted)] py-8 mt-10">
        &copy; {new Date().getFullYear()} Counted · Conçu avec <span className="text-gh-danger">❤</span> en Rust
      </footer>
    </div>
  );
}
