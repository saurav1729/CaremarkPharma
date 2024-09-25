import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollHeader from '../components/ScrollHeader'

export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    (<div
      className="h-[40rem] md:h-[80rem]   flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}>
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}>
        <Header translate={translate} titleComponent={'Locate Our Store On the Map..🗺️'} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>)
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    (<motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-[3rem] font-bold text-center">
      {titleComponent}
    </motion.div>)
  );
};

export const Card = ({
  rotate,
  scale,
  children
}) => {
  return (
    (<motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] p-2 md:p-4 bg-[#222222] rounded-[30px] shadow-2xl">
      <div
        className=" h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl  ">
        {/* {children} */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.5172798760566!2d85.98098523359182!3d26.64880085881926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec3ffa6b3ea819%3A0xb0fbc3d7026efa04!2sJha%20Steel%20Udyog!5e0!3m2!1sen!2sin!4v1727237648843!5m2!1sen!2sin" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/drjNeIZL994?si=22Ol_r8P2FSzsWVX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </motion.div>)
  );
};
