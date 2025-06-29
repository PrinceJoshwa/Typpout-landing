// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   FileText,
//   MessageSquare,
//   Lightbulb,
//   User,
//   Hash,
//   Calendar,
//   TrendingUp,
//   CheckCircle,
//   Building,
//   Search,
//   Video,
//   Mail,
//   Phone,
//   BookOpen,
//   Target,
//   Users,
//   ArrowRight,
// } from "lucide-react"

// export default function FreeToolsPage() {
//   const tools = [
//     {
//       icon: FileText,
//       title: "LinkedIn Summary Generator",
//       description: "Create a compelling LinkedIn summary that highlights your professional strengths and achievements.",
//       buttonText: "Try LinkedIn Summary Generator",
//       color: "blue",
//     },
//     {
//       icon: MessageSquare,
//       title: "LinkedIn Headline Generator",
//       description: "Generate an attention-grabbing LinkedIn headline that showcases your expertise and value.",
//       buttonText: "Try LinkedIn Headline Generator",
//       color: "purple",
//     },
//     {
//       icon: Lightbulb,
//       title: "LinkedIn Post Ideas Generator",
//       description: "Get inspiration for your next LinkedIn post with AI-generated content ideas.",
//       buttonText: "Try LinkedIn Post Ideas Generator",
//       color: "green",
//     },
//     {
//       icon: MessageSquare,
//       title: "LinkedIn Message Template Generator",
//       description: "Create personalized outreach messages for LinkedIn networking.",
//       buttonText: "Try LinkedIn Message Template Generator",
//       color: "blue",
//     },
//     {
//       icon: User,
//       title: "LinkedIn Bio Generator",
//       description: "Generate professional LinkedIn bios that attract your ideal connections and opportunities.",
//       buttonText: "Try LinkedIn Bio Generator",
//       color: "purple",
//     },
//     {
//       icon: Users,
//       title: "LinkedIn Connection Request Generator",
//       description: "Create personalized connection requests that get accepted more often.",
//       buttonText: "Try LinkedIn Connection Request Generator",
//       color: "green",
//     },
//     {
//       icon: Building,
//       title: "LinkedIn Company Page Optimizer",
//       description: "Optimize your LinkedIn company page for better visibility and engagement.",
//       buttonText: "Try LinkedIn Company Page Optimizer",
//       color: "blue",
//     },
//     {
//       icon: Hash,
//       title: "LinkedIn Hashtag Generator",
//       description: "Find the best hashtags for your LinkedIn posts to increase reach and engagement.",
//       buttonText: "Try LinkedIn Hashtag Generator",
//       color: "purple",
//     },
//     {
//       icon: Calendar,
//       title: "LinkedIn Content Calendar",
//       description: "Plan and schedule your LinkedIn content strategy with our free calendar tool.",
//       buttonText: "Try LinkedIn Content Calendar",
//       color: "green",
//     },
//     {
//       icon: TrendingUp,
//       title: "LinkedIn Engagement Rate Calculator",
//       description: "Calculate your LinkedIn engagement rate and benchmark against industry standards.",
//       buttonText: "Try LinkedIn Engagement Rate Calculator",
//       color: "blue",
//     },
//     {
//       icon: CheckCircle,
//       title: "LinkedIn Profile Strength Checker",
//       description: "Analyze your LinkedIn profile completeness and get improvement suggestions.",
//       buttonText: "Try LinkedIn Profile Strength Checker",
//       color: "purple",
//     },
//     {
//       icon: Search,
//       title: "LinkedIn Sales Navigator Search Builder",
//       description: "Build advanced Sales Navigator search queries to find your ideal prospects.",
//       buttonText: "Try LinkedIn Sales Navigator Search Builder",
//       color: "green",
//     },
//     {
//       icon: Video,
//       title: "LinkedIn Video Script Generator",
//       description: "Create engaging video scripts for LinkedIn video content that drives engagement.",
//       buttonText: "Try LinkedIn Video Script Generator",
//       color: "blue",
//     },
//     {
//       icon: Calendar,
//       title: "LinkedIn Event Promotion Generator",
//       description: "Generate compelling event promotion posts for LinkedIn to maximize attendance.",
//       buttonText: "Try LinkedIn Event Promotion Generator",
//       color: "purple",
//     },
//     {
//       icon: Target,
//       title: "LinkedIn Poll Question Generator",
//       description: "Create engaging poll questions that spark conversations and increase engagement.",
//       buttonText: "Try LinkedIn Poll Question Generator",
//       color: "green",
//     },
//     {
//       icon: FileText,
//       title: "LinkedIn Article Title Generator",
//       description: "Generate click-worthy article titles for LinkedIn publishing that drive traffic.",
//       buttonText: "Try LinkedIn Article Title Generator",
//       color: "blue",
//     },
//     {
//       icon: Mail,
//       title: "LinkedIn Cold Email Generator",
//       description: "Create effective cold email templates for LinkedIn prospects and connections.",
//       buttonText: "Try LinkedIn Cold Email Generator",
//       color: "purple",
//     },
//     {
//       icon: Phone,
//       title: "LinkedIn Follow-up Message Generator",
//       description: "Generate professional follow-up messages for LinkedIn conversations.",
//       buttonText: "Try LinkedIn Follow-up Message Generator",
//       color: "green",
//     },
//     {
//       icon: BookOpen,
//       title: "LinkedIn Skill Assessment Prep",
//       description: "Prepare for LinkedIn skill assessments with practice questions and tips.",
//       buttonText: "Try LinkedIn Skill Assessment Prep",
//       color: "blue",
//     },
//     {
//       icon: Target,
//       title: "LinkedIn Recommendation Generator",
//       description: "Write compelling LinkedIn recommendations for colleagues and connections.",
//       buttonText: "Try LinkedIn Recommendation Generator",
//       color: "purple",
//     },
//   ]

