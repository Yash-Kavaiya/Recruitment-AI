import React from 'react';
import { Loader2 } from "lucide-react";

export default function Loading(): React.JSX.Element {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center gap-2 text-green-600">
        <Loader2 className="animate-spin" size={24} />
        <span className="font-medium">Loading virtual assistant...</span>
      </div>
    </div>
  );
}
