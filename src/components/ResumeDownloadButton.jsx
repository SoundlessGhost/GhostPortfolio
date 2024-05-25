"use client";
import React from "react";

const ResumeDownloadButton = () => {
  return (
    <button className="border-2 border-[#00abf0] Home_sci relative py-4 text-[#00abf0] font-bold mt-10">
      <a
        download
        href="/resumes/shahed.pdf"
        className="px-4 py-[19px] rounded-[10px]"
      >
        Download CV
      </a>
    </button>
  );
};

export default ResumeDownloadButton;
