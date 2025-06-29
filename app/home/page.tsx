// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { FloatingCard } from "@/components/ui/floating-card"
// import { GradientText } from "@/components/ui/gradient-text"
// import { AnimatedCounter } from "@/components/ui/animated-counter"
// import {
//   Star,
//   Check,
//   ArrowRight,
//   Zap,
//   Target,
//   Users,
//   BarChart3,
//   Sparkles,
//   TrendingUp,
//   Shield,
//   Clock,
//   Globe,
// } from "lucide-react"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Effects */}
//       <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
//       <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1),transparent_50%)]"></div>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center space-y-8 mb-16">
//               {/* Badge */}
//               <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300">
//                 <Sparkles className="w-4 h-4 text-blue-400" />
//                 <span className="text-sm font-medium text-gray-300">
//                   AI GTM Engine • Now with 50M+ LinkedIn Profiles
//                 </span>
//                 <ArrowRight className="w-4 h-4 text-blue-400" />
//               </div>

//               {/* Main Headline */}
//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
//                   Transform LinkedIn Into
//                   <br />
//                   Your <GradientText>Revenue Engine</GradientText>
//                 </h1>
//                 <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
//                   Stop manual outreach. Start intelligent automation. Our AI-powered GTM engine turns your LinkedIn
//                   presence into a predictable revenue stream.
//                 </p>
//               </div>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                 <a
//                    href="https://app.typpout.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                 <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
//                   Start Free Trial
//                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//                 </Button>
//                 </a>
                
//                 <Button
//                   variant="outline"
//                   className="border-white/20 text-white hover:bg-white/10 px-12 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-300"
//                 >
//                   Watch Demo
//                 </Button>
//               </div>

//               {/* Social Proof */}
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
//                 <div className="flex items-center space-x-4">
//                   <div className="flex -space-x-3">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <div
//                         key={i}
//                         className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-black shadow-lg"
//                       />
//                     ))}
//                   </div>
//                   <div className="text-left">
//                     <div className="flex items-center space-x-1">
//                       {[1, 2, 3, 4, 5].map((i) => (
//                         <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-400">Trusted by 10,000+ professionals</p>
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-2xl font-bold text-white">
//                     <AnimatedCounter end={1000} suffix="+" />
//                   </p>
//                   <p className="text-sm text-gray-400">Leads generated weekly</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Visual */}
//             <div className="relative max-w-6xl mx-auto">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
//               <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
//                 <Image
//                   src="/hero-dashboard.png"
//                   alt="Typpout Dashboard"
//                   width={1200}
//                   height={600}
//                   className="rounded-2xl shadow-2xl"
//                 />
//               </div>

//               {/* Floating Elements */}
//               <div className="absolute -top-8 -left-8 animate-bounce">
//                 <FloatingCard className="w-48" delay={0}>
//                   <div className="text-center">
//                     <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
//                     <p className="text-sm font-semibold text-white">300% ROI Increase</p>
//                     <p className="text-xs text-gray-400">Average customer result</p>
//                   </div>
//                 </FloatingCard>
//               </div>

