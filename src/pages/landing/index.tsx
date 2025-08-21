import Head from "next/head";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  CheckIcon,
  StarIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldIcon,
  TrendingUpIcon,
} from "lucide-react";

const Landing = () => {
  return (
    <>
      <Head>
        <title>AI SaaS Platform - Transform Your Business with AI</title>
        <meta
          name="description"
          content="Revolutionary AI-powered SaaS platform that transforms how businesses operate. Get started today with our powerful automation tools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background min-h-screen">
        {/* Navigation */}
        <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <ZapIcon className="text-primary h-8 w-8" />
              <span className="text-xl font-bold">AI SaaS</span>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <Link
                href="#features"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-primary text-sm font-medium transition-colors"
              >
                Testimonials
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 New: AI-Powered Analytics Dashboard
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Transform Your Business with{" "}
              <span className="text-primary">AI-Powered</span> Solutions
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl">
              Streamline operations, boost productivity, and make data-driven
              decisions with our cutting-edge AI platform. Join thousands of
              businesses already revolutionizing their workflows.
            </p>
            <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="px-8 text-lg">
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-lg">
                Watch Demo
              </Button>
            </div>
            <div className="text-muted-foreground flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                Everything you need to automate, analyze, and accelerate your
                business growth
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <ZapIcon className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>AI Automation</CardTitle>
                  <CardDescription>
                    Automate repetitive tasks and workflows with intelligent AI
                    agents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Smart workflow automation
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Custom AI agents
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      24/7 autonomous operation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <TrendingUpIcon className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Get deep insights with AI-powered analytics and predictive
                    modeling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Real-time dashboards
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Predictive analytics
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Custom reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <ShieldIcon className="text-primary mb-4 h-12 w-12" />
                  <CardTitle>Enterprise Security</CardTitle>
                  <CardDescription>
                    Bank-level security with compliance and data protection
                    built-in
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      GDPR compliant
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      SOC 2 certified
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                Choose the perfect plan for your business. Upgrade or downgrade
                at any time.
              </p>
            </div>

            <Tabs defaultValue="monthly" className="mx-auto max-w-4xl">
              <TabsList className="mb-8 grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
              </TabsList>

              <TabsContent value="monthly">
                <div className="grid gap-8 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for small teams</CardDescription>
                      <div className="text-3xl font-bold">
                        $29<span className="text-lg font-normal">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Up to 5 team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Basic AI automation
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Standard analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Email support
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary relative">
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      Most Popular
                    </Badge>
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>
                        Best for growing businesses
                      </CardDescription>
                      <div className="text-3xl font-bold">
                        $79<span className="text-lg font-normal">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Up to 25 team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Advanced AI automation
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Advanced analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Priority support
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Custom integrations
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                      <div className="text-3xl font-bold">
                        $199<span className="text-lg font-normal">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Unlimited team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Enterprise AI features
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Custom analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          24/7 phone support
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Dedicated account manager
                        </li>
                      </ul>
                      <Button className="w-full">Contact Sales</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="yearly">
                <div className="grid gap-8 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>Perfect for small teams</CardDescription>
                      <div className="text-3xl font-bold">
                        $23<span className="text-lg font-normal">/month</span>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Billed yearly ($276)
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Up to 5 team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Basic AI automation
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Standard analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Email support
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary relative">
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                      Most Popular
                    </Badge>
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>
                        Best for growing businesses
                      </CardDescription>
                      <div className="text-3xl font-bold">
                        $63<span className="text-lg font-normal">/month</span>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Billed yearly ($756)
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Up to 25 team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Advanced AI automation
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Advanced analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Priority support
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Custom integrations
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                      <div className="text-3xl font-bold">
                        $159<span className="text-lg font-normal">/month</span>
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Billed yearly ($1,908)
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Unlimited team members
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Enterprise AI features
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Custom analytics
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          24/7 phone support
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                          Dedicated account manager
                        </li>
                      </ul>
                      <Button className="w-full">Contact Sales</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
                Join thousands of satisfied customers who have transformed their
                businesses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex items-center space-x-1">
                    <StarIcon
                      key={"star-1"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-2"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-3"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-4"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-5"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  </div>
                  <CardDescription className="text-base">
                    {`"This platform has completely revolutionized our workflow.
                    We've seen a 300% increase in productivity since
                    implementing their AI automation tools."`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-semibold">
                      JS
                    </div>
                    <div>
                      <div className="font-semibold">John Smith</div>
                      <div className="text-muted-foreground text-sm">
                        CEO, TechCorp
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex items-center space-x-1">
                    <StarIcon
                      key={"star-1"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-2"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-3"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-4"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-5"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  </div>
                  <CardDescription className="text-base">
                    {`"The analytics dashboard gives us insights we never had
                    before. We can now make data-driven decisions that have
                    improved our ROI by 150%."`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-semibold">
                      MJ
                    </div>
                    <div>
                      <div className="font-semibold">Maria Johnson</div>
                      <div className="text-muted-foreground text-sm">
                        CTO, DataFlow Inc
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex items-center space-x-1">
                    <StarIcon
                      key={"star-1"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-2"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-3"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-4"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                    <StarIcon
                      key={"star-5"}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  </div>
                  <CardDescription className="text-base">
                    {`"Outstanding customer support and a product that delivers on
                    its promises. Our team loves how intuitive and powerful the
                    platform is."`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full font-semibold">
                      DL
                    </div>
                    <div>
                      <div className="font-semibold">David Lee</div>
                      <div className="text-muted-foreground text-sm">
                        VP Operations, ScaleUp
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Card className="bg-primary text-primary-foreground mx-auto max-w-4xl">
              <CardHeader className="pb-8">
                <CardTitle className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Transform Your Business?
                </CardTitle>
                <CardDescription className="text-primary-foreground/80 mx-auto max-w-2xl text-xl">
                  Join thousands of companies already using our AI platform to
                  streamline operations and boost productivity. Start your free
                  trial today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 text-lg"
                  >
                    Start Free Trial
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-lg"
                  >
                    Schedule Demo
                  </Button>
                </div>
                <div className="text-primary-foreground/60 flex items-center justify-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-400" />
                    14-day free trial
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-400" />
                    No setup fees
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-400" />
                    Cancel anytime
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/50 border-t py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center space-x-2">
                  <ZapIcon className="text-primary h-6 w-6" />
                  <span className="text-lg font-bold">AI SaaS</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Transforming businesses with AI-powered automation and
                  analytics.
                </p>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Product</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Company</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Support</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
              <p className="text-muted-foreground text-sm">
                © 2024 AI SaaS. All rights reserved.
              </p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landing;
