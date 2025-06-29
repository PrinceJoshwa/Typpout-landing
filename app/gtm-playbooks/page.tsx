// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Search, Calendar, User, ArrowRight } from "lucide-react"

// export default function GTMPlaybooksPage() {
//   const categories = [
//     { name: "All (195)", active: true },
//     { name: "AI Tools (5)", active: false },
//     { name: "Analytics (17)", active: false },
//     { name: "Career Development (4)", active: false },
//     { name: "Content Strategy (53)", active: false },
//     { name: "GTM Strategy (28)", active: false },
//     { name: "Lead Generation (23)", active: false },
//     { name: "LinkedIn Growth (22)", active: false },
//     { name: "Networking (4)", active: false },
//     { name: "Personal Branding (28)", active: false },
//     { name: "Productivity (5)", active: false },
//     { name: "Social Media (1)", active: false },
//     { name: "Thought Leadership (3)", active: false },
//     { name: "Tools & Resources (1)", active: false },
//   ]

//   const articles = [
//     {
//       category: "LinkedIn Growth",
//       title: "LinkedIn's Algorithm in 2025: How to Stay Ahead of the Curve",
//       excerpt:
//         "Discover the latest changes to LinkedIn's algorithm and learn actionable strategies to maximize your content's reach and engagement in 2025.",
//       author: "Sarah Chen",
//       date: "March 15, 2025",
//       readTime: "8 min read",
//       badge: "AI Tools",
//     },
//     {
//       category: "Content Strategy",
//       title: "The Ultimate Guide to AI-Powered Content Creation for LinkedIn",
//       excerpt:
//         "Learn how to leverage AI tools to create engaging, high-performing content that showcases your expertise and drives meaningful engagement.",
//       author: "Sarah Chen",
//       date: "February 15, 2025",
//       readTime: "10 min read",
//       badge: "AI Tools",
//     },
//     {
//       category: "Lead Generation",
//       title: "7 Proven LinkedIn Lead Generation Strategies for B2B Companies",
//       excerpt:
//         "Discover how to transform your LinkedIn presence into a lead generation powerhouse with these proven strategies.",
//       author: "Alex Kumar",
//       date: "June 8, 2025",
//       readTime: "6 min read",
//       badge: "Lead Generation",
//     },
//     {
//       category: "Content Strategy",
//       title: "The Perfect LinkedIn Content Calendar Template for Busy Professionals",
//       excerpt:
//         "Stop struggling with what to post on LinkedIn! Use our proven content calendar template to plan a month of engaging content in just 30 minutes.",
//       author: "Jessica Park",
//       date: "September 8, 2024",
//       readTime: "8 min read",
//       badge: "Content Strategy",
//     },
//     {
//       category: "Personal Branding",
//       title: "Building Your Personal Brand on LinkedIn: A Step-by-Step Framework",
//       excerpt: "Learn how to build your personal brand on LinkedIn with our comprehensive personal branding framework.",
//       author: "Michael Rodriguez",
//       date: "March 28, 2025",
//       readTime: "11 min read",
//       badge: "Personal Branding",
//     },
//     {
//       category: "AI Tools",
//       title: "Top 10 LinkedIn Automation Tools Compared: Which One is Right for You?",
//       excerpt:
//         "We compare the top 10 LinkedIn automation tools on the market to help you choose the best one for your specific needs and goals.",
//       author: "Ryan Johnson",
//       date: "February 27, 2025",
//       readTime: "10 min read",
//       badge: "AI Tools",
//     },
//     {
//       category: "Content Strategy",
//       title: "5 Types of LinkedIn Content That Generate 10x More Engagement",
//       excerpt:
//         "Not all LinkedIn content is created equal. Discover the 5 content types that consistently outperform all others.",
//       author: "Alex Kumar",
//       date: "January 18, 2025",
//       readTime: "6 min read",
//       badge: "Content Strategy",
//     },
//     {
//       category: "Analytics",
//       title: "LinkedIn Analytics: The Complete Guide to Measuring Your Success",
//       excerpt:
//         "Learn how to use LinkedIn analytics to track your performance, understand your audience, and optimize your content strategy.",
//       author: "Lisa Wang",
//       date: "October 4, 2024",
//       readTime: "9 min read",
//       badge: "Analytics",
//     },
//     {
//       category: "LinkedIn Growth",
//       title: "LinkedIn vs. Other Social Platforms: Where B2B Marketers Should Focus in 2025",
//       excerpt:
//         "Is LinkedIn still the best platform for B2B marketing? We analyze the data to help you decide where to invest your time and resources.",
//       author: "Michael Rodriguez",
//       date: "October 15, 2024",
//       readTime: "8 min read",
//       badge: "LinkedIn Growth",
//     },
//     {
//       category: "LinkedIn Growth",
//       title: "LinkedIn SEO: How to Optimize Your Profile and Content for Maximum Visibility",
//       excerpt: "Discover the secrets to optimizing your LinkedIn profile and content for LinkedIn's search algorithm.",
//       author: "Lisa Wang",
//       date: "May 5, 2025",
//       readTime: "5 min read",
//       badge: "LinkedIn Growth",
//     },
//     {
//       category: "Networking",
//       title: "How to Automate Your LinkedIn Networking Without Losing the Personal Touch",
//       excerpt: "Learn how to scale your LinkedIn networking efforts while maintaining authentic relationships.",
//       author: "Emma Thompson",
//       date: "May 15, 2025",
//       readTime: "12 min read",
//       badge: "Networking",
//     },
//     {
//       category: "Personal Branding",
//       title: "15 LinkedIn Headline Formulas That Attract Profile Views",
//       excerpt:
//         "Your LinkedIn headline is prime real estate. Use these proven formulas to craft a headline that attracts your ideal audience.",
//       author: "Jessica Park",
//       date: "September 17, 2024",
//       readTime: "13 min read",
//       badge: "Personal Branding",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <section className="py-20 lg:py-32">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">LinkedIn Growth & GTM Strategy Blog</h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Discover 195+ expert articles on LinkedIn growth, go-to-market strategies, and AI-powered marketing to
//               accelerate your business growth.
//             </p>

