import "./globals.css";

export const metadata = {
  title: "GSR Network",
  description:
    "Real-time content engines for sports, AI, politics, and entertainment journalism.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}