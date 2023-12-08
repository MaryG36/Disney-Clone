import React from "react";
import logo from "../assets/images/DisneyPlusLogo.jpg";

function Footer() {
  return (
    <div className="w-full ">
    <div
      className="w-full md:w-[170px] max-sm:w-[200px] pb-5 m-auto pt-20 "
      loading="lazy"
    >
      <img src={logo} className="object-scale-down h-48 w-96"/>

    <div className="flex justify-center pb-10 ">
      <ul className="flex max-sm:grid text-gray-400 text-xs gap-6 max-sm:gap-1">
        <li className="pb-5">
          <span ClassName="language-selector">
            <label for="language-selector">Languages</label>
            <select id="language-selector" ClassName="fine" className="text-gray-700">
              <option value="/">English</option>
              <option value="/es-us/">Español</option>
            </select>
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
    <p className="text-gray-400 text-xs ">
      © Disney Clone. All Rights Reserved.
      </p>
    </div>
    </div>
  );
}

export default Footer;
