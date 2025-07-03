"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Wrench, Cog, Settings, Zap, Car, Building, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ThreeDDesignPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Tennis Ball Launcher",
      category: "Sports Equipment",
      duration: "3 weeks",
      date: "April 2024",
      description:
        "Automated tennis ball launcher designed for training and practice sessions with adjustable launch parameters.",
      process: [
        "Analyzed tennis ball trajectory requirements and launch mechanisms",
        "Designed dual-wheel launching system for consistent ball velocity",
        "Created ball storage hopper with gravity-fed delivery system",
        "Integrated adjustable mounting system for angle control",
        "Optimized wheel spacing and rotation speeds for ball grip",
        "Validated design through motion studies and trajectory analysis",
        "Wait for updates on the project"
      ],
      tools: ["SolidWorks", "Motion Study", "Assembly Design", "Rendering"],
      images: ["/images/tennis-ball-launcher.jpeg"],
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Laptop support",
      category: "3D Design, laser cutting",
      duration: "2 days",
      date: "April 2024",
      description: "An adjustable laptop support designed for ergonomic use and stability.",
      process: [
        "Identified user needs for posture improvement, airflow, and portability",
        "Designed modular components in CAD for flat-pack assembly",
        "Prepared DXF files and laser-cut parts from acrylic and plywood sheets",
        "Tested fit, hinge angles, and weight support through virtual and physical prototypes",
        "Created technical drawings and assembly guide for fabrication and user use"
      ],
      tools: ["SolidWorks", "Laser cut"],
      images: ["/images/laptop.jpeg","/images/laptop-base.jpeg?height=300&width=400","/images/laptop-support.jpeg?height=300&width=400"
      ],
      icon: <Cog className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Helical gear",
      category: "3d designing",
      duration: "2 weeks",
      date: "September 2024",
      description: "A personal project focused on designing an efficient helical gear for optimal strength and performance.",
      process: [
      "Researched helical gear applications and performance characteristics",
      "Compared various gear profiles to select the most suitable for load and speed requirements",
      "Modeled the gear in CAD with precise helix angle and tooth geometry",
      "Ran FEA simulations to analyze stress distribution and contact patterns",
      "Refined design based on simulation results and gear meshing analysis"
      ],
      tools: ["SolidWorks"],
      images: ["/images/h-gear.jpeg?height=400&width=600", "/images/Gear-technical-drawing.jpeg?height=300&width=400"],
      icon: <Settings className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Wrench className="h-6 w-6" />
              <span className="font-bold">Andree Gonzalez Villegas</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              <ArrowLeft className="mr-2 h-4 w-4 inline" />
              Back to Portfolio
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">3D Designing</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A collection of my CAD projects showcasing mechanical design, analysis, and problem-solving skills using
            various 3D modeling tools.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Badge variant="secondary" className="text-sm">
              <Cog className="mr-2 h-4 w-4" />
              SolidWorks Certified
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {projects.length} Projects
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container pb-24">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
                {/* Project Images */}
                <div className="space-y-4 p-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={`${project.title} main view`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {project.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.slice(1).map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-video relative rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} view ${imgIndex + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h3 className="font-semibold">Design Process</h3>
                    <ul className="space-y-2">
                      {project.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-sm">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h3 className="font-semibold">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Add Project CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Building className="h-5 w-5" />
                More Projects Coming Soon
              </CardTitle>
              <CardDescription>
                I'm constantly working on new designs and will be adding more projects to this portfolio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="mailto:andree.vgv1@gmail.com">Contact Me About My Work</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}