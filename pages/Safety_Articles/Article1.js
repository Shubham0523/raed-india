/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingAnimation from "../../components/common/LoadingAnimation";

const Article1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1-2 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="container mx-auto">
            <div className="p-4">
              {/* 1st Line - Quick Overview Title */}
              <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold mb-8 mt-10">
                Unclaimed Dividends: A Guide to
                <br />
                Reclaiming Your Forgotten Wealth
              </h1>

              {/* 2nd Line - Article Description */}
              <p className="text-center text-xs md:text-sm lg:text-base mb-6">
                Unlock hidden wealth with our guide on reclaiming unclaimed
                dividends in India, where over ₹15,000 crores lie idle. <br />{" "}
              </p>

              {/* 3rd Line - Author Image, Name, Published Date, and Read Time */}
              <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                {/* Author Image */}
                <Image
                  src="/logo_raed.png"
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full mb-4 md:mb-0 md:mr-4"
                  alt="Author"
                  width={64} // Specify the desired width
                  height={64} // Specify the desired height
                  // loading="lazy"
                />

                {/* Author Details */}
                <div className="text-center md:text-left">
                  <p className="text-xxs md:text-xs lg:text-sm font-medium mb-2 md:mb-0">
                    Raed India
                  </p>
                  <div className="flex justify-center md:justify-start items-center">
                    <p className="text-xxs md:text-xs mr-4">2 Jan</p>
                    <p className="text-xxs md:text-xs before:content-['•']">
                      3 min
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/article/article1_01.jpg"
                alt="Article Image"
                className="mx-auto rounded-lg w-full lg:w-3/4 h-auto mt-10 mb-11"
              />
              {/* Main Content Section */}
              <div className="max-w-[770px] mx-auto">
                <div>
                  <p className="mb-5 text-body text-justify">
                    Discovering unclaimed dividends can be a surprising
                    revelation, as millions of investors remain unaware of their
                    entitled profits lying dormant with listed companies or
                    transferred to the Investor Education and Protection Fund
                    (IEPF). With over ₹4,000 crores in unclaimed dividends and
                    an additional ₹10,000+ crores transferred to the IEPF,
                    it&apos;s crucial for investors to reclaim their hard-earned
                    money. In this comprehensive guide, we will walk you through
                    the process of checking, identifying, and claiming your
                    unclaimed dividends step by step.
                  </p>
                  <div className="mt-12">
                    <h3 className="font-semibold text-heading-6 text-dark mb-6">
                      Why Unclaimed Dividends Exist:
                    </h3>
                    <p className="mb-5 text-body text-justify">
                      Various factors contribute to the accumulation of
                      unclaimed dividends, including outdated contact
                      information, neglected legacy investments, and
                      complexities in ownership records. However, recent
                      initiatives such as PAN declaration, nominee
                      registrations, and digitization of securities are
                      strengthening safeguards. The IEPF rules also provide a
                      window for investors to recover unclaimed dividends and
                      shares after 7 years of inactivity.
                    </p>
                    <h3 className="font-semibold text-heading-6 text-dark mb-6">
                      Identifying Unclaimed Dividends:
                    </h3>
                    <p className="font-semibold text-dark mb-5 text-justify">
                      Unclaimed dividends can result from outdated addresses,
                      un-updated bank details, expired checks, or simply
                      forgetting about eligible dividends. Companies are
                      mandated by law to transfer unclaimed dividends to the
                      IEPF after 7 years. Regularly checking for unclaimed
                      dividends is essential, and this guide will help you
                      navigate the process.
                    </p>
                  </div>
                  <h3 className="font-semibold text-heading-6 text-dark mb-6">
                    Identifying Unclaimed Dividends:
                  </h3>
                  <ul className="flex flex-col gap-3.5 mt-7">
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        1.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Checking with Your Stockbroker:
                        </span>{" "}
                        <br />
                        Log in to your online account or contact your
                        broker&apos;s customer service.
                        <br />
                        Look for corporate action notices indicating "Failure,"
                        &quot; "Invalid Address," or "Unclaimed."
                        <br />
                        Update your contact details and bank account information
                        promptly.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        2.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Staying Informed of Corporate Actions:
                        </span>
                        <br />
                        Set up alerts for corporate actions to avoid missing
                        dividend payment dates.
                        <br />
                        Utilize stockbroker alerts, independent service
                        providers, or stay updated through financial news.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        3.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Searching Company Records and IEPF Database:
                        </span>
                        Verify your holdings against company records on the MCA
                        website.
                        <br />
                        Search your name directly in the centralized IEPF
                        database for transferred unclaimed amounts.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        4.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Filing Your Claim with IEPF:
                        </span>
                        Fill and submit the IEPF-5 form along with necessary
                        documents.
                        <br />
                        Authorize a Nodal Officer for IEPF refunds.
                        <br />
                        Track the claim status and respond promptly to any
                        queries.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  <h3 className="font-semibold text-heading-6 text-dark mb-6">
                    Common Questions Regarding IEPF Claim Process:
                  </h3>
                  <ul className="flex flex-col gap-3.5 mt-7">
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        1.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Processing Time:
                        </span>
                        <br />
                        The standard processing time for IEPF claims is around
                        60 days, with some exceptions taking up to 90 days.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        2.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Claiming Multiple Amounts in One Form:
                        </span>
                        <br />
                        Yes, you can claim multiple amounts across different
                        companies in a single IEPF-5 form with separate
                        annexures.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        3.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Number of Cases and Claim Limits:
                        </span>
                        <br />
                        There is no restriction on the number of claims, but
                        there are limits on the total amount per claim (Rs. 10
                        lakhs for dividends and Rs. 5 lakhs for shares).
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        4.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Joint Shareholder, Co-Claimant, or Legal Heir Filing:
                        </span>
                        <br />
                        Joint shareholders or legal heirs can file claims with
                        supporting documentation.
                      </p>
                    </li>
                    <li className="flex gap-5 text-body">
                      <span className="flex max-w-[6px] w-full h-1.5 rounded-full bg-dark-5 mt-[9px]">
                        5.
                      </span>
                      <p>
                        <span className="text-dark font-semibold">
                          Time Limit for Claiming Unpaid Dividends:
                        </span>
                        <br />
                        Unpaid dividends can be claimed up to 7 years from the
                        declaration date.
                      </p>
                    </li>
                  </ul>
                  <img
                    src="/article/article1_02.jpg"
                    alt="blog"
                    className="my-8"
                  />
                  <p className="mb-5 text-body text-justify">
                    Reclaiming unclaimed dividends is essential for investors,
                    and this guide empowers you with the knowledge and steps to
                    recover your forgotten wealth. Stay vigilant, regularly
                    update your information, and utilize the tools provided to
                    trace and claim your unclaimed money swiftly. As an informed
                    investor, you now have the means to ensure that your
                    hard-earned investments contribute to your financial
                    well-being.
                  </p>
                </div>
                <button
                  className="p-6 flex justify-center text-black font-medium border border-black rounded-md py-3 px-7.5 hover:bg-black hover:text-white ease-in duration-200 mx-auto mt-10"
                  onClick={() =>
                    window.open("https://forms.gle/BNYN5668oVRBqHKb6", "_blank")
                  }
                >
                  Get Help with Unclaimed Dividends
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Article1;
