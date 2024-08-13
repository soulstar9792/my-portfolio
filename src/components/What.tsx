import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

const What: React.FC = () => {
  const [titleAnimationStart, setTitleAnimationStart] = useState(false);
  const [paragraphAnimationStart, setParagraphAnimationStart] = useState(false);

  // State to manage visibility of each text segment
  const [degreeVisible, setDegreeVisible] = useState(false);
  const [universityVisible, setUniversityVisible] = useState(false);
  const [courseworkVisible, setCourseworkVisible] = useState(false);
  const [thesisVisible, setThesisVisible] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const hatRef = useRef<HTMLDivElement>(null);
  const iRef = useRef<HTMLDivElement>(null);
  const earnedRef = useRef<HTMLDivElement>(null);
  const [animateEnabled, setAnimateEnabled] = useState(false);

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start title animations
        setTitleAnimationStart(true);
        setAnimateEnabled(false);

        setTimeout(() => {
          setAnimateEnabled(true);
          setParagraphAnimationStart(true);
          // Manage paragraph animations sequentially
          const delays = [250, 500, 750, 1000]; // Delays for each paragraph
          setDegreeVisible(true);
          const timeout1 = setTimeout(() => setUniversityVisible(true), delays[1]);
          const timeout2 = setTimeout(() => setCourseworkVisible(true), delays[2]);
          const timeout3 = setTimeout(() => setThesisVisible(true), delays[3]);

          return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
          };
        }, 1000); // Initial delay before starting paragraph animations
      }
    });
  };

  const handleAnimation = (ref: React.RefObject<HTMLSpanElement>) => {
    if (animateEnabled && ref.current) {
      const classes = Array.from(ref.current.classList); // Convert DOMTokenList to an array

      // Remove all animate classes
      classes.forEach(cls => {
        if (cls.startsWith('animate') && ref.current) {
          ref.current.classList.remove(cls);
        }
      });

      // Add the new animation class
      ref.current.classList.add('animate-yesIm');

      // Remove the animation class after it finishes to allow re-triggering
      setTimeout(() => {
        ref.current?.classList.remove('animate-yesIm');

      }, 1000); // Duration of the animation
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="what" className="w-full py-20 min-h-screen ">
      <h2 className="text-6xl text-center flex justify-center mb-20">
      <div
          className={`text-xl font-bold w-[130px] -mt-[30px] h-20 -mr-[10px] rounded-full cursor-pointer ${titleAnimationStart ? 'animate-slide-in-left' : 'invisible'} transition-all duration-300`}
          onClick={() => handleAnimation(imgRef)}  ref={imgRef}
        >
          <img src="img/ring-1_2.png" alt="logo" className="grow-shrink-1" />
        </div>
        <span onClick={() => handleAnimation(hatRef)} ref={hatRef} className={`z-10 transition-transform duration-1000 ${titleAnimationStart ? 'animate-slide-in-left' : 'invisible'}`}>
          hat
        </span>
        <span onClick={() => handleAnimation(iRef)} ref={iRef} className={`transition-transform duration-1000 ${titleAnimationStart ? 'animate-bounce' : 'invisible'}`}>
          &nbsp;I&nbsp;
        </span>
        <span onClick={() => handleAnimation(earnedRef)} ref={earnedRef} className={`transition-transform duration-1000 ${titleAnimationStart ? 'animate-slide-in-right' : 'invisible'}`}>
          Earned
        </span>
      </h2>
      <div className='w-full grid xl:grid-cols-2 sm:grid-cols-1 gap-4 '>
        <div className="flex justify-center items-center">
          <div className={`w-full transition-transform duration-3000 my-box-shadow clickable ${degreeVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <img src="img/business.gif" alt="logo" className='w-full' />
          </div>
        </div>
        <div className="p-8">
          <div className={`p-5 transition-transform duration-1000 degree-item ${degreeVisible ? 'animate-rise' : 'opacity-0'}`}>
            <h3 className='text-2xl mb-5'><span style={{ color: 'gold' }}>★</span>&nbsp;&nbsp;Bachelor of Science in Computer Science</h3>
            <p className={`text-xl transition-opacity duration-1000 ${degreeVisible ? 'opacity-100' : 'opacity-0'}`}>The University of Hong Kong (2015-2019)</p>
            <p className={`text-xl transition-opacity duration-1000 ${courseworkVisible ? 'opacity-100' : 'opacity-0'}`}>Coursework: Data Structures, Web Development, DB Management Systems</p>
            <p className={`text-xl transition-opacity duration-1000 ${thesisVisible ? 'opacity-100' : 'opacity-0'}`}>Thesis: "Developing a Web-Based Platform for Real-Time Traffic Monitoring Using IoT Technologies."</p>
          </div>
          <div className={`p-5 transition-transform duration-1000 degree-item ${universityVisible ? 'animate-rise' : 'opacity-0'}`}>
            <h3 className='text-2xl mb-5'><span style={{ color: 'gold' }}>★</span>&nbsp;&nbsp;Master of Science in Software Engineering</h3>
            <p className={`text-xl transition-opacity duration-1000 ${universityVisible ? 'opacity-100' : 'opacity-0'}`}>City University of Hong Kong (2019-2021)</p>
            <p className={`text-xl transition-opacity duration-1000 ${courseworkVisible ? 'opacity-100' : 'opacity-0'}`}>Coursework: Software Engineering Fundamentals, Agile Development, Cloud Computing, Artificial Intelligence</p>
            <p className={`text-xl transition-opacity duration-1000 ${thesisVisible ? 'opacity-100' : 'opacity-0'}`}>Thesis: "Design and Implementation of a Blockchain-Based Supply Chain Management System"</p>
          </div>
          <div className={`p-5 transition-transform duration-1000 degree-item ${thesisVisible ? 'animate-rise' : 'opacity-0'}`}>
            <h3 className='text-2xl mb-5'><span style={{ color: 'gold' }}>★</span>&nbsp;&nbsp;Master of Science in Artificial Intelligence</h3>
            <p className={`text-xl transition-opacity duration-1000 ${thesisVisible ? 'opacity-100' : 'opacity-0'}`}>University of Science and Technology of China (2021-2022)</p>
            <p className={`text-xl transition-opacity duration-1000 ${courseworkVisible ? 'opacity-100' : 'opacity-0'}`}>Coursework: Natural Language Processing, Computer Vision, Ethics in AI</p>
            <p className={`text-xl transition-opacity duration-1000 ${thesisVisible ? 'opacity-100' : 'opacity-0'}`}>Thesis: "Enhancing Natural Language Processing with Advanced Neural Architectures"</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default What;