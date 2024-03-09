import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // logo: <span>kubelize</span>,

  logo: (
    <>
      {/* PNG logo with alt text and styling */}
      <img
        src="/.github/kubelize.png"
        alt="Logo"
        style={{ width: '24px', height: '24px', marginRight: '4px' }}
      />

      {/* Additional text with styling */}
      <span style={{ fontWeight: 800 }}>
        kubelize
      </span>
    </>
  )

  project: {
    link: 'https://github.com/kubelize',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/kubelize/kubelize.com',
  footer: {
    text: 'kubelize.com',
  },
}

export default config
