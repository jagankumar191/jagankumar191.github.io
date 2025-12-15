"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Renault Nissan Technology & Business Centre India (RNTBCI)",
        role: "Senior Engineer",
        duration: "Jul 2021 - Present",
        description: "Part of the Bill of Materials (BOM) API team responsible for designing, implementing, and managing RESTful Web Services and event-driven applications. Developed and maintained 19 REST APIs and 8 event-driven applications to provide alliance BOM data based on consumer requirements.",
        skills: ["Java 17", "Spring Boot", "JPA", "Hibernate", "Oracle"],
    },
    {
        company: "Tristha Global Pvt Ltd",
        role: "Developer",
        duration: "Sep 2020 - Jul 2021",
        description: "Developed Aqua, an automated testing tool with three major modules: Model Module (page objects), Design Module (test step designs), and Execution Module (test execution with scheduling). Implemented various reporting mechanisms to track test execution results.",
        skills: ["Angular", "Node.js", "Express.js", "MongoDB"],
    },
    {
        company: "Wipro Limited",
        role: "Project Engineer",
        duration: "Apr 2018 - Aug 2020",
        description: "Worked on Agile Development Projects including Directory Server 2.0 for ESS Authentication and EMVCO, contributing to EMV 3-D Secure Protocol v2.0.0. Developed Authentication Compliance Program App with Admin and Vendor modules for managing MasterCard MPIs and ACSs.",
        skills: ["Java 8", "Spring Boot", "JPA", "Hibernate", "Oracle", "MySQL", "H2 Database"],
    },
    {
        company: "Deskways Pvt. Ltd.",
        role: "PHP Developer",
        duration: "Jul 2017 - Dec 2017",
        description: "Developed Nail Art, a web application for online booking of nail art/design services. Utilized Bootstrap/Materialize frameworks to enhance UI/UX.",
        skills: ["HTML", "CSS", "PHP", "Bootstrap", "Materialize"],
    },
    {
        company: "Appstone Pvt. Ltd. (Internship)",
        role: "PHP Developer (Remote)",
        duration: "8 Months",
        description: "Developed Taste the Bake, an e-commerce platform for selling baked goods online. Built Art Hardy, an online marketplace for arts, paintings, crafts, and handmade products.",
        skills: ["HTML", "CSS", "PHP", "MySQL"],
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

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/40 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary/30 bg-card shadow-lg shadow-primary/10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-card-foreground shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex flex-col sm:flex-row justify-between mb-3 sm:items-center gap-2">
                                    <h3 className="font-bold text-xl">{exp.role}</h3>
                                    <div className="flex items-center text-sm text-muted-foreground bg-muted/30 px-3 py-1 rounded-full">
                                        <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                        {exp.duration}
                                    </div>
                                </div>
                                <div className="text-primary font-semibold mb-3 text-lg">{exp.company}</div>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-all duration-200 border-transparent bg-secondary/80 text-secondary-foreground hover:bg-secondary hover:scale-105"
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
