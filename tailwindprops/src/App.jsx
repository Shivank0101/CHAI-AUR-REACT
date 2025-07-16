import React from 'react'



const App = () => {
  return (
    <>
      <h1>STEP TO CONFIGURE TAILWIND CSS IN VITE PROJECT</h1>
      <ul>
        <li>
          <p>Step 1: cd my-project</p>
        </li>
        <li>
          <p>Step 2: Run this command in terminal: <code>npm install tailwindcss @tailwindcss/vite</code></p>
        </li>
        <li>
          <div>
            <p>Step 3: Go to <code>vite.config.js</code> and write this:</p>
            <pre>
              <code>{`
              import { defineConfig } from 'vite'
              import tailwindcss from '@tailwindcss/vite'

              export default defineConfig({
              plugins: [tailwindcss()],
              })
              `}</code>
            </pre>
          </div>
        </li>
        <li>
          <p>Step 4: Go to <code>index.css</code> and import:</p>
          <code>@import "tailwindcss";</code>
        </li>
        <li>
          <div>
            <p>Step 5: Go to <code>index.html</code> and add the link tag after the title:</p>
            <pre>
              <code>{`<link rel="stylesheet" href="./src/index.css" />`}</code>
            </pre>
          </div>
        </li>
        <li>
          <p>STep:5 Run this command: npm run dev</p>
        </li>
      </ul>

 
    </>
  )
}

export default App
