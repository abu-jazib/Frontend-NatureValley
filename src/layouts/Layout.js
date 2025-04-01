import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Script from "next/script";
const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>    
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1J69YXTYDF"></Script>
      <Script id="google-analytics">
        {
          'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-1J69YXTYDF");'
        }
      </Script>
      <Header header={header} />
      <VideoPopup />
      <ImageView />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default Layout;
