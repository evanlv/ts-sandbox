import Image from "next/image"

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image src="/baka-bird.svg" alt="toto" width={200} height={0} priority />
    </div>
  )
}

// export const getServerSideProps = async () => {
//   const res = await fetch("")
//   const data = await res.json()

//   return { props: { data } }
// }

export default Home
