import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import manith from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useEffect } from "react";

export default function Home() {
  const cardList = [design, code, consulting];
  const [darkMode, setDarkMode] = useState(true);
  const [posts, setPost] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center">
            <h1 className="text-xl font-burtons">Developed By Messi</h1>
            <ul className="flex items-center gap-x-5">
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className=" hover:bg-slate-300 p-2 text-xl rounded-md"
                >
                  <BsFillMoonStarsFill />
                </button>
              </li>
              <li>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 hover:bg-cyan-600 rounded-md">
                  Resume
                </button>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Leo Messi
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Front-End Developer</h3>
            <p className="text-md leading-8 py-5 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
              A front end developer has one general responsibility: to ensure
              that website visitors can easily interact with the page.
            </p>
          </div>

          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 cursor-pointer">
            <AiFillTwitterCircle className="hover:text-blue-400" />
            <AiFillLinkedin className="hover:text-blue-500" />
            <AiFillYoutube className="hover:text-red-500" />
          </div>

          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:w-96">
            <Image
              className="absolute h-full w-full object-cover text-transparent"
              src={manith}
              placeholder="blur"
              alt="manith.png"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="py-1 text-3xl">Services I offer</h3>
            <p className="text-md leading-8 text-grey-800 py-2">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>

            <p className="text-md leading-8 text-grey-800 py-2">
              I offer from a wide range of service, include branding design,
              programming and teaching
            </p>
          </div>

          <div className="lg:flex gap-10">
            {cardList.map((map, index) => (
              <div
                className="shadow-lg p-10 text-center rounded-xl my-10 dark:hover:bg-slate-800"
                key={index}
              >
                <Image
                  src={map}
                  alt="design.png"
                  placeholder="blur"
                  width={100}
                  height={100}
                  className="m-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Design
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design tools that I use</h4>
                <p className="text-grey-800 py-1">Figma</p>
                <p className="text-grey-800 py-1">Adobe XD</p>
                <p className="text-grey-800 py-1">Adobe Photoshop</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div>
            <h3 className="py-1 text-3xl">Portfolio</h3>

            <p className="text-md leading-8 text-grey-800 py-2">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>

            <p className="text-md leading-8 text-grey-800 py-2">
              I offer from a wide range of service, include branding design,
              programming and teaching
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {[web1, web2, web3, web4, web5, web6].map((map, index) => (
              <div
                key={index}
                className="basis-1/3 flex-1 lg:basic-1/3 xl:basis-1/4"
              >
                <Image
                  src={map}
                  placeholder="blur"
                  alt="web.png"
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* <section>
          {posts?.map((map, index) => (
            <p key={index}>{map.id + ". " + map.title}</p>
          ))}
        </section>

        <section className=" mt-8">
          {posts?.map((map, index) => (
            <p key={index}>{map.id + 10 + ". " + map.body}</p>
          ))}
        </section> */}
      </main>
    </div>
  );
}
