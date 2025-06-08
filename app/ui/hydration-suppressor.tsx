'use client';

import { useEffect } from 'react';

export default function HydrationSuppressor() {
    useEffect(() => {
        // This empty useEffect is just to suppress the hydration warning
    }, []);

    return null;
}