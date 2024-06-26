import React from "react";

export const ProjectItem = ({
  name,
  description,
  link,
  collaborators,
  imgUrl,
}) => {
  return (
    <div className="mx-5 max-w-[30%]">
      <div className="bg-[#f9f9ff]">
        <div className="relative overflow-hidden">
          <img src={imgUrl} alt="" />
        </div>
        <div className="px-6 py-8">
          <h4 className="mb-3 text-xl font-bold">
            <a href={link}>{name}</a>
          </h4>
          <p>{description}</p>
          <div className="mt-4">
            <div>
              {collaborators.map((collaborator, idx) => (
                <div key={idx}>
                  <a
                    href={collaborator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="rounded-full"
                      width="50"
                      height="50"
                      src={collaborator.avatar}
                      alt={collaborator.fullName}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
