"use client"    
import Banner from "./Banner";
import ProjectsPreview from "./ProjectsPreview";


const Home = () => {   
   return (
     <section className="flex text-black justify-center w-full h-screen">
      <section className="flex flex-col items-center justify-center w-full h-full">
         <Banner/>
         <ProjectsPreview/>
      </section>
      </section>
   );
}
export default Home;