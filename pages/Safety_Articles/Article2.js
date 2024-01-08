/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Article2 = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4">
        {/* 1st Line - Quick Overview Title */}
        <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold mb-8 mt-10">
          Understanding India's Investor Education
          <br />
          and Protection Fund Authority
        </h1>

        {/* 2nd Line - Article Description */}
        <p className="text-center text-xs md:text-sm lg:text-base mb-6">
          Explore the intricacies of India's Investor Education and Protection
          Fund Authority, its role in managing <br /> unclaimed dividends, and its
          efforts in fostering investor awareness.
        </p>

        {/* 3rd Line - Author Image, Name, Published Date, and Read Time */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          {/* Author Image */}
          <img
            src="/logo_raed.png"
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full mb-4 md:mb-0 md:mr-4"
            alt="Author"
          />

          {/* Author Details */}
          <div className="text-center md:text-left">
            <p className="text-xxs md:text-xs lg:text-sm font-medium mb-2 md:mb-0">
              Raed India
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <p className="text-xxs md:text-xs mr-4">2 Jan</p>
              <p className="text-xxs md:text-xs before:content-['•']">3 min</p>
            </div>
          </div>
        </div>
        <img
          src="/article/article2_01.jpg "
          alt="Article Image"
          className="mx-auto rounded-lg w-full lg:w-3/4 h-auto mt-10 mb-11"
        />
        {/* Main Content Section */}
        <div className="max-w-[770px] mx-auto">
          <div>
            <p className="mb-5 text-body">
              To oversee the Investor Education and Protection Fund (IEPF), the
              Indian government established the Investor Education and
              Protection Fund Authority on September 7, 2016, as per the
              guidelines of section 125 of the Companies Act, 2013.
            </p>
              <p className="mb-5 text-body">
                The Authority has the crucial task of managing the IEPF,
                overseeing reimbursements related to unclaimed dividends,
                matured deposits, and debentures, and actively promoting
                awareness among investors.
              </p>
              <p className="text-dark mb-5">
              The IEPF serves various purposes, including refunding unclaimed dividends, matured deposits, debentures, application money, and the associated interest. It also supports initiatives for investor education, awareness, and protection, along with distributing disgorged amounts to eligible applicants affected by wrongful actions, based on court orders.
              </p>
              <p className="text-dark mb-5">
              Moreover, the IEPF Authority is empowered to reimburse legal expenses incurred in pursuing class action suits under sections 37 and 245, as sanctioned by the Tribunal. The fund may be employed for any other purpose related to its objectives, following prescribed rules.
              </p>
              <p className="text-dark mb-5">
              Looking back, the Investor Education and Protection Fund (IEPF) was established under Section 205C of the Companies Act, 1956, through the Companies (Amendment) Act, 1999. The fund accrues amounts from unpaid dividends, application money, matured deposits, debentures, and associated interests, as well as grants and donations from governmental and corporate entities.
              </p>
              <p className="text-dark mb-5">
              In adopting a proactive strategy, the IEPF Authority engages in a comprehensive approach to sensitize stakeholders, reaching out to household investors, professionals, and individuals in rural and urban areas alike. Collaborating with professional institutes, the Authority conducts awareness programs covering various investment topics, market dynamics, and investor rights.
              </p>
              <p className="text-dark mb-5">
              In rural areas, programs are executed in collaboration with Common Service Centres (CSCs) to educate citizens on fundamental financial concepts such as savings, budgeting, and protection against investment frauds.
              </p>
              <p className=" text-dark mb-5">
              To spread awareness, multilingual information, education, and communication materials, including booklets and films, have been created. Joint campaigns with entities like the Reserve Bank of India and the Securities and Exchange Board of India enhance outreach.
              </p>
            </div>
            <img src="/article/article2_02.jpg" alt="blog" className="my-8" />
            <p className="mb-5 text-body">
            The IEPF Authority has achieved notable milestones, significantly increasing the number of awareness programs over the years. From 1869 programs in 2013-2014 to 5876 in 2017-2018, the Authority has expanded its efforts, conducting 14519 awareness programs through various channels.
            </p>
            <p className="mb-5 text-body">
            This article provides an in-depth understanding of the versatile approach of the IEPF Authority, emphasizing its dedication to fostering financial literacy, protecting investors, and contributing to a resilient financial ecosystem in India.
            </p>
          </div>
          <button className="p-6 flex justify-center text-black font-medium border border-black rounded-md py-3 px-7.5 hover:bg-black hover:text-white ease-in duration-200 mx-auto mt-10">
            Get Help Regarding Unclaimed Dividends
          </button>
        </div>
      </div>
  );
};

export default Article2;
