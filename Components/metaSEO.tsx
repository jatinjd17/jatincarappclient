import Head from "next/head";
const Meta = ({
  CompanyName,
  OnlyName,
  LatestUpdate,
  ImageUrl,
  LinkCarName,
}) => (
  <Head>
    <title>
      {CompanyName} | {OnlyName}
    </title>
    <meta name="description" content={LatestUpdate} />
    <link
      rel="canonical"
      href={`https://jatincarappclient.vercel.app/${CompanyName.toLowerCase()}/${LinkCarName.toLowerCase().replace(
        / /g,
        ""
      )}`}
    />
    <meta property="og:title" content={`${CompanyName}| ${OnlyName}`} />
    <meta property="og:description" content={LatestUpdate[0]} />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content={`https://jatincarappclient.vercel.app/${CompanyName.toLowerCase()}/${LinkCarName.toLowerCase().replace(
        / /g,
        ""
      )}`}
    />
    <meta property="og:site_name" content={`${CompanyName}`} />

    <meta property="og:image" content={ImageUrl} />
    <meta property="og:image:secure_url" content={ImageUrl} />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="fb:app_id" content={`32423423`} />
  </Head>
);
export default Meta;
