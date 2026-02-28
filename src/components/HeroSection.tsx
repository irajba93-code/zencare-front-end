import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBookClick: () => void;
}

const HeroSection = ({ onBookClick }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Aurora glow — layered for stronger impact */}
      <div className="aurora-glow pointer-events-none absolute inset-0" />
      <div className="aurora-glow-hero pointer-events-none absolute inset-0" />

      <div className="container relative mx-auto px-4 py-24 text-center md:py-36 lg:py-44 lg:px-8">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Structural alignment for{" "}
          <span className="text-primary">lasting spinal health</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
          Evidence-informed chiropractic care in San Diego.
        </p>
        <Button onClick={onBookClick} size="lg" className="mt-10 px-8 text-base">
          Book Your Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