//             {/* Search Bar */}
//             <div className="relative max-w-2xl mx-auto">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <Input
//                 placeholder="Search articles..."
//                 className="pl-12 py-4 bg-gray-900 border-gray-700 text-white placeholder-gray-400 text-lg rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-8 border-b border-gray-800">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category, index) => (
//               <Badge
//                 key={index}
//                 className={`px-4 py-2 text-sm cursor-pointer transition-all ${
//                   category.active
//                     ? "bg-blue-600 text-white border-blue-600"
//                     : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
//                 }`}
//               >
//                 {category.name}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Articles Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold mb-4">All Articles</h2>
//             <p className="text-gray-400">(195 articles)</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//             {articles.map((article, index) => (
//               <Card
//                 key={index}
//                 className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-200 group cursor-pointer"
//               >
//                 <CardContent className="p-6">
//                   <div className="mb-4">
//                     <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 mb-3">{article.badge}</Badge>
//                     <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-300 leading-relaxed mb-4">{article.excerpt}</p>
//                   </div>

//                   <div className="flex items-center justify-between text-sm text-gray-400">
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       <span>{article.author}</span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>{article.date}</span>
//                       </div>
//                       <span>{article.readTime}</span>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl">
//               Load More Articles (183 remaining)
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Grow Your LinkedIn Presence?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Try Typpout's AI-powered tools to create engaging content, schedule posts at the perfect time, and grow your
//             LinkedIn presence.
//           </p>
//           <Button
//             size="lg"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
//           >
//             Start Your Free Trial <ArrowRight className="w-5 h-5 ml-2" />
//           </Button>
//           <p className="text-sm text-gray-400 mt-4">No credit card required. 14-day free trial</p>
//         </div>
//       </section>
//     </div>
//   )
// }

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FloatingCard } from "@/components/ui/floating-card"
import { GradientText } from "@/components/ui/gradient-text"
import { Search, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target } from "lucide-react"

