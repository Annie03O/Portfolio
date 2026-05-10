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
import KFY from "../../../public/Knitted For You/Modal/Full.png";
import KFYGrid from "../../../public/Knitted For You/Knitting Setting/Grid.png";
import KFYSection from "../../../public/Knitted For You/Knitting Setting/Section.png";
import KFYFull from "../../../public/Knitted For You/Modal/Full.png";
import KFYBtn from "../../../public/Knitted For You/Modal/Btn.png";
import KFYModal from "../../../public/Knitted For You/Modal/OpenModal.png";
import KFYPdfBtn from "../../../public/Knitted For You/Pdf/Pdf-button.png";
import KFYPdfText from "../../../public/Knitted For You/Pdf/pdf-text.png";
import KFYColorPick from "../../../public/Knitted For You/Play with color/Colorpicker.png";
import KFYColorFull from "../../../public/Knitted For You/Play with color/Full.png";
import KFYColorSection from "../../../public/Knitted For You/Play with color/Section.png";
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
     },
     {
        id: "knitted-for-you",
        title: "Knitted For You",
        description: "'Knitted For You' was a small start-up company where I did an internship. I was responsible for redesigning buttons, testing the website and implenting funktionality to the website.",
        thumbnail: KFY.src,
        gallery: [
            KFYGrid.src,
            KFYModal.src,
            KFYColorFull.src,
            KFYSection.src,
            KFYFull.src,
            KFYBtn.src,
            KFYPdfBtn.src,
            KFYPdfText.src,
            KFYColorPick.src,
            KFYColorSection.src
        ],
        specialFeatures: [
            {
                title: "Play with color",
                description: "The 'Play with Color' feature allows users to customize the colors of their patterns in real-time. Users can select from a palette of colors or input specific color codes to see how their choices will look with the pattern. This interactive tool enhances the user experience by providing a visual representation of the final product, making it easier for users to make informed decisions about their designs. It also adds a fun and creative element to the website, encouraging users to experiment with different color combinations and personalize their knitting projects.",
                images: [
                    KFYColorPick.src,
                    KFYColorFull.src,
                    KFYColorSection.src
                ]
            },
                {
                    title: "PDF Generation",
                    description: "The PDF generation feature allows users to create a downloadable PDF of their knitting pattern. This includes all the necessary instructions, materials list, and any customizations made through the 'Play with Color' feature. Users can easily save or print the PDF for offline use, making it convenient for them to follow their knitting projects without needing constant access to the website. This feature enhances user satisfaction by providing a tangible output that they can refer to while working on their knitting projects.",
                    images: [
                        KFYPdfBtn.src,
                        KFYPdfText.src
                    ]
                },
                    {
                        title: "Feedback Modal",
                        description: "The feedback modal is a user-friendly interface that allows customers to provide feedback on their experience with the website. It can be triggered by a button or automatically after certain interactions, such as completing a purchase or using the 'Play with Color' feature. The modal collects user input through a simple form, which may include rating scales, text fields for comments, and options for users to indicate specific areas of improvement. This feature helps the company gather valuable insights directly from users, enabling them to make informed decisions about future updates and enhancements to the website.",
                        images: [
                            KFY.src,
                            KFYModal.src,
                            KFYBtn.src,
                        ]
                    }
        ]

     }
    ]