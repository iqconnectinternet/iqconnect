import { Star } from 'lucide-react';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '@/components/ui/AnimateOnScroll';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Austin, TX',
    rating: 5,
    quote: 'Digi Mercury helped me understand all my internet options. The guidance was clear and unbiased. I felt confident making my decision!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Denver, CO',
    rating: 5,
    quote: 'Great independent advice! They explained the differences between providers and helped me pick what\'s best for my family. No pressure, just facts.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    location: 'Phoenix, AZ',
    rating: 5,
    quote: 'Their third-party guidance helped me find better service options than I had before. Honest information without sales tactics!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-isp">
        {/* Section Header */}
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People <span className="text-accent">Say About Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how our independent guidance helps families make confident decisions about their internet and cable services.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="bg-background rounded-xl p-8 card-hover h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
