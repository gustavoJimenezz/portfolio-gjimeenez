import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/card";
import { GraduationCap } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  year: string;
};

const educationData: EducationItem[] = [
  {
    degree: "Técnico en Programación",
    institution: "Instituto ORT",
    year: "2019",
  },
  {
    degree: "Node.js Avanzado",
    institution: "Udemy",
    year: "2020",
  },
  {
    degree: "React - La Guía Completa",
    institution: "Academind",
    year: "2021",
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-24 md:py-32">
      <div style={{ animationDelay: '0.5s' }} className="container animate-fade-in px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Educación y Certificaciones</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi formación académica y mi compromiso con el aprendizaje continuo.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationData.map((item) => (
            <Card key={item.degree}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{item.degree}</CardTitle>
                    <CardDescription>{item.institution}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-muted-foreground">{item.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
