"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I&apos;m currently open to new opportunities. Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="w-full h-32 flex flex-col gap-4 hover:border-primary/50 hover:bg-primary/5"
                            asChild
                        >
                            <Link href="mailto:kumarjagan02@gmail.com">
                                <Mail className="h-8 w-8" />
                                <span className="text-lg font-semibold">Email Me</span>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Button
                            variant="outline"
                            className="w-full h-32 flex flex-col gap-4 hover:border-primary/50 hover:bg-primary/5"
                            asChild
                        >
                            <Link href="https://www.linkedin.com/in/jagan-kumar-15b505a9" target="_blank">
                                <Linkedin className="h-8 w-8" />
                                <span className="text-lg font-semibold">LinkedIn</span>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <Button
                            variant="outline"
                            className="w-full h-32 flex flex-col gap-4 hover:border-primary/50 hover:bg-primary/5"
                            asChild
                        >
                            <Link href="https://github.com/jagankumar191" target="_blank">
                                <Github className="h-8 w-8" />
                                <span className="text-lg font-semibold">GitHub</span>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="w-full h-32 flex flex-col gap-4 hover:border-primary/50 hover:bg-primary/5"
                            asChild
                        >
                            <a href="/resume.pdf" download>
                                <FileText className="h-8 w-8" />
                                <span className="text-lg font-semibold">Resume</span>
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
