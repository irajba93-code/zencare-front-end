import { useFadeIn } from "@/hooks/useFadeIn";
import { User, Award, Brain, Dumbbell, MonitorSmartphone, Activity } from "lucide-react";

const specializations = [
  { icon: Activity, label: "Spinal biomechanics" },
  { icon: Brain, label: "Chronic back & neck pain" },
  { icon: MonitorSmartphone, label: "Postural correction" },
  { icon: Dumbbell, label: "Sports & occupational strain" },
  { icon: Award, label: "Functional movement optimization" },
];

const AboutSection = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-20 md:py-28">
      <div ref={ref} className="fade-in-section container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="flex h-72 w-56 items-center justify-center rounded-2xl bg-secondary md:h-96 md:w-72">
              <User size={64} className="text-muted-foreground/40" />
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Dr. Michael Carter, DC
            </h2>
            <p className="mt-1 text-sm font-medium text-primary">
              Doctor of Chiropractic · 11+ years clinical experience
            </p>

            <ul className="mt-8 space-y-3">
              {specializations.map((s) => (
                <li key={s.label} className="flex items-center gap-3 text-muted-foreground">
                  <s.icon size={18} className="shrink-0 text-primary" />
                  <span className="text-sm">{s.label}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-2 border-accent pl-4 italic text-muted-foreground">
              "Address structural imbalances at their source."
            </blockquote>

            <p className="mt-6 text-sm text-muted-foreground">
              Personalized care plans are developed after initial evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
