import React from "react";

const ExtraDetails = ({ movie, Bg, textColor1, movieKeywords }) => {
  return (
    <div
      style={{ background: `${Bg}`, color: `${textColor1}` }}
      className="p-5 flex items-start gap-3 flex-col mt-10"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl lg:text-5xl font-bold text">
          {movie.title === movie.original_title
            ? movie.title
            : `${movie.title} (${movie.original_title})`}
        </h1>

        <p className="text-xs">{movie.release_date}</p>
      </div>
      <div>
        <p className="font-semibold text-md">Production Country</p>
        {movie.production_countries.map((i) => (
          <p className="text-xs" key={i.iso_3166_1}>
            {i.name}
          </p>
        ))}
      </div>

      <div>
        <p className="font-semibold text-md">Origin Country</p>
        <p className="text-xs">{movie.origin_country}</p>
      </div>

      <div>
        <p className="font-semibold text-md">Status</p>
        <p className="text-xs">{movie.status}</p>
      </div>
      <div>
        <p className="font-semibold text-md">Budget</p>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(movie.budget)}
      </div>

      <div>
        <p className="font-semibold text-md">Revenue</p>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(movie.revenue)}
      </div>

      <div className="flex flex-col">
        <p className="font-semibold text-md mb-2">Keywords</p>
        <div className="flex items-start gap-1 flex-wrap">
          {movieKeywords.map((item) => (
            <p
              className="border border-slate-50/10 px-2 py-1 text-xs rounded-sm"
              key={item.id}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;
