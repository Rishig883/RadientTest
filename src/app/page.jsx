import { Faq } from '@/components/FAQ'
import { BentoCard } from '@/components/bento-card'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { Pricing } from '@/components/pricing'
import { Heading, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Process</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        How We Work: From Prospect to Meeting
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Step 1"
          title="Define Your Ideal Client Profile"
          description="We define your target audience by analyzing industry, company size, roles, and location to build a precise profile that guides every outreach."
          graphic={
            <div className="h-80 bg-[url(/screenshots/bento1big.png)] bg-cover bg-[center_top_0px] max-lg:h-70 max-lg:bg-[left_top]" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Step 2"
          title="Find and Verify Decision-Makers"
          description="We research and verify real decision-makers who match your target audience, checking every prospect for accuracy to ensure high-quality meetings."
          graphic={
            <div className="h-80 bg-[url(/screenshots/bento2big.png)] bg-cover bg-[center_top_0px] max-lg:h-70 max-lg:bg-[left_top]" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Step 3"
          title="Craft and Send Cold Emails"
          description="We send cold emails to business owners and book meetings with genuine interest."
          graphic={<LogoCluster />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Step 4"
          title="Book Qualified Meetings for You"
          description="We handle all communication and scheduling. You get notified only when a prospect agrees to meet."
          graphic={
            <div className="h-80 bg-[url(/screenshots/bento4.jpg)] bg-cover bg-[center_top_0px]" />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Step 5"
          title="Pay Only for Success"
          description="You pay only when a meeting actually happens. If a meeting is skipped, canceled, or the prospect doesn’t fit your target audience, you get a full refund."
          graphic={<LinkedAvatars />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

const timeline = [
  {
    name: 'We Research Your Ideal Clients',
    description:
      'We handpick verified decision-makers that match your ICP — no scraped lists, no spam.',
    date: 'Step 1',
    dateTime: 'Step 1',
  },
  {
    name: 'We Craft Personalized Cold Emails',
    description:
      'Our copywriters create human, data-backed emails that earn replies — not unsubscribes.',
    date: 'Step 2',
    dateTime: 'Step 2',
  },
  {
    name: 'We Book Meetings on Your Calendar',
    description:
      'Once a lead says yes, we handle scheduling through Calendly. You just show up to close.',
    date: 'Step 3',
    dateTime: 'Step 3',
  },
  {
    name: 'Finally We Book Meetings on Your Calendar',
    description:
      'Once a lead says yes, we handle scheduling through Calendly. You just show up to close.',
    date: 'Step 4',
    dateTime: 'Step 4',
  },
]

export function Process() {
  return (
    <div className="py-10 sm:py-22 sm:pt-32">
      <Container className="pb-8 sm:pb-14">
        <Subheading>Sales</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          Know more about your customers than they do.
        </Heading>
      </Container>
      <div className="mx-auto max-w-7xl px-6 lg:px-2">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm/6 font-semibold text-pink-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-[#DB7EDB] sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                {item.name}
              </p>
              <p className="mt-1 text-base/7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main className="!bg-gray-100">
        <Container className="bg-gray-100 pt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gray-100 pt-16 pb-16 md:pt-32 md:pb-32" id="process">
          <BentoSection />
        </div>
        <div id="pricing">
          <Pricing />
        </div>

        <div>{/* <Testimonials /> */}</div>
        <div id="faq">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  )
}
