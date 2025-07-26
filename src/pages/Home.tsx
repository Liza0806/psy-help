import { FC } from "react";
import PageMeta from "../components/PageMeta";
import cls from "./Home.module.scss";
import QuoteBlock from "../components/QuoteBlock";
import { useInView } from "react-intersection-observer";
import AboutMini from "../components/AboutMini";
import ServicesList from "../components/ServicesList";
import WorkFormat from "../components/WorkFormat";
import Hero from "../components/Hero";

const Home: FC = () => {

  const { ref: ref0, inView: inView0 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div>
      <PageMeta
        title="Обо мне — Владимир Борисенко"
        description="Опытный психиатр с более чем 30-летним стажем..."
      />
      <section className={cls.section}>
        <Hero />
      </section>

      <section className={`${cls.image0} ${cls.parallaxSection}`} ref={ref0}>
        <QuoteBlock
          text="Служил Гаврила за прилавком.
Гаврила флейтой торговал…"
          isVisible={inView0}
        />
      </section>

      <section className={cls.section}>
        <AboutMini />
      </section>

      <section className={`${cls.image1} ${cls.parallaxSection}`} ref={ref1}>
        <QuoteBlock
          text="Гаврила шёл кудрявым лесом,
Бамбук Гаврила порубал. "
          isVisible={inView1}
        />
      </section>

      <section className={cls.section}>
        <ServicesList />
      </section>
      <section className={`${cls.image2} ${cls.parallaxSection}`} ref={ref2}>
        <QuoteBlock
          text="Служил Гаврила за прилавком.
Гаврила флейтой торговал…"
          isVisible={inView2}
        />
      </section>
      <section className={cls.section}>
        <WorkFormat />
      </section>
    </div>
  );
};

export default Home;
