/* eslint-disable */

'use client'
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HomeCTA = () => {
  return (
    <section className="py-8 px-8 bg-card rounded-xl border text-center">
      <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
      </p>
      <Button asChild size="lg">
        <Link href="/contact">Let's Talk</Link>
      </Button>
    </section>
  )
}

export default HomeCTA