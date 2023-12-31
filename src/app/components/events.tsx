import Image from "next/image";

export default function Events() {
  return (
    <>
      <div className=" w-[1216px] h-[196px] max-lg:h-full flex flex-row  max-lg:flex-row-reverse items-center justify-between   ">
        <div className=" flex justify-center  h-full max-h-[133.8px]   flex-col">
          <div className=" gap-4 flex flex-col max-lg:hidden text-[#a8a8b3]  h-full ">
            <h1 className="font-bold text-[32px] leading-[44px]   text-[#c4c4cc]">
              Eventos
            </h1>
            <p className=" leading-[18px]">
              Evolua através de muito network, conteúdos <br /> exclusivos,
              comunidades e experiências únicas.
            </p>
            <p>
              Tem alguma dúvida?{" "}
              <a href="" className=" ml-1 text-[#9466ff]">
                Fale com nosso time!
              </a>
            </p>
          </div>
        </div>
        <div className="w-[696px] max-lg:flex  max-lg:flex-col max-lg:w-[317px]  max-lg:h-full ">
          <h1 className="lg:hidden font-normal text-[16px] leading-[25.6px] text-[#c4c4cc] max-lg:border-t max-lg:border-[#29292e] ">
            {" "}
            Eventos
          </h1>
          <div className=" lg:px-4 pb-4 min-h-[94px]   ">
            <div className=" flex flex-row  justify-between items-center max-lg:w-[317px] w-full lg:border-t border-[#29292e] text-[#c4c4cc] text-sm   ">
              <div className=" flex gap-4 justify-center mt-4  w-full  flex-col">
                <div>
                  <Image src="nlw.svg" width={90} height={24} alt="nlw Logo" />
                </div>

                <div>
                  <p>Evento online e gratuito de programação na prática.</p>
                </div>
              </div>

              <div className=" h-full  flex justify-center items-center">
                <Image src="chevron-right.svg" width={24} height={69} alt="" />
              </div>
            </div>
          </div>

          <div className=" lg:px-4 pb-4 min-h-[94px]  ">
            <div className=" flex flex-row  items-center justify-between lg:gap-4  border-t border-[#29292e]   w-full text-[#c4c4cc] text-sm ">
              <div className=" flex gap-4 mt-4  flex-col">
                <div>
                  <Image
                    src="assemble.svg"
                    width={137}
                    height={32}
                    alt="Explorer Logo"
                    className=""
                  />
                </div>

                <div>
                  <p>
                    Imersão presencial quem é ou quer{" "}
                    <br className="lg:hidden" /> se tornar um Tech Lead.
                  </p>
                </div>
              </div>
              <div>
                <div className=" h-full  flex justify-center items-center">
                  <Image
                    src="chevron-right.svg"
                    width={24}
                    height={69}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
