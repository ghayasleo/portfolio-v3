import Hero from "@/components/hero";
import Loader from "@/components/loader";
import { Fragment} from "react";

export default function Home() {

  return (
    <Fragment>
      <Loader />
      <Hero />
      <section className="h-[100vh]" id="about" data-title="About"></section>
      <section className="h-[100vh] bg-red-950" id="services" data-title="Services"></section>
      <section className="h-[100vh] bg-blue-950" id="portfolio" data-title="Portfolio"></section>
    </Fragment>
  );
}
