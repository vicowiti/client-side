// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";

// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }



//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           greet();
//         }}
//       >
//         <input
//           id="greet-input"
//           onChange={(e) => setName(e.currentTarget.value)}
//           placeholder="Enter a name..."
//         />
//         <button type="submit">Greet</button>
//       </form>

//       <p>{greetMsg}</p>


import { useEffect, useState } from "react";
import Logo from "./assets/logo.png";
import { COLORS } from "./utils/global";
import Input from "./components/Input";
import Button from "./components/Button";



export default function App() {

  // UE9TLTgwQyAoY29weSAzKQ==




  const words = ["School", "Education", "Grades", "Exellence"]
  const colors = ["teal", COLORS.primaryGreen, COLORS.primaryBlue, COLORS.miniGreen, "blue"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimatingOut(false);
      }, 500); // Time for animation to complete, adjust as needed
    }, 2000); // Interval between words, adjust as needed

    return () => clearInterval(interval);
  }, [words.length]);





  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex  max-h-[100vh] max-w-[100vw] justify-center items-center mybg rtbg srvcbg">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={COLORS.miniGreen} />
                <stop offset={1} stopColor={COLORS.primaryBlue} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src={Logo}
                alt="Little Africa Ltd"
              />
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

            </div>

            <div className="mt-8">


              <div className="mt-6">
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();

                }}>
                  <Input type="email" label="Email Address" required={true} name="emaail" placeholder="Enter Your Email" />

                  <Input type="password" label="Password " required={true} name="emaail" placeholder="Enter Your Email" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500 checked:fill-orange-600"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className={`font-medium text-[#2fa6de]`}>
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Button label="Sign In" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0  justify-center items-center flex-1 lg:block">
          <div className="w-full  h-full flex justify-center items-center flex-col gap-4">
            <p className="font-bold text-6xl text-center"><span className="text-blue-600">The</span> <span className="text-red-600">Reliability of</span> <span className="text-yellow-600">Zeraki</span></p>
            <p className="font-bold text-6xl text-center"><span className="text-green-600">For</span> <span className="text-blue-600">Your</span> </p>

            <p className={`font-bold text-6xl text-center  animated-word ${isAnimatingOut ? "fadeOut" : "fadeIn"}`}
              style={{ color: colors[currentWordIndex] }}
            >
              {words[currentWordIndex]}</p>

          </div>
        </div>

      </div>
    </>
  )
}