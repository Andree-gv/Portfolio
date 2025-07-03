"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Wrench, Cog, Settings, Zap, Car, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SolidWorksPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Mechanical Gear Assembly",
      category: "Machine Design",
      duration: "3 weeks",
      date: "March 2024",
      description: "A comprehensive gear train assembly designed for a mechanical transmission system.",
      process: [
        "Started with requirements analysis and load calculations",
        "Created individual gear profiles using involute curve geometry",
        "Assembled components with proper constraints and mates",
        "Performed motion studies to verify gear ratios",
        "Generated technical drawings with GD&T specifications",
      ],
      tools: ["SolidWorks", "Motion Study", "Simulation", "Drawing Package"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      icon: <Cog className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Hydraulic Cylinder Design",
      category: "Fluid Power",
      duration: "2 weeks",
      date: "February 2024",
      description: "Custom hydraulic cylinder designed for industrial lifting applications.",
      process: [
        "Analyzed force requirements and operating conditions",
        "Selected appropriate materials for cylinder components",
        "Designed sealing systems and mounting configurations",
        "Created detailed part drawings with tolerances",
        "Validated design through FEA stress analysis",
      ],
      tools: ["SolidWorks", "Simulation", "Material Library", "Technical Drawing"],
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Automotive Suspension Component",
      category: "Automotive",
      duration: "4 weeks",
      date: "January 2024",
      description: "Redesigned suspension arm for improved performance and weight reduction.",
      process: [
        "Reverse-engineered existing component for baseline",
        "Applied topology optimization for weight reduction",
        "Integrated mounting points and connection interfaces",
        "Performed fatigue analysis under cyclic loading",
        "Created manufacturing drawings for CNC machining",
      ],
      tools: ["SolidWorks", "Topology Study", "Fatigue Analysis", "CAM Integration"],
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      icon: <Car className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "3D Printer Extruder Assembly",
      category: "Additive Manufacturing",
      duration: "2 weeks",
      date: "December 2023",
      description: "Custom extruder assembly designed for high-temperature 3D printing applications.",
      process: [
        "Researched existing extruder designs and limitations",
        "Designed heat break and thermal management system",
        "Created modular assembly for easy maintenance",
        "Optimized for 3D printing manufacturing constraints",
        "Tested prototypes and iterated design improvements",
      ],
      tools: ["SolidWorks", "Thermal Analysis", "3D Printing Validation"],
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=300&width=400"],
      icon: <Zap className="w-6 h-6" />,
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">SolidWorks Design Portfolio</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A collection of my CAD projects showcasing mechanical design, analysis, and problem-solving skills using
            SolidWorks.
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
          {projects.map((project) => (
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
                I&apos;m constantly working on new designs and will be adding more projects to this portfolio.
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
