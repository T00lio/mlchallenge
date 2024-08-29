import React from "react";

function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-300 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-6xl font-black text-white sm:text-3xl md:text-4xl">
            Stay up-to-date with our latest offers
          </h1>
          <p className="mt-4 text-white md:text-xl">
            Subscribe to our newsletter and be the first to know about our
            exclusive deals and new product launches.
          </p>
          <form className="mt-10 grid flex-col items-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-75 justify-self-center max-w-md rounded-md border-transparent bg-primary-foreground px-4 py-3 text-primary shadow-sm focus:border-primary focus:ring-primary sm:flex-1"
            />
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-md bg-secondary px-6 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CTA;
