"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center pt-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Hi, I&apos;m <span className="text-primary">Jagan Kumar</span>
                            </h1>
                            <h2 className="text-xl text-muted-foreground sm:text-2xl">
                                Full Stack Developer & DevOps Enthusiast
                            </h2>
                        </div>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            I build scalable, high-performance web applications and robust backend systems.
                            Passionate about clean code, modern architectures, and solving complex problems.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button asChild size="lg">
                                <Link href="#contact">
                                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <a href="/resume.pdf" download>
                                    Download Resume <Download className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/jagankumar191" target="_blank">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://linkedin.com/in/jagankumar191" target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center justify-center"
                    >
                        <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                            {/* Decorative background blob */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />

                            <div className="relative h-full w-full rounded-full border-2 border-border bg-muted/10 overflow-hidden shadow-xl">
                                {/* Placeholder for user photo */}
                                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                                    <span className="text-4xl font-bold">JK</span>
                                </div>
                                {/* Uncomment below when you have a real image */}
                                {/* <Image
                  src="/profile.jpg"
                  alt="Jagan Kumar"
                  fill
                  className="object-cover"
                  priority
                /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
