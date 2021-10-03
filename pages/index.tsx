import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.css";
import PopularCarsFrontPage from "../Components/FrontPage/popularcarsfrontpage";
import SimilarCarss from "../Components/SpecificCar/SimilarCars";
import PopularAlternativeCarComparision from "../Components/FrontPage/popularAlternativeCarComparision";
import Nav from "../Components/head";
import SearchBar from "../Components/FrontPage/SearchBar";
import BookData from "../Data.json";
import SearchBar1 from "../Components/FrontPage/SearchBar1";
import { TSpresso } from "../CarPicsUrl/Thumbnails";
import {
  HarrierBasicInfoCard,
  NexonBasicInfoCard,
} from "../AllCarBasicInfo/tata";
import { SwiftBasicInfoCard } from "../AllCarBasicInfo/marutisuzuki";
import {
  CretaBasicInfoCard,
  VenueBasicInfoCard,
} from "../AllCarBasicInfo/hyundai";
import {
  SeltosBasicInfoCard,
  SonetBasicInfoCard,
} from "../AllCarBasicInfo/kia";
import FooterNew from "../Components/footernew";

export default function Home() {
  const CompanyName = "MarutiSuzuki";
  const CarPrice = "₹ 3.77 Lakh";

  const CarName = "Maruti S-Presso";
  const OnlyName = "S-Presso";
  const PopularCars = {
    car1: NexonBasicInfoCard,
    car2: HarrierBasicInfoCard,
    car3: CretaBasicInfoCard,
    car4: SwiftBasicInfoCard,
    car5: VenueBasicInfoCard,
    car6: SeltosBasicInfoCard,
    car: SonetBasicInfoCard,
  };
  return (
    <div>
      <Nav />
      <div className="relative   overflow-hidden">
        <SearchBar1 />

        {/* <SearchBar placeholder="Enter a Book Name..." data={BookData} /> */}
        <img
          src="https://c.wallhere.com/photos/84/6f/ultra_wide_car-24084.png!d"
          alt="Avatar"
          className="object-cover w-full h-full filter blur-sm"
        />
        {/* <b className="absolute text-red-600 font-bold">SSSSSSSSSSSSSSS</b> */}
        {/* <div className="absolute  w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center">
          this is a text
        </div> */}
      </div>

      <div className="mx-56 xl:mx-40 md:mx-24 sm:mx-4">
        <Head>
          <title>India Cars & Bikes</title>
          <meta name="description" content="India Cars & Bikes" />
          <link
            rel="icon"
            href="https://i.ibb.co/svwxMr0/logo3331632814713.jpg"
          />
        </Head>
        {/* <Head>
          <title>
            {CompanyName} | {OnlyName}
          </title>
          <meta name="description" content={CarName} />
          <link
            rel="canonical"
            href={`https://jatincarappclient.vercel.app/marutisuzuki/s-presso`}
          />
          <meta property="og:title" content={`${CompanyName}| ${OnlyName}`} />
          <meta property="og:description" content={CarPrice} />
          <meta property="og:type" content="webiste" />
          <meta
            property="og:url"
            content={`https://jatincarappclient.vercel.app/marutisuzuki/s-presso`}
          />
          <meta property="og:site_name" content={`${CompanyName}`} />

          <meta property="og:image" content={TSpresso} />
          <meta property="og:image:secure_url" content={TSpresso} />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="fb:app_id" content={`32423423`} />
        </Head> */}

        <div className="z-10">
          <div>
            <div className="font-bold text-3xl text-center mb-4">
              {" "}
              All Brands{" "}
            </div>
            <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4">
              <Link href="/marutisuzuki">
                <a className="hover:bg-white">
                  {/* <a href="/marutisuzuki"></a> */}
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg"
                      alt="img"
                    />
                    <div className="text-center">Maruti</div>
                  </div>
                </a>
              </Link>
              <Link href="/hyundai">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg"
                      alt="img"
                    />
                    <div className="text-center">Hyundai</div>
                  </div>
                </a>
              </Link>
              <Link href="/honda">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg"
                      alt="img"
                    />
                    <div className="text-center">Honda</div>
                  </div>
                </a>
              </Link>
              <Link href="/tata">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg"
                      alt="img"
                    />
                    <div className="text-center">Tata</div>
                  </div>
                </a>
              </Link>
              <Link href="/mahindra">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg"
                      alt="img"
                    />
                    <div className="text-center">Mahindra</div>
                  </div>
                </a>
              </Link>

              <Link href="/renault">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/renault.jpg"
                      alt="img"
                    />
                    <div className="text-center">Renault</div>
                  </div>
                </a>
              </Link>

              <Link href="/ford">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/ford.jpg"
                      alt="img"
                    />
                    <div className="text-center">Ford</div>
                  </div>
                </a>
              </Link>
              <Link href="/nissan">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/nissan.jpg"
                      alt="img"
                    />
                    <div className="text-center">Nissan</div>
                  </div>
                </a>
              </Link>
              {/* <Link href="/datsun">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/datsun.jpg"
                    alt="img"
                  />
                  <div className="text-center">Datsun</div>
                </div>
              </Link> */}
              <Link href="/toyota">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg"
                      alt="img"
                    />
                    <div className="text-center">Toyota</div>
                  </div>
                </a>
              </Link>
              <Link href="/mg">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mg.jpg"
                      alt="img"
                    />
                    <div className="text-center">MG</div>
                  </div>
                </a>
              </Link>
              <Link href="/kia">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg"
                      alt="img"
                    />
                    <div className="text-center">Kia</div>
                  </div>
                </a>
              </Link>
              <Link href="/volkswagen">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/volkswagen.jpg"
                      alt="img"
                    />
                    <div className="text-center">Volkswagen</div>
                  </div>
                </a>
              </Link>
              <Link href="/skoda">
                <a className="hover:bg-white">
                  <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                    <img
                      className="mt-4"
                      src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/skoda.jpg"
                      alt="img"
                    />
                    <div className="text-center">Skoda</div>
                  </div>
                </a>
              </Link>
              {/* <Link href="/jeep">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/jeep.jpg"
                    alt="img"
                  />
                  <div className="text-center">Jeep</div>
                </div>
              </Link>
              <Link href="/isuzu">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/isuzu.jpg"
                    alt="img"
                  />
                  <div className="text-center">ISuzu</div>
                </div>
              </Link>
              <Link href="/audi">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/audi.jpg"
                    alt="img"
                  />
                  <div className="text-center">Audi</div>
                </div>
              </Link>
              <Link href="/mercedes">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mercedes-benz.jpg"
                    alt="img"
                  />
                  <div className="text-center">Mercedes-Benz</div>
                </div>
              </Link>
              <Link href="/bmw">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://stimg.cardekho.com/pwa/img/brandLogo_168x84/bmw.jpg"
                    alt="img"
                  />
                  <div className="text-center">BMW</div>
                </div>
              </Link>
              <Link href="/tvs">
                <div className="flex flex-col border-2 shadow-md hover:shadow-2xl cursor-pointer">
                  <img
                    className="mt-4"
                    src="https://bd.gaadicdn.com/pwa/img/brandLogo_168x84/tvs.png"
                    alt="img"
                  />
                  <div className="text-center">TVS</div>
                </div>
              </Link> */}
            </div>
            <div>
              <div className="font-bold text-3xl text-center mb-4 mt-6">
                Popular Cars
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularCarsFrontPage PopularCars={PopularCars} />
      <div className="font-bold text-3xl text-center mb-4 mt-6">
        Popular Compare Cars
      </div>
      <PopularAlternativeCarComparision />
      <div>
        <FooterNew />
      </div>
    </div>
  );
}
