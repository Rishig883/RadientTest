'use client'

import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Only qualified, high-value businesses',
  'Direct access to decision-makers',
  'Meetings booked to your calendar',
  'High-intent prospects',
]

export function Pricing() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/calavor/30min',
      })
    }
  }
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="pricing2">
        <Container>
          <Subheading dark>Pricing</Subheading>
          <Heading as="h3" dark className="mt-2 max-w-3xl">
            Predictable Pricing for Predictable Growth.
          </Heading>
        </Container>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gray-800/50 ring-1 ring-white/10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              Performance-based pricing
            </h3>
            <p className="mt-6 text-base/7 text-gray-300">
              One simple, transparent rate per qualified meeting. You invest
              only in results: every meeting is a real opportunity to grow your
              business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-pink-500">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-white/10" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-300 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-pink-500"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center inset-ring inset-ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-400">
                  Cost per qualified meeting
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    $150
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-400">
                    USD
                  </span>
                </p>
                <a
                  onClick={openCalendly}
                  className="mt-10 block w-full rounded-md bg-pink-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-none hover:bg-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
                >
                  Start Booking Meetings
                </a>
                <p className="mt-6 text-xs/5 text-gray-400">
                  Pay only for successful meetings. 100% refund for
                  cancellations or unqualified leads.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl bg-gray-800/50 p-8 ring-1 ring-white/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
          <div className="lg:min-w-0 lg:flex-1" id="offer">
            <h3 className="text-base/7 font-semibold text-white">
              <span className="text-pink-500">Intro Offer:</span> Book Your
              First 3 Meetings for Free.
            </h3>
            <p className="mt-2 text-base/7 text-gray-400">
              Get your first three qualified meetings with real decision-makers
              for Free. Afterward, continue at our standard rate. <br />
              Same process. Same guarantees. Exceptional value.
            </p>
          </div>
          <a
            onClick={openCalendly}
            className="mt-1 rounded-md bg-pink-500 px-3.5 py-2 text-sm/6 font-semibold text-white inset-ring inset-ring-white/5 hover:bg-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
          >
            Claim Offer <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
