
export default function Logo({img}) {
    return(
        <>
          <img src={img} alt="client" className='grayscale hover:grayscale-0 w-[116px] ' loading='lazy'/>
        </>
    )
}