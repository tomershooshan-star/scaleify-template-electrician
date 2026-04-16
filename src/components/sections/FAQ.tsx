import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { faqs } from "@/config/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-black sm:text-5xl">
              Frequently asked questions.
            </h2>
          </div>

          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-0"
            className="mt-12 space-y-3"
          >
            {faqs.map((f, i) => (
              <Accordion.Item
                key={f.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white data-[state=open]:border-brand-yellow/50 data-[state=open]:shadow-sm"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-brand-black",
                      "transition hover:bg-muted/30",
                      "[&[data-state=open]>svg]:rotate-45"
                    )}
                  >
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-brand-black/60 transition" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-5 text-sm leading-relaxed text-brand-black/70">
                    {f.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
