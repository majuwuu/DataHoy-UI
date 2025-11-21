import { HeaderGlobal } from "../components/organisms/Header";
import { HeroSlider } from "../components/organisms/HeroSlider";
import { NewsCard } from "../components/organisms/NewsCard";
import { TrendingCard } from "../components/organisms/TrendingCard";
import { AdSpace } from "../components/organisms/AdSpace";
import { Separator } from "../components/atoms";
import { BarChart3 } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Champions League: Los datos predicen un final histórico con dominio táctico sin precedentes",
    description: "Análisis estadístico revela que la final podría ser la más disputada de la década, con métricas de posesión y precisión de pase alcanzando niveles récord.",
    category: "Fútbol • Champions League",
    time: "Hace 15 minutos",
    image: "https://images.unsplash.com/photo-1641729908434-d06650d34b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBtYXRjaCUyMHN0YWRpdW18ZW58MXx8fHwxNzYyNjE4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "NBA: El triple revoluciona el juego - Aumenta 45% en cinco temporadas",
    description: "Estudio exhaustivo de datos muestra cómo el baloncesto moderno ha transformado su estrategia ofensiva, priorizando los lanzamientos de tres puntos.",
    category: "Básquetbol • NBA",
    time: "Hace 1 hora",
    image: "https://images.unsplash.com/photo-1616353352910-15d970ac020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZXxlbnwxfHx8fDE3NjI2NDE0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const newsArticles = [
  {
    id: 1,
    title: "La Premier League rompe récords: 3.2 goles por partido en la temporada actual",
    description: "Datos históricos confirman que esta es la temporada más ofensiva en 15 años, con estadísticas de xG que superan todas las expectativas.",
    category: "Fútbol",
    time: "Hace 3 horas",
    author: "Carlos Ruiz",
    image: "https://images.unsplash.com/photo-1641729908434-d06650d34b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBtYXRjaCUyMHN0YWRpdW18ZW58MXx8fHwxNzYyNjE4NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "NFL: Los quarterbacks completan el 68% de pases, máximo histórico",
    description: "Análisis estadístico muestra evolución en la precisión de los lanzamientos gracias a nuevas estrategias ofensivas y entrenamiento.",
    category: "Fútbol Americano",
    time: "Hace 5 horas",
    author: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1642189523635-912d71d9cf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGFtZXJpY2FufGVufDF8fHx8MTc2MjY1ODg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const trendingNews = [
  {
    id: 1,
    rank: 1,
    title: "Lionel Messi alcanza 800 goles: Análisis estadístico de su carrera completa",
    time: "Hace 30 minutos",
    category: "Fútbol"
  },
  {
    id: 2,
    rank: 2,
    title: "LeBron James supera récord histórico: 40,000 puntos en la NBA",
    time: "Hace 2 horas",
    category: "Básquetbol"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderGlobal />
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />
      <main className="container mx-auto px-4 lg:px-8 py-12 max-w-7xl">
        {/* Top Leaderboard Ad */}
        <div className="mb-12">
          <AdSpace size="leaderboard" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Mid-content Ad */}
            <div className="mb-12">
              <AdSpace size="banner" />
            </div>

            {/* Latest News Grid */}
            <section>
              <div className="flex items-center justify-between mb-8 pb-4 border-b">
                <h2 className="tracking-tight">Últimas noticias</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
                {newsArticles.slice(0, 2).map(article => (
                  <NewsCard 
                    key={article.id}
                    {...article}
                  />
                ))}
              </div>
            </section>
          </div>
          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              {/* Sidebar Ad */}
              <AdSpace size="rectangle" />
              <Separator />
              {/* Trending */}
              <section>
                <div className="flex items-center gap-2 mb-6 pb-3 border-b">
                  <BarChart3 className="h-5 w-5 text-slate-900" />
                  <h3>Más leídas</h3>
                </div>
                <div className="space-y-0">
                  {trendingNews.map(news => (
                    <TrendingCard 
                      key={news.id}
                      {...news}
                    />
                  ))}
                </div>
              </section>
              <Separator />
              {/* Newsletter */}
              <section className="bg-slate-50 p-6 border">
                <h3 className="mb-3">Boletín deportivo</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Recibe cada día las estadísticas y análisis más importantes del mundo deportivo.
                </p>
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="w-full px-4 py-2.5 border mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
                <button className="w-full bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800 transition-colors text-sm">
                  Suscribirse
                </button>
                <p className="text-xs text-muted-foreground mt-3">
                  Al suscribirte, aceptas nuestra política de privacidad.
                </p>
              </section>
              <Separator />
              {/* Sidebar Ad - Rectangle */}
              <AdSpace size="rectangle" />
              <Separator />
              {/* About Data */}
              <section className="border-l-2 border-slate-900 pl-4">
                <h4 className="mb-3 text-sm">Sobre DataHoy</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Periodismo deportivo basado en estadísticas y análisis de datos. Revelamos las historias detrás de los números del deporte.
                </p>
              </section>
            </div>
          </aside>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-24 border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-16 max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-baseline gap-1 mb-4">
                <h3>Data</h3>
                <span className="text-slate-400">Hoy</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Periodismo deportivo basado en datos. Estadísticas, análisis y visualizaciones que revelan la verdad del deporte. Desde 2025.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm">Deportes</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Fútbol</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Básquetbol</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tenis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Automovilismo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm">Más</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Ciclismo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Natación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Estadísticas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Análisis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm">Sobre nosotros</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Quiénes somos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Metodología</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-800 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2025 DataHoy.net — Todos los derechos reservados</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
