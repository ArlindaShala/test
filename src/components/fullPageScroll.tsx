import Link from 'next/link';

export default function FullPageScroll() {
 
  return (
    <div>
    <div className="fixed top-[280px] left-[138px]">
      <div className="flex flex-col gap-[11px] mobile:hidden tablet:hidden desktop:hidden desktoplg:hidden desktopxl:hidden desktop2xl:hidden desktop4xl:flex">
        <div id="container">
          <div id="divA">
            <Link href="https://labs.mova.group/">
              <button className="movaacad flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
                <img src="/images/Group 4522.svg" alt="facebook" />
              </button>
            </Link>
          </div>
          <div id="divB">
            <Link href="https://labs.mova.group/" id="divB">
              <button className="movaacadcolor flex h-[36px] w-[133px] items-center justify-start border border-[#2C2C2E]">
                <img
                  src="/images/Group 4522.svg"
                  alt="facebook"
                  className="mr-[10px] ml-[11px]"
                />
                <div className="mr-[9px] h-[28px] w-[1px] bg-[#2c2c2e]"></div>
                <span className="font-mono text-[12px] font-bold text-[#2c2c2e]">
                  MOVA Academy
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div id="container">
          <div id="divA">
            <Link href="https://mova-digital.com/">
              <button className="movadig flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
                <img src="/images/Group 4522.svg" alt="facebook" />
              </button>
            </Link>
          </div>
          <div id="divB">
            <Link href="https://mova-digital.com/" id="divB">
              <button className="movadigcolor flex h-[36px] w-[133px] items-center justify-start border border-[#2C2C2E]">
                <img
                  src="/images/Group 4522.svg"
                  alt="facebook"
                  className="mr-[10px] ml-[11px]"
                />
                <div className="mr-[9px] h-[28px] w-[1px] bg-[#2c2c2e]"></div>
                <span className="font-mono text-[12px] font-bold text-[#2c2c2e]">
                  MOVA Digital
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div id="container">
          <div id="divA">
            <Link href="https://dreischritte.at/">
              <button className="drei flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
                <img src="/images/_2679739260160.svg" alt="facebook" />
              </button>
            </Link>
          </div>
          <div id="divB">
            <Link href="https://dreischritte.at/" id="divB">
              <button className="dreicolor flex h-[36px] w-[133px] items-center justify-start border border-[#2C2C2E]">
                <img
                  src="/images/_2679739260160.svg"
                  alt="facebook"
                  className="mr-[7px] ml-[8px]"
                />
                <div className="mr-[9px] h-[28px] w-[1px] bg-[#2c2c2e]"></div>
                <span className="font-mono text-[12px] font-bold text-[#2c2c2e]">
                  Dreischritee
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div id="container">
          <div id="divA">
            <Link href="https://autoshkolladigjitale.com/">
              <button className="auto flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
                <img src="/images/Group 4524.svg" alt="facebook" />
              </button>
            </Link>
          </div>
          <div id="divB">
            <Link href="https://autoshkolladigjitale.com/" id="divB">
              <button className="autocolor flex h-[36px] w-[133px] items-center justify-start border border-[#2C2C2E]">
                <img
                  src="/images/Group 4524.svg"
                  alt="facebook"
                  className="mr-[7px] ml-[8px]"
                />
                <div className="mr-[9px] h-[28px] w-[1px] bg-[#2c2c2e]"></div>
                <span className="text-left font-mono text-[12px] font-bold leading-tight text-[#2c2c2e]">
                  Autoshkolla
                  <br />
                  Digjitale
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="contact flex h-[138px] w-[36px] items-center justify-center border border-[#2C2C2E] font-mono text-[15px] font-bold">
          <div className="-rotate-90 whitespace-nowrap">Our Companies</div>
        </div>
      </div>
    </div>
    <div className="fixed top-[280px] right-[138px]">
      <div className="flex flex-col gap-[11px] mobile:hidden tablet:hidden desktop:hidden desktoplg:hidden desktopxl:hidden desktop2xl:hidden desktop4xl:flex">
        <Link href="https://www.facebook.com/MOVAdigitalgroup">
          <button className="facebook flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
            <img src="/images/facebook.svg" alt="facebook" />
          </button>
        </Link>
        <Link href="https://www.instagram.com/mova_group/?hl=en">
          <button className=" instagram flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
            <img src="/images/instagram.svg" alt="instagram" />
          </button>
        </Link>
        <Link href="https://twitter.com/MOVAGroup">
          <button className="twitter flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
            <img src="/images/twitter.svg" alt="twiteer" />
          </button>
        </Link>
        <Link href="https://www.linkedin.com/company/mova-group">
          <button className="linkedin flex h-[36px] w-[36px] items-center justify-center border border-[#2C2C2E]">
            <img src="/images/linkedin.svg" alt="linedin" />
          </button>
        </Link>
        <Link href="#contactus">
          <button className="contact flex h-[138px] w-[36px] items-center justify-center border border-[#2C2C2E] font-mono text-[15px] font-bold">
            <div className="-rotate-90 whitespace-nowrap">Contact Us</div>
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}
