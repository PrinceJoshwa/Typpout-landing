// import Image from "next/image"
// import {
//   Check,
//   X,
//   Star,
//   ArrowRight,
//   Users,
//   Zap,
//   Target,
//   MessageSquare,
//   BarChart3,
//   Shield,
//   Sparkles,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       {/* Header */}
//       <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold text-white">Typpout</div>
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 Product
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 Pricing
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 GTM Playbooks
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 Affiliates
//               </a>
//               <a href="#" className="text-slate-300 hover:text-white transition-colors">
//                 Free Tools
//               </a>
//             </nav>
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
//                   Post, Prospect &<br />
//                   Outreach on
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                     Autopilot
//                   </span>{" "}
//                   – AI GTM
//                   <br />
//                   Engine!
//                 </h1>
//                 <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
//                   For <span className="text-yellow-400 font-semibold">founders</span>,{" "}
//                   <span className="text-green-400 font-semibold">agencies</span>,{" "}
//                   <span className="text-blue-400 font-semibold">sales teams</span>, and{" "}
//                   <span className="text-purple-400 font-semibold">GTM experts</span> — automate LinkedIn outreach and
//                   reach 1000+ leads weekly.
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg"
//                 >
//                   Start Growing for Free
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <div
//                       key={i}
//                       className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-slate-800"
//                     />
//                   ))}
//                 </div>
//                 <div className="flex items-center space-x-1">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <span className="text-slate-300 text-sm">Trusted by 1000+ founders</span>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
//               <Image
//                 src="/placeholder.svg?height=600&width=800"
//                 alt="Typpout Dashboard"
//                 width={800}
//                 height={600}
//                 className="relative rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Comparison Table */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Why Typpout?</h2>
//             <p className="text-xl text-slate-300">See how we compare to the competition</p>
//           </div>

//           <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-xl">
//             <CardContent className="p-8">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="border-b border-slate-700">
//                       <th className="text-left py-4 text-slate-300 font-medium">Feature</th>
//                       <th className="text-center py-4 text-white font-bold">Typpout</th>
//                       <th className="text-center py-4 text-slate-400">—</th>
//                       <th className="text-center py-4 text-slate-400">Clay</th>
//                       <th className="text-center py-4 text-slate-400">Dripify</th>
//                     </tr>
//                   </thead>
//                   <tbody className="space-y-4">
//                     {[
//                       "AI-Powered ICP Discovery",
//                       "Automated Message Personalization",
//                       "Multi-Channel Outreach",
//                       "Unified Inbox Management",
//                       "Visual Campaign Builder",
//                       "Real-Time Analytics",
//                     ].map((feature, index) => (
//                       <tr key={index} className="border-b border-slate-700/50">
//                         <td className="py-4 text-slate-300">{feature}</td>
//                         <td className="text-center py-4">
//                           <Check className="w-5 h-5 text-green-400 mx-auto" />
//                         </td>
//                         <td className="text-center py-4">
//                           <X className="w-5 h-5 text-red-400 mx-auto" />
//                         </td>
//                         <td className="text-center py-4">
//                           {index < 2 ? (
//                             <X className="w-5 h-5 text-red-400 mx-auto" />
//                           ) : (
//                             <Check className="w-5 h-5 text-green-400 mx-auto" />
//                           )}
//                         </td>
//                         <td className="text-center py-4">
//                           <X className="w-5 h-5 text-red-400 mx-auto" />
//                         </td>
//                       </tr>
//                     ))}
//                     <tr>
//                       <td className="py-4 text-slate-300 font-semibold">Price</td>
//                       <td className="text-center py-4 text-white font-bold">$29/month</td>
//                       <td className="text-center py-4 text-slate-400">$79.99/month</td>
//                       <td className="text-center py-4 text-slate-400">$149/month</td>
//                       <td className="text-center py-4 text-slate-400">$39/month</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>