//               <div className="absolute -top-8 -right-8 animate-bounce" style={{ animationDelay: "1s" }}>
//                 <FloatingCard className="w-48" delay={500}>
//                   <div className="text-center">
//                     <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
//                     <p className="text-sm font-semibold text-white">20+ Hours Saved</p>
//                     <p className="text-xs text-gray-400">Per week automation</p>
//                   </div>
//                 </FloatingCard>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 relative">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { number: 50, suffix: "M+", label: "LinkedIn Profiles", icon: Users },
//               { number: 300, suffix: "%", label: "Average ROI", icon: TrendingUp },
//               { number: 10, suffix: "K+", label: "Active Users", icon: Globe },
//               { number: 99.9, suffix: "%", label: "Uptime", icon: Shield },
//             ].map((stat, index) => (
//               <FloatingCard key={index} delay={index * 200}>
//                 <div className="text-center space-y-4">
//                   <stat.icon className="w-8 h-8 text-blue-400 mx-auto" />
//                   <div>
//                     <p className="text-3xl lg:text-4xl font-bold text-white">
//                       <AnimatedCounter end={stat.number} suffix={stat.suffix} />
//                     </p>
//                     <p className="text-gray-400 font-medium">{stat.label}</p>
//                   </div>
//                 </div>
//               </FloatingCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 mb-6">Powerful Features</Badge>
//             <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//               Everything You Need to
//               <br />
//               <GradientText>Dominate LinkedIn</GradientText>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               Our AI-powered platform handles every aspect of your LinkedIn growth strategy
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Zap,
//                 title: "AI Content Creation",
//                 description:
//                   "Generate engaging posts that showcase your expertise and attract ideal prospects automatically.",
//                 features: [
//                   "Industry-specific content",
//                   "Pain point targeting",
//                   "Viral post templates",
//                   "Content calendar automation",
//                 ],
//                 gradient: "from-blue-500 to-cyan-500",
//               },
//               {
//                 icon: Target,
//                 title: "Smart Prospecting",
//                 description:
//                   "Find and connect with your ideal customers using advanced AI targeting and personalization.",
//                 features: [
//                   "50M+ profile database",
//                   "Behavioral targeting",
//                   "Personalized outreach",
//                   "Connection automation",
//                 ],
//                 gradient: "from-purple-500 to-pink-500",
//               },
//               {
//                 icon: BarChart3,
//                 title: "Performance Analytics",
//                 description:
//                   "Track, measure, and optimize your LinkedIn performance with detailed insights and reporting.",
//                 features: ["Real-time metrics", "ROI tracking", "A/B testing", "Custom dashboards"],
//                 gradient: "from-green-500 to-emerald-500",
//               },
//             ].map((feature, index) => (
//               <FloatingCard key={index} delay={index * 300}>
//                 <div className="space-y-6">
//                   <div
//                     className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
//                   >
//                     <feature.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
//                     <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
//                     <ul className="space-y-3">
//                       {feature.features.map((item, i) => (
//                         <li key={i} className="flex items-center space-x-3">
//                           <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
//                           <span className="text-gray-300">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <Button
//                     className={`w-full bg-gradient-to-r ${feature.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-xl`}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </FloatingCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-32 relative">
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="text-center mb-20">
//             <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2 mb-6">
//               Customer Success
//             </Badge>
//             <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//               Loved by <GradientText>Industry Leaders</GradientText>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//               See how top professionals are transforming their LinkedIn presence
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Sarah Chen",
//                 role: "VP of Growth",
//                 company: "TechFlow",
//                 avatar: "/placeholder.svg?height=60&width=60",
//                 content:
//                   "Typpout transformed our LinkedIn strategy completely. We went from 50 leads per month to over 500, with a 300% increase in qualified prospects.",
//                 metrics: { leads: "10x", conversion: "300%" },
//               },
//               {
//                 name: "Marcus Rodriguez",
//                 role: "Founder",
//                 company: "ScaleUp",
//                 avatar: "/placeholder.svg?height=60&width=60",
//                 content:
//                   "The AI content creation is incredible. It's like having a world-class copywriter working 24/7. Our engagement rates have never been higher.",
//                 metrics: { engagement: "400%", time: "20hrs" },
//               },
//               {
//                 name: "Emily Watson",
//                 role: "Sales Director",
//                 company: "GrowthCorp",
//                 avatar: "/placeholder.svg?height=60&width=60",
//                 content:
//                   "ROI was immediate. Within 30 days, we closed 3 major deals directly from LinkedIn outreach. The automation is game-changing.",
//                 metrics: { roi: "500%", deals: "3x" },
//               },
//             ].map((testimonial, index) => (
//               <FloatingCard key={index} delay={index * 200}>
//                 <div className="space-y-6">
//                   <div className="flex items-center space-x-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <blockquote className="text-gray-300 text-lg leading-relaxed">"{testimonial.content}"</blockquote>
//                   <div className="flex items-center space-x-4">
//                     <Image
//                       src={testimonial.avatar || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       width={60}
//                       height={60}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <p className="font-semibold text-white">{testimonial.name}</p>
//                       <p className="text-gray-400">
//                         {testimonial.role} at {testimonial.company}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex space-x-4 pt-4 border-t border-white/10">
//                     {Object.entries(testimonial.metrics).map(([key, value]) => (
//                       <div key={key} className="text-center">
//                         <p className="text-2xl font-bold text-white">{value}</p>
//                         <p className="text-xs text-gray-400 capitalize">{key}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </FloatingCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 relative">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
//         <div className="container mx-auto px-6 lg:px-8 relative">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             <h2 className="text-4xl lg:text-6xl font-bold">
//               Ready to <GradientText>10x Your LinkedIn Results</GradientText>?
//             </h2>
//             <p className="text-xl text-gray-400 leading-relaxed">
//               Join thousands of professionals who've transformed their LinkedIn presence into a revenue-generating
//               machine.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                // <a
                //  href="https://app.typpout.com"
                //  target="_blank"
                //  rel="noopener noreferrer"
                //  >
