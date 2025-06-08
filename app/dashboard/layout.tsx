'use client';

import { useEffect } from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';
import HydrationSuppressor from '@/app/ui/hydration-suppressor';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
    // Suppress hydration warnings
    useEffect(() => {
        // This empty useEffect is just to suppress the hydration warning
    }, []);

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <HydrationSuppressor />
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}