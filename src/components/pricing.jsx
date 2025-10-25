import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export function Pricing() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Container>
          <Subheading dark>Pricing</Subheading>
          <Heading as="h3" dark className="mt-2 max-w-3xl">
            Customer outreach has never been easier.
          </Heading>
        </Container>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none dark:bg-gray-800/50 dark:ring-white/10">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
              amet indis perferendis blanditiis repellendus etur quidem
              assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-white/10" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6 dark:text-gray-300"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-gray-900 dark:inset-ring-white/10">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600 dark:text-gray-400">
                  Pay once, own it forever
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    $349
                  </span>
                  <span className="text-sm/6 font-semibold tracking-wide text-gray-600 dark:text-gray-400">
                    USD
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs/5 text-gray-600 dark:text-gray-400">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl bg-gray-800/20 p-8 ring-1 ring-white/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
          <div className="lg:min-w-0 lg:flex-1">
            <h3 className="text-base/7 font-semibold text-indigo-400">
              Discounted
            </h3>
            <p className="mt-1 text-base/7 text-gray-400">
              Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit
              omnis non voluptatem sunt eos nostrum.
            </p>
          </div>
          <a
            href="#"
            className="rounded-md bg-white/10 px-3.5 py-2 text-sm/6 font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
          >
            Buy discounted license <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
