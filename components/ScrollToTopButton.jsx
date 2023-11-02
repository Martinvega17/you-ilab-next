"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import styled from "styled-components";

const CenteredButton = styled(ScrollToTop)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a4f66;
  border-radius: 50%;
  box-shadow: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #FF720D;
  }
`;

export default function ScrollToTopButton() {
    return (
        <div className="">
            <CenteredButton
                behavior="smooth"
                viewBox="0 0 20 20"
                height="15px"
                width="15px"
                svgPath="M10,0L9.4,0.6L0.8,9.1l1.2,1.2l7.1-7.1V20h1.7V3.3l7.1,7.1l1.2-1.2l-8.5-8.5L10,0z"
                color="#fff"
            />
        </div>
    );
}
