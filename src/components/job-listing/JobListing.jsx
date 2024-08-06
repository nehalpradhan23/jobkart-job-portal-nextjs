"use client";
import React from "react";
import PostNewJob from "../post-new-job/PostNewJob";

function JobListing({ user, profileInfo }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {profileInfo?.role === "candidate"
              ? "Explore all jobs"
              : "Jobs Dashboard"}
          </h1>
          <div className="flex items-center">
            {profileInfo?.role === "candidate" ? <p>Filter</p> : <PostNewJob />}
          </div>
        </div>
        {/* ----------------------------------------------- */}
        <div className="">Job listing</div>
      </div>
    </div>
  );
}

export default JobListing;
