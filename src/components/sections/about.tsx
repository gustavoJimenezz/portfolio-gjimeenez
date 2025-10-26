import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { UserCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-background py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre Mí
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Soy Gustavo, Desarrollador Full Stack en Buenos Aires. Me dedico a construir software robusto. Mis herramientas principales son Python (Django/Flask) y Node.js en el backend, y React en el frontend.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi experiencia laboral me permitió dominar patrones de diseño y la gestión de despliegues en Linux. Estoy listo para colaborar activamente en la creación de soluciones, aportar mi conocimiento. Busco aportar soluciones escalables y colaborar activamente en entornos de trabajo ágiles.
            </p>
          </div>
          <div className="flex items-start justify-center">
            <Card className="max-w-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <UserCircle2 className="h-10 w-10 text-primary" />
                  <CardTitle>Información Personal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Nombre:</strong> Gustavo Jimenez Crespo</p>
                <p><strong>Email:</strong> gustavo.jimenez.crespo@gmail.com</p>
                <p><strong>Teléfono:</strong> 1161025274</p>
                <p><strong>Ubicación:</strong> Lomas de Zamora, Buenos Aires</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
