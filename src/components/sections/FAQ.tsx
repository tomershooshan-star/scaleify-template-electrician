import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/config/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">FAQ</span>
            <h2 className="display-xl mt-5 text-brand-navy">
              Frequently asked <em className="italic text-brand-red">questions</em>.
            </h2>
            <p className="mt-6 max-w-sm font-grotesk text-[17px] leading-relaxed text-brand-navy/55">
              Still have a question? Call us directly. A real person answers — 24/7.
            </p>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-t border-brand-navy/10"
          >
            {faqs.map((f, i) => (
              <Accordion.Item
                key={f.q}
                value={`item-${i}`}
                className="border-b border-brand-navy/10"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "flex w-full items-center justify-between gap-6 py-6 text-left font-grotesk text-lg font-semibold text-brand-navy",
                      "transition hover:text-brand-red",
                      "[&[data-state=open]>svg]:rotate-45 [&[data-state=open]>svg]:text-brand-red"
                    )}
                  >
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand-navy/50 transition" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-6 pr-8 font-grotesk text-[15px] leading-relaxed text-brand-navy/65">
                    {f.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
