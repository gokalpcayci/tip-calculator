import React from "react";

export default function GreenPart({
  resetHandler,
  billInput,
  peopleInput,
  tip,
  tipAmountPerPerson,
  totalAmountPerPerson,
}) {
  return (
    <>
      {/* Green part */}
      <div className="p-6 w-full   bg-veryDarkCyan rounded-xl">
        <div className="flex pt-4 flex-col   md:space-y-18">
          {/* Tip amount */}
          <div className="space-y-6 md:mb-48 mb-12">
            <div className="flex items-center md:mb-18 justify-between">
              <div className="flex flex-col space-y-1 items-items-center justify-center">
                <h3 className="text-veryLightGrayishCyan font-bold font-spaceMono text-lg">
                  Tip Amount
                </h3>
                <p className="text-md font-bold font-spaceMono text-darkGrayishCyan">
                  / person
                </p>
              </div>
              <p className="text-4xl font-bold font-spaceMono text-strongCyan">
                ${tipAmountPerPerson === "NaN" ? "0.00" : tipAmountPerPerson}
              </p>
            </div>
            {/* Total */}
            <div className="flex items-center md:mb-48  justify-between">
              <div className="flex flex-col space-y-1 items-items-center justify-center">
                <h3 className="text-veryLightGrayishCyan font-bold font-spaceMono text-lg">
                  Total
                </h3>
                <p className="text-md font-bold font-spaceMono text-darkGrayishCyan">
                  / person
                </p>
              </div>
              <p className="text-4xl font-bold font-spaceMono text-strongCyan">
                $
                {totalAmountPerPerson === "NaN" ? "0.00" : totalAmountPerPerson}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => resetHandler(e)}
            className={
              billInput === "" && peopleInput === "" && tip === ""
                ? "reset-empty"
                : "reset-submit"
            }
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}
