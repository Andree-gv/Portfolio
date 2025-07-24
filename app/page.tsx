"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon as LinkedIn,
  Download,
  Wrench,
  Cog,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    "SolidWorks 3D Modeling",
    "3D Printing & Additive Manufacturing",
    "Prusa Slicer",
    "Adobe Creative Suite",
    "CAD Design",
    "Problem Solving",
    "Customer Service",
    "Leadership & Training",
    "Project Management",
    "Bilingual (Spanish/English)",
  ]

  const projects = [
    {
      title: "3D Designing",
      description:
        "A comprehensive collection of CAD projects showcasing mechanical design skills, including a tennis ball launcher and various engineering components.",
      technologies: ["SolidWorks", "CAD Design", "Technical Drawing"],
      icon: <Cog className="w-6 h-6" />,
      image: "/images/gear-technical-drawing.jpeg",
      link: "/3d-design-portfolio",
    },
    {
      title: "Machining Projects",
      description:
        "Hands-on machining experience using CNC and manual equipment to fabricate precision components from engineering designs.",
      technologies: ["CNC Machining", "Precision Manufacturing"],
      icon: <Wrench className="w-6 h-6" />,
      image: "/images/machining-projects.jpg",
      link: "/machining-projects",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center ml-4">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Wrench className="h-6 w-6" />
              <span className="font-bold hidden md:inline-block">Andree Gonzalez Villegas</span>
              <span className="font-bold inline-block md:hidden">Andree</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2 hidden sm:flex">
            <a href="/resume.pdf"
              download="Andree-Gonzalez-Resume.pdf">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container max-w-[90%] mx-auto py-12 md:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Andree Gonzalez Villegas
              </h1>
              <h2 className="text-xl text-muted-foreground md:text-2xl">
                Mechanical Engineering Student & 3D Printing Specialist
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I&apos;m Andree Gonzalez, a sophomore mechanical engineering student at BYU–Idaho. I enjoy tackling
                real-world problems by combining creative thinking with tools like CAD and simulation software to
                develop practical solutions.
              </p>
            </div>
            <div className="flex flex-row gap-4 min-[400px]:flex-row">
              <Link href="mailto:andree.vgv1@gmail.com" className="w-fit" target="_blank">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </Link>
              <Link href="/#projects" className="w-fit">
                <Button variant="outline" size="lg">
                  View Projects
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <Link
                href="https://www.linkedin.com/in/andree-gonzález-villegas-25051b128"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedIn className="h-6 w-6" />
              </Link>
              <Link href="mailto:andree.vv1@gmail.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mx-auto flex items-center">
            <Image
              src="/images/profile.jpeg"
              width="300"
              height="300"
              alt="Andree Gonzalez"
              className="aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-10 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor of Science in Mechanical Engineering</h4>
                <p className="text-sm text-muted-foreground">Brigham Young University - Idaho • 2024 - 2028</p>
                <p className="text-sm">Current Student, Expected Graduation April 2028</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">SolidWorks Associate (CSWA)</h4>
                <p className="text-sm text-muted-foreground">3D Design and Modeling • March 2024</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">PRUSA Research Certification</h4>
                <p className="text-sm text-muted-foreground">3D Printing and Modeling • July 2023</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">3D Printer Technician</h4>
                <p className="text-sm text-muted-foreground">MacLab BYU Idaho • April 2024 - Present</p>
                <p className="text-sm">Leading 3D printing workshops and technical support for students</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Customer Service Agent - Loyalty</h4>
                <p className="text-sm text-muted-foreground">Verizon • February 2022 - November 2023</p>
                <p className="text-sm">Achieved 95% customer satisfaction with innovative solutions</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold">Leadership Ambassador</h4>
                <p className="text-sm text-muted-foreground">BYU Idaho • January 2025 - Present</p>
                <p className="text-sm">University leadership and student engagement role</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 px-11 rounded-md md:py-32 bg-muted/50">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A showcase of my engineering projects spanning automation, design optimization, and innovative solutions.
          </p>
        </div>

        <div className="mt-16 flex flex-row flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden w-[550px]">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2">
                  {project.icon}
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.link && (
                  <Button asChild className="w-full">
                    <Link href={project.link}>View Portfolio</Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24 md:py-32">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let&apos;s Work Together</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Ready to bring your mechanical engineering project to life? Let&apos;s discuss how we can collaborate.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Link href="mailto:andree.vgv1@gmail.com">
            <Card className="text-center hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <Mail className="mx-auto h-8 w-8 text-primary" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">andree.vgv1@gmail.com</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="text-center">
            <CardHeader>
              <Phone className="mx-auto h-8 w-8 text-primary" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">(201) 485-9475</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="mx-auto h-8 w-8 text-primary" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Rexburg, ID</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Wrench className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Andree Gonzalez Villegas. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/andree-gonzález-villegas-25051b128"
              className="text-muted-foreground hover:text-foreground"
            >
              <LinkedIn className="h-5 w-5" />
            </Link>
            <Link href="mailto:andree.vgv1@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
