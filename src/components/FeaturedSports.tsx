import { Card, CardContent } from '@/components/ui/Card';

const sports = [
  {
    name: 'Football',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80',
    color: 'from-green-500/20 to-green-900/20',
  },
  {
    name: 'Basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
    color: 'from-orange-500/20 to-orange-900/20',
  },
  {
    name: 'Tennis',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
    color: 'from-yellow-500/20 to-yellow-900/20',
  },
  {
    name: 'Formula 1',
    image: 'https://images.unsplash.com/photo-1619786227876-19abb55f3461?auto=format&fit=crop&q=80',
    color: 'from-red-500/20 to-red-900/20',
  },
];

export function FeaturedSports() {
  return (
    <section className="py-20 sports-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Sports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport) => (
            <Card key={sport.name} className="group overflow-hidden bg-transparent border-0">
              <CardContent className="p-0 relative aspect-[4/5]">
                <div className={`absolute inset-0 bg-gradient-to-b ${sport.color} group-hover:opacity-75 transition-opacity`} />
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{sport.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}