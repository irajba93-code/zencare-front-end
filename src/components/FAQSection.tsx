import { useFadeIn } from "@/hooks/useFadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a referral?",
    a: "No referral is required. You can book directly through this website or by calling the clinic.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, loose-fitting clothing is recommended. This allows for a thorough postural and spinal assessment.",
  },
  {
    q: "How many sessions will I need?",
    a: "This varies by individual. A personalized care plan is developed after your initial evaluation, with clear recommendations provided.",
  },
  {
    q: "Is parking available?",
    a: "Yes. Free parking is available directly adjacent to the clinic entrance.",
  },
  {
    q: "Do you accept insurance?",
    a: "We accept most major insurance plans. Contact the clinic to confirm coverage for your provider.",
  },
];

const FAQSection = () => {
  const ref = useFadeIn();

  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div ref={ref} className="fade-in-section container mx-auto max-w-2xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
