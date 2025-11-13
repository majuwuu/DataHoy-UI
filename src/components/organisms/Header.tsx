import { Menu, Search } from "lucide-react";
import { Button, Input } from "../atoms";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-8">
            <button className="lg:hidden">
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <h1 className="tracking-tight">Data</h1>
                <span className="text-slate-600">Hoy</span>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:block">Domingo, 9 de Noviembre 2025</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Buscar noticias..." 
                className="pl-10 border-0 bg-muted/50"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="default" className="hidden md:block bg-slate-900 hover:bg-slate-800">
              Suscribirse
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 py-4 border-t overflow-x-auto text-sm">
          <a href="#" className="text-foreground hover:text-slate-600 whitespace-nowrap transition-colors">
            Fútbol
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Básquetbol
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Tenis
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Automovilismo
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Ciclismo
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Natación
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Estadísticas
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground whitespace-nowrap transition-colors">
            Análisis
          </a>
        </nav>
      </div>
    </header>
  );
}

export const editorMeta = {
  displayName: 'Header',
};
