import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "styles/style.scss";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Frontend Mentor | FAQ accordion",
    description: "A collection of FAQs on Frontend Mentor"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={work_sans.className}>{children}</body>
        </html>
    );
}
