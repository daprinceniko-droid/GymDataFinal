import { useRef } from 'react';
import { Hero } from '../components/Hero';
import { MethodSection } from '../components/MethodSection';
import { Wave } from '../components/Wave';
import { SiteFooter } from '../components/SiteFooter';

export default function Landing() {
  const methodSectionRef = useRef(null);

  const handleScrollDown = () => {
    methodSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full overflow-hidden">
      <Hero onScrollDown={handleScrollDown} />
      <div ref={methodSectionRef}>
        <MethodSection />
      </div>
      <Wave from="green" to="pink" />
      <SiteFooter />
    </div>
  );
}

