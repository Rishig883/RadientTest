import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export const metadata = {
  title: 'Terms of Service – Calavor',
  description:
    'Read the Terms of Service for Calavor. Understand your rights, responsibilities, and the conditions for using our services.',
}

function Header() {
  return (
    <Container className="mt-16 text-center">
      <Heading as="h1">Terms of Service</Heading>
      <section className="mt-16 mb-20 flex justify-center">
        <div className="max-w-3xl space-y-8 text-left text-gray-700">
          <p></p>

          <p>
            Welcome to <strong>Calavor</strong>. These Terms of Service
            (“Terms”) govern your access to and use of our website, services,
            and products. By using our site or purchasing services from Calavor,
            you agree to these Terms. If you do not agree, please do not use our
            website or services.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">1. Overview</h2>
          <p>
            Calavor helps B2B companies book qualified sales meetings with
            decision-makers. Our services include prospect research,
            personalized outreach, and meeting scheduling. You pay only for
            successfully completed meetings that meet your target audience
            criteria.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">2. Eligibility</h2>
          <p>
            You must be at least 18 years old and authorized to act on behalf of
            a business entity to use our services. By engaging with Calavor, you
            represent that all information you provide is accurate and truthful.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">3. Use of Services</h2>
          <p>
            You agree to use Calavor’s services only for lawful business
            purposes and in accordance with these Terms. You are responsible for
            ensuring that your use of our services complies with all applicable
            laws and regulations.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            4. Payment and Refunds
          </h2>
          <p>
            Calavor operates on a performance-based pricing model. You agree to
            pay for each qualified meeting as outlined on our pricing page.
            Payments are processed securely through our payment partners.
          </p>
          <p>
            You will receive a <strong>full refund</strong> if a scheduled
            meeting is canceled, skipped, or if the prospect does not match your
            defined target audience. Refund requests must be submitted within
            seven (7) days of the meeting date.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            5. Client Responsibilities
          </h2>
          <p>To ensure campaign success, you agree to:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Provide accurate information about your ideal client profile.
            </li>
            <li>Respond promptly to meeting requests and confirmations.</li>
            <li>
              Respect all scheduled meeting times and provide feedback when
              requested.
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">
            6. Intellectual Property
          </h2>
          <p>
            All content on the Calavor website, including text, graphics, logos,
            and software, is owned by or licensed to Calavor and protected by
            copyright and trademark laws. You may not copy, modify, or reuse
            content without written permission.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">7. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of any
            proprietary information shared during the business relationship,
            including client data, lead lists, and communications. Confidential
            information will not be disclosed to third parties without consent,
            except as required by law.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            8. Disclaimer of Warranties
          </h2>
          <p>
            Calavor provides services on an “as is” and “as available” basis. We
            do not guarantee specific outcomes or business results. We make no
            warranties, express or implied, regarding the accuracy, reliability,
            or suitability of the services for your specific needs.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            9. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Calavor and its affiliates
            shall not be liable for any indirect, incidental, special, or
            consequential damages arising out of or related to the use of our
            services, including lost profits, data, or business opportunities.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">10. Termination</h2>
          <p>
            Calavor reserves the right to suspend or terminate access to our
            services at any time if you violate these Terms or engage in
            activities that harm our business or reputation.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of California, without regard to its conflict
            of law provisions. Any disputes shall be resolved in the courts
            located in California, USA.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">12. Changes to Terms</h2>
          <p>
            Calavor may update these Terms from time to time. Updates will be
            posted on this page with a revised “Last Updated” date. Continued
            use of our website or services after changes are posted constitutes
            acceptance of the revised Terms.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">13. Contact Us</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p>
            <strong>Calavor</strong>
            <br />
            Email:{' '}
            <a
              href="mailto:legal@calavor.com"
              className="text-blue-600 underline"
            >
              info@calavor.com
            </a>
            <br />
            Website:{' '}
            <a href="https://calavor.com" className="text-blue-600 underline">
              www.calavor.com
            </a>
          </p>
        </div>
      </section>
    </Container>
  )
}

export default function TermsOfService() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Footer />
    </main>
  )
}
