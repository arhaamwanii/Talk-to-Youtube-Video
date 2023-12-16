import React from 'react'

export function Hero() {
  return (
    <section>
      <div className="px-4 py-8 inline " >
        <h3 className=" float-left tracking-tight text-gray-800 xl:text-4xl">
          How to Use?
        </h3><br /> <br />
        {/* <p >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse iure tenetur commodi ipsam
          error voluptate magni. Adipisci repudiandae ullam commodi iusto reprehenderit suscipit
          facere voluptatem, eaque maiores minima. Neque, officiis.
        </p> */}
        <ol  className=" float-left mt-4  max-w-4xl text-gray-500">
            <li  className=" float-left">1.  Get the video URl you want to ask Questions to.</li><br />
            <li className=" float-left">2.  Post it in the URL bar, and ask the Question related to it.</li><br />
            <li className=" float-left">3.  Click Submit and have you Answer.</li>
        </ol>
       
      </div>
    </section>
  )
}
