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
        title: "Spring Gemini AI Chatbot",
        description:
            "A containerized AI chatbot application with Spring Boot backend and static frontend. Features Docker orchestration, Nginx proxy, secure API key management, and integration with Google Gemini AI for intelligent conversations.",
        tags: ["Spring Boot", "Docker", "Nginx", "Google Gemini AI", "Java"],
        githubUrl: "https://github.com/jagankumar191/spring-gemini-ai",
        demoUrl: "#",
    },
    {
        title: "Aqua - Automated Testing Tool",
        description:
            "An automated testing tool with three major modules: Model Module for page objects, Design Module for test step designs, and Execution Module for running test cases with scheduling and batch execution capabilities.",
        tags: ["Angular", "Node.js", "Express.js", "MongoDB"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Directory Server 2.0",
        description:
            "Agile Development Project for ESS Authentication and EMVCO. Contributed to EMV 3-D Secure Protocol v2.0.0 with focus on security, performance, and user experience in app-based authentication.",
        tags: ["Java 8", "Spring Boot", "JPA", "Hibernate", "Oracle", "MySQL"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Authentication Compliance Program",
        description:
            "Application for managing authentication compliance with Admin and Vendor modules. Admin handles CRUD operations on MPIs and ACSs. Vendor module handles REST API requests with real-time status updates.",
        tags: ["Java 8", "Spring Boot", "JPA", "Hibernate", "H2 Database"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Taste the Bake",
        description:
            "An e-commerce platform for selling baked goods online with complete product catalog, shopping cart, and order management functionality.",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Art Hardy",
        description:
            "An online marketplace platform for arts, paintings, crafts, and handmade products, connecting artists with buyers.",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        githubUrl: "https://github.com/jagankumar191",
        demoUrl: "#",
    },
    {
        title: "Nail Art Booking",
        description:
            "A web application for online booking of nail art and design services with Bootstrap/Materialize frameworks for enhanced UI/UX.",
        tags: ["HTML", "CSS", "PHP", "Bootstrap", "Materialize"],
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
                            className="group"
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                                <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                                    <CardDescription className="mt-3 text-muted-foreground/90 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow pb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-all duration-200 border-transparent bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-3 pt-4 border-t border-border/50">
                                    <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10" asChild>
                                        <Link href={project.githubUrl} target="_blank">
                                            <Github className="mr-2 h-4 w-4" />
                                            Code
                                        </Link>
                                    </Button>
                                    {project.demoUrl && (
                                        <Button size="sm" className="flex-1 shadow-lg shadow-primary/25" asChild>
                                            <Link href={project.demoUrl} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
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
