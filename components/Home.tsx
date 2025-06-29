// "use client"

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
//   Play,
//   TrendingUp,
//   Globe,
//   Rocket,
//   Brain,
//   Quote,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       {/* Floating Navigation */}
//       <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
//         <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-8 py-4">
//           <div className="flex items-center space-x-8">
//             <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Typpout
//             </div>
//             <div className="hidden md:flex items-center space-x-6 text-sm">
//               <a href="#" className="text-white/80 hover:text-white transition-all duration-300">
//                 Product
//               </a>
//               <a href="#" className="text-white/80 hover:text-white transition-all duration-300">
//                 Pricing
//               </a>
//               <a href="#" className="text-white/80 hover:text-white transition-all duration-300">
//                 Resources
//               </a>
//             </div>
//             <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-6 py-2 text-sm font-medium">
//               Get Started
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           <div className="text-center space-y-8 mb-16">
//             {/* Badge */}
//             <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3">
//               <Sparkles className="w-4 h-4 text-blue-400" />
//               <span className="text-sm font-medium text-blue-300">AI-Powered GTM Engine</span>
//             </div>

//             {/* Main Headline */}
//             <h1 className="text-6xl md:text-8xl font-bold leading-tight">
//               <span className="block">Post, Prospect &</span>
//               <span className="block">Outreach on</span>
//               <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Autopilot
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
//               The only AI GTM engine that transforms <span className="text-yellow-400 font-semibold">founders</span>,{" "}
//               <span className="text-green-400 font-semibold">agencies</span>, and{" "}
//               <span className="text-blue-400 font-semibold">sales teams</span> into LinkedIn outreach machines
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
//               <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25">
//                 Start Growing for Free
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-semibold bg-transparent"
//               >
//                 <Play className="mr-2 w-5 h-5" />
//                 Watch Demo
//               </Button>
//             </div>

//             {/* Social Proof */}
//             <div className="flex flex-col items-center space-y-4 mt-16">
//               <div className="flex items-center space-x-6">
//                 <div className="flex -space-x-3">
//                   {[1, 2, 3, 4, 5, 6].map((i) => (
//                     <div
//                       key={i}
//                       className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-black"
//                     />
//                   ))}
//                 </div>
//                 <div className="text-left">
//                   <div className="flex items-center space-x-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-white/70 text-sm mt-1">Trusted by 1000+ founders</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Hero Visual */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
//             <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
//               <Image
//                 src="/hero-dashboard.png"
//                 alt="Typpout Dashboard"
//                 width={1200}
//                 height={600}
//                 className="rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: "1000+", label: "Active Users", icon: Users },
//               { number: "300%", label: "Lead Increase", icon: TrendingUp },
//               { number: "50M+", label: "Profiles Analyzed", icon: Globe },
//               { number: "99.9%", label: "Uptime", icon: Rocket },
//             ].map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="w-8 h-8 text-blue-400" />
//                 </div>
//                 <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-white/60">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Bento Grid */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Solve Every{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 GTM Challenge
//               </span>
//             </h2>
//             <p className="text-xl text-white/70 max-w-3xl mx-auto">
//               Each module directly addresses critical GTM failure points with AI-powered solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Large Feature Card */}
//             <div className="lg:col-span-2 lg:row-span-2">
//               <Card className="h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30 backdrop-blur-xl">
//                 <CardContent className="p-8 h-full flex flex-col">
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
//                       <Brain className="w-6 h-6 text-blue-400" />
//                     </div>
//                     <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">AI-Powered</Badge>
//                   </div>
//                   <h3 className="text-3xl font-bold mb-4">ICP Finder & Lead Engine</h3>
//                   <p className="text-white/70 text-lg mb-6 flex-grow">
//                     Target your product against 50M+ GTM goals with structured ICPs, behavioral data, and automated lead
//                     qualification.
//                   </p>
//                   <div className="space-y-3">
//                     {[
//                       "Behavioral data from 50M+ professionals",
//                       "Advanced psychographic analysis",
//                       "Automated pain point identification",
//                       "LinkedIn profile integration",
//                     ].map((feature, i) => (
//                       <div key={i} className="flex items-center space-x-3">
//                         <Check className="w-5 h-5 text-green-400" />
//                         <span className="text-white/80">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Smaller Feature Cards */}
//             {[
//               {
//                 icon: MessageSquare,
//                 title: "AI Messaging Engine",
//                 description: "Generate tailored outbound messages with tone calibration and dynamic personalization.",
//                 color: "from-green-900/30 to-emerald-900/30",
//                 borderColor: "border-green-500/30",
//               },
//               {
//                 icon: BarChart3,
//                 title: "Visual Campaign Builder",
//                 description: "Build end-to-end outbound sequences with pre-built templates and automation.",
//                 color: "from-purple-900/30 to-pink-900/30",
//                 borderColor: "border-purple-500/30",
//               },
//               {
//                 icon: Shield,
//                 title: "Unified Inbox",
//                 description: "Central hub for all outbound replies with AI-powered response handling.",
//                 color: "from-orange-900/30 to-red-900/30",
//                 borderColor: "border-orange-500/30",
//               },
//               {
//                 icon: Target,
//                 title: "Real-time Analytics",
//                 description: "Track performance metrics and optimize campaigns with actionable insights.",
//                 color: "from-cyan-900/30 to-blue-900/30",
//                 borderColor: "border-cyan-500/30",
//               },
//             ].map((feature, index) => (
//               <Card
//                 key={index}
//                 className={`bg-gradient-to-br ${feature.color} ${feature.borderColor} backdrop-blur-xl hover:scale-105 transition-all duration-300`}
//               >
//                 <CardContent className="p-6">
//                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
//                     <feature.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//                   <p className="text-white/70">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Comparison Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6">Why Choose Typpout?</h2>
//             <p className="text-xl text-white/70">See how we stack up against the competition</p>
//           </div>

