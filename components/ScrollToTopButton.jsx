"use client"
import ScrollToTop from "react-scroll-to-top";


export default function ScrollToTopButton() {
    const centerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
    };
    return (
        <div className="">
            <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                height="40px"
                width="40px"
                svgPath="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6V16Zm1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                color="#FEA500"
                style={centerStyle} />

        </div>
    )
}