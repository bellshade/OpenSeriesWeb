import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "OpenSeries",
    description:
        "Project Untuk Menghitung Segala Jenis Persamaan atau Rumus-Rumus yang terdapat pada bangku sekolah (SMA/SMK/Sederajat). Project ini bertujuan untuk memudahkan siswa dalam menghitung persamaan atau problem-problem yang terdapat pada pelajaran sekolah (cheat egine untuk Sekolah)."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
