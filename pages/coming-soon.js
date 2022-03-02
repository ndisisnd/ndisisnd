import Head from "next/head";

function ComingSoon() {
  return (
    <div>
      <Head>
        <title>Andy Chan</title>
      </Head>
      <div className="flex justify-center flex-col items-center h-screen gap-8">
        <div className="flex justify-center flex-col items-center gap-4">
          <h1 className="text-3xl md:text-5xl font-bold hover:underline transition-all ease-in hover:rotate-180 cursor-pointer">
            🚧 Coming Soon! 🚧
          </h1>
          <h4 className="text-xl text-center md:text-2xl">
            For any enquiries on my portfolio, do email me at{" "}
            <a
              href="mailto:ndisisnd@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="underline ease-in transition-all hover:font-bold"
            >
              ndisisnd@gmail.com.
            </a>
          </h4>
        </div>
        <h6 className="text-sm md:text-md text-center">
          This page will be completed on 6 Mar 2022. For a PDF portfolio, please
          contact me instead.
        </h6>
      </div>
    </div>
  );
}

export default ComingSoon;