//           <div className="text-center mt-8">
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
//               Try Typpout for Free
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
//             <p className="text-xl text-slate-300">Choose the perfect plan to accelerate your GTM strategy</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Basic Plan */}
//             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-xl relative">
//               <CardHeader className="text-center pb-8">
//                 <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Users className="w-6 h-6 text-slate-300" />
//                 </div>
//                 <CardTitle className="text-white text-2xl">Basic</CardTitle>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $29<span className="text-lg text-slate-400 font-normal">/month</span>
//                 </div>
//                 <CardDescription className="text-slate-300 mt-2">
//                   Perfect for solo founders getting started
//                 </CardDescription>
//                 <div className="flex gap-2 justify-center mt-4">
//                   <Badge variant="secondary" className="bg-slate-700 text-slate-300">
//                     Solo Founders
//                   </Badge>
//                   <Badge variant="secondary" className="bg-slate-700 text-slate-300">
//                     Getting Started
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Collaboration</span>
//                     <span className="text-white font-semibold">1</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Keywords Limit</span>
//                     <span className="text-white font-semibold">10,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">ICP Finder</span>
//                     <span className="text-white font-semibold">Basic</span>
//                   </div>
//                 </div>
//                 <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl">
//                   Start Free Trial
//                 </Button>
//                 <div className="text-center">
//                   <span className="text-yellow-400 text-sm">🔥 7-day free trial</span>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Growth Plan */}
//             <Card className="bg-gradient-to-b from-blue-900/50 to-slate-800/50 border-blue-500/50 backdrop-blur-xl relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
//               </div>
//               <CardHeader className="text-center pb-8">
//                 <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Zap className="w-6 h-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white text-2xl">Growth</CardTitle>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $79<span className="text-lg text-slate-400 font-normal">/month</span>
//                 </div>
//                 <CardDescription className="text-slate-300 mt-2">
//                   Ideal for growing teams and businesses
//                 </CardDescription>
//                 <div className="flex gap-2 justify-center mt-4">
//                   <Badge variant="secondary" className="bg-blue-700 text-blue-100">
//                     Growing Teams
//                   </Badge>
//                   <Badge variant="secondary" className="bg-blue-700 text-blue-100">
//                     Small Business
//                   </Badge>
//                   <Badge variant="secondary" className="bg-blue-700 text-blue-100">
//                     Scaling
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Collaboration</span>
//                     <span className="text-white font-semibold">2</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Keywords Limit</span>
//                     <span className="text-white font-semibold">25,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">ICP Finder</span>
//                     <span className="text-white font-semibold">AI</span>
//                   </div>
//                 </div>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl">
//                   Start Free Trial
//                 </Button>
//                 <div className="text-center">
//                   <span className="text-yellow-400 text-sm">🔥 7-day free trial</span>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Premium Plan */}
//             <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-xl relative">
//               <CardHeader className="text-center pb-8">
//                 <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
//                   <Sparkles className="w-6 h-6 text-white" />
//                 </div>
//                 <CardTitle className="text-white text-2xl">Premium</CardTitle>
//                 <div className="text-4xl font-bold text-white mt-4">
//                   $199<span className="text-lg text-slate-400 font-normal">/month</span>
//                 </div>
//                 <CardDescription className="text-slate-300 mt-2">Built for scaling GTM teams</CardDescription>
//                 <div className="flex gap-2 justify-center mt-4">
//                   <Badge variant="secondary" className="bg-purple-700 text-purple-100">
//                     Large Teams
//                   </Badge>
//                   <Badge variant="secondary" className="bg-purple-700 text-purple-100">
//                     Enterprise
//                   </Badge>
//                   <Badge variant="secondary" className="bg-purple-700 text-purple-100">
//                     High Volume
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Collaboration</span>
//                     <span className="text-white font-semibold">5</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">Keywords Limit</span>
//                     <span className="text-white font-semibold">200,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-slate-300">ICP Finder</span>
//                     <span className="text-white font-semibold">AI+</span>
//                   </div>
//                 </div>
//                 <Button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl">
//                   Start Free Trial
//                 </Button>
//                 <div className="text-center">
//                   <span className="text-yellow-400 text-sm">🔥 7-day free trial</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-slate-400">Start Free – No Credit Card Required</p>
//           </div>
//         </div>
//       </section>

