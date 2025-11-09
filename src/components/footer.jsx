'use client'

import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { useForm, ValidationError } from '@formspree/react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logoCalavor'

function ContactContent() {
  const [state, handleSubmit] = useForm('myzlgjza')
  const formRef = useRef(null)

  // ✅ When succeeded, clear form inputs
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset()
      const timer = setTimeout(() => {
        state.succeeded = false // reset success state visually (optional)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left column */}
        <div className="relative px-6 pt-20 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Let’s Talk Growth
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Want to start booking qualified meetings or learn more about our
              process? We’d love to hear from you.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  200 N LaSalle Street, Suite 2502
                  <br />
                  Chicago, IL 60601
                </dd>
              </div> */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="tel:+1 (217) 395-3725"
                    className="hover:text-gray-900"
                  >
                    +1 (217) 395-3725
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:info@calavor.com"
                    className="hover:text-gray-900"
                  >
                    info@calavor.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* ✅ Right column (Formspree form stays visible) */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="px-6 pt-10 pb-16 sm:pb-24 lg:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* ✅ Success message */}
            {state.succeeded && (
              <div className="mb-6 rounded-md bg-green-100 p-4 text-sm font-medium text-green-700">
                ✅ Message sent successfully!
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md bg-white/70 px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-pink-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60"
              >
                {state.submitting ? 'Sending...' : 'Send message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

function SitemapHeading({ children }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
}

function SitemapLinks({ children }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapHeading>Legal</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/tos">Terms of service</SitemapLink>
          <SitemapLink href="/privacy">Privacy policy</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconX(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Calavor Inc.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <ContactContent />
          <PlusGrid className="pb-16">
            <PlusGridRow className="flex items-start justify-between pb-6">
              <PlusGridItem className="pt-6 lg:pb-6">
                <Logo className="h-9" />
              </PlusGridItem>

              <PlusGridItem className="pt-6">
                <Sitemap />
              </PlusGridItem>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  {/* <SocialLinks /> */}
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
