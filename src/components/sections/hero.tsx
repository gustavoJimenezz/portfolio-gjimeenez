import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full animate-fade-in py-24 md:py-32 lg:py-40"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Gustavo Jimenez Crespo
              </h1>
              <h2 className="text-xl font-medium text-primary md:text-2xl">
                Desarrollador Full Stack
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Desarrollador de Software, Full Stack | Python, Node.js y React. Experiencia profesional en el stack completo. Diseño, implementación y despliegue.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">Ver Proyectos Destacados</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Contáctame</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/perfil4x4.jpg"
              width={400}
              height={400}
              alt="Gustavo Jimenez Crespo"
              className="h-64 w-64 rounded-full object-cover shadow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-96"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
