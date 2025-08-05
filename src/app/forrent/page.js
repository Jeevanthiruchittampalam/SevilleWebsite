'use client';

import { Suspense } from 'react';
import ForRentPageInner from './ForRentPageInner';

export default function ForRentPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading listings...</div>}>
      <ForRentPageInner />
    </Suspense>
  );
}
