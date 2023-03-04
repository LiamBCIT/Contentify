export default function Head() {
  return (
    <>
      <title>Contentify</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Developed by Liam Conkin" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

module.exports = {
  settings: { 
    next: {
      rootDir: "/packages/contentify/app/page",
    },
  },
  rules: { 
    "@next/next/no-html-link-for-pages": "error",
  },
};