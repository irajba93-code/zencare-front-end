import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

interface HeaderProps {
  onBookClick: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Consultation", href: "#consultation" },
  { label: "FAQ", href: "#faq" },
];

const Header = ({ onBookClick }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Zen<span className="text-primary">Care</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button onClick={onBookClick} size="sm">
            Book Your Free Consultation
          </Button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
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
            <Button
              onClick={() => {
                setMobileOpen(false);
                onBookClick();
              }}
              className="mt-2 w-full"
            >
              Book Your Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