//       {/* Social Proof */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Trusted by Innovative Founders</h2>
//             <p className="text-xl text-slate-300">
//               See why forward-thinking startups choose Typpout for their LinkedIn growth
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Deepshi Samioni",
//                 role: "PMM Leader",
//                 company: "LawSeek",
//                 testimonial:
//                   "Typpout has transformed our LinkedIn outreach strategy. We've seen a 300% increase in qualified leads and meaningful connections since implementing the AI-powered platform. The automated content creation and personalized messaging features have saved our team countless hours while delivering exceptional results.",
//               },
//               {
//                 name: "Rajesh Vaishnav",
//                 role: "Founder & Investor",
//                 company: "LawSeek",
//                 testimonial:
//                   "As a legal tech startup, finding the right teams was challenging. We were able to connect with our ideal customers at scale. Their engine helped us identify and connect with our ideal customers at scale, resulting in a significant boost in our client acquisition and overall growth trajectory.",
//               },
//               {
//                 name: "Maitreya Wagh",
//                 role: "Co-Founder & Bema",
//                 company: "Bema",
//                 testimonial:
//                   "Implementing Typpout across our GTM teams has been a game-changer for our revenue operations. The AI-powered content and outreach automation has standardized our LinkedIn strategy while still allowing for personalization. Our sales enablement metrics have skyrocketed, and we're seeing much higher conversion rates at every stage of our funnel.",
//               },
//             ].map((testimonial, index) => (
//               <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-xl">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
//                     <div>
//                       <div className="text-white font-semibold">{testimonial.name}</div>
//                       <div className="text-slate-400 text-sm">{testimonial.role}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Solve Every{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 GTM Breakdown
//               </span>
//             </h2>
//             <p className="text-xl text-slate-300">
//               Each module with Typpout directly solves a defined GTM failure point — from managed ICPs to confident
//               outbound execution.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 icon: Target,
//                 badge: "PROBLEM",
//                 badgeColor: "bg-red-600",
//                 title: "No Clarity on Who to Target",
//                 description:
//                   "There's no clarity on who to target or how to describe them. Decisions are based on assumptions, vanity metrics, or misguided buyer personas.",
//                 solution: "ICP Finder (AI-Powered Persona & Lead Engine)",
//                 solutionDescription:
//                   "Targets your product against 50M+ GTM goals, chooses structured ICPs with job roles, firmographics, pain points, and behavioral data.",
//                 features: [
//                   "Behavioral data from 50M+ professionals",
//                   "Advanced psychographic & value props",
//                   "Beyond lead lists with LinkedIn profiles",
//                   "Automated calls & pain points",
//                 ],
//               },
//               {
//                 icon: MessageSquare,
//                 badge: "PROBLEM",
//                 badgeColor: "bg-red-600",
//                 title: "Inconsistent, Low-Converting Messaging",
//                 description:
//                   "Outbound messaging is inconsistent, low-converting, and human-dependent. Teams lack scalable, high-converting messaging frameworks.",
//                 solution: "AI Messaging Engine",
//                 solutionDescription:
//                   "Automatically generates tailored outbound messages based on selected ICP and channel with tone calibration and dynamic fields.",
//                 features: [
//                   "Tone calibration (conversational, bold, value-first)",
//                   "LinkedIn DMs, emails, conversational delivery",
//                   "A/B outreach, analytics follow-up optimization",
//                   "",
//                 ],
//               },
//               {
//                 icon: BarChart3,
//                 badge: "PROBLEM",
//                 badgeColor: "bg-red-600",
//                 title: "Manual, Fragmented Outreach",
//                 description:
//                   "Outreach is manual, fragmented, and hard to scale. Teams juggle 5-6 disconnected tools creating operational drag and GTM loss.",
//                 solution: "Outreach Flow Builder",
//                 solutionDescription:
//                   "End-to-end outbound sequences built visually with pre-built campaign templates and integrated LinkedIn + Email workflows.",
//                 features: [
//                   "Pre-built campaign templates",
//                   "LinkedIn + Email integration",
//                   "Scheduling logic & follow-up library",
//                   "",
//                 ],
//               },
//               {
//                 icon: Shield,
//                 badge: "PROBLEM",
//                 badgeColor: "bg-red-600",
//                 title: "Manual Lead Qualification Drain",
//                 description:
//                   "Lead qualification and reply triage drain human bandwidth. Founders spend hours manually replying and qualifying across fragmented channels.",
//                 solution: "Unified Inbox + AI Sales Assistant",
//                 solutionDescription:
//                   "Central inbox for all outbound replies with auto-tagging for driven replies, and autonomous quick-send for chat-driven conversations.",
//                 features: [
//                   "Autonomous reply handling & routing",
//                   "Auto-reply leads first, warm, cold",
//                   "AI-driven replies & response handling",
//                   "Integrated lead scoring & CRM handoff",
//                 ],
//               },
//             ].map((feature, index) => (
//               <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-xl">
//                 <CardContent className="p-8">
//                   <div className="space-y-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
//                         <feature.icon className="w-6 h-6 text-red-400" />
//                       </div>
//                       <div className="flex-1">
//                         <Badge className={`${feature.badgeColor} text-white mb-3`}>{feature.badge}</Badge>
//                         <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
//                         <p className="text-slate-300 leading-relaxed">{feature.description}</p>
//                       </div>
//                     </div>

