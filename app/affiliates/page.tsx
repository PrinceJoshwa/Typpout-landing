// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { DollarSign, Users, BarChart3, ArrowRight } from "lucide-react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"


// export default function AffiliatesPage() {
//   return (
//     <><Header /><div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden py-20 lg:py-32">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent" />
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center">
//             <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-2 mb-6">
//               💰 Earn up to 30% per referral
//             </Badge>
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
//               Partner with Typpout and
//               <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//                 earn while you grow
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Join our affiliate program and earn generous commissions by helping creators discover the power of
//               AI-driven content creation.
//             </p>
//             <Button
//               size="lg"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
//             >
//               Become an Affiliate <ArrowRight className="w-5 h-5 ml-2" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Why Partner with Typp? */}
//       <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Partner with Typp?</h2>
//             <p className="text-xl text-gray-300">Join our growing network of successful affiliates</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="bg-blue-950/20 border-blue-800/30 p-8 text-center">
//               <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-6">
//                 <DollarSign className="w-8 h-8 text-blue-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">High Commission Rates</h3>
//               <p className="text-gray-300 mb-6">Earn 30% commission on all referral purchases for the first year</p>
//             </Card>

//             <Card className="bg-green-950/20 border-green-800/30 p-8 text-center">
//               <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-6">
//                 <Users className="w-8 h-8 text-green-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Recurring Revenue</h3>
//               <p className="text-gray-300 mb-6">Get paid monthly for as long as your referrals stay subscribed</p>
//             </Card>

//             <Card className="bg-purple-950/20 border-purple-800/30 p-8 text-center">
//               <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center mx-auto mb-6">
//                 <BarChart3 className="w-8 h-8 text-purple-400" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Real-Time Analytics</h3>
//               <p className="text-gray-300 mb-6">Track your performance and earnings with detailed analytics</p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Commission Structure */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-6">Commission Structure</h2>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid gap-6">
//               <Card className="bg-gray-900/50 border-gray-800 p-8">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">Standard Commission</h3>
//                     <p className="text-gray-300">First year earnings per referral</p>
//                   </div>
//                   <div className="text-4xl font-bold text-blue-400">30%</div>
//                 </div>
//               </Card>

//               <Card className="bg-gray-900/50 border-gray-800 p-8">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">High-Volume Bonus</h3>
//                     <p className="text-gray-300">Additional commission for 10+ referrals</p>
//                   </div>
//                   <div className="text-4xl font-bold text-green-400">+5%</div>
//                 </div>
//               </Card>

//               <Card className="bg-gray-900/50 border-gray-800 p-8">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-2xl font-bold mb-2">Lifetime Commission</h3>
//                     <p className="text-gray-300">After first year</p>
//                   </div>
//                   <div className="text-4xl font-bold text-purple-400">10%</div>
//                 </div>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-6">How It Works</h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
//                 1
//               </div>
//               <h3 className="text-xl font-bold mb-4">Sign Up</h3>
//               <p className="text-gray-300">Complete our quick application form</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
//                 2
//               </div>
//               <h3 className="text-xl font-bold mb-4">Get Approved</h3>
//               <p className="text-gray-300">Receive your unique affiliate link</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
//                 3
//               </div>
//               <h3 className="text-xl font-bold mb-4">Share</h3>
//               <p className="text-gray-300">Promote Typp to your audience</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
//                 4
//               </div>
//               <h3 className="text-xl font-bold mb-4">Earn</h3>
//               <p className="text-gray-300">Get paid monthly for your referrals</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" collapsible className="space-y-4">
//               <AccordionItem value="item-1" className="bg-gray-900/50 border-gray-800 rounded-lg px-6">
//                 <AccordionTrigger className="text-white hover:text-blue-400">
//                   How do I become an affiliate?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-300">
//                   Simply fill out our affiliate application form and wait for approval. Once approved, you'll receive
//                   your unique affiliate link and access to promotional materials.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-2" className="bg-gray-900/50 border-gray-800 rounded-lg px-6">
//                 <AccordionTrigger className="text-white hover:text-blue-400">When do I get paid?</AccordionTrigger>
//                 <AccordionContent className="text-gray-300">
//                   Commissions are paid monthly via PayPal or bank transfer. Payments are processed within the first week
//                   of each month for the previous month's earnings.
//                 </AccordionContent>
//               </AccordionItem>

