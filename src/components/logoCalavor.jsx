import clsx from 'clsx'
import Image from 'next/image'
import imageLogo from '../../public/calavor.png'

// Simple Logo component
export function Logo({ className, ...props }) {
  return (
    <div className={clsx('flex items-center', className)} {...props}>
      <Image src={imageLogo} alt="Calavor" className="h-10 w-auto" priority />
    </div>
  )
}
