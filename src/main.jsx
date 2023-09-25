import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  tr: "350ms cubic-bezier(.29,.43,.8,1.14)",
  fuji: {
    main: {
      shadow: `rgba(181, 112, 27, 0.4) 0px 10px 26px -5px,
    rgba(227, 138, 29, 0.34) 0px 24px 41px 0px,
    rgba(143, 123, 184, 0.29) 0px 32px 44px 12px,
    rgba(183, 161, 230, 0.15) 1px 61px 45px 33px;`,
      gradient: `linear-gradient(
      90deg,
      hsl(33deg 87% 51% / 0.4) 0%,
      hsl(26deg 76% 57% / 0.4) 4%,
      hsl(19deg 64% 59% / 0.4) 8%,
      hsl(8deg 50% 61% / 0.4) 13%,
      hsl(350deg 39% 60% / 0.4) 19%,
      hsl(327deg 32% 55% / 0.4) 26%,
      hsl(296deg 26% 52% / 0.4) 35%,
      hsl(270deg 39% 54% / 0.4) 46%,
      hsl(270deg 39% 54% / 0.4) 58%,
      hsl(296deg 26% 52% / 0.4) 68%,
      hsl(327deg 32% 55% / 0.4) 76%,
      hsl(350deg 39% 60% / 0.4) 82%,
      hsl(8deg 50% 61% / 0.4) 87%,
      hsl(19deg 64% 59% / 0.4) 92%,
      hsl(26deg 76% 57% / 0.4) 96%,
      hsl(33deg 87% 51% / 0.4) 100%
    );`,
      borderTop: "rgba(227, 138, 29, 0.5)",
      borderLeft: "rgba(227, 138, 29, 0.7)",
      button: {
        color: "#ef8e17",
        hovBg: "#7b4cda7f",
        hovColor: "#ff8c00",
        hovBColor: "#7b4cda",
      },
    },
    settings: {
      borderTop: "rgba(143, 123, 184, 0.5)",
      borderLeft: "rgba(143, 123, 184, 0.7)",
      closeBtnColor: "#EF8E17",
      fill: "#7b4cda",
      musicIcons: "#EF8E17",
    },
    cardBg: "#d1c3ed",
    cardBorder: "#9271d5",
  },
  lake: {
    main: {
      shadow: `rgba(129, 136, 158, 0.4) 0px 10px 14px -5px,
      rgba(139, 153, 199, 0.29) 0px 24px 41px 0px,
      rgba(143, 123, 184, 0.21) 0px 32px 44px 12px,
      rgba(183, 161, 230, 0.14) 1px 61px 45px 33px;`,
      gradient: `linear-gradient(
        90deg,
        hsl(215deg 8% 30% / 0.6) 0%,
        hsl(220deg 10% 34% / 0.6) 3%,
        hsl(222deg 12% 39% / 0.6) 7%,
        hsl(224deg 13% 44% / 0.6) 11%,
        hsl(225deg 15% 49% / 0.6) 15%,
        hsl(225deg 18% 54% / 0.6) 20%,
        hsl(226deg 23% 59% / 0.6) 27%,
        hsl(226deg 30% 64% / 0.6) 39%,
        hsl(226deg 30% 64% / 0.6) 56%,
        hsl(226deg 23% 59% / 0.6) 66%,
        hsl(225deg 18% 54% / 0.6) 74%,
        hsl(225deg 15% 49% / 0.6) 80%,
        hsl(224deg 13% 44% / 0.6) 86%,
        hsl(222deg 12% 39% / 0.6) 91%,
        hsl(220deg 10% 34% / 0.6) 95%,
        hsl(215deg 8% 30% / 0.6) 100%
      );`,
      borderTop: "rgba(243, 242, 192, 0.5)",
      borderLeft: "rgba(243, 242, 192, 0.7)",
      button: {
        color: "#2f3032",
        hovBg: "#f3f2c0",
        hovColor: "#464B52",
        hovBColor: "rgb(139, 153, 199)",
      },
    },
    settings: {
      borderTop: "rgba(139, 153, 199, 0.5)",
      borderLeft: "rgba(139, 153, 199, 0.7)",
      closeBtnColor: "#f3f2c0",
      fill: "#8b99c7",
      musicIcons: "#f3f2c0",
    },
    cardBg: "#d8d7ba",
    cardBorder: "rgb(139, 153, 199)",
  },
  art: {
    main: {
      shadow: `rgba(88, 142, 150, 0.4) 0px 10px 14px -5px,
      rgba(88, 142, 150, 0.29) 0px 24px 41px 0px,
      rgba(193, 113, 146, 0.3) 0px 32px 44px 12px,
      rgba(193, 113, 146, 0.21) 1px 61px 45px 33px;`,
      gradient: `linear-gradient(
        90deg,
        hsl(335deg 39% 60% / 0.7) 0%,
        hsl(332deg 30% 59% / 0.7) 1%,
        hsl(328deg 22% 57% / 0.7) 3%,
        hsl(319deg 13% 56% / 0.7) 5%,
        hsl(286deg 8% 55% / 0.7) 7%,
        hsl(227deg 8% 55% / 0.7) 10%,
        hsl(200deg 14% 52% / 0.7) 14%,
        hsl(191deg 21% 49% / 0.7) 22%,
        hsl(191deg 21% 49% / 0.7) 73%,
        hsl(200deg 14% 52% / 0.7) 82%,
        hsl(227deg 8% 55% / 0.7) 88%,
        hsl(286deg 8% 55% / 0.7) 91%,
        hsl(319deg 13% 56% / 0.7) 94%,
        hsl(328deg 22% 57% / 0.7) 96%,
        hsl(332deg 30% 59% / 0.7) 98%,
        hsl(335deg 39% 60% / 0.7) 100%
      );`,
      borderTop: "rgba(88, 142, 150, 0.5)",
      borderLeft: "rgba(88, 142, 150, 0.7)",
      button: {
        color: "#e0e0e0",
        hovBg: "#c17192",
        hovColor: "#2c426b",
        hovBColor: "#2c426b",
      },
    },
    settings: {
      borderTop: "rgba(224, 224, 224, 0.5)",
      borderLeft: "rgba(224, 224, 224, 0.7)",
      closeBtnColor: "#e0e0e0",
      fill: "#588E96",
      musicIcons: "#cf457e",
    },
    cardBg: "#000000",
    cardBorder: "#cf457e",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