//   const getColorClasses = (color: string) => {
//     switch (color) {
//       case "blue":
//         return {
//           bg: "bg-blue-950/20",
//           border: "border-blue-800/30",
//           icon: "text-blue-400",
//           iconBg: "bg-blue-600/20",
//           button: "bg-blue-600 hover:bg-blue-700",
//         }
//       case "purple":
//         return {
//           bg: "bg-purple-950/20",
//           border: "border-purple-800/30",
//           icon: "text-purple-400",
//           iconBg: "bg-purple-600/20",
//           button: "bg-purple-600 hover:bg-purple-700",
//         }
//       case "green":
//         return {
//           bg: "bg-green-950/20",
//           border: "border-green-800/30",
//           icon: "text-green-400",
//           iconBg: "bg-green-600/20",
//           button: "bg-green-600 hover:bg-green-700",
//         }
//       default:
//         return {
//           bg: "bg-gray-900/50",
//           border: "border-gray-800",
//           icon: "text-gray-400",
//           iconBg: "bg-gray-600/20",
//           button: "bg-gray-600 hover:bg-gray-700",
//         }
//     }
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">Free LinkedIn Tools</h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Boost your LinkedIn presence with our suite of free tools. No sign-up required!
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Tools Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {tools.map((tool, index) => {
//               const colors = getColorClasses(tool.color)
//               const IconComponent = tool.icon

//               return (
//                 <Card
//                   key={index}
//                   className={`${colors.bg} ${colors.border} p-6 hover:border-opacity-60 transition-all duration-200`}
//                 >
//                   <CardContent className="p-0">
//                     <div className={`w-12 h-12 rounded-lg ${colors.iconBg} flex items-center justify-center mb-4`}>
//                       <IconComponent className={`w-6 h-6 ${colors.icon}`} />
//                     </div>
//                     <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
//                     <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>
//                     <Button className={`w-full ${colors.button} text-white py-3 rounded-lg font-medium`}>
//                       {tool.buttonText} →
//                     </Button>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Premium CTA */}
//       <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-5xl font-bold mb-6">Unlock the Full Power of LinkedIn Automation</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
//             While these free tools are great to get started, our premium features offer even more ways to supercharge
//             your LinkedIn growth.
//           </p>
//           <Button
//             size="lg"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
//           >
//             Explore Premium Features <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//         </div>
//       </section>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import {
  FileText,
  MessageSquare,
  Lightbulb,
  User,
  Hash,
  Calendar,
  TrendingUp,
  Building,
  Target,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react"

export default function FreeToolsPage() {
  const tools = [
    {
      icon: FileText,
      title: "LinkedIn Summary Generator",
      description: "Create a compelling LinkedIn summary that highlights your professional strengths and achievements.",
      buttonText: "Try Summary Generator",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Headline Generator",
      description: "Generate an attention-grabbing LinkedIn headline that showcases your expertise and value.",
      buttonText: "Try Headline Generator",
      color: "purple",
    },
    {
      icon: Lightbulb,
      title: "LinkedIn Post Ideas Generator",
      description: "Get inspiration for your next LinkedIn post with AI-generated content ideas.",
      buttonText: "Try Post Ideas Generator",
      color: "green",
    },
    {
      icon: MessageSquare,
      title: "LinkedIn Message Template Generator",
      description: "Create personalized outreach messages for LinkedIn networking.",
      buttonText: "Try Message Generator",
      color: "orange",
    },
    {
      icon: User,
      title: "LinkedIn Bio Generator",
      description: "Generate professional LinkedIn bios that attract your ideal connections and opportunities.",
      buttonText: "Try Bio Generator",
      color: "pink",
    },
    {
      icon: Users,
      title: "LinkedIn Connection Request Generator",
      description: "Create personalized connection requests that get accepted more often.",
      buttonText: "Try Connection Generator",
      color: "cyan",
    },
    {
      icon: Building,
      title: "LinkedIn Company Page Optimizer",
      description: "Optimize your LinkedIn company page for better visibility and engagement.",
      buttonText: "Try Page Optimizer",
      color: "indigo",
    },
    {
      icon: Hash,
      title: "LinkedIn Hashtag Generator",
      description: "Find the best hashtags for your LinkedIn posts to increase reach and engagement.",
      buttonText: "Try Hashtag Generator",
      color: "teal",
    },
    {
      icon: Calendar,
      title: "LinkedIn Content Calendar",
      description: "Plan and schedule your LinkedIn content strategy with our free calendar tool.",
      buttonText: "Try Content Calendar",
      color: "emerald",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      green: "from-green-500 to-emerald-500",
      orange: "from-orange-500 to-red-500",
      pink: "from-pink-500 to-rose-500",
      cyan: "from-cyan-500 to-blue-500",
      indigo: "from-indigo-500 to-purple-500",
      teal: "from-teal-500 to-cyan-500",
      emerald: "from-emerald-500 to-green-500",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)] -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/20 px-6 py-3">
              <Sparkles className="w-4 h-4 mr-2" />
              20+ Free Tools
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Free LinkedIn
              <br />
              <GradientText>Growth Tools</GradientText>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Boost your LinkedIn presence with our suite of free AI-powered tools. No sign-up required, start using
              them instantly!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                Explore All Tools
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <p className="text-gray-400">
                <span className="text-white font-semibold">100% Free</span> • No registration needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Choose Your <GradientText>LinkedIn Tool</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each tool is designed to solve a specific LinkedIn challenge and help you grow your professional presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const gradient = getColorClasses(tool.color)
              const IconComponent = tool.icon

              return (
                <FloatingCard key={index} delay={index * 100}>
                  <div className="space-y-6 h-full flex flex-col">
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{tool.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{tool.description}</p>
                    </div>
                    <div className="mt-auto">
                      <Button
                        className={`w-full bg-gradient-to-r ${gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-xl`}
                      >
                        {tool.buttonText}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </FloatingCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2 mb-6">
              Why Choose Our Tools
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Built for <GradientText gradient="from-green-400 to-emerald-400">LinkedIn Success</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our tools are designed by LinkedIn experts and powered by advanced AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Powered",
                description: "Advanced AI algorithms trained on millions of successful LinkedIn profiles and posts",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Target,
                title: "Industry-Specific",
                description: "Tailored content and suggestions based on your industry and professional background",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Based on data from thousands of successful LinkedIn campaigns and profiles",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((feature, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Unlock the Full Power of <GradientText>LinkedIn Automation</GradientText>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              While these free tools are great to get started, our premium features offer even more ways to supercharge
              your LinkedIn growth with complete automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
                Explore Premium Features
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
