"use client"    
import Banner from "./Banner";
import ProjectsPreview from "./ProjectsPreview";

const Home = () => {
   return (
     <section className="flex text-black justify-center w-full min-h-screen">
       <section className="flex flex-col items-center w-full">
         <Banner />
         <ProjectsPreview />
       </section>
     </section>
   );
 };
 
 export default Home;