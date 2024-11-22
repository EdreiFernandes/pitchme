'use client'

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function LocaleRedirect() {
  useEffect(() => {
    redirect(`/pt`);
  }, []);

  return (
    <div>
      Redirecting to home page!
    </div>
  );
}