//               <AccordionItem value="item-3" className="bg-gray-900/50 border-gray-800 rounded-lg px-6">
//                 <AccordionTrigger className="text-white hover:text-blue-400">
//                   What promotional materials do you provide?
//                 </AccordionTrigger>
//                 <AccordionContent className="text-gray-300">
//                   We provide banners, email templates, social media graphics, and detailed product information to help
//                   you promote Typpout effectively.
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to start earning?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join our affiliate program today and start earning generous commissions
//           </p>
//           <Button
//             size="lg"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
//           >
//             Apply Now <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//         </div>
//       </section>
//     </div><Footer /></>
//   )
// }

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DollarSign, Users, BarChart3, ArrowRight, TrendingUp, Zap } from "lucide-react"

export default function AffiliatesPage() {
  return (
    <div className="bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.15),transparent_50%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.15),transparent_50%)] -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/20 px-6 py-3">
              <DollarSign className="w-4 h-4 mr-2" />
              Earn up to 30% per referral
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Partner with Typpout and
              <br />
              <GradientText gradient="from-green-400 via-emerald-400 to-teal-400">Earn While You Grow</GradientText>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Join our affiliate program and earn generous commissions by helping creators discover the power of
              AI-driven LinkedIn automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group">
                Become an Affiliate
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Free to join</span> • Start earning immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Highlights */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "30% Commission",
                description: "First year earnings",
                value: "30%",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: TrendingUp,
                title: "Recurring Revenue",
                description: "Monthly payouts",
                value: "∞",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "High-Volume Bonus",
                description: "10+ referrals",
                value: "+5%",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((highlight, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <highlight.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-white mb-2">{highlight.value}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 mb-6">Why Partner</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Why Partner with <GradientText>Typpout</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our growing network of successful affiliates and start earning today
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "High Commission Rates",
                description:
                  "Earn 30% commission on all referral purchases for the first year, plus lifetime 10% after",
                features: ["30% first year", "10% lifetime", "No caps or limits", "Monthly payouts"],
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: Users,
                title: "Recurring Revenue",
                description:
                  "Get paid monthly for as long as your referrals stay subscribed. Build a sustainable income stream.",
                features: ["Monthly payments", "Lifetime tracking", "No expiration", "Compound growth"],
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description:
                  "Track your performance and earnings with detailed analytics, conversion metrics, and optimization insights.",
                features: ["Live dashboard", "Conversion tracking", "Performance insights", "Optimization tips"],
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((benefit, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="space-y-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{benefit.description}</p>
                    <ul className="space-y-3">
                      {benefit.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2 mb-6">Process</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              How It <GradientText>Works</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get started in minutes and begin earning commissions immediately
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Complete our quick application form and get approved instantly",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "2",
                title: "Get Your Link",
                description: "Receive your unique affiliate link and promotional materials",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "3",
                title: "Share & Promote",
                description: "Share Typpout with your audience using our proven strategies",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                step: "4",
                title: "Earn Commissions",
                description: "Get paid monthly for every successful referral you generate",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((step, index) => (
              <FloatingCard key={index} delay={index * 150}>
                <div className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg`}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 px-4 py-2 mb-6">FAQ</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Everything you need to know about our program</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  question: "How do I become an affiliate?",
                  answer:
                    "Simply fill out our affiliate application form and wait for approval. Once approved, you'll receive your unique affiliate link and access to promotional materials.",
                },
                {
                  question: "When do I get paid?",
                  answer:
                    "Commissions are paid monthly via PayPal or bank transfer. Payments are processed within the first week of each month for the previous month's earnings.",
                },
                {
                  question: "What promotional materials do you provide?",
                  answer:
                    "We provide banners, email templates, social media graphics, and detailed product information to help you promote Typpout effectively.",
                },
                {
                  question: "Is there a minimum payout threshold?",
                  answer:
                    "Yes, the minimum payout threshold is $50. If you don't reach this threshold in a month, your earnings will roll over to the next month.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <FloatingCard>
                    <AccordionTrigger className="text-white hover:text-blue-400 text-left font-semibold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 leading-relaxed pt-4">{faq.answer}</AccordionContent>
                  </FloatingCard>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Ready to Start <GradientText gradient="from-green-400 to-emerald-400">Earning</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Join our affiliate program today and start earning generous commissions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Free to join</span> • Instant approval
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