//           <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-white/20">
//                     <th className="text-left py-6 text-white/70 font-medium text-lg">Feature</th>
//                     <th className="text-center py-6">
//                       <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full">
//                         Typpout
//                       </div>
//                     </th>
//                     <th className="text-center py-6 text-white/50">Competitor A</th>
//                     <th className="text-center py-6 text-white/50">Clay</th>
//                     <th className="text-center py-6 text-white/50">Dripify</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {[
//                     "AI-Powered ICP Discovery",
//                     "Automated Message Personalization",
//                     "Multi-Channel Outreach",
//                     "Unified Inbox Management",
//                     "Visual Campaign Builder",
//                     "Real-Time Analytics",
//                   ].map((feature, index) => (
//                     <tr key={index} className="border-b border-white/10">
//                       <td className="py-6 text-white font-medium">{feature}</td>
//                       <td className="text-center py-6">
//                         <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
//                           <Check className="w-5 h-5 text-white" />
//                         </div>
//                       </td>
//                       <td className="text-center py-6">
//                         <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto">
//                           <X className="w-5 h-5 text-white" />
//                         </div>
//                       </td>
//                       <td className="text-center py-6">
//                         {index < 2 ? (
//                           <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto">
//                             <X className="w-5 h-5 text-white" />
//                           </div>
//                         ) : (
//                           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto">
//                             <Check className="w-5 h-5 text-white" />
//                           </div>
//                         )}
//                       </td>
//                       <td className="text-center py-6">
//                         <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto">
//                           <X className="w-5 h-5 text-white" />
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                   <tr className="border-b border-white/10">
//                     <td className="py-6 text-white font-bold text-lg">Starting Price</td>
//                     <td className="text-center py-6">
//                       <div className="text-2xl font-bold text-green-400">$29</div>
//                       <div className="text-white/60 text-sm">/month</div>
//                     </td>
//                     <td className="text-center py-6">
//                       <div className="text-xl font-semibold text-white/60">$79.99</div>
//                       <div className="text-white/40 text-sm">/month</div>
//                     </td>
//                     <td className="text-center py-6">
//                       <div className="text-xl font-semibold text-white/60">$149</div>
//                       <div className="text-white/40 text-sm">/month</div>
//                     </td>
//                     <td className="text-center py-6">
//                       <div className="text-xl font-semibold text-white/60">$39</div>
//                       <div className="text-white/40 text-sm">/month</div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-4 text-lg font-semibold">
//               Try Typpout for Free
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               Simple,{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Transparent
//               </span>{" "}
//               Pricing
//             </h2>
//             <p className="text-xl text-white/70">Choose the perfect plan to accelerate your GTM strategy</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Basic Plan */}
//             <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300">
//               <CardContent className="p-8">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                     <Users className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Basic</h3>
//                   <div className="text-5xl font-bold mb-2">
//                     $29<span className="text-xl text-white/60 font-normal">/mo</span>
//                   </div>
//                   <p className="text-white/70">Perfect for solo founders getting started</p>
//                 </div>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Collaboration</span>
//                     <span className="font-semibold">1 user</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Keywords Limit</span>
//                     <span className="font-semibold">10,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">ICP Finder</span>
//                     <span className="font-semibold">Basic</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-3">
//                   Start Free Trial
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Growth Plan - Featured */}
//             <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/50 backdrop-blur-xl scale-105 hover:scale-110 transition-all duration-300 relative">
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                 <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-sm font-semibold">
//                   Most Popular
//                 </Badge>
//               </div>
//               <CardContent className="p-8">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                     <Zap className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Growth</h3>
//                   <div className="text-5xl font-bold mb-2">
//                     $79<span className="text-xl text-white/60 font-normal">/mo</span>
//                   </div>
//                   <p className="text-white/70">Ideal for growing teams and businesses</p>
//                 </div>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Collaboration</span>
//                     <span className="font-semibold">2 users</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Keywords Limit</span>
//                     <span className="font-semibold">25,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">ICP Finder</span>
//                     <span className="font-semibold">AI-Powered</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full py-3 font-semibold">
//                   Start Free Trial
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Premium Plan */}
//             <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300">
//               <CardContent className="p-8">
//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                     <Sparkles className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">Premium</h3>
//                   <div className="text-5xl font-bold mb-2">
//                     $199<span className="text-xl text-white/60 font-normal">/mo</span>
//                   </div>
//                   <p className="text-white/70">Built for scaling GTM teams</p>
//                 </div>

