import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-card py-14">
      <div className="container mx-auto grid gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Zen<span className="text-primary">Care</span>
          </span>
          <p className="mt-2 text-sm text-muted-foreground">
            Chiropractic care focused on structural alignment and long-term spinal health.
          </p>
        </div>

        {/* Address */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
            <span>1234 Wellness Blvd, Suite 200<br />San Diego, CA 92101</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="shrink-0 text-primary" />
            <span>(619) 555-0100</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="shrink-0 text-primary" />
            <span>info@zencarechiro.com</span>
          </div>
        </div>

        {/* Hours */}
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <Clock size={16} className="text-primary" />
            Business Hours
          </div>
          <p>Mon – Fri: 8 AM – 6 PM</p>
          <p>Saturday: 9 AM – 1 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Social */}
        <div>
          <p className="text-sm font-medium text-foreground">Follow Us</p>
          <div className="mt-3 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 border-t border-border/60 px-4 pt-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ZenCare Chiropractic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
