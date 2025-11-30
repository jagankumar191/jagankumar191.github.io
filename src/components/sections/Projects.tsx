"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce application with product management, cart functionality, and secure checkout. Built with Next.js and Stripe.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Task Management API",
        description:
            "A robust REST API for task management with user authentication, role-based access control, and real-time updates.",
        tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "DevOps Dashboard",
        description:
            "A centralized dashboard for monitoring microservices health, deployment status, and system metrics.",
        tags: ["React", "Node.js", "Kubernetes", "Prometheus", "Grafana"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Featured Projects
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A showcase of my recent work and technical achievements.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </Link>
                                    </Button>
                                    {project.demoUrl && (
                                        <Button size="sm" asChild>
                                            <Link href={project.demoUrl} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
