import React, { useEffect, useState, useRef } from 'react';
import './styles.css';

const projects = [
  {
    name: 'Teacher Pay Teachers',
    description: 'React JS + TypeScript + Node JS',
    website: 'https://www.teacherspayteachers.com/',
    source: '#',
    image: '/img/p2.jpg', // Add your project image path
  },
  {
    name: 'Glamorvida Dropshipping',
    description: 'React JS + Tailwind CSS',
    website: 'https://glamorvida.com/',
    source: '#',
    image: '/img/p8.jpg', // Add your project image path
  },
  {
    name: 'Fast Furnishings',
    description: 'Bootstrap + Vue.js + PayPal API',
    website: 'https://www.fastfurnishings.com/',
    source: '#',
    image: '/img/p7.jpg', // Add your project image path
  },
  {
    name: 'Lifesum',
    description: 'React JS + Tailwind CSS + Amazon',
    website: 'https://lifesum.com/',
    source: '#',
    image: '/img/p9.jpg', // Add your project image path
  },
  {
    name: 'Everlywell-Healthcare',
    description: 'React JS + Tailwind CSS + Amazon',
    website: 'https://empowerhealth.ai/',
    source: '#',
    image: '/img/p5.jpg', // Add your project image path
  },
  {
    name: 'Reach your credit and money goals',
    description: 'AWS & AI ChatGPT',
    website: 'https://www.experian.com/',
    source: '#',
    image: '/img/p6.jpg', // Add your project image path
  },
  {
    name: '$MONSTERs',
    description: 'NFT & Smart Contract & web3.js',
    website: 'https://chainmonsters.com/',
    source: '#',
    image: '/img/p4.jpg', // Add your project image path
  },
  {
    name: 'Crypto Unicorns',
    description: 'React JS & Smart Contract & web3.js',
    website: 'https://www.cryptounicorns.fun/',
    source: '#',
    image: '/img/p1.jpg', // Add your project image path
  },
  {
    name: 'Empower Health AI',
    description: 'Hubspot CMS & AI Chatbot',
    website: 'https://empowerhealth.ai/',
    source: '#',
    image: '/img/p3.jpg', // Add your project image path
  },
  // Add more projects...
];

const Which: React.FC = () => {

  const [titleAnimationStart, setTitleAnimationStart] = useState(false);
  const [visibleItem, setVisibleItem] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const hichRef = useRef<HTMLDivElement>(null);
  const iRef = useRef<HTMLDivElement>(null);
  const builtRef = useRef<HTMLDivElement>(null);
  const [animateEnabled, setAnimateEnabled] = useState(false);

  // Use an Intersection Observer to trigger animations on scroll
  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTitleAnimationStart(true);
        setAnimateEnabled(false);

        setTimeout(() => {
          setAnimateEnabled(true);
        }, 500); // Initial delay before starting the paragraph animation

        let index = 0;
        const interval = setInterval(() => {
          if (index <= projects.length) {
            setVisibleItem(index++);
        } else {
            clearInterval(interval); // Clear interval when done
          }
        }, 500);
      }
    });
  };

  const handleAnimation = (ref: React.RefObject<HTMLSpanElement>) => {
    if (animateEnabled && ref.current) {
      
      // Check if the animation class is already present
      if (ref.current.classList.contains('animate-yesIm')) {
        return; // If already animated, early return
      }
      
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
        let current = sectionRef.current;
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="which" className="w-full py-20 min-h-screen">
      <h2 className="text-4xl sm:text-6xl text-center flex justify-center items-center mb-20">
      <div
          className={`w-[66px] sm:w-[100px] rounded-full cursor-pointer ${titleAnimationStart ? 'animate-slide-in-left' : 'invisible'} transition-all duration-300`}
          onClick={() => handleAnimation(imgRef)}  ref={imgRef}
        >
          <img src={process.env.PUBLIC_URL + "/img/ring-1_2.png"} alt="logo" className="grow-shrink-1" />
        </div>
        <span onClick={() => handleAnimation(hichRef)} ref={hichRef} className={`z-10 transition-transform duration-1000 ${titleAnimationStart ? 'animate-slide-in-left' : 'invisible'}`}>
          hich
        </span>
        <span onClick={() => handleAnimation(iRef)} ref={iRef} className={`transition-transform duration-1000 ${titleAnimationStart ? 'animate-bounce' : 'invisible'}`}>
           I 
        </span>
        <span onClick={() => handleAnimation(builtRef)} ref={builtRef} className={`transition-transform duration-1000 ${titleAnimationStart ? 'animate-slide-in-right' : 'invisible'}`}>
          Built
        </span>
      </h2>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-built px-5 xl:p-0 md:px-20 sm:px-10">
        {projects.map((project, index) => (
          <div key={project.name} className={`relative bg-gray-800 hover:bg-gray-700 transition duration-1000 my-box-shadow clickable hover-contain  ${visibleItem > index? 'opacity-100' : 'opacity-0'}`}>
            <img src={process.env.PUBLIC_URL + project.image} alt={project.name} className="w-full h-auto" />
            <div className="absolute flex flex-col items-center justify-center bg-gray-900 opacity-100 transition duration-1000 hover-cover text-2xl">
              <p>{project.description}</p><br></br>
              <div className="flex space-x-2">
                {project.website && <a href={project.website} target='_blank' rel="noopener noreferrer" className="text-blue-400 hover:-mt-1 hover:underline">🌐</a>}
                {project.source && <a href={project.source} target='_blank' rel="noopener noreferrer" className="text-green-400 hover:-mt-1 hover:underline">💻</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Which;