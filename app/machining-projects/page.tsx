"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Clock, Wrench, Cog, Settings, Building, Drill } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MachiningProjects() {
  const projects = [
    {
      id: 1,
      title: "Aluminum Dice",
      category: "CNC Machining",
      duration: "2 days",
      date: "August 2024",
      description: "Machined a precision aluminum dice using CNC milling operations.",
      process: [
        "Created GD&T drawings for all six faces",
        "Selected tools and speeds for aluminum machining",
        "Secured stock in KURT vise with proper alignment",
        "Programmed 3-axis CNC toolpaths for dot patterns",
        "Ran roughing and finishing operations",
        "Deburred and manually finished edges",
        "Achieved ±0.001 tolerance on key features",
      ],
      tools: ["CNC Mill", "KURT Vise", "Precision Measuring Tools", "CAM Software"],
      images: ["/images/machining-projects.jpeg"],
      icon: <Drill className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "C-clamp",
      category: "Lathe and mill Operations",
      duration: "5 days",
      date: "August 2024",
      description: "Machined a steel C-clamp using both lathe and mill operations, ensuring tight tolerances and functional threading..",
      process: [
        "Reviewed engineering drawing and material requirements",
        "Faced and drilled stock on the lathe to prepare for threading",
        "Tapped threaded hole for clamping screw",
        "Used mill to cut C-frame profile with proper fixturing",
        "Milled slot and drilled through-holes to final dimensions",
        "Deburred and smoothed all edges for safety and finish",
        "Inspected part with calipers and thread gauges",
        "Verified dimensional accuracy and fit of threaded components",
      ],
      tools: ["Manual Lathe", "Vertical Mill", "Drill Bits", "Taps and Dies", "Calipers", "Thread Gauge", "Vise"],
      images: ["/images/clamp1.png", "/images/thread.jpg"],
      icon: <Cog className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Custom Bracket Fabrication",
      category: "Manual Machining",
      duration: "3 days",
      date: "February 2024",
      description: "Fabricated a custom mounting bracket using manual mill and drill press operations.",
      process: [
        "Interpreted engineering drawings and specifications",
        "Marked out hole locations using layout tools",
        "Drilled and tapped holes to specification",
        "Milled slots and contours using manual mill",
        "Deburred all edges for safety and appearance",
        "Performed final inspection and quality check",
      ],
      tools: ["Manual Mill", "Drill Press", "Layout Tools", "Tap and Die Set"],
      images: ["/placeholder.svg?height=400&width=600"],
      icon: <Settings className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Gear Cutting Project",
      category: "Specialized Machining",
      duration: "1 week",
      date: "January 2024",
      description: "Cut spur gear teeth using gear hobbing machine for mechanical transmission.",
      process: [
        "Calculated gear parameters and cutting specifications",
        "Selected appropriate gear hob and cutting parameters",
        "Set up blank in gear hobbing machine",
        "Programmed hobbing cycle with proper indexing",
        "Monitored cutting process and tool wear",
        "Inspected gear teeth profile and pitch accuracy",
      ],
      tools: ["Gear Hobbing Machine", "Gear Hob", "Gear Measuring Tools", "CMM"],
      images: ["/placeholder.svg?height=400&width=600"],
      icon: <Wrench className="w-6 h-6" />,
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
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Machining Projects</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my hands-on machining experience using CNC and manual equipment to fabricate precision
            components from engineering designs.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Badge variant="secondary" className="text-sm">
              <Drill className="mr-2 h-4 w-4" />
              CNC & Manual Machining
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
                    <h3 className="font-semibold">Machining Process</h3>
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
                    <h3 className="font-semibold">Tools & Equipment</h3>
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
                I'm constantly working on new machining projects and will be adding more to this portfolio.
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
