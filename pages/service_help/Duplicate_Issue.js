import React from "react";

const Duplicate_Issue = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          DUPLICATE ISSUANCE OF SHARES
          <br />
        </h1>
        <div className="flex items-start mb-10">
          <p className="mt-5 sm:mt-10 text-gray-400 text-left font-normal text-sm sm:text-lg mx-0 text-justify">
            The process commonly referred to as Duplicate Issuance of Shares, or
            duplicate share certificate issuance, enables shareholders to
            acquire replacement share certificates for their ownership in a
            company. This process becomes necessary when original share
            certificates are lost, stolen, damaged, or rendered unusable for any
            reason.
            <br />
            <br />
            In accordance with Company Law regulations, the issuance of duplicate share certificates by the company must be completed within 36 working days. During the initial 15 days following the publication of the newspaper advertisement announcing the loss of shares, the company will entertain any objections. Upon verification that all provided documentation is in order, the company will proceed to issue the duplicate shares within the subsequent 21 days. It is important to note that discrepancies may be identified by the company during this process.
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="https://forms.gle/BNYN5668oVRBqHKb6"
          target="blank"
        >
          Get Help Now
        </a>
      </div>
    </div>
  );
};

export default Duplicate_Issue;
