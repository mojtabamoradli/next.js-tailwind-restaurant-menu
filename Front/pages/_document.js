import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        {/* <link rel="shortcut icon" href="/" /> */}
        {/* <link rel="apple-touch-icon" sizes="128x128" href="/" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta name="description" content="" /> */}
        {/* <meta property="og:title" content="" /> */}
        {/* <meta name="keywords" content="" /> */}
        <meta name="author" content="Mojtaba Moradli" />
        <link href="https://mojtabamoradli.ir/" rel="canonical" />
        <meta name="theme-color" content="#292929" />
      </Head>

      <body className="bg-darkGrey ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
