import React from "react";

const IEPF = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          IEPF Claim <br />
        </h1>
        <div className="flex items-start mb-10">
          <p className="mt-5 sm:mt-10 text-gray-400 text-left font-normal text-sm sm:text-lg mx-0 text-justify">
            Raed India specializes in providing consultancy services for the
            recovery of shares & unclaimed dividends from the Investor Education
            & Protection Fund (IEPF), a governmental body under the Ministry of
            Corporate Affairs in India.In instances where dividends remain
            unclaimed for a continuous period of 7 years, both the dividends and
            the associated shares are transferred to the IEPF.
            <br />
            <br />
            Upon transfer to the IEPF, investors are required to fulfill several
            formalities to assert their entitlement. The initial step involves
            completing an online claim for each distinct company in which shares
            are held. Subsequently, investors must liaise with the Registrar,
            the respective company, and the IEPF Nodal Officer to facilitate the
            verification process.
            <br />
            <br />
            The claims are initiated online, followed by the submission of
            physical documents by the investor to the relevant authorities.
            These documents undergo processing and approval at various levels
            within the IEPF and the company, culminating in the successful
            recovery of shares for the investor. Raed India streamlines this
            intricate process, offering expert guidance throughout the claim
            procedure.
          </p>
        </div>
        <a
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="https://www.mca.gov.in/content/mca/global/en/foportal/fo-user-registration.html"
          target="blank"
        >
          File Your Claim Now
        </a>
      </div>
    </div>
  );
};

export default IEPF;
