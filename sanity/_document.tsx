// // This is to generate a <link rel="modulepreload" href='https://themer.sanity.build/api/hues?preset=dew'> to the <head>
// // As Studio v3 is in developer preview there's not yet a simple way to just add a <link> tag to the <head>
// // Thus we have to re-implement DefaultDocument to make it happen.
// // Expect this to get much easier before v3 hits stable

// import React from 'react'
// import {type DefaultDocumentProps} from 'sanity'

// const globalStyles = `
//   html {
//     background-color: #f1f3f6;
//   }
//   html,
//   body,
//   #sanity {
//     height: 100%;
//   }

//    .eVOzYq {
//     height: 100%;
//     outline: none;
//     overflow-y: auto;
//     overscroll-behavior: contain;
//     width: 100%;
//   }
//   body {
//     margin: 0;
//     -webkit-font-smoothing: antialiased;
//   }
// `

// interface FaviconProps {
//   basePath: string
// }

// function Favicons({basePath}: FaviconProps) {
//   const base = `${basePath.replace(/\/+$/, '')}/static`
//   return (
//     <>
//       <link rel="icon" href={`${base}/favicon.ico`} sizes="any" />
//       <link rel="icon" href={`${base}/favicon.svg`} type="image/svg+xml" />
//       <link rel="apple-touch-icon" href={`${base}/apple-touch-icon.png`} />
//       <link rel="manifest" href={`${base}/manifest.webmanifest`} />
//     </>
//   )
// }

// const EMPTY_ARRAY: never[] = []
// export default function DefaultDocument(props: DefaultDocumentProps): React.ReactElement {
//   const {entryPath, css = EMPTY_ARRAY, basePath = '/'} = props
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
//         <meta name="robots" content="noindex" />
//         <meta name="referrer" content="same-origin" />
//         {/* This is the only line of code we're adding that is different from the default implementation of DefaultDocument */}
//         <link rel="modulepreload" href={'https://themer.sanity.build/api/hues?preset=dew'} />

//         <Favicons basePath={basePath} />

//         <title>Sanity Studio</title>

//         {/* {css.map((href) => (
//           <link key={href} rel="stylesheet" href={href} />
//         ))} */}
//         <style>{globalStyles}</style>
//       </head>
//       <body>
//         <div id="sanity" />
//         <script type="module" src={entryPath} />
//       </body>
//     </html>
//   )
// }
