import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  // logo: <span>kubelize</span>,

  logo: (
    <>
      {/* PNG logo with alt text and styling */}
      <img
        src="https://1.gravatar.com/avatar/bcc8278bd602130f71083cfd2574a8ba78d676e8f5b77186713b488ef8c8f3f6?size=256"
        alt="Logo"
        style={{ width: '26px', height: '26px', marginRight: '6px' }}
      />

      {/* Additional text with styling */}
      <span style={{ fontWeight: 800 }}>
        kubelize
      </span>
    </>
  ),

  useNextSeoProps() {
    return {
      titleTemplate: '%s – kubelize'
    }
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="kubelize" />
      <meta property="og:description" content="Making software kubernetes ready" />
    </>
  ),

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
