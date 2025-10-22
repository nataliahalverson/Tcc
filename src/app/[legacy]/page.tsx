import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import LegacyMount from '@/components/LegacyMount'
import { getLegacyPage, getLegacyPageSlugs } from '@/lib/legacyPages'

type LegacyPageProps = {
  params: {
    legacy: string
  }
}

export function generateStaticParams() {
  return getLegacyPageSlugs().map(slug => ({ legacy: slug }))
}

export function generateMetadata({ params }: LegacyPageProps): Metadata {
  const legacyPage = getLegacyPage(params.legacy)

  if (!legacyPage) {
    return {
      title: 'Página não encontrada'
    }
  }

  return {
    title: legacyPage.title,
    description: `Conteúdo legado importado de ${legacyPage.label}`
  }
}

export default function LegacyPage({ params }: LegacyPageProps) {
  const legacyPage = getLegacyPage(params.legacy)

  if (!legacyPage) {
    notFound()
    return null
  }

  return (
    <LegacyMount
      htmlPath={legacyPage.htmlPath}
      styles={legacyPage.styles}
      scripts={legacyPage.scripts}
    />
  )
}
