import { Project } from "../types/Project";
import FFStart from "../../../public/FF/FF_start.png";
import FFShows from "../../../public/FF/ShowPage.png";
import FFTeens from "../../../public/FF/TeensPage.png"
import ClearChoice from "../../../public/ClearChoice/CCStart.png";
import CCProducts from "../../../public/ClearChoice/CCProducts.png";
import CCProductPage from "../../../public/ClearChoice/CCProductPage.png";
import CCProductPageBtn from "../../../public/ClearChoice/CCPPBtm.png";
import CCSCPage from "../../../public/ClearChoice/CCSCPage.png";
import CCSCModal from "../../../public/ClearChoice/CCSCModal.png";
import CCSCResult from "../../../public/ClearChoice/CCSCResult.png";
import SL from "../../../public/SL/SL_Start.png";
import SLCharPage from "../../../public/SL/SL_CharPage.png";
import SLCharDown from "../../../public/SL/SL_CharPageDown.png";

export const projects: Project[] = [
    {
        id: "fanatic-fandom",
        title: "Fanatic Fandom",
        description: "A multiple fandom wikia for fans to read about their favorite franchises and discover new ones.",
        thumbnail: FFStart.src,
        gallery: [
            FFStart.src,
            FFShows.src,
            FFTeens.src
        ],
     },
     {
        id: "clearchoice-merchandise",
        title: "ClearChoice Merchandise",
        description: "An e-commerce website for ClearChoice, a company specializing in custom merchandise for fans.",
        thumbnail: ClearChoice.src,
        gallery: [
            ClearChoice.src,
            CCProducts.src,
            CCProductPage.src,
            CCProductPageBtn.src,
            CCSCPage.src,
            CCSCModal.src,
            CCSCResult.src  
       
        ],
        specialFeatures: [
            {
                title: "Size Calculator",
                description: "The size calculator improves the online shopping experience by providing more accurate size recommendations. Instead of relying solely on standard size charts, users can enter their personal measurements, which are then matched against model-specific sizing data. This ensures a better fit across different clothing styles and reduces the risk of incorrect sizing. Logged-in users can also save their measurements for a faster and more seamless experience. The feature is designed to minimize returns, enhance user satisfaction, and contribute to a more sustainable e-commerce flow.",
                images: [   
                    CCSCPage.src,
                    CCSCModal.src,
                    CCSCResult.src  
                ]
            }

        ]
     },   
     {
        id: "soy-luna-fan-page",
        title: "Soy Luna Fan Page",
        description: "A fan page dedicated to the popular Disney Channel show Soy Luna, featuring news, character bios, and episode guides.",
        thumbnail: SL.src,
        gallery: [
            SL.src,
            SLCharPage.src,
            SLCharDown.src
        ],
     }
    ]