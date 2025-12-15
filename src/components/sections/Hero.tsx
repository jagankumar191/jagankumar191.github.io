"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
                                Full Stack Developer
                            </h2>
                        </div>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Experienced Senior Java/Spring Boot Engineer with 7+ years of end-to-end application development experience, specializing in building scalable, high-performance backend systems and RESTful APIs using Java 8/17, Spring Boot, JPA, and Hibernate. Strong expertise in event-driven architectures, database design and optimization (Oracle, MySQL, MongoDB), and integration of CI/CD pipelines with Git and Jenkins to ensure reliable, frequent releases. Proven track record of delivering complex enterprise solutions, including BOM APIs and authentication/compliance platforms, with a focus on clean, testable code, troubleshooting production issues, and driving best practices within Agile teams. Additionally experienced with MEAN stack, automated testing tools, and modern AI-assisted development (GitHub Copilot), enabling efficient collaboration across cross-functional, cloud-ready projects.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <div className="flex gap-3">
                                <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                                    <Link href="#contact">
                                        Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <a href="/resume.pdf" download>
                                        <Download className="mr-2 h-4 w-4" /> Resume
                                    </a>
                                </Button>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                                    <Link href="https://github.com/jagankumar191" target="_blank">
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Link>
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:bg-primary/10" asChild>
                                    <Link href="https://www.linkedin.com/in/jagan-kumar-15b505a9" target="_blank">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Link>
                                </Button>
                            </div>
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
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" />

                            <div className="relative h-full w-full rounded-full border-4 border-primary/20 bg-card overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/50">
                                {/* Placeholder for user photo */}
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50 text-muted-foreground">
                                    <span className="text-4xl font-bold">JK</span>
                                </div>
                                {/* Uncomment below when you have a real image */}
                                <Image
                                    src="/jagan.jpg"
                                    alt="Jagan Kumar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
