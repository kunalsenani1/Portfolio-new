import "./globals.css";

export const metadata = {
  title: "Kunal Senani | Video Editor Portfolio",
  description:
    "Cinematic portfolio for Kunal Senani, a Jaipur-based video editor with 9+ years of experience across reels, YouTube, podcasts, campaigns, films, and documentaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
