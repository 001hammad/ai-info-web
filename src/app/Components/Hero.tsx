import React from "react";
import Image from "next/image";
import picture1 from "../../../public/picture1.jpg";
import picture2 from "../../../public/picture2.jpg";
import picture3 from "../../../public/picture3.jpg";
import picture4 from "../../../public/picture4.jpg";
import picture5 from "../../../public/picture5.jpg";
import picture7 from "../../../public/picture7.jpg";

const Hero = () => {
  return (
    <main>
      <div className=" flex-1 sm:flex sm:text-xl  justify-between">
        <div className="p-14">
          <h1 className="font-bold sm:text-3xl sm:mb-14 text-2xl">
            Motivational Moments
          </h1>

          <h2 className="font-bold mt-2">
            Mark Zuckerberg (Co-founder, Facebook)
          </h2>
          <p>&apos;The biggest risk is not taking any risk.&apos;</p>

          <h2 className="font-bold mt-5">Bill Gates (Co-founder, Microsoft)</h2>
          <p>
            &apos;Success is a lousy teacher. It seduces smart people into thinking
            they can&apos;t lose.&apos;
          </p>

          <h2 className="font-bold mt-5">Elon Musk (Founder, Tesla, SpaceX)</h2>
          <p>
            &apos;When something&apos;s important enough, you do it even if the odds are
            against you.&apos;
          </p>
        </div>

        <div className="sm:p-7 bg-green-400 sm:m-12 border-2 border-black rounded-3xl shadow-black shadow-2xl">
          <Image
            src={picture1}
            alt="picture-1"
            width={500}
            className="float-left border-2  sm:mb-0 mb-28 border-black shadow-black  shadow-2xl rounded-3xl"
          />
        </div>
      </div>

      <div className=" flex-1 sm:flex  justify-between">
        <div className="sm:p-7 bg-green-400 sm:m-12 border-2 border-black rounded-3xl shadow-black shadow-2xl">
          <Image
            src={picture2}
            alt="picture-2"
            width={500}
            className="float-left border-2 border-black shadow-black sm:mb-0 mb-40 shadow-2xl rounded-3xl"
          />
        </div>

        <div>
          <h2 className="font-bold sm:text-3xl sm:text-start text-center sm:mt-14">
            Why Learn Coding?
          </h2>
          <p className="sm:w-96 sm:mt-10 sm:mr-32 sm:text-start text-center ">
            Coding is the language of the future. By learning to code, you can
            build, create, and innovate. You can develop mobile apps, web
            applications, and software solutions that make a difference. Coding
            skills can take you from a beginner to a seasoned professional,
            opening doors to new career paths and opportunities. With coding,
            you can transform industries, solve complex problems, and create a
            better world. Don&apos;t just dream about the future code it!
          </p>
        </div>
      </div>
      <div className=" flex-1 sm:flex  justify-between">
        <div className="sm:p-7 bg-green-400 sm:m-12 border-2 border-black rounded-3xl shadow-black shadow-2xl">
          <Image
            src={picture3}
            alt="picture-2"
            width={500}
            className="float-left border-2 border-black mb-8 sm:mb-0 sm:mt-0 mt-32 shadow-black shadow-2xl rounded-3xl"
          />
        </div>

        <div>
          <h2 className=" font-bold sm:text-3xl sm:mt-14 sm:text-start text-center">Coding Tips</h2>
          <p className="sm:w-96 mt-10 sm:mr-32 sm:ml-0 ml-10 sm:text-end text-center">
            {" "}
            <b>1)</b> Practice coding daily, even if it&apos;s just for 15 minutes.
          </p>
          <p className="sm:w-96 mt-10 mr-32 sm:ml-0 ml-24 sm:text-end text-center">
            {" "}
            <b>2)</b> Join online coding communities for support.
          </p>
          <p className="sm:w-96 mt-10 mr-32 sm:ml-0 ml-24 sm:text-end text-center">
            {" "}
            <b>3)</b> Break problems into smaller, manageable parts.
          </p>
          <p className="sm:w-96 mt-10 sm:ml-0 ml-24 mr-32">
            {" "}
            <b>4)</b> Every Expert Once a Begginer.
          </p>
          <p className="sm:w-96 mt-10 mr-32 sm:ml-0 ml-24 sm:text-end text-center">
            {" "}
            <b>5)</b> Learn by doing, not just reading.
          </p>
        </div>
      </div>

      <div className=" sm:m-12  rounded-3xl shadow-black shadow-2xl">
        <Image src={picture4} alt="picture-4" className="rounded-3xl"  />
      </div>

      <div className=" flex-1 sm:flex  justify-between">
        <div className="p-7">
          <h1 className="font-bold sm:text-3xl  ml-5 sm:mb-9 sm:mt-10">
            The Game of Code
          </h1>
          <p className="sm:w-96 mt-10  ml-5">
            Programming is a mind-bending game of logic, creativity, and
            innovation. It&apos;s a challenge to tame the chaos of code, to transform
            complexity into simplicity, and to breathe life into digital
            creations. With each problem solved, each bug squashed, and each
            feature implemented, the programmer experiences a rush of
            accomplishment and a sense of pride. Just as a game tests your
            limits, programming pushes you to think critically, to experiment
            boldly, and to learn continuously.
          </p>
        </div>

        <div className="sm:p-7 bg-green-400 sm:m-12 border-2 border-black rounded-3xl shadow-black shadow-2xl">
          <Image
            src={picture5}
            alt="picture-1"
            width={500}
            className="float-left border-2 border-black sm:mb-0 mb-32 shadow-black shadow-2xl rounded-3xl"
          />
        </div>
      </div>

      <div>
        <h2 className="font-bold sm:text-3xl sm:mb-14 text-center">
          Abbrivation Of coding
        </h2>
        <div className=" sm:flex flex-1 text-center  sm:justify-center sm:space-x-5">
          <p>
            <b>C:</b> Create
          </p>
          <p>
            <b>O:</b> Operate
          </p>
          <p>
            <b>D:</b> Design
          </p>
          <p>
            <b>I:</b> Innovate
          </p>
          <p>
            <b>N:</b> Navigate
          </p>
          <p>
            <b>G:</b> Generate
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-bold sm:text-3xl mt-8 sm:mt-14 text-center">
          Education Requirements for Programming
        </h2>
        <p className="sm:w-96 w-60  mt-7 sm:ml-96 ml-20 text-center">
          While formal education is not necessarily a requirement for
          programming, having a solid foundation in math and science can be
          beneficial. A basic understanding of algebra, geometry, and calculus
          can help you grasp programming concepts more easily. Additionally,
          familiarity with computer systems and software can provide a head
          start. However, programming skills can be developed through online
          courses, tutorials, and self-study. Many successful programmers are
          self-taught and have learned through hands-on experience. What&apos;s
          essential is a willingness to learn, problem-solve, and continuously
          update your skills.
        </p>
      </div>

      <div className=" flex-1 sm:flex  justify-between">
        <div className="sm:p-7 bg-green-400 sm:m-12 border-2 border-black rounded-3xl shadow-black shadow-2xl">
          <Image
            src={picture7}
            alt="picture-2"
            width={500}
            className="float-left border-2 border-black shadow-black sm:mb-0 mb-40 sm:mt-0 mt-28 shadow-2xl rounded-3xl"
          />
        </div>

        <div>
          <h2 className="font-bold sm:text-3xl  sm:text-start  text-center  sm:mt-14">
            Programming: A Game-Changer for Your Future
          </h2>
          <p className="sm:w-96 w-56 sm:mt-10 sm:ml-0 ml-24 sm:text-justify text-center">
            Programming is more than just writing code; it&apos;s a life-changing
            experience that can open doors to new opportunities, transform your
            career, and unlock your potential. With programming skills, you can
            create innovative solutions, solve real-world problems, and make a
            meaningful impact. Whether you&apos;re a student, professional, or
            entrepreneur, coding can elevate your career, boost your confidence,
            and enhance your creativity. From building life-saving apps to
            revolutionizing industries, programming has the power to change
            lives. So, embark on this journey, learn to code, and discover a
            world of possibilities.
          </p>
        </div>
      </div>

<div >
  <h2 className="text-5xl text-center font-extrabold">Code Your Dreams, Change Your Future.</h2>
  <h2 className="text-3xl text-center mt-20 font-extrabold mb-24">Thanks for Visiting! Stay Happy & Keep Coding!</h2>
</div>

    </main>
  );
};

export default Hero;
