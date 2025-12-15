"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Backend",
        icon: <Server className="h-6 w-6" />,
        skills: ["Java 17", "Spring Boot", "JPA", "Hibernate", "REST APIs", "Event-driven architecture"],
    },
    {
        title: "Frontend",
        icon: <Layout className="h-6 w-6" />,
        skills: ["Angular", "React", "Next.js", "TypeScript", "HTML5", "CSS3"],
    },
    {
        title: "Database",
        icon: <Database className="h-6 w-6" />,
        skills: ["Oracle", "MongoDB", "MySQL", "H2 Database"],
    },
    {
        title: "DevOps & Tools",
        icon: <Wrench className="h-6 w-6" />,
        skills: ["Git", "Jenkins", "HashiCorp Vault", "IntelliJ", "Eclipse", "VS Code"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Skills & Technologies
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        A comprehensive toolset for building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-6 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="relative flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-all duration-200 border-transparent bg-secondary/80 text-secondary-foreground hover:bg-secondary hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
