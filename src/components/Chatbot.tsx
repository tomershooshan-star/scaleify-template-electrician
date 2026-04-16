import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";

type Msg = { from: "bot" | "user"; text: string };

const INITIAL: Msg[] = [
  {
    from: "bot",
    text: `Hi! I'm the ${site.brand} assistant. How can I help — booking, pricing, or emergency?`,
  },
];

const QUICK = ["Book a service", "Get pricing", "Emergency", "Talk to a human"];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(INITIAL);
  const [text, setText] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function send(input: string) {
    const t = input.trim();
    if (!t) return;
    const userMsg: Msg = { from: "user", text: t };
    setMsgs((m) => [...m, userMsg]);
    setText("");
    setTimeout(() => {
      const botReply = generateReply(t);
      setMsgs((m) => [...m, { from: "bot", text: botReply }]);
    }, 420);
  }

  return (
    <>
      <button
        onClick={() => setOpen((x) => !x)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-black shadow-2xl transition hover:scale-105 hover:bg-brand-yellowDark"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand-black px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">{site.brand}</div>
                <div className="text-[10px] text-white/60">Typically replies in minutes</div>
              </div>
            </div>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-1 rounded-full bg-brand-yellow/20 px-3 py-1 text-xs font-semibold text-brand-yellow"
            >
              <Phone className="h-3 w-3" />
              Call
            </a>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-muted/20 px-4 py-4 text-sm">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}
              >
                <div
                  className={
                    m.from === "bot"
                      ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-brand-black shadow-sm"
                      : "max-w-[85%] rounded-2xl rounded-br-sm bg-brand-black px-3 py-2 text-white"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-2 border-t border-black/5 bg-white px-3 py-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="rounded-full border border-black/10 bg-muted/40 px-3 py-1 text-xs font-medium text-brand-black hover:border-brand-yellow hover:bg-brand-yellow/10"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <form
            className="flex items-center gap-2 border-t border-black/10 bg-white p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(text);
            }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-brand-black placeholder:text-brand-black/40 focus:border-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow/30"
            />
            <Button type="submit" size="sm" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

function generateReply(text: string) {
  const t = text.toLowerCase();
  if (/\b(emergency|urgent|now|asap|right now)\b/.test(t)) {
    return `For emergencies, call us directly at ${site.phone} — we're available 24/7 and can dispatch a licensed electrician fast.`;
  }
  if (/\b(price|cost|how much|quote|estimate)\b/.test(t)) {
    return "Most residential repairs land between $150–$600 with flat-rate pricing in writing. We can give a precise quote on-site — free. Want to book a free estimate?";
  }
  if (/\b(book|schedule|appointment)\b/.test(t)) {
    return `Easiest path: submit the contact form below or call ${site.phone}. We confirm within 15 minutes during business hours.`;
  }
  if (/\b(human|real|person|agent|someone)\b/.test(t)) {
    return `Absolutely — call ${site.phone} and you'll reach a real person immediately. Or drop your number in the contact form and we'll ring you back within 15 minutes.`;
  }
  return `Great question. The fastest way to get a clear answer is a 2-minute call — ${site.phone}. Or tell me a bit more about what you're dealing with?`;
}
