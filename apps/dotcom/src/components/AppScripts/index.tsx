import type { FC } from "react";
import Script from "next/script";

import { config } from "../../config";

export const AppScripts: FC = () => {
  const { googleAnalytics: { trackingId } } = config;

  return (
    <>
      <Script
        async={true}
        id={"gtag"}
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      >
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${trackingId}');
        `}
      </Script>
      <Script
        async={true}
        defer={true}
        id={"hs-script-loader"}
        key={"hs-script-loader"}
        src={"//js.hs-scripts.com/14574125.js"}
        type={"text/javascript"}
      />
    </>
  );
};

