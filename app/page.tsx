import { Link } from "lib/transition";
import { PageRoutes } from "@/lib/pageroutes";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <h1 className="mb-6 text-5xl font-extrabold sm:text-7xl">
        Welcome to Quorvex Institute
      </h1>
      <p className="mb-10 max-w-xl text-lg sm:text-xl font-light leading-relaxed">
        Empowering you with cutting-edge AI and software development courses.
        Learn, build, and grow with expert-led training tailored for the future of tech.
      </p>

      <div className="flex items-center gap-6">
        <Link
          href={PageRoutes[0].href || "/courses"}
          className={buttonVariants({ size: "lg", className: "px-8" })}
          aria-label="Get Started with Quorvex Institute courses"
        >
          Get Started
        </Link>
        <Link
          href="/about-us"
          className={buttonVariants({ variant: "outline", size: "lg" })}
          aria-label="Learn more about Quorvex Institute"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
