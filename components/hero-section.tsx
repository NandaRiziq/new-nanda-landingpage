import { Button } from "@/components/ui/button"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { TextEffect } from "@/components/motion-primitives/text-effect"
import { ChevronDown } from "@/components/animate-ui/icons/chevron-down"

export function HeroSection() {
  const whatsappLink =
    "https://wa.me/6281392270440"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-start bg-white text-white overflow-hidden"
    >
      {/* Left Background Image */}
      <div className="absolute left-0 top-0 w-1/3 h-full hidden md:block z-0">
        <AnimatedGroup
          className="relative w-full h-full"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 1,
                  delay: 0.5,
                },
              },
            },
          }}
          once
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-section-left.png')`,
            }}
          />
        </AnimatedGroup>
      </div>

      {/* Right Background Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden md:block z-0">
        <AnimatedGroup
          className="relative w-full h-full"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                x: 100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 1,
                  delay: 0.5,
                },
              },
            },
          }}
          once
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-section-right.png')`,
            }}
          />
        </AnimatedGroup>
      </div>

      {/* White Center Area */}
      <div className="absolute left-1/3 right-1/3 top-0 h-full bg-white hidden md:block z-[-1]" />

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-6 text-center pt-6 pb-10">
        {/* Mobile layout */}
        <div className="md:hidden">
          {/* Logo on top */}
          <div className="mt-6 mb-8 flex justify-center">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: -60,
                    rotateX: 90,
                  },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 1,
                    },
                  },
                },
              }}
              once
            >
              <img
                src="/images/logo-New-Nanda-gold.png"
                alt="New Nanda Logo"
                className="h-16 w-auto"
              />
            </AnimatedGroup>
          </div>

          {/* Big images below logo */}
          <div className="flex -space-x-6 mb-10 -mx-6 mt-12">
            <div className="w-[54%] h-auto object-contain block shrink-0">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      x: -100,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: 'spring',
                        bounce: 0,
                        duration: 1,
                        delay: 0.5,
                      },
                    },
                  },
                }}
                once
              >
                <img
                  src="/images/hero-section-left-small.png"
                  alt="Left showcase"
                  className="w-full h-auto object-contain block"
                />
              </AnimatedGroup>
            </div>
            <div className="w-[54%] h-auto object-contain block shrink-0 ml-auto">
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      x: 100,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: 'spring',
                        bounce: 0,
                        duration: 1,
                        delay: 0.5,
                      },
                    },
                  },
                }}
                once
              >
                <img
                  src="/images/hero-section-right-small.png"
                  alt="Right showcase"
                  className="w-full h-auto object-contain block ml-auto"
                />
              </AnimatedGroup>
            </div>
          </div>

          {/* Text content under images */}
          <div className="font-serif text-4xl font-normal leading-tight tracking-[0.5px] mb-6 text-black max-w-[35ch] mx-auto -translate-y-6">
            <TextEffect 
              per="char"
              preset="fade-in-blur"
              speedReveal={1.5}
              speedSegment={0.3}
              as="div"
              className="block"
              delay={1}
            >
              Crafted to order,
            </TextEffect>
            <TextEffect 
              per="char"
              preset="fade-in-blur"
              speedReveal={1.5}
              speedSegment={0.3}
              as="div"
              className="block"
              delay={1}
            >
              built to last
            </TextEffect>
          </div>
          <div className="max-w-[35ch] mx-auto mb-6 -translate-y-6">
            <TextEffect
              per="char"
              preset="fade"
              as="p"
              className="text-xs leading-relaxed text-primary"
              delay={2}
              speedReveal={3.0}
            >
              We design and manufacture custom packaging, menu book, stationery, presentation cases, and more.
            </TextEffect>
          </div>
          <TextEffect
            per="char"
            preset="fade"
            as="p"
            className="text-xs italic text-black -translate-y-6"
            delay={3.2}
          >
            Bring your ideas into reality.
          </TextEffect>
          {/* Buttons intentionally hidden on mobile */}
        </div>

        {/* Desktop / tablet layout */}
        <div className="hidden md:block relative min-h-[calc(100vh-4rem)]">
          {/* Group 1: Logo (top) */}
          <div className="absolute top-13 left-0 right-0 flex justify-center">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: -60,
                    rotateX: 90,
                  },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 1,
                    },
                  },
                },
              }}
              once
            >
              <img
                src="/images/logo-New-Nanda-gold.png"
                alt="New Nanda Logo"
                className="h-20 w-auto"
              />
            </AnimatedGroup>
          </div>

          {/* Group 2: Heading (center) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 -translate-y-10">
            <TextEffect 
              per="char"
              preset="fade-in-blur"
              speedReveal={1.5}
              speedSegment={0.3}
              as="div"
              className="font-serif font-normal leading-[1.08] tracking-[0.5px] text-black text-[clamp(3rem,7vw,6rem)] text-center"
              delay={1}
            >
              Crafted to order,
            </TextEffect>
            <TextEffect 
              per="char"
              preset="fade-in-blur"
              speedReveal={1.5}
              speedSegment={0.3}
              as="div"
              className="font-serif font-normal leading-[1.08] tracking-[0.5px] text-black text-[clamp(3rem,7vw,6rem)] text-center"
              delay={1}
            >
              built to last
            </TextEffect>
          </div>

          {/* Group 3: Text + Buttons (bottom) */}
          <div className="absolute left-0 right-0 bottom-[8vh] pb-6">
            <div className="max-w-xl mx-auto mb-6">
              <TextEffect
                per="char"
                preset="fade"
                as="p"
                className="text-lg leading-relaxed text-muted-foreground mb-4"
                delay={2}
                speedReveal={3.0}
              >
                We design and manufacture custom packaging, menu book, stationery, presentation cases, and more.
              </TextEffect>
            </div>
            <TextEffect
              per="char"
              preset="fade"
              as="p"
              className="text-sm mb-8 italic text-black"
              delay={3.2}
            >
              Bring your ideas into reality.
            </TextEffect>

            <div className="md:flex flex-col sm:flex-row gap-4 justify-center hidden">
              <AnimatedGroup
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delay: 4.0,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: {
                        duration: 1.2,
                        type: 'spring',
                        bounce: 0.3,
                      },
                    },
                  },
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
                once
              >
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="hover:text-white/80 underline decoration-1 underline-offset-4 hover:underline-offset-8 transition-all duration-300 text-gray-500"
                  asChild
                >
                  <a href="#work">See our work</a>
                </Button>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile chevron down indicator */}
      <div className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 6 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 3.5 },
              },
            },
          }}
          once
        >
          <ChevronDown animate animation="default-loop" loop loopDelay={0.5} size={28} className="text-black/60" />
        </AnimatedGroup>
      </div>
    </section>
  )
}