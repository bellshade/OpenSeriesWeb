import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";

import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
    title: "OpenSeries - Cheat Engine Hitung-Hitungan by Bellshade",
    description:
        "Project Untuk Menghitung Segala Jenis Persamaan atau Rumus-Rumus yang terdapat pada bangku sekolah (SMA/SMK/Sederajat). Project ini bertujuan untuk memudahkan siswa dalam menghitung persamaan atau problem-problem yang terdapat pada pelajaran sekolah (cheat egine untuk Sekolah).",
    keywords: [
        "OpenSeries",
        "Bellshade",
        "Bellshade OpenSeries",
        "Library matematika",
        "Library fisika",
        "Library statistika",
        "Library python matematika",
        "Library python fisika",
        "Library python statistika",
        "Matematika SMA/SMK",
        "Fisika SMA/SMK",
        "Statistika SMA/SMK",
        "Cheatsheet matematika",
        "Cheatsheet fisika",
        "Cheatsheet statistika",
        "Python playground",
        "Cheat engine SMA/SMK",
        "Cheat engine matematika",
        "Cheat engine fisika",
        "Cheat engine statistika",
        "OpenSeries python"
    ],
    applicationName: "OpenSeries",
    creator: "Bellshade",
    openGraph: {
        images: ["/assets/img/banner.png"]
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-white dark:bg-zinc-800`}>
                <ThemeProvider>
                    <Navbar />
                    <NextTopLoader color="#4f46e5" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
