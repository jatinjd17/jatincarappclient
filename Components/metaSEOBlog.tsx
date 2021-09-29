import Head from "next/head";
import { ClientProduction } from "../actions/ApiCarsBlogs";
const MetaBlog = ({
  CompanyName,
  OnlyName,
  LatestUpdate,
  ImageUrl,
  LinkCarName,
  Titlee,
}) => (
  <Head>
    <title>{Titlee}</title>
    <meta name="description" content={LatestUpdate} />
    <link
      rel="canonical"
      href={`${ClientProduction}/Blog/blogs/${LinkCarName}`}
    />
    <meta property="og:title" content={`${Titlee}`} />
    <meta property="og:description" content={LatestUpdate} />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={`${ClientProduction}/Blog/blogs/${LinkCarName}`}
    />
    <meta property="og:site_name" content={`${CompanyName}`} />

    <meta property="og:image" content={ImageUrl} />
    <meta property="og:image:secure_url" content={ImageUrl} />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="fb:app_id" content={`32423423`} />
  </Head>
);
export default MetaBlog;
