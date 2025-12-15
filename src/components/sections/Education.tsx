"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const education = [
    {
        institution: "VIT University, Vellore",
        degree: "Master of Computer Applications (MCA)",
        year: "2014 - 2017",
        description: "Specialized in Software Engineering and Application Development.",
    },
];

const certifications: { name: string; issuer: string; year: string }[] = [
    {
        name: "Gen AI Practitioner Award",
        issuer: "Professional Recognition",
        year: "2025",
    },
    {
        name: "Best Team Award",
        issuer: "Team Excellence Recognition",
        year: "2025",
    },
];

export function Education() {
    return (
        <section id="education" className="py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <h2 className="text-3xl font-bold tracking-tighter">Education</h2>
                        </div>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{edu.institution}</CardTitle>
                                        <CardDescription className="text-sm">{edu.year}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-semibold text-primary">{edu.degree}</p>
                                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <Award className="h-6 w-6 text-primary" />
                            <h2 className="text-3xl font-bold tracking-tighter">
                                Certifications & Rewards
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {certifications.length > 0 ? certifications.map((cert, index) => (
                                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <CardHeader>
                                        <CardTitle className="text-lg">{cert.name}</CardTitle>
                                        <CardDescription>{cert.issuer}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            Issued: {cert.year}
                                        </p>
                                    </CardContent>
                                </Card>
                            )) : (
                                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground text-center">Professional certifications coming soon</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
