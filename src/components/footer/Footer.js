import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* <ul className='footer-links'>
    <li>WOMEN </li>
    <li> MEN</li>
    <li>HOMEDECORE </li>
    <li>ACCESSORIES </li>
    <li>NEW ARRIVALS </li>
    <li> SALES</li>
    <li> FREE SHIPPING</li>
    <li>TERMS AND CONDITIONS </li>
    <li>PRIVACY POLICIES </li>
    <li>ABOUT US </li>



    </ul> */}

      <ul class="footer-category-list">
        <li class="footer-category-list-item">
          <a title="WOMEN" href="/c/women/25?source=footer">
            <p class="MuiTypography-root MuiTypography-body1">WOMEN</p>
          </a>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="WESTERN WEAR"
                href="/c/women/collections-77?source=footer&amp;fp[]=gender_fq:Women&amp;fp[]=categorygroupid_fq:75&amp;pid=25&amp;groupName=WESTERN+WEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Western Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="ETHNIC WEAR"
                href="/c/women/collections-77?source=footer&amp;fp[]=gender_fq:Women&amp;fp[]=categorygroupid_fq:76&amp;pid=25&amp;groupName=ETHNIC+WEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Ethnic Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="FOOTWEAR"
                href="/c/women/collections-77?source=footer&amp;fp[]=gender_fq:Women&amp;fp[]=categorygroupid_fq:77&amp;pid=25&amp;groupName=FOOTWEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Footwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="HANDBAGS"
                href="/c/women/collections-77?fp[]=gender_fq:Women&amp;fp[]=categorygroupid_fq:78&amp;pid=25&amp;groupName=HANDBAGS&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Handbags
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="INNER WEAR"
                href="/c/women/inner-wear-992?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Inner Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="SLEEPWEAR"
                href="/c/women/sleepwear-887?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Sleepwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="ATHLEISURE"
                href="/c/women/active-wear-224?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Athleisure
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="MASKS"
                href="/c/women/accessories/masks-4779?page=1&amp;orderway=asc&amp;orderby=popular&amp;fp[]=Gender__fq:Women|Gender__fq:Unisex&amp;source=footer"
              >
                Masks
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="NEW ARRIVALS"
                href="/c/women/new-arrivals-462?page=1&amp;orderway=asc&amp;orderby=position&amp;fp[]=Gender__fq%3AWomen&amp;source=footer"
              >
                New Arrivals
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="SHOP BY BRANDS"
                href="/content/labels?source=footer#women"
              >
                Shop By Brands
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-category-list-item">
          <a title="MEN" href="/c/men/20?source=footer">
            <p class="MuiTypography-root MuiTypography-body1">MEN</p>
          </a>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="TOP WEAR"
                href="/c/men/collections-77?fp[]=gender_fq:Men&amp;fp[]=categorygroupid_fq:51&amp;pid=20&amp;groupName=TOP+WEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Top Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BOTTOM WEAR"
                href="/c/men/collections-77?fp[]=gender_fq:Men&amp;fp[]=categorygroupid_fq:52&amp;pid=20&amp;groupName=BOTTOM+WEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Bottom Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="ETHNIC WEAR"
                href="/c/men/collections-77?fp[]=gender_fq:Men&amp;fp[]=categorygroupid_fq:79&amp;pid=20&amp;groupName=ETHNIC+WEAR&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Ethnic Wear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="ATHLEISURE"
                href="/c/men/active-wear-200?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Athleisure
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BAGS"
                href="/c/men/collections-77?fp[]=gender_fq:Men&amp;fp[]=categorygroupid_fq:85&amp;pid=20&amp;groupName=BAGS&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Bags
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="MASKS"
                href="/c/men/accessories/masks-4779?orderway=asc&amp;orderby=popular&amp;fp[]=Gender__fq:Men|Gender__fq:Unisex&amp;filters=Gender__fq:Unisex:Men&amp;page=1&amp;source=footer"
              >
                Masks
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="INNERWEAR"
                href="/c/men/inner-wear-5183?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Innerwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="FOOTWEAR"
                href="/c/men/collections-77?fp[]=categorygroupid_fq:80&amp;parentcategoryid=20&amp;groupName=FOOTWEAR&amp;categorygroupid=80&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Footwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="NEW ARRIVALS"
                href="/c/men/new-arrivals-462?fp[]=Gender__fq%3AMen&amp;source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                New Arrivals
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="SHOP BY BRANDS"
                href="/content/labels?source=footer#men"
              >
                Shop By Brands
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-category-list-item">
          <a title="KIDS" href="/c/kids/29?source=footer">
            <p class="MuiTypography-root MuiTypography-body1">KIDS</p>
          </a>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BOYS"
                href="/c/kids/collections-77?fp[]=gender_fq:Boys&amp;fp[]=categorygroupid_fq:82&amp;pid=29&amp;groupName=BOYS&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Boys
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="GIRLS"
                href="/c/kids/collections-77?fp[]=gender_fq:Girls&amp;fp[]=categorygroupid_fq:84&amp;parentcategoryid=29&amp;groupName=GIRLS&amp;categorygroupid=84&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Girls
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BABY"
                href="/c/kids/baby-6905?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Baby
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="CHARACTER SHOP"
                href="/c/kids?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Character Shop
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="NEW ARRIVALS"
                href="/c/kids/new-arrivals-462?page=1&amp;orderby=position&amp;orderway=asc&amp;fp[]=Gender__fq%3AGirls&amp;source=footer"
              >
                New Arrivals
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="SHOP BY BRANDS"
                href="/c/kids?page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Shop By Brands
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-category-list-item">
          <a title="HOME DECOR" href="/c/home-decor/5185?source=footer">
            <p class="MuiTypography-root MuiTypography-body1">HOME DECOR</p>
          </a>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="DECOR"
                href="/c/homedecor/collections-77?source=footer&amp;fp[]=categorygroupid_fq:72&amp;pid=5185&amp;groupName=Decor&amp;groupname=Decor&amp;parentcategoryid=5185&amp;categorygroupid=72&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Decor
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="LIVING"
                href="/c/homedecor/collections-77?source=footer&amp;fp[]=categorygroupid_fq:71&amp;pid=5185&amp;groupName=Living&amp;groupname=Living&amp;parentcategoryid=5185&amp;categorygroupid=71&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Living
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="DINING"
                href="/c/homedecor/collections-77?source=footer&amp;fp[]=categorygroupid_fq:70&amp;pid=5185&amp;groupName=Dining&amp;groupname=Dining&amp;parentcategoryid=5185&amp;categorygroupid=70&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Dining
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BED"
                href="/c/homedecor/collections-77?source=footer&amp;fp[]=Gender__fq:Home+Decor&amp;fp[]=Categorygroupid__fq:68&amp;pid=5185&amp;groupName=Bed&amp;groupname=Bed&amp;parentcategoryid=5185&amp;categorygroupid=68&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Bed
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BATH"
                href="/c/homedecor/collections-77?source=footer&amp;fp[]=categorygroupid_fq:69&amp;pid=5185&amp;groupName=Bath&amp;groupname=Bath&amp;parentcategoryid=5185&amp;categorygroupid=69&amp;page=1&amp;orderway=asc&amp;orderby=popular"
              >
                Bath
              </a>
            </li>
            <li class="footer-category-item"></li>
          </ul>
        </li>
        <li class="footer-category-list-item">
          <a title="ACCESSORIES" href="/c/accessories/6931?source=footer">
            <p class="MuiTypography-root MuiTypography-body1">ACCESSORIES</p>
          </a>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="LIVE SAFE"
                href="/c/accessories/live-safe-5840?page=1&amp;orderway=asc&amp;orderby=popular&amp;source=footer"
              >
                Live Safe
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BAGS"
                href="/c/accessories/collections-77?source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;groupname=BAGS&amp;parentcategoryid=25&amp;categorygroupid=78"
              >
                Bags
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="WOMEN FOOTWEAR"
                href="/c/accessories/collections-77?source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;groupname=WOMEN+FOOTWEAR&amp;parentcategoryid=25&amp;categorygroupid=77"
              >
                Women Footwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="MEN FOOTWEAR"
                href="/c/accessories/collections-77?source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;groupname=MEN+FOOTWEAR&amp;parentcategoryid=20&amp;categorygroupid=80"
              >
                Men Footwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="BOYS FOOTWEAR"
                href="/c/accessories/collections-77?source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;groupname=BOYS+FOOTWEAR&amp;parentcategoryid=29&amp;categorygroupid=81"
              >
                Boys Footwear
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="GIRLS FOOTWEAR"
                href="/c/accessories/collections-77?source=footer&amp;page=1&amp;orderway=asc&amp;orderby=popular&amp;groupname=GIRLS+FOOTWEAR&amp;parentcategoryid=29&amp;categorygroupid=83"
              >
                Girls Footwear
              </a>
            </li>
          </ul>
        </li>
        
        <li class="footer-category-list-item">
          <p class="MuiTypography-root MuiTypography-body1">About</p>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="About Us"
                href="/content/about-us-4?source=footer"
              >
                About Us
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Greencard"
                href="/content/greencard?source=footer&amp;page=1"
              >
                Greencard
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Store Locator"
                href="/content/store-locators-9?source=footer"
              >
                Store Locator
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Payment Options"
                href="/content/faqs-2?source=footer&amp;page=2"
              >
                Payment Options
              </a>
            </li>
            <li class="footer-category-item">
              <a
                target="_blank"
                rel="noreferrer noopener"
                title="Investor Relations"
                href="http://www.abfrl.com/investor-relations?source=footer"
              >
                Investor Relations
              </a>
            </li>
          </ul>
        </li>
        <li class="footer-category-list-item">
          <p class="MuiTypography-root MuiTypography-body1">Customer</p>
          <ul class="footer-category-item-list">
            <li class="footer-category-item">
              <a
                target="_blank"
                rel="noreferrer noopener"
                title="Track Order"
                href="https://track.pantaloons.com/?source=footer"
              >
                Track Order
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="FAQs"
                href="/content/faqs-2?source=footer"
              >
                FAQs
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Customer Support"
                href="/content/customer-support?source=footer"
              >
                Customer Support
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Returns &amp; Exchange Policy"
                href="/content/faqs-2?source=footer&amp;page=2"
              >
                Returns &amp; Exchange Policy
              </a>
            </li>
            <li class="footer-category-item">
              <a
                rel="noreferrer noopener"
                title="Shipping Policy"
                href="/content/faqs-2?source=footer&amp;page=1"
              >
                Shipping Policy
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
