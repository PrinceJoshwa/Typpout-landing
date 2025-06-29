import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Check, Star, Zap, Crown, Rocket, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 29,
      description: "Perfect for solo founders getting started",
      icon: Star,
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        "1 Workspace",
        "10,000 Keywords Limit",
        "Basic Lead Intelligence",
        "1 Sender Account",
        "3 Active Campaigns",
        "Email Support",
        "Basic Analytics",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Growth",
      price: 79,
      description: "Ideal for growing teams and businesses",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "2 Workspaces",
        "25,000 Keywords Limit",
        "AI Lead Intelligence",
        "2 Sender Accounts",
        "5 Active Campaigns",
        "Priority Support",
        "Advanced Analytics",
        "A/B Testing",
        "Custom Integrations",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Scale",
      price: 199,
      description: "Built for scaling GTM teams",
      icon: Crown,
      gradient: "from-orange-500 to-red-500",
      popular: false,
      features: [
        "5 Workspaces",
        "200,000 Keywords Limit",
        "AI+ Lead Intelligence",
        "5 Sender Accounts",
        "7 Active Campaigns",
        "White-glove Support",
        "Custom Dashboards",
        "Advanced Automation",
        "API Access",
        "Custom Training",
      ],
      cta: "Start Free Trial",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.15),transparent_50%)]"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
              Simple, Transparent Pricing
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Choose Your
              <br />
              <GradientText>Growth Plan</GradientText>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Start free, scale as you grow. All plans include our core AI features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 pt-8">
              <span className="text-gray-400">Monthly</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-14 h-8 bg-white/10 rounded-full border border-white/20 cursor-pointer"></div>
                <div className="absolute left-1 top-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-transform duration-200"></div>
              </div>
              <span className="text-white">Annual</span>
              <Badge className="bg-green-500/10 text-green-400 border-green-500/20">Save 20%</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <FloatingCard delay={index * 200}>
                  <div className={`space-y-8 ${plan.popular ? "border-2 border-purple-500/30" : ""}`}>
                    {/* Header */}
                    <div className="text-center space-y-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                        <p className="text-gray-400">{plan.description}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-5xl font-bold text-white">${plan.price}</span>
                          <span className="text-gray-400">/month</span>
                        </div>
                        <p className="text-sm text-gray-500">Billed monthly</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                      <Button
                        className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-purple-500/25"
                            : `bg-gradient-to-r ${plan.gradient} hover:shadow-lg text-white`
                        }`}
                      >
                        {plan.cta}
                      </Button>
                      <Button variant="ghost" className="w-full text-gray-400 hover:text-white hover:bg-white/5">
                        🔥 14 days free trial
                      </Button>
                    </div>
                  </div>
                </FloatingCard>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">All plans include 14-day free trial • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FloatingCard>
              <div className="text-center space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto shadow-lg">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Enterprise</h3>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    Need custom solutions? We'll build a plan that fits your organization's unique requirements.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  {[
                    "Unlimited workspaces",
                    "Custom integrations",
                    "Dedicated support",
                    "Advanced security",
                    "Custom training",
                    "SLA guarantees",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 group">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2 mb-6">
                Frequently Asked
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Got <GradientText>Questions</GradientText>?
              </h2>
              <p className="text-xl text-gray-400">Everything you need to know about our pricing and plans</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I change plans anytime?",
                  answer:
                    "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences.",
                },
                {
                  question: "What happens after my free trial?",
                  answer:
                    "Your free trial lasts 14 days with full access to all features. After that, you can choose a paid plan or continue with our limited free tier.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 30-day money-back guarantee. If you're not satisfied with Typpout, we'll refund your payment, no questions asked.",
                },
                {
                  question: "Is there a setup fee?",
                  answer:
                    "No setup fees, ever. You only pay for your monthly or annual subscription. We also provide free onboarding and training.",
                },
              ].map((faq, index) => (
                <FloatingCard key={index} delay={index * 100}>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
              Ready to <GradientText>Scale Your LinkedIn</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Start your free trial today and see why thousands of professionals choose Typpout
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
