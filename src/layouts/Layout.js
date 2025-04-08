import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Script from "next/script";
import { FloatingWhatsApp } from 'react-floating-whatsapp' 
import Logo from "@/public/assets/images/favicon.png";

const Layout = ({ header, children, footer }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>  
      <FloatingWhatsApp 
        phoneNumber="+923328194499" 
        accountName="NatureValley" 
        avatar="/assets/images/logo.png"
        statusMessage="Your Path to a Greener Tomorrow"
        allowClickAway
        chatMessage="Hi! Welcome to Nature Valley. How can we assist you today?"
      />  
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
