import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} Jagan Kumar. All rights reserved.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/jagankumar191"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-200"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/jagan-kumar-15b505a9"
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-200"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link
                            href="mailto:kumarjagan02@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 duration-200"
                        >
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
