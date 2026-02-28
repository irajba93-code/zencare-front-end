import { useFadeIn } from "@/hooks/useFadeIn";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bone,
  Zap,
  Brain,
  AlignVerticalJustifyCenter,
  Dumbbell,
  Briefcase,
  StretchHorizontal,
  Hand,
  Move,
  ClipboardCheck,
  Heart,
  Shield,
} from "lucide-react";

const conditions = [
  { icon: Bone, label: "Back & neck pain" },
  { icon: Zap, label: "Sciatica" },
  { icon: Brain, label: "Headaches & migraines" },
  { icon: AlignVerticalJustifyCenter, label: "Postural dysfunction" },
  { icon: Dumbbell, label: "Sports injuries" },
  { icon: Briefcase, label: "Workplace strain" },
  { icon: StretchHorizontal, label: "Joint stiffness & mobility" },
];

const treatments = [
  { icon: Bone, label: "Spinal adjustments" },
  { icon: Hand, label: "Manual manipulation" },
  { icon: AlignVerticalJustifyCenter, label: "Postural correction" },
  { icon: Move, label: "Corrective movement guidance" },
  { icon: Heart, label: "Soft tissue therapy" },
  { icon: ClipboardCheck, label: "Ergonomic recommendations" },
  { icon: Shield, label: "Preventative spine care" },
];

const ServicesSection = () => {
  const ref = useFadeIn();

  return (
    <section id="services" className="bg-secondary/40 py-20 md:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Services Overview
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Focused on structural alignment and long-term spinal stability.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Conditions */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Conditions Addressed
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {conditions.map((c) => (
                  <li key={c.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <c.icon size={18} className="shrink-0 text-primary" />
                    {c.label}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Treatments */}
          <Card className="border-border/60 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h3 className="mb-6 text-lg font-semibold text-foreground">
                Treatment Methods
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {treatments.map((t) => (
                  <li key={t.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <t.icon size={18} className="shrink-0 text-primary" />
                    {t.label}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
