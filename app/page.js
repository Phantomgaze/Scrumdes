import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    "question": "What is Archimedes?",
    "answer": "Archimedes is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity. With Archimedes, users can visualize their tasks using Kanban boards, manage sprints effectively, and collaborate seamlessly with team members. The platform is built to adapt to various methodologies, ensuring that teams can work in the way that suits them best."
  },
  {
    "question": "How does Archimedes compare to other project management tools?",
    "answer": "Archimedes offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types. Additionally, Archimedes integrates with popular tools like Slack and Microsoft Teams for enhanced communication, while also providing customizable dashboards for real-time insights into project performance."
  },
  {
    "question": "Is Archimedes suitable for small teams?",
    "answer": "Absolutely! Archimedes is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from Archimedes' features. Moreover, the platform supports easy onboarding processes and offers extensive documentation to help new users get started without a steep learning curve."
  },
  {
    "question": "What key features does Archimedes offer?",
    "answer": "Archimedes provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience. Additionally, Archimedes offers integration capabilities with third-party applications, automated notifications for task updates, and advanced analytics to track team performance over time."
  },
  {
    "question": "Can Archimedes handle multiple projects simultaneously?",
    "answer": "Yes, Archimedes is built to manage multiple projects concurrently. You can easily switch between projects and get a bird's-eye view of all your ongoing work. This makes Archimedes ideal for organizations juggling multiple projects or clients. The tool also allows users to create shared resources across projects, ensuring that teams can collaborate efficiently without duplicating efforts or resources."
  },
  {
    "question": "Is there a learning curve for new users?",
    "answer": "While Archimedes is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation. Furthermore, we offer tutorial videos and community forums where users can share tips and best practices to enhance their experience with the platform."
  }
];


const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Workflow <br />
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <Image
              src={"/logo2.png"}
              alt="Zscrum Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Empower your team with our intuitive project management solution.
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link>
      </section>

     


      {/* Companies Carousel */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
       {/* Features Section */}
      <section id="features" className="py-20 px-5" style={{ background: 'linear-gradient(to bottom, #329cb4, #cdf5fd)' }}>
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-blue-100 text-center">Key Features</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mb-4 text-blue-300" />
                  <h4 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* FAQ Section */}
      <section className="{`${inter.className} animated-dotted-background`} py-20 px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-1.9xl">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-2.2xl">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}