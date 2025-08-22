"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { useInView } from "motion/react"
import { useRef } from "react"

export function StartProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: true })
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    item: "",
    quantity: "",
    deadline: "",
    budget: "",
    message: "",
  })

  const whatsappLink =
    "https://wa.me/62812XXXXXXXX?text=Hello%20New%20Nanda%2C%20I%27d%20like%20to%20start%20a%20custom%20order."

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "goals, quantity, budget, timing",
    },
    {
      number: "2",
      title: "Prototype",
      description: "sample for fit and finish",
    },
    {
      number: "3",
      title: "Refine",
      description: "adjust details and approve",
    },
    {
      number: "4",
      title: "Craft & Deliver",
      description: "hand assembly, quality check, shipping",
    },
  ]

  const faqs = [
    {
      question: "Lead time?",
      answer: "Typically 2–4 weeks after prototype.",
    },
    {
      question: "Small quantities?",
      answer: "Yes—small batches welcome.",
    },
    {
      question: "Color matching?",
      answer: "Pantone fabrics and foils available.",
    },
    {
      question: "Shipping?",
      answer: "Indonesia-wide with protective packaging.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="start-project" className="py-24 md:py-32 bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div ref={ref}>
            <TextEffect
              preset="fade-in-blur"
              speedReveal={1.1}
              speedSegment={0.3}
              trigger={isInView}
              className="font-serif text-4xl md:text-5xl font-normal mb-6 text-foreground"
            >
              Ready to make something custom?
            </TextEffect>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share a sketch or idea—receive materials, timeline, and a prototype plan.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-lg mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-primary/30 my-16"></div>

        {/* FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h4 className="font-medium text-foreground mb-2 text-sm">{faq.question}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA and Form */}
        <div className="text-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        {/* Contact Form - if needed later */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">{/* Contact Form */}</div>
      </div>
    </section>
  )
}
