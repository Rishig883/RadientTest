import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What exactly does Calavor do?',
    answer:
      'Calavor helps B2B companies book qualified sales meetings with real decision-makers. We handle prospect research, personalized outreach, and scheduling so you can focus on closing deals instead of finding them.',
  },
  {
    question: 'Who is this service best suited for?',
    answer:
      'Our service is designed for B2B businesses, agencies, and sales teams that want consistent meetings with ideal clients without managing cold outreach themselves.',
  },
  {
    question:
      'How is Calavor different from lead lists or appointment setters?',
    answer:
      'We don’t buy or scrape email lists. Every prospect is manually verified and every email is personalized. You only pay when a qualified meeting actually happens, not for leads or messages.',
  },
  {
    question: 'What makes a meeting qualified?',
    answer:
      'A qualified meeting means the person you’re meeting with matches your target audience and has real decision-making authority. If they don’t meet those standards, you don’t pay.',
  },
  {
    question: 'How soon can I expect my first meetings?',
    answer:
      'Most clients begin seeing booked meetings within 7 to 14 days of launch. Timelines can vary based on your target audience and campaign setup.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply book a quick call with us to review your goals. We’ll define your target audience, launch your campaign, and start delivering qualified meetings right to your calendar.',
  },
]

export function Faq() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-open:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-400">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
