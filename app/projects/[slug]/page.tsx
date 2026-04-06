import Gallery from "@/app/components/ui/Gallery";
import { projects } from "@/app/models/objects/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <section className="flex flex-col items-center justify-center w-full h-full text-white">
        <section className="w-[80%] flex flex-col items-center justify-center gap-4">
            <h1 className="text-5xl p-2">{project.title}</h1>
            <img className="w-[50%]" src={project.thumbnail} alt="" />
            <p>{project.description}</p>
            <section className="flex gap-4">
                {project.gallery.slice(1,4).map((image, index) => (
                     <img key={index} className="w-[300px] h-[200px] object-cover" src={image} alt={`${project.title} image ${index + 1}`} />
                 ))    
                }
            </section>
        </section>
        {project.specialFeatures && project.specialFeatures.length > 0 && (
          <section className="flex justify-center items-center w-full mt-10">
            <section className="flex flex-col items-center w-[70%] gap-8">

              <h2 className="text-3xl">Special Features</h2>

              {project.specialFeatures.map((feature, index) => (
                <section key={index} className="flex flex-col items-center gap-4 w-full">
                
                  {/* Titel + beskrivning */}
                  <h3 className="text-2xl">{feature.title}</h3>
                  <img className="w-[70%]" src={feature.images[0]} alt="" />
                  <p className="w-[70%]">{feature.description}</p>
                           
            
                  {/* Bilder */}
                  <section className="flex  justify-center gap-4 w-[70%]">
                    {feature.images.slice(1,4).map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${feature.title} image ${imgIndex + 1}`}
                        className="w-[50%]  object-cover rounded-lg"
                      />
                    ))}
                    
                  </section>
                
                </section>
              ))}

            </section>
          </section>
        )}        <Gallery images={project.gallery} title={project.title} />
      </section>
    </main>
  );
}