import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const MyApp = () => (
  <>
    <Head>
      <script type="text/javascript" src="https://js.chargify.test/dist/chargify/chargify.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" />
    </Head>

    <ul>
      <li>
        <Link as="/test/test" href="/test?slug=test">
          <a>Test</a>
        </Link>
      </li>
    </ul>
  </>
)

export default MyApp
