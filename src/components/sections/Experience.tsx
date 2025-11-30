"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Tech Solutions Inc.",
        role: "Senior Full Stack Developer",
        duration: "2022 - Present",
        description: "Leading the development of a high-scale e-commerce platform using Next.js and Spring Boot. Implemented microservices architecture and optimized database performance.",
        skills: ["Next.js", "Spring Boot", "AWS", "PostgreSQL"],
    },
    {
        company: "Innovate Corp",
        role: "Backend Developer",
        duration: "2020 - 2022",
        description: "Designed and maintained RESTful APIs for a fintech application. Migrated legacy monolith to microservices using Docker and Kubernetes.",
        skills: ["Java", "Spring Security", "Docker", "Kubernetes"],
    },
    {
        company: "StartUp Hub",
        role: "Junior Developer",
        duration: "2018 - 2020",
        description: "Collaborated with cross-functional teams to build responsive web applications. Assisted in CI/CD pipeline setup and automated testing.",
        skills: ["React", "Node.js", "Jenkins", "MySQL"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Professional Experience
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        My journey in the tech industry and the value I&apos;ve delivered.
                    </p>
                </motion.div>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div className="flex flex-col sm:flex-row justify-between mb-2 sm:items-center">
                                    <h3 className="font-bold text-lg">{exp.role}</h3>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Calendar className="mr-1 h-3 w-3" />
                                        {exp.duration}
                                    </div>
                                </div>
                                <div className="text-primary font-medium mb-2">{exp.company}</div>
                                <p className="text-muted-foreground mb-4 text-sm">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
