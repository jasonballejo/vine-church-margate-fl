import Script from "next/script";

interface Props {
  GA4_ID: string | undefined;
}

export default function GA4({ GA4_ID }: Props) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="GA4">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA4_ID}');`}
      </Script>
    </>
  );
}
