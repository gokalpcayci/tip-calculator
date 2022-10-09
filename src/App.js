import "./App.css";
import GreenPart from "./components/GreenPart";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [billInput, setBillInput] = useState();
  const [peopleInput, setPeopleInput] = useState();
  const [tip, setTip] = useState();

  const resetHandler = () => {
    let className;
    setBillInput("");
    setPeopleInput("");
    setTip("");
  };
  let bill = +billInput;
  let tipAmount = +tip;
  let totalPeople = +peopleInput;

  let tipAmountPerPerson = ((billInput * tip) / 100 / peopleInput).toFixed(2);
  let totalAmountPerPerson = (
    (bill + (bill * tipAmount) / 100) /
    totalPeople
  ).toFixed(2);

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen  ">
        <Header />
        <section className="flex md:mx-32  flex-col  md:flex-row md:mb-10 mb-0  md:h-full h-screen   items-center justify-center md:space-x-8 space-y-8 md:space-y-0 ">
          <div className="p-6 bg-white px-8   md:rounded-3xl rounded-t-3xl  sm:w-full mx-auto">
            <div className=" flex  flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              {/* white part (bill, select tip, number of people) */}
              <div className="flex   sm:w-full w-1/2 flex-col items-center  space-y-6">
                <div className="flex flex-col w-full  justify-start items-center space-y-1">
                  <h3 className="text-darkGrayishCyan self-start text-xl font-spaceMono font-bold">
                    Bill
                  </h3>
                  <input
                    onChange={(e) => setBillInput(e.target.value)}
                    value={billInput}
                    type="text"
                    className="py-3 md:py-1  focus:border-sky-500 focus:ring-2 focus:ring-sky-500 self-start placeholder:font-spaceMono placeholder:text-4xl placeholder:pl-6 md:px-5   w-full placeholder text-right placeholder:text-left  rounded-sm bg-veryLightGrayishCyan  focus:outline-none placeholder:text-grayishCyan placeholder:text-opacity-80 pr-4 placeholder:font-bold text-4xl font-bold text-veryDarkCyan placeholder "
                    placeholder="$"
                  />
                </div>
                <div className="flex flex-col  items-center  space-y-1">
                  <h3 className="text-darkGrayishCyan mb-2 self-start text-xl font-spaceMono font-bold">
                    Select Tip %
                  </h3>
                  <div className="grid grid-cols-2 w-full grid-rows-3 gap-5 ">
                    <button
                      onClick={(e) => setTip(e.target.value)}
                      value={5}
                      className={
                        tip === "5"
                          ? "tip bg-strongCyan"
                          : "tip bg-veryDarkCyan"
                      }
                    >
                      5%
                    </button>
                    <button
                      onClick={(e) => setTip(e.target.value)}
                      value={10}
                      className={
                        tip === "10"
                          ? "tip bg-strongCyan"
                          : "tip bg-veryDarkCyan"
                      }
                    >
                      10%
                    </button>
                    <button
                      onClick={(e) => setTip(e.target.value)}
                      value={15}
                      className={
                        tip === "15"
                          ? "tip bg-strongCyan"
                          : "tip bg-veryDarkCyan"
                      }
                    >
                      15%
                    </button>
                    <button
                      onClick={(e) => setTip(e.target.value)}
                      value={25}
                      className={
                        tip === "25"
                          ? "tip bg-strongCyan"
                          : "tip bg-veryDarkCyan"
                      }
                    >
                      25%
                    </button>
                    <button
                      onClick={(e) => setTip(e.target.value)}
                      value={50}
                      className={
                        tip === "50"
                          ? "tip bg-strongCyan"
                          : "tip bg-veryDarkCyan"
                      }
                    >
                      50%
                    </button>
                    <input
                      value={tip}
                      onChange={(e) => setTip(e.target.value)}
                      type="text"
                      className="bg-veryLightGrayishCyan focus:border-sky-500 focus:ring-2 focus:ring-sky-500 md:py-1 focus:scale-[1.01] rounded-md py-3 text-4xl font-bold font-spaceMono text-veryDarkCyan pr-4  placeholder:text-veryDarkCyan placeholder:text-right placeholder:text-opacity-80 placeholder:text-4xl placeholder:m-auto focus:outline-none text-right  placeholder:font-spaceMono placeholder:font-bold "
                      placeholder="Custom"
                    />
                  </div>
                </div>
                <div className="flex flex-col  justify-start items-center space-y-1 w-full ">
                  <div className="flex space-x-32 self-start">
                    <h3 className="text-darkGrayishCyan self-start text-xl font-spaceMono font-bold">
                      Number of People
                    </h3>
                    <h3
                      className={peopleInput === "0" ? "zero" : "zero hidden "}
                    >
                      Can't be zero
                    </h3>
                  </div>

                  <input
                    value={peopleInput}
                    onChange={(e) => setPeopleInput(e.target.value)}
                    type="text"
                    className={
                      peopleInput === "0"
                        ? "people-input zero-true"
                        : "people-input zero-false"
                    }
                    placeholder="👥"
                  />
                </div>
              </div>
              <GreenPart
                resetHandler={resetHandler}
                billInput={billInput}
                peopleInput={peopleInput}
                tip={tip}
                tipAmountPerPerson={tipAmountPerPerson}
                totalAmountPerPerson={totalAmountPerPerson}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
