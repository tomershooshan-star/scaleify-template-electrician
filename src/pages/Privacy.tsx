import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { site } from "@/config/site";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      <Navigation />
      <main className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-3xl prose prose-neutral">
          <h1 className="font-display text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-brand-black/60">
            Effective: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-10 space-y-6 text-brand-black/80">
            <p>
              {site.brand} ("we," "our," or "us") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights. By using our website or services, you agree to the practices described here.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">1. Information We Collect</h2>
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-6">
              <li>Name, phone, email, and address when you request a quote, book a service, or contact us</li>
              <li>Service history and preferences to help us serve you better</li>
              <li>Payment details processed securely through third-party processors (we do not store card numbers)</li>
            </ul>
            <p>
              We also automatically collect limited technical data when you visit our website, such as IP address, browser type, pages viewed, and referral source, via cookies and similar technologies.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">2. How We Use Information</h2>
            <ul className="list-disc pl-6">
              <li>Respond to inquiries and dispatch technicians</li>
              <li>Process service bookings, estimates, and payments</li>
              <li>Send appointment reminders, service updates, and post-service follow-ups</li>
              <li>Improve our website, operations, and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-black">3. SMS & Phone Communications</h2>
            <p>
              When you submit a phone number through our website or provide it to a representative, you agree to receive service-related calls and text messages from {site.brand}. Message and data rates may apply. Reply STOP at any time to opt out of marketing SMS. Transactional service messages (appointment confirmations, technician dispatch, etc.) may continue as they relate to active services you requested.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">4. Sharing of Information</h2>
            <p>We do not sell personal information. We share data only with:</p>
            <ul className="list-disc pl-6">
              <li>Service providers who help us operate (scheduling, payment processing, SMS, email)</li>
              <li>Legal authorities when required by law</li>
              <li>Professional advisors under confidentiality obligations</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-brand-black">5. Cookies</h2>
            <p>
              We use cookies to remember preferences, understand how our site is used, and improve performance. You can disable cookies in your browser settings, though some features may not work as intended.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">6. Data Security</h2>
            <p>
              We use commercially reasonable technical and organizational safeguards to protect your data. No system is 100% secure, but we work to protect your information.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict use of your personal data. To exercise any of these rights, contact us at {site.email}.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">8. Children</h2>
            <p>
              Our services are not directed to children under 13, and we do not knowingly collect their information.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">9. Changes</h2>
            <p>
              We may update this policy from time to time. Material changes will be posted on this page with an updated effective date.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">10. Contact</h2>
            <p>
              Questions? Contact {site.brand} at <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or call {site.phone}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
