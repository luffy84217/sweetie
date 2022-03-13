import { FC, useRef, useState } from 'react';
import useScroll from '../../hooks/useScroll';
import styles from '../../styles/HeroSection.module.css';

const HeroSection: FC = () => {
  const contentEl = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useScroll(() => {
    const rect = contentEl.current?.getBoundingClientRect();

    if (rect) {
      const { height, top } = rect;
      setOpacity((height + top) / height);
    }
  });

  return (
    <section className="h-full bg-[url('https://media.istockphoto.com/photos/romantic-asian-couple-in-bedroom-a-man-giving-a-rose-to-beautiful-picture-id1218219734?k=20&m=1218219734&s=612x612&w=0&h=IoUnVF1jjod6cL0KWkg-oMfjvNnnshIm9j663H4OW9M=')] top-0 right-0 bottom-0 left-0 bg-cover bg-right bg-fixed">
      <div className={`h-full bg-black/40 ${styles['shadow-inner']}`}>
        <div
          ref={contentEl}
          className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
          style={{ opacity }}
        >
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Let's start finding your</span>
              {/* space */}
              <span className="block text-pink-400 xl:inline">relationship</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-400 to-purple-400 bg-origin-border md:py-4 md:text-lg md:px-10">
                  Start now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
