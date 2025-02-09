import React, {useState} from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode')
    const toggleMyStyle = () =>{
        if (myStyle.color === 'black'){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText('Enable dark Mode')
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText('Enable Light Mode')
        }
    }
  return (
    <>
    <div className='container flex flex-col justify-center items-center my-8' style={myStyle}>
        <h1 style={myStyle} className='text-3xl font-bold my-3'>About Us</h1>
        <p style={myStyle} className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aliquid ipsum nostrum expedita, nulla quae voluptatibus nihil esse laudantium maiores rem quibusdam fuga, minus assumenda itaque molestiae. Dolorem, libero cumque?</p>
        <p style={myStyle} className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique provident nostrum ad tempora culpa, accusantium fuga, corporis dolores vero itaque eum nisi ullam ex tempore et quam. Ullam, iure?</p>
    </div>
    <div className='container flex flex-col justify-center items-center'>
        <button onClick={toggleMyStyle} type='button' className="btn btn-primary">{btnText}</button>
    </div>
    </>
  )
}
