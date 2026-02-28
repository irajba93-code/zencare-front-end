import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ConsultationSectionProps {
  onBookClick: () => void;
}

const includes = [
  "Reviews spinal alignment and posture",
  "Identifies biomechanical imbalances",
  "Highlights opportunities to reduce strain",
  "Provides structured clinical recommendations",
];

const leaves = [
  "Clear next steps",
  "Personalized structural insight",
  "Better understanding of spinal health",
];

const whoFor = [
  "Persistent back or neck discomfort",
  "Tension headaches",
  "Desk professionals",
  "Athletes",
  "Recurring spinal stiffness",
];

const steps = [
  { num: "1", text: "Brief discussion" },
  { num: "2", text: "Posture & spinal assessment" },
  { num: "3", text: "Clear recommendation" },
  { num: "4", text: "No pressure" },
];

const ConsultationSection = ({ onBookClick }: ConsultationSectionProps) => {
  const ref = useFadeIn();

  return (
    <section id="consultation" className="relative py-20 md:py-28">
      <div className="aurora-glow-bottom pointer-events-none absolute inset-0" />

      <div ref={ref} className="fade-in-section container relative mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Free Spine & Posture Consultation
        </h2>

        {/* What it includes */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">What the consultation includes</h3>
          <ul className="mt-4 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What you leave with */}
        <div className="mx-auto mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">What you leave with</h3>
          <ul className="mt-4 space-y-3">
            {leaves.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Who it's for */}
        <div className="mx-auto mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">Who it's for</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {whoFor.map((item) => (
              <span
                key={item}
                className="inline-block rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h3 className="text-lg font-semibold text-foreground">The process</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-xl border border-border/60 bg-card p-5 text-center shadow-sm">
                <span className="text-2xl font-bold text-primary">{step.num}</span>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm italic text-muted-foreground">
          This is a professional evaluation, not a sales presentation.
        </p>

        <div className="mt-10 text-center">
          <Button onClick={onBookClick} size="lg" className="px-8 text-base">
            Book Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
