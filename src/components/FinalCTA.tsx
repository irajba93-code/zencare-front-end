import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  onBookClick: () => void;
}

const FinalCTA = ({ onBookClick }: FinalCTAProps) => {
  const ref = useFadeIn();

  return (
    <section className="relative py-20 md:py-28">
      <div className="aurora-glow pointer-events-none absolute inset-0" />
      <div ref={ref} className="fade-in-section container relative mx-auto px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Take the first step toward better spinal health
        </h2>
        <Button onClick={onBookClick} size="lg" className="mt-8 px-8 text-base">
          Book Your Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
