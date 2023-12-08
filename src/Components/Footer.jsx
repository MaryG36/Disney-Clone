import React from "react";
import logo from "../assets/images/DisneyPlusLogo.jpg";

function Footer() {
  return (
    <div
      className="w-full md:w-[105px] object-cover pb-5 m-auto "
      loading="lazy"
    >
      <img src={logo} />

    <div className="flex justify-center">
      <ul className="flex text-center text-gray-300 text-xs gap-5 ">
        <li>
          <span ClassName="language-selector">
            <label for="language-selector">Languages</label>
            <select id="language-selector" ClassName="fine">
              <option value="/">English</option>
              <option value="/es-us/">Español</option>
            </select>
            <svg
              ClassName="globe"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 28 28"
            >
              <path d="M12,0C5.37,0,0,5.37,0,12s5.37,12,12,12s12-5.37,12-12S18.63,0,12,0z M11.68,16.43c-1.4,0-2.72,0.07-3.9,0.16 c-0.3-1.21-0.46-2.54-0.49-3.96h9.29c-0.02,1.44-0.18,2.78-0.46,4C14.8,16.51,13.29,16.43,11.68,16.43z M6.02,11.38h-4.7 c0.09-1.69,0.58-3.31,1.4-4.73C3.41,6.78,4.77,7.01,6.53,7.2C6.24,8.48,6.07,9.88,6.02,11.38z M7.83,7.33 c1.26,0.1,2.67,0.18,4.16,0.18c1.48,0,2.87-0.07,4.1-0.18c0.25,1.13,0.43,2.48,0.49,4.06H7.31C7.35,10.14,7.5,8.73,7.83,7.33z M6.01,12.63c0.02,1.45,0.18,2.82,0.48,4.09c-1.75,0.19-3.08,0.43-3.77,0.56c-0.8-1.38-1.29-2.96-1.39-4.65H6.01z M17.88,12.63h4.76 c-0.1,1.71-0.61,3.31-1.43,4.7c-0.53-0.11-1.9-0.36-3.79-0.57C17.7,15.48,17.86,14.1,17.88,12.63z M17.86,11.38 c-0.05-1.6-0.22-2.99-0.48-4.19c1.92-0.21,3.3-0.48,3.83-0.59c0.83,1.42,1.33,3.04,1.43,4.78H17.86z M20.44,5.44 c-0.7,0.13-1.88,0.33-3.37,0.49c-0.57-1.96-1.35-3.31-2.05-4.21C17.19,2.37,19.08,3.69,20.44,5.44z M12.77,1.32 c0.22,0.15,1.05,0.76,1.87,2.14c0.37,0.63,0.78,1.49,1.12,2.6c-1.15,0.09-2.42,0.16-3.77,0.16s-2.64-0.06-3.8-0.15 c0.3-0.91,0.69-1.79,1.2-2.59c0.94-1.48,1.89-2.07,2.05-2.16c0.19-0.01,0.37-0.01,0.56-0.01C12.26,1.29,12.52,1.3,12.77,1.32z M7.83,2.13C8.25,1.95,8.67,1.8,9.11,1.68C8.86,1.97,8.61,2.3,8.37,2.68c-0.62,0.95-1.12,2.04-1.5,3.26 C5.44,5.79,4.27,5.61,3.5,5.48C4.61,4.04,6.08,2.87,7.83,2.13z M3.5,18.44c0.76-0.14,1.92-0.32,3.34-0.47 c0.42,1.28,1,2.43,1.71,3.43c0.24,0.33,0.48,0.62,0.71,0.88C6.94,21.68,4.92,20.3,3.5,18.44z M11.97,22.64c-0.13,0-0.25,0-0.38-0.01 c-0.38-0.25-1.21-0.88-2.04-2.04c-0.57-0.8-1.03-1.72-1.39-2.73c1.08-0.08,2.27-0.14,3.52-0.14c1.46,0,2.85,0.07,4.1,0.18 c-0.33,1-0.76,1.91-1.29,2.7c-0.75,1.14-1.5,1.76-1.86,2.02C12.41,22.63,12.19,22.64,11.97,22.64z M14.87,22.24 c0.21-0.25,0.42-0.54,0.64-0.86c0.66-0.98,1.19-2.11,1.58-3.37c1.47,0.16,2.64,0.35,3.34,0.47C19.04,20.28,17.1,21.62,14.87,22.24z"></path>
            </svg>
            <svg
              ClassName="down"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <rect width="48" height="48" fill="none"></rect>
              <path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z"></path>
            </svg>
          </span>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="/legal/subscriber-agreement"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Subscriber Agreement - Official"
            data-testid="mlp_link_footer"
          >
            <span>Subscriber Agreement</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://privacy.thewaltdisneycompany.com/en/"
            ClassName="link"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Privacy Policy - Official"
            data-testid="mlp_link_footer"
          >
            <span>Privacy Policy</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Your US State Privacy Rights - Official"
            data-testid="mlp_link_footer"
          >
            <span>Your US State Privacy Rights</span>
          </a>
        </li>

        <li ClassName="footer-list-item">
          <button
            ClassName="link"
            data-action="onetrust-manage"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Do Not Sell or Share My Personal Information - US - Official"
          >
            <span>Do Not Sell or Share My Personal Information</span>
          </button>
        </li>
        
        <li ClassName="footer-list-item">
          <a
            href="https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Children's Online Privacy Policy - Official"
            data-testid="mlp_link_footer"
          >
            <span>Children's Online Privacy Policy</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://help.disneyplus.com/article/disneyplus-closed-captioning-inquiries"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Closed Captioning - Official - Oct 24, 2023"
            data-testid="mlp_link_footer"
          >
            <span>Closed Captioning</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://preferences-mgr.trustarc.com/?pid=disney01&amp;aid=disneyplus01&amp;type=disneyplus"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Interest-Based Ads - Official "
            data-testid="mlp_link_footer"
          >
            <span>Interest-Based Ads</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://help.disneyplus.com/article/disneyplus-devices-supported"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Supported Devices - Official - Oct 24, 2023"
            data-testid="mlp_link_footer"
          >
            <span>Supported Devices</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://help.disneyplus.com/"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Help - Official"
            data-testid="mlp_link_footer"
          >
            <span>Help</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="/welcome/gift-card"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Gift Disney+ - Official"
            data-testid="mlp_link_footer"
          >
            <span>Gift Disney+</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://help.disneyplus.com/article/disneyplus-introduction"
            target="_blank"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - About Us - Official"
            data-testid="mlp_link_footer"
          >
            <span>About Us</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="/welcome/partner-program"
            ClassName="link"
            rel="noopener nofollow"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Disney+ Partner Program - Official"
            data-testid="mlp_link_footer"
          >
            <span>Disney+ Partner Program</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="/welcome/disney-hulu-espn-bundle"
            ClassName="link"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - The Disney Bundle - Official"
            data-testid="mlp_link_footer"
          >
            <span>Disney Bundle</span>
          </a>
        </li>
        <li ClassName="footer-list-item">
          <a
            href="https://press.disneyplus.com/"
            target="_blank"
            ClassName="link"
            data-gv2-element="element"
            data-gv2-key="button"
            data-gv2-name="mlp_link"
            data-gv2-type="button"
            data-analytics="click"
            data-analytics-name="Link - Press - Official"
            data-testid="mlp_link_footer"
          >
            <span>Press</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Footer;