export default function GTMPlaybooksPage() {
  const categories = [
    { name: "All (195)", active: true },
    { name: "AI Tools (5)", active: false },
    { name: "Analytics (17)", active: false },
    { name: "Career Development (4)", active: false },
    { name: "Content Strategy (53)", active: false },
    { name: "GTM Strategy (28)", active: false },
    { name: "Lead Generation (23)", active: false },
    { name: "LinkedIn Growth (22)", active: false },
    { name: "Networking (4)", active: false },
    { name: "Personal Branding (28)", active: false },
    { name: "Productivity (5)", active: false },
    { name: "Social Media (1)", active: false },
    { name: "Thought Leadership (3)", active: false },
    { name: "Tools & Resources (1)", active: false },
  ]

  const articles = [
    {
      category: "LinkedIn Growth",
      title: "LinkedIn's Algorithm in 2025: How to Stay Ahead of the Curve",
      excerpt:
        "Discover the latest changes to LinkedIn's algorithm and learn actionable strategies to maximize your content's reach and engagement in 2025.",
      author: "Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      badge: "AI Tools",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      category: "Content Strategy",
      title: "The Ultimate Guide to AI-Powered Content Creation for LinkedIn",
      excerpt:
        "Learn how to leverage AI tools to create engaging, high-performing content that showcases your expertise and drives meaningful engagement.",
      author: "Sarah Chen",
      date: "February 15, 2025",
      readTime: "10 min read",
      badge: "AI Tools",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      category: "Lead Generation",
      title: "7 Proven LinkedIn Lead Generation Strategies for B2B Companies",
      excerpt:
        "Discover how to transform your LinkedIn presence into a lead generation powerhouse with these proven strategies.",
      author: "Alex Kumar",
      date: "June 8, 2025",
      readTime: "6 min read",
      badge: "Lead Generation",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      category: "Content Strategy",
      title: "The Perfect LinkedIn Content Calendar Template for Busy Professionals",
      excerpt:
        "Stop struggling with what to post on LinkedIn! Use our proven content calendar template to plan a month of engaging content in just 30 minutes.",
      author: "Jessica Park",
      date: "September 8, 2024",
      readTime: "8 min read",
      badge: "Content Strategy",
      gradient: "from-orange-500 to-red-500",
    },
    {
      category: "Personal Branding",
      title: "Building Your Personal Brand on LinkedIn: A Step-by-Step Framework",
      excerpt: "Learn how to build your personal brand on LinkedIn with our comprehensive personal branding framework.",
      author: "Michael Rodriguez",
      date: "March 28, 2025",
      readTime: "11 min read",
      badge: "Personal Branding",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      category: "AI Tools",
      title: "Top 10 LinkedIn Automation Tools Compared: Which One is Right for You?",
      excerpt:
        "We compare the top 10 LinkedIn automation tools on the market to help you choose the best one for your specific needs and goals.",
      author: "Ryan Johnson",
      date: "February 27, 2025",
      readTime: "10 min read",
      badge: "AI Tools",
      gradient: "from-teal-500 to-blue-500",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)] -z-10"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.15),transparent_50%)] -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              195+ Expert Articles
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              LinkedIn Growth &<br />
              <GradientText>GTM Strategy Blog</GradientText>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Discover expert insights on LinkedIn growth, go-to-market strategies, and AI-powered marketing to
              accelerate your business growth.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-12 py-4 bg-transparent border-none text-white placeholder-gray-400 text-lg focus:ring-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <Badge
                key={index}
                className={`px-6 py-3 text-sm cursor-pointer transition-all duration-300 hover:scale-105 ${
                  category.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 backdrop-blur-xl"
                }`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-400">(195 articles)</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <FloatingCard key={index} delay={index * 100}>
                <div className="space-y-6 h-full flex flex-col">
                  <div className="space-y-4">
                    <Badge className={`bg-gradient-to-r ${article.gradient} text-white px-3 py-1 w-fit`}>
                      {article.badge}
                    </Badge>
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{article.excerpt}</p>
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${article.gradient} hover:shadow-lg transition-all duration-300 hover:scale-105 text-white font-semibold py-3 rounded-xl`}
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-4 rounded-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105">
              Load More Articles (189 remaining)
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "195+", label: "Expert Articles", icon: BookOpen },
              { number: "50K+", label: "Monthly Readers", icon: User },
              { number: "14", label: "Categories", icon: Target },
              { number: "4.9", label: "Average Rating", icon: TrendingUp },
            ].map((stat, index) => (
              <FloatingCard key={index} delay={index * 200}>
                <div className="text-center space-y-4">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto" />
                  <div>
                    <p className="text-3xl font-bold text-white">{stat.number}</p>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
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
              Ready to <GradientText>Grow Your LinkedIn</GradientText>?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Try Typpout's AI-powered tools to create engaging content and grow your LinkedIn presence
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <p className="text-gray-400">
              <span className="text-white font-semibold">14-day free trial</span> • No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
