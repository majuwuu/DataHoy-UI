import { Menu, Search } from "lucide-react";
import { Button, Input } from "../atoms";

type NavItem = {
  label: string;
  href?: string;
  className?: string;
  subItems?: NavItem[];
};

type HeaderProps = {
  date?: string;
  searchPlaceholder?: string;
  navItems?: NavItem[];
  showSubscribe?: boolean;
  subscribeLabel?: string;
};

const defaultNav: NavItem[] = [
  { label: "Fútbol", href: "#" },
  { label: "Básquetbol", href: "#" },
  { label: "Tenis", href: "#" },
  { label: "Automovilismo", href: "#" },
  { label: "Ciclismo", href: "#" },
  { label: "Natación", href: "#" },
  { label: "Estadísticas", href: "#" },
  { label: "Análisis", href: "#" },
];

export function HeaderGlobal({ date = "", searchPlaceholder = "Buscar noticias...", navItems = defaultNav, showSubscribe = true, subscribeLabel = "Suscribirse" }: HeaderProps) {
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
              {date ? <span className="text-xs text-muted-foreground hidden sm:block">{date}</span> : null}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={searchPlaceholder}
                className="pl-10 border-0 bg-muted/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {showSubscribe ? (
              <Button variant="default" className="hidden md:block bg-slate-900 hover:bg-slate-800">
                {subscribeLabel}
              </Button>
            ) : null}
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 py-4 border-t overflow-x-auto text-sm">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              {item.subItems && item.subItems.length > 0 ? (
                <button
                  aria-haspopup="true"
                  className={`${item.className ?? "text-muted-foreground hover:text-foreground"} whitespace-nowrap transition-colors`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href ?? "#"}
                  className={`${item.className ?? "text-muted-foreground hover:text-foreground"} whitespace-nowrap transition-colors`}
                >
                  {item.label}
                </a>
              )}

              {item.subItems && item.subItems.length > 0 ? (
                <div className="absolute left-0 mt-2 hidden group-hover:block w-48 bg-white border rounded-md shadow-lg z-50 py-2">
                  {item.subItems.map((sub, sidx) => (
                    <a
                      key={sidx}
                      href={sub.href ?? "#"}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export const editorMeta = {
  displayName: "Header",
};
