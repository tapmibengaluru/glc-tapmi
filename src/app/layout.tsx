import type { Metadata } from "next";
import "./globals.css";
import { arkitype, helvetica, bungee } from "../../styles/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MAHE B'LRU – LEADXAI – Global Leadership Conference 3.0",
  description:
    "Join top CEOs, CHROs, and HR leaders at the Global Leadership Conference 3.0, Bengaluru, Oct 4. Explore AI's impact on HR and learn strategies for building a future-ready workforce. Register now!",
  keywords: [
    "Global Leadership Conference",
    "AI in HR",
    "Future of workforce",
    "HR leaders conference",
    "Talent acquisition",
    "Workforce innovation",
    "AI integration in HR",
    "Leadership summit Bengaluru",
    "CHROs and CEOs conference",
    "HR strategies for the future",
    "Resilient workforce",
    "Adaptive workforce",
    "Leadership in AI era",
    "HR conference 2025",
    "Bengaluru leadership event",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arkitype.variable} ${helvetica.variable} ${bungee.variable} antialiased  overflow-x-hidden`}>{children}</body>
      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
            _linkedin_partner_id = "7924108";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
      </Script>
      <Script id="linkedin-insight-loader" strategy="afterInteractive">
        {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){
                  window.lintrk.q.push([a,b])
                };
                window.lintrk.q=[]
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7924108&fmt=gif" />
      </noscript>
    </html>
  );
}
