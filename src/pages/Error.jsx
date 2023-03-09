import React from "react";

const Error = () => {
  document.title = "CarboLeon | Error" ;
  return (
    <>
      <div className="background-img">
        <h1>{t("Error.title")}{`\u0028`}</h1>
        <h1>{t("Error.body")}</h1>
      </div>
      <div className="margin">
        <p>{t("Error.desc")}</p>
      </div>
    </>
  );
};

export default Error;
