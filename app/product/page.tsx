import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Zap, Target, Users, BarChart3, MessageSquare, Calendar, Sparkles, Check, Play } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.15),transparent_50%)]"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered GTM Engine
                </Badge>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Turn LinkedIn Into Your
                    <br />
                    <GradientText>Revenue Machine</GradientText>
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    Stop wasting hours on manual outreach. Our AI-powered platform automates your entire LinkedIn
                    workflow—from content creation to deal closing.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl bg-white/5 group"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {[
                    { number: 300, suffix: "%", label: "ROI Increase" },
                    { number: 20, suffix: "+", label: "Hours Saved/Week" },
                    { number: 10, suffix: "x", label: "More Leads" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl font-bold text-white">
                        <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                      </p>
                      <p className="text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <FloatingCard>
                  <Image
                    src="/hero-dashboard.png"
                    alt="Typpout Product Interface"
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                  />
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="bg-red-500/10 text-red-400 border-red-500/20 px-4 py-2 mb-6">The Problem</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                LinkedIn Outreach is <GradientText gradient="from-red-400 to-orange-400">Broken</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Most professionals struggle with these critical LinkedIn challenges
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Manual & Time-Consuming",
                  description:
                    "Spending 20+ hours weekly on content creation, prospecting, and follow-ups instead of closing deals.",
                  impact: "20+ hours wasted weekly",
                },
                {
                  icon: Users,
                  title: "Poor Targeting & Low Response",
                  description:
                    "Generic messages and spray-and-pray tactics leading to <5% response rates and frustrated prospects.",
                  impact: "<5% response rates",
                },
                {
                  icon: BarChart3,
                  title: "Inconsistent Results",
                  description:
                    "Unpredictable lead generation with feast-or-famine cycles making growth impossible to scale.",
                  impact: "Unpredictable revenue",
                },
              ].map((problem, index) => (
                <FloatingCard key={index} delay={index * 200}>
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                      <problem.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{problem.description}</p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                        <span className="text-red-400 font-semibold text-sm">{problem.impact}</span>
                      </div>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2 mb-6">The Solution</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                How Typpout <GradientText gradient="from-green-400 to-emerald-400">Solves Everything</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI-powered platform automates your entire LinkedIn workflow
              </p>
            </div>

            <div className="space-y-20">
              {[
                {
                  icon: Zap,
                  title: "AI Content Creation",
                  description:
                    "Generate engaging, industry-specific posts that showcase your expertise and attract ideal prospects automatically.",
                  features: [
                    "Industry-specific content generation",
                    "Pain point targeting",
                    "Viral post templates",
                    "Content calendar automation",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                  gradient: "from-blue-500 to-cyan-500",
                  reverse: false,
                },
                {
                  icon: Target,
                  title: "Smart Prospecting Engine",
                  description:
                    "Find and connect with your ideal customers using advanced AI targeting and hyper-personalized outreach.",
                  features: [
                    "50M+ profile database",
                    "Behavioral targeting",
                    "Personalized connection requests",
                    "Multi-touch sequences",
                  ],
                  image: "/placeholder.svg?height=400&width=600",
                  gradient: "from-purple-500 to-pink-500",
                  reverse: true,
                },
                {
                  icon: Calendar,
                  title: "Meeting Automation",
                  description:
                    "Convert conversations into booked meetings with integrated scheduling and automated follow-ups.",
                  features: ["Calendar integration", "Automated booking", "Meeting reminders", "No-show follow-ups"],
                  image: "/placeholder.svg?height=400&width=600",
                  gradient: "from-green-500 to-emerald-500",
                  reverse: false,
                },
                {
                  icon: BarChart3,
                  title: "Performance Analytics",
                  description:
                    "Track, measure, and optimize your LinkedIn performance with detailed insights and real-time reporting.",
                  features: ["Real-time metrics", "ROI tracking", "A/B testing", "Custom dashboards"],
                  image: "/placeholder.svg?height=400&width=600",
                  gradient: "from-orange-500 to-red-500",
                  reverse: true,
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${solution.reverse ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-8 ${solution.reverse ? "lg:col-start-2" : ""}`}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-xl text-gray-400 leading-relaxed mb-8">{solution.description}</p>
                      <ul className="space-y-4">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className={`bg-gradient-to-r ${solution.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold px-8 py-3 rounded-xl`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                  <div className={`relative ${solution.reverse ? "lg:col-start-1" : ""}`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${solution.gradient.replace("from-", "from-").replace("to-", "to-")}/20 rounded-3xl blur-3xl`}
                    ></div>
                    <FloatingCard>
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl"
                      />
                    </FloatingCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2 mb-6">
                Perfect For
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Built for <GradientText>Growth-Focused Teams</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Designed for professionals who want to scale their LinkedIn presence without the manual work
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Sparkles,
                  title: "Startup Founders",
                  description:
                    "Scale your personal brand and generate leads for early customer acquisition and investor outreach.",
                  benefits: [
                    "Build thought leadership",
                    "Generate investor interest",
                    "Attract early customers",
                    "Scale personal brand",
                  ],
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Target,
                  title: "Sales Teams",
                  description:
                    "Automate prospecting and fill your pipeline with qualified leads through systematic LinkedIn outreach.",
                  benefits: [
                    "Automate lead generation",
                    "Increase pipeline velocity",
                    "Improve conversion rates",
                    "Scale outreach efforts",
                  ],
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: MessageSquare,
                  title: "Marketing Agencies",
                  description:
                    "Manage multiple client accounts and drive consistent growth through automated LinkedIn strategies.",
                  benefits: [
                    "Manage multiple accounts",
                    "Deliver consistent results",
                    "Scale client services",
                    "Increase retention",
                  ],
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: BarChart3,
                  title: "GTM Leaders",
                  description:
                    "Execute data-driven LinkedIn strategies that align with your go-to-market goals and drive measurable results.",
                  benefits: [
                    "Align with GTM strategy",
                    "Drive measurable results",
                    "Optimize performance",
                    "Scale efficiently",
                  ],
                  gradient: "from-orange-500 to-red-500",
                },
              ].map((audience, index) => (
                <FloatingCard key={index} delay={index * 200}>
                  <div className="space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <audience.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6">{audience.description}</p>
                      <ul className="space-y-3">
                        {audience.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to <GradientText>Transform Your LinkedIn</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Join thousands of professionals who've automated their LinkedIn success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <p className="text-gray-400">
                <span className="text-white font-semibold">14-day free trial</span> • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