//               <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
//                 Start Your Free Trial
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
//               </Button>
//               </a>
//               <p className="text-gray-400">
//                 <span className="text-white font-semibold">14-day free trial</span> • No credit card required
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Star,
  Check,
  ArrowRight,
  Zap,
  Target,
  Users,
  BarChart3,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
  Globe,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1),transparent_50%)] -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 mb-16">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">
                  AI GTM Engine • Now with 50M+ LinkedIn Profiles
                </span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                  Transform LinkedIn Into
                  <br />
                  Your <GradientText>Revenue Engine</GradientText>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                  Stop manual outreach. Start intelligent automation. Our AI-powered GTM engine turns your LinkedIn
                  presence into a predictable revenue stream.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                 href="https://app.typpout.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                 </a>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-12 py-4 text-lg font-semibold rounded-2xl backdrop-blur-xl bg-white/5 hover:scale-105 transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-black shadow-lg"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400">Trusted by 10,000+ professionals</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter end={1000} suffix="+" />
                  </p>
                  <p className="text-sm text-gray-400">Leads generated weekly</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/hero-dashboard.png"
                  alt="Typpout Dashboard"
                  width={1200}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 animate-bounce">
                <FloatingCard className="w-48" delay={0}>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">300% ROI Increase</p>
                    <p className="text-xs text-gray-400">Average customer result</p>
                  </div>
                </FloatingCard>
              </div>

              <div className="absolute -top-8 -right-8 animate-bounce" style={{ animationDelay: "1s" }}>
                <FloatingCard className="w-48" delay={500}>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">20+ Hours Saved</p>
                    <p className="text-xs text-gray-400">Per week automation</p>
                  </div>
                </FloatingCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: 50, suffix: "M+", label: "LinkedIn Profiles", icon: Users },
              { number: 300, suffix: "%", label: "Average ROI", icon: TrendingUp },
              { number: 10, suffix: "K+", label: "Active Users", icon: Globe },
              { number: 99.9, suffix: "%", label: "Uptime", icon: Shield },
            ].map((stat, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="text-center space-y-4">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto" />
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold text-white">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </p>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Typpout Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-2 mb-6">The Problem</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Why <GradientText gradient="from-orange-400 to-red-400">Typpout</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the difference between manual LinkedIn work and intelligent automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Before - Manual Work */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <Badge className="bg-red-500/10 text-red-400 border-red-500/20 px-4 py-2 mb-4">
                  ❌ Without Typpout
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-6">Manual LinkedIn Work</h3>
              </div>

              <FloatingCard>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/images/typpout-comparison.png"
                    alt="Manual LinkedIn Work - Time Consuming Process"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl relative"
                  />
                </div>
              </FloatingCard>

              <div className="space-y-4">
                {[
                  "20+ hours weekly on manual tasks",
                  "Inconsistent posting schedule",
                  "Generic, low-performing content",
                  "Manual prospecting and outreach",
                  "Poor response rates (<5%)",
                  "Unpredictable results",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-sm">✗</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After - With Typpout */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2 mb-4">
                  ✅ With Typpout
                </Badge>
                <h3 className="text-3xl font-bold text-white mb-6">AI-Powered Automation</h3>
              </div>

              <FloatingCard>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                  <Image
                    src="/images/typpout-hero.png"
                    alt="Typpout AI Dashboard - Automated LinkedIn Growth"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl relative"
                  />
                </div>
              </FloatingCard>

              <div className="space-y-4">
                {[
                  "2 hours weekly setup and monitoring",
                  "Consistent, automated posting",
                  "AI-generated, high-performing content",
                  "Smart prospecting with AI targeting",
                  "30%+ response rates consistently",
                  "Predictable, scalable growth",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="mt-20 text-center">
            <FloatingCard>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Time Saved", value: "90%", color: "text-green-400" },
                  { label: "Response Rate", value: "6x Higher", color: "text-blue-400" },
                  { label: "Lead Quality", value: "300% Better", color: "text-purple-400" },
                  { label: "ROI Increase", value: "500%+", color: "text-orange-400" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 mb-6">Powerful Features</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Everything You Need to
              <br />
              <GradientText>Dominate LinkedIn</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform handles every aspect of your LinkedIn growth strategy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI Content Creation",
                description:
                  "Generate engaging posts that showcase your expertise and attract ideal prospects automatically.",
                features: [
                  "Industry-specific content",
                  "Pain point targeting",
                  "Viral post templates",
                  "Content calendar automation",
                ],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Target,
                title: "Smart Prospecting",
                description:
                  "Find and connect with your ideal customers using advanced AI targeting and personalization.",
                features: [
                  "50M+ profile database",
                  "Behavioral targeting",
                  "Personalized outreach",
                  "Connection automation",
                ],
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description:
                  "Track, measure, and optimize your LinkedIn performance with detailed insights and reporting.",
                features: ["Real-time metrics", "ROI tracking", "A/B testing", "Custom dashboards"],
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <FloatingCard key={index} delay={index * 300}>
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${feature.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-xl`}
                  >
                    Learn More
                  </Button>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2 mb-6">
              Customer Success
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Loved by <GradientText>Industry Leaders</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how top professionals are transforming their LinkedIn presence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "VP of Growth",
                company: "TechFlow",
                avatar: "/placeholder.svg?height=60&width=60",
                content:
                  "Typpout transformed our LinkedIn strategy completely. We went from 50 leads per month to over 500, with a 300% increase in qualified prospects.",
                metrics: { leads: "10x", conversion: "300%" },
              },
              {
                name: "Marcus Rodriguez",
                role: "Founder",
                company: "ScaleUp",
                avatar: "/placeholder.svg?height=60&width=60",
                content:
                  "The AI content creation is incredible. It's like having a world-class copywriter working 24/7. Our engagement rates have never been higher.",
                metrics: { engagement: "400%", time: "20hrs" },
              },
              {
                name: "Emily Watson",
                role: "Sales Director",
                company: "GrowthCorp",
                avatar: "/placeholder.svg?height=60&width=60",
                content:
                  "ROI was immediate. Within 30 days, we closed 3 major deals directly from LinkedIn outreach. The automation is game-changing.",
                metrics: { roi: "500%", deals: "3x" },
              },
            ].map((testimonial, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 text-lg leading-relaxed">"{testimonial.content}"</blockquote>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 pt-4 border-t border-white/10">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold text-white">{value}</p>
                        <p className="text-xs text-gray-400 capitalize">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to <GradientText>10x Your LinkedIn Results</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Join thousands of professionals who've transformed their LinkedIn presence into a revenue-generating
              machine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <a
                 href="https://app.typpout.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              </a>
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