//                 <div className="space-y-4 mb-8">
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Collaboration</span>
//                     <span className="font-semibold">5 users</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">Keywords Limit</span>
//                     <span className="font-semibold">200,000</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-white/80">ICP Finder</span>
//                     <span className="font-semibold">AI+ Advanced</span>
//                   </div>
//                 </div>

//                 <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full py-3">
//                   Start Free Trial
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-white/60">Start Free – No Credit Card Required</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold mb-6">
//               Trusted by{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Innovative
//               </span>{" "}
//               Founders
//             </h2>
//             <p className="text-xl text-white/70">See why forward-thinking startups choose Typpout</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Deepshi Samioni",
//                 role: "PMM Leader",
//                 company: "LawSeek",
//                 testimonial:
//                   "Typpout has transformed our LinkedIn outreach strategy. We've seen a 300% increase in qualified leads and meaningful connections since implementing the AI-powered platform.",
//                 avatar: "DS",
//               },
//               {
//                 name: "Rajesh Vaishnav",
//                 role: "Founder & Investor",
//                 company: "LawSeek",
//                 testimonial:
//                   "As a legal tech startup, finding the right teams was challenging. Their engine helped us identify and connect with our ideal customers at scale.",
//                 avatar: "RV",
//               },
//               {
//                 name: "Maitreya Wagh",
//                 role: "Co-Founder & Bema",
//                 company: "Bema",
//                 testimonial:
//                   "Implementing Typpout across our GTM teams has been a game-changer for our revenue operations. Our sales enablement metrics have skyrocketed.",
//                 avatar: "MW",
//               },
//             ].map((testimonial, index) => (
//               <Card
//                 key={index}
//                 className="bg-gradient-to-br from-white/5 to-white/10 border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300"
//               >
//                 <CardContent className="p-8">
//                   <Quote className="w-8 h-8 text-blue-400 mb-6" />
//                   <div className="flex items-center mb-6">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                   <p className="text-white/80 leading-relaxed mb-8">"{testimonial.testimonial}"</p>
//                   <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <div className="font-semibold">{testimonial.name}</div>
//                       <div className="text-white/60 text-sm">{testimonial.role}</div>
//                       <div className="text-white/40 text-sm">{testimonial.company}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Target Audience */}
//       <section className="py-24 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6">Who is Typpout for?</h2>
//             <p className="text-xl text-white/70">
//               Built for SaaS teams tired of GTM chaos — want clarity, speed, and outcomes without stitching together 6+
//               tools
//             </p>
//           </div>

