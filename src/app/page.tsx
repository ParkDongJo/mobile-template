import Image from 'next/image'
import PageLayout from "@/layout/PageLayout"
import ErrorTest from '@/components/ErrorTest'

export default function Home() {
  return (
    <PageLayout>
      <div style={{ background: "blue" }}>
        <p>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <div>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
    </PageLayout>
  )
}
