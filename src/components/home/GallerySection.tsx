import { motion } from 'framer-motion';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import heroImage from '@/assets/hero-family-tv.jpg';
import routerImage from '@/assets/router-modem.jpg';
import streamingImage from '@/assets/streaming-devices.jpg';
import smartHomeImage from '@/assets/smart-home.jpg';
import coupleImage from '@/assets/couple-streaming.jpg';
import finalCtaBg from '@/assets/final-cta-bg.jpg';

const galleryItems = [
  {
    image: heroImage,
    caption: 'Family Entertainment',
    span: 'col-span-2 row-span-2',
  },
  {
    image: routerImage,
    caption: 'Advanced Equipment',
    span: '',
  },
  {
    image: streamingImage,
    caption: 'Multi-Device Streaming',
    span: '',
  },
  {
    image: finalCtaBg,
    caption: 'Fast Connection',
    span: 'col-span-2',
  },
  {
    image: coupleImage,
    caption: 'Stay Connected',
    span: '',
  },
  {
    image: smartHomeImage,
    caption: 'Smart Home Ready',
    span: '',
  },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-isp">
        {/* Section Header */}
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience the <span className="text-accent">Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how our services transform everyday life with faster internet and better entertainment.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <AnimateOnScroll
              key={index}
              variant="scale"
              delay={index * 0.1}
              className={`gallery-item rounded-xl ${item.span} min-h-[200px] md:min-h-[250px]`}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover rounded-xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent rounded-xl"
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-semibold text-lg">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
