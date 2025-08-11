export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <header className="navbar bg-base-100 shadow-md z-10">
        <div className="flex-1">
          <span className="text-2xl font-bold text-primary">Counted</span>
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost btn-sm" href="#features">Fonctionnalités</a>
          <a className="btn btn-ghost btn-sm" href="#philosophy">Philosophie</a>
          <a className="btn btn-primary btn-sm" href="#contact">Contact</a>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="text-center max-w-2xl mt-16 mb-10">
          <h1 className="text-5xl font-extrabold mb-4 text-primary">Counted</h1>
          <h2 className="text-xl font-light mb-6">L’alternative moderne, libre et éthique à Tricount</h2>
          <div className="mb-6">
            <span className="badge badge-lg badge-primary mr-2">Open Source</span>
            <span className="badge badge-lg badge-secondary mr-2">Gratuit</span>
            <span className="badge badge-lg badge-accent">Respect de la vie privée</span>
          </div>
          <p className="mb-8 text-base-content/80">
            <b>Counted</b> est une application de gestion de comptes entre amis, inspirée de Tricount, mais conçue pour aller plus loin&nbsp;: plus de fonctionnalités, aucune collecte de données, et un modèle de redistribution des bénéfices choisi par les utilisateurs.
          </p>
          <a className="btn btn-primary btn-lg" href="#contact">Rejoindre la communauté</a>
        </section>

        <section id="features" className="w-full max-w-3xl mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Fonctionnalités principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title">Développée en Rust</h4>
                <p>Performance, sécurité et fiabilité grâce à un langage moderne.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title">Aucune collecte de données</h4>
                <p>Vos informations restent privées, aucune exploitation commerciale.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title">Gratuit et sans pub</h4>
                <p>Utilisation 100% gratuite, sans publicité ni frais cachés.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h4 className="card-title">Redistribution éthique</h4>
                <p>Les utilisateurs choisissent où vont les bénéfices générés.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md md:col-span-2">
              <div className="card-body">
                <h4 className="card-title">Fonctionnalités avancées</h4>
                <p>Gestion des groupes, calculs automatiques, historique, export, et plus à venir.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="w-full max-w-3xl mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Notre philosophie</h3>
          <div className="mockup-window border bg-base-100 p-6">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box">Respect de la vie privée</div>
                <div className="timeline-middle">🔒</div>
              </li>
              <li>
                <div className="timeline-start timeline-box">Open source & transparent</div>
                <div className="timeline-middle">🌍</div>
              </li>
              <li>
                <div className="timeline-start timeline-box">Redistribution choisie par les utilisateurs</div>
                <div className="timeline-middle">🤝</div>
              </li>
              <li>
                <div className="timeline-start timeline-box">Développé en Rust</div>
                <div className="timeline-middle">🦀</div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="w-full max-w-xl mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center">Contact & communauté</h3>
          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center">
              <p className="mb-4">Envie de contribuer, de suivre le projet ou de donner votre avis&nbsp;?</p>
              <a className="btn btn-accent btn-wide" href="mailto:contact@counted.app">contact@counted.app</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-center p-4 bg-base-100 text-base-content border-t">
        <aside>
          <p>&copy; {new Date().getFullYear()} Counted – Conçu avec <span className="text-error">❤️</span> en Rust</p>
        </aside>
      </footer>
    </div>
  );
}
