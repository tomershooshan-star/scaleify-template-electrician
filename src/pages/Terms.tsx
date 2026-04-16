import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { SEO } from "@/components/SEO";
import { site } from "@/config/site";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      <Navigation />
      <main className="container-x py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold">Terms of Service</h1>
          <p className="mt-2 text-sm text-brand-black/60">
            Effective: {new Date().toLocaleDateString()}
          </p>

          <section className="mt-10 space-y-6 text-brand-black/80">
            <p>
              These Terms of Service ("Terms") govern your use of the {site.brand} website and services. By booking a service or using this site, you agree to these Terms.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">1. Services</h2>
            <p>
              {site.brand} provides licensed electrical services including repairs, installations, upgrades, and inspections. All work is performed by licensed, insured professionals.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">2. Estimates & Pricing</h2>
            <p>
              Written estimates are provided in advance and are valid for 30 days unless otherwise stated. The final invoice matches the estimate unless scope changes are approved in writing (including text).
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">3. Scheduling & Cancellations</h2>
            <p>
              Appointments can be rescheduled or cancelled at no charge with at least 4 hours notice. Missed appointments without notice may incur a dispatch fee.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">4. Workmanship Warranty</h2>
            <p>
              We warrant our workmanship for the lifetime of the installed work against defects caused by our labor. Manufacturer warranties pass through directly to you on all equipment and materials installed.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">5. Permits & Code Compliance</h2>
            <p>
              Where required, we pull appropriate permits and ensure work meets or exceeds applicable electrical codes. You are responsible for providing accurate property information at time of booking.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">6. Payment</h2>
            <p>
              Payment is due upon completion of work unless otherwise agreed in writing. We accept credit, debit, ACH, and major digital payment methods. Late payments may accrue interest at the maximum rate permitted by law.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, {site.brand}'s liability is limited to the amount paid for the service. We are not liable for indirect, incidental, or consequential damages. This does not limit liability for injury caused by our negligence or willful misconduct.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">8. Access to Property</h2>
            <p>
              You agree to provide reasonable and safe access to the premises and to disclose any known hazards. We reserve the right to pause or decline work if a site presents unsafe conditions until resolved.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">9. Intellectual Property</h2>
            <p>
              All content on this website (text, images, logos) is the property of {site.brand} or its licensors and may not be used without written permission.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state in which services are provided. Any disputes will be resolved in that state's courts.
            </p>

            <h2 className="font-display text-2xl font-bold text-brand-black">11. Contact</h2>
            <p>
              Questions? <a href={`mailto:${site.email}`} className="underline">{site.email}</a> or {site.phone}.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
