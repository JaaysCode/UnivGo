import Image from 'next/image';

const Ulogo = () => {
  return (
    <>
        <Image
            src={"/udem_logo.png"}
            alt='Logo de La Universidad de Medellín'
            width={120}
            height={120}
            className='mb-6'
        />
    </>
  )
}

export default Ulogo