//           <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/20 backdrop-blur-xl">
//             <CardContent className="p-12">
//               <div className="flex items-start space-x-6">
//                 <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
//                   <Users className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-3xl font-bold mb-8">SaaS Founders</h3>
//                   <div className="grid md:grid-cols-3 gap-8">
//                     <div>
//                       <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-3 h-3 bg-red-400 rounded-full" />
//                         <span className="font-semibold text-red-300">The Challenge</span>
//                       </div>
//                       <p className="text-white/70 leading-relaxed">
//                         Struggling with unclear ICP definition and inconsistent messaging that fails to resonate
//                       </p>
//                     </div>
//                     <div>
//                       <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-3 h-3 bg-blue-400 rounded-full" />
//                         <span className="font-semibold text-blue-300">How We Solve It</span>
//                       </div>
//                       <p className="text-white/70 leading-relaxed">
//                         Streamlined ICP creation, integrated messaging, and automated LinkedIn & email campaigns
//                       </p>
//                     </div>
//                     <div>
//                       <div className="flex items-center space-x-3 mb-4">
//                         <div className="w-3 h-3 bg-green-400 rounded-full" />
//                         <span className="font-semibold text-green-300">The Results</span>
//                       </div>
//                       <p className="text-white/70 leading-relaxed">
//                         Build predictable revenue in weeks, not months. Save 20+ hours/week on manual outreach
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 backdrop-blur-xl rounded-3xl p-12">
//             <h2 className="text-5xl font-bold mb-6">
//               Ready to Transform Your{" "}
//               <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 GTM Strategy?
//               </span>
//             </h2>
//             <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
//               Join 1000+ founders who've already automated their LinkedIn outreach and scaled their revenue
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-4 text-lg font-semibold">
//                 Start Your Free Trial
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg font-semibold bg-transparent"
//               >
//                 Schedule a Demo
//               </Button>
//             </div>
//             <p className="text-white/50 text-sm mt-6">No credit card required • 7-day free trial</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-20 px-4 border-t border-white/10">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-12 mb-16">
//             <div className="md:col-span-2">
//               <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
//                 Typpout
//               </div>
//               <p className="text-white/70 text-lg leading-relaxed max-w-md">
//                 The AI-powered GTM engine that transforms founders, agencies, and sales teams into LinkedIn outreach
//                 machines.
//               </p>
//               <div className="flex space-x-4 mt-8">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">f</span>
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">t</span>
//                 </div>
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
//                   <span className="text-sm font-bold">in</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-6">Product</h3>
//               <ul className="space-y-4">
//                 {["Features", "Integrations", "Pricing", "FAQ"].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-white/70 hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-bold text-lg mb-6">Company</h3>
//               <ul className="space-y-4">
//                 {["About Us", "Careers", "Press", "Contact"].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-white/70 hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <div className="text-white/60 mb-4 md:mb-0">© 2024 Typpout. All rights reserved.</div>
//             <div className="flex space-x-6 text-white/60">
//               <a href="#" className="hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-white transition-colors">
//                 Terms of Service
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1),transparent_50%)]"></div>

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
                  src="/placeholder.svg?height=600&width=1200"
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
