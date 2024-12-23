import { Card, CardContent } from '@/components/ui/Card';

const categories = [
  {
    name: 'Team Sports',
    description: 'Football, Basketball, Hockey',
    image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80',
  },
  {
    name: 'Individual Sports',
    description: 'Tennis, Golf, Athletics',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80',
  },
  {
    name: 'Motorsports',
    description: 'Formula 1, MotoGP, Rally',
    image: 'https://images.unsplash.com/photo-1619786227876-19abb55f3461?auto=format&fit=crop&q=80',
  },
];

export function SportCategories() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-white text-center">Sport Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-sm text-gray-300">{category.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}