//                     <div className="border-t border-slate-700 pt-6">
//                       <div className="flex items-start space-x-4">
//                         <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center">
//                           <Check className="w-6 h-6 text-green-400" />
//                         </div>
//                         <div className="flex-1">
//                           <Badge className="bg-green-600 text-white mb-3">MODULE SOLUTION</Badge>
//                           <h4 className="text-lg font-bold text-white mb-3">{feature.solution}</h4>
//                           <p className="text-slate-300 leading-relaxed mb-4">{feature.solutionDescription}</p>
//                           <ul className="space-y-2">
//                             {feature.features
//                               .filter((f) => f)
//                               .map((feat, i) => (
//                                 <li key={i} className="flex items-center space-x-2 text-slate-300">
//                                   <Check className="w-4 h-4 text-green-400" />
//                                   <span>{feat}</span>
//                                 </li>
//                               ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Target Audience */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-4xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-white mb-4">Who is Typpout for?</h2>
//             <p className="text-xl text-slate-300">
//               Built for SaaS teams tired of GTM Chaos — want clarity, speed, and outcomes without stitching together 6+
//               tools.
//             </p>
//           </div>

//           <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-xl">
//             <CardContent className="p-8">
//               <div className="space-y-8">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
//                     <Users className="w-6 h-6 text-purple-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-3">SaaS Founders</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-2 h-2 bg-red-400 rounded-full" />
//                         <span className="text-slate-300">The Challenge</span>
//                       </div>
//                       <p className="text-slate-300 ml-5">
//                         Struggling with unclear ICP definition and inconsistent messaging that fails to resonate with
//                         potential customers
//                       </p>

//                       <div className="flex items-center space-x-3 mt-4">
//                         <div className="w-2 h-2 bg-blue-400 rounded-full" />
//                         <span className="text-slate-300">How Typpout Solves It</span>
//                       </div>
//                       <p className="text-slate-300 ml-5">
//                         Streamlined ICP creation, integrated messaging creation, and integrated LinkedIn & email
//                         outbound campaigns
//                       </p>

//                       <div className="flex items-center space-x-3 mt-4">
//                         <div className="w-2 h-2 bg-green-400 rounded-full" />
//                         <span className="text-slate-300">The Results You'll See</span>
//                       </div>
//                       <p className="text-slate-300 ml-5">
//                         Build predictable revenue in weeks, not months. Save 20+ hours/week on manual outreach and focus
//                         on product development
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 border-t border-slate-700 py-16 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             <div>
//               <h3 className="text-white font-bold text-lg mb-4">Product</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Features
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Integrations
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Pricing
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     FAQ
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-4">Company</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Press
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Support
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="text-slate-400 hover:text-white transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-bold text-lg mb-4">Subscribe to our newsletter</h3>
//               <p className="text-slate-400 mb-4">Stay up to date with the latest news and updates.</p>
//               <div className="flex space-x-2">
//                 <Input
//                   placeholder="Enter your email"
//                   className="bg-slate-800 border-slate-700 text-white placeholder-slate-400"
//                 />
//                 <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-2xl font-bold text-white mb-4 md:mb-0">Typpout</div>
//             <div className="text-slate-400 text-sm">© 2024 Typpout. All rights reserved.</div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }
import Home from "./home/page"

export default function Page() {
  return <Home />
}