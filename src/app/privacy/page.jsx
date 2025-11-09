import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading } from '@/components/text'

export const metadata = {
  title: 'Privacy Policy – Calavor',
  description:
    'Learn how Calavor collects, uses, and protects your personal information. Your privacy is important to us.',
}

function Header() {
  return (
    <Container className="mt-20 mb-16 text-center">
      <Heading as="h1">Privacy Policy</Heading>
      <section className="mt-16 flex justify-center">
        <div className="max-w-3xl space-y-8 text-left text-gray-700">
          <p></p>

          <p>
            At <strong>Calavor</strong>, we value your privacy and are committed
            to protecting your personal information. This Privacy Policy
            explains how we collect, use, and protect your data when you visit
            our website or use our services. By using our site, you agree to
            this Privacy Policy.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            1. Information We Collect
          </h2>
          <p>
            We collect information to provide and improve our services. This may
            include contact details such as your name, email, phone number, and
            company information, as well as payment information processed
            securely by our payment providers.
          </p>
          <p>
            We also automatically collect non-identifiable information such as
            IP address, browser type, and site usage statistics through cookies
            and analytics tools.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to deliver services, process payments,
            communicate with you, personalize user experience, and improve our
            website. We do not sell your data to third parties.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            3. Sharing of Information
          </h2>
          <p>
            We may share your data with trusted service providers who assist in
            operating our business—such as analytics, email delivery, and
            payment processing. These partners are obligated to keep your
            information secure and confidential.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">4. Data Retention</h2>
          <p>
            We retain your data only as long as necessary to provide our
            services and meet legal obligations. You may request deletion of
            your information at any time by contacting us.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data,
            and to withdraw consent for communications. To exercise your rights,
            please email us at <strong>privacy@calavor.com</strong>.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            6. Cookies and Tracking
          </h2>
          <p>
            We use cookies to enhance your browsing experience and analyze
            traffic. You can disable cookies in your browser settings, but some
            site features may not function properly.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">7. Data Security</h2>
          <p>
            We use encryption, secure servers, and other safeguards to protect
            your information. However, no system is completely secure, and you
            use our website at your own risk.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            8. International Data Transfers
          </h2>
          <p>
            If you are located outside the U.S., your data may be processed in
            the United States or other countries where our partners operate. We
            ensure that adequate safeguards are in place.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            9. Children’s Privacy
          </h2>
          <p>
            Calavor does not knowingly collect data from anyone under 16 years
            of age. If we learn that we have collected such data, we will delete
            it promptly.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. The updated version
            will be posted on this page with a new “Last Updated” date. Please
            review this page regularly.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">11. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Calavor</strong>
            <br />
            Email:{' '}
            <a
              href="mailto:privacy@calavor.com"
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

export default function Company() {
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
