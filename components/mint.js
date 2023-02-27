import Head from 'next/head';
import { useState,useEffect } from "react"
import { initOnboard } from "../ulits/onboard"
import { config } from '../dapp.config'
import {
  getTotalMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  publicMint          } from '../ulits/interact'
  
  const mintingDate = new Date (2023, 3, 2, 0, 23, 30,);

const getTimedelta=()=>{
  const now = new Date();
  
  const Timedelta = (mintingDate.getTime() - now.getTime());

  //diff in days
  const days = Math.floor(Timedelta/(24*60*60*1000));

  //diff in hours
  const hours = Math.floor((Timedelta % (24 * 60 * 60 * 1000))/(60*60*1000));

  //diff in mins
  const mins = Math.floor((Timedelta % (60*60*1000))/(60 * 1000));

  //diff in secs
  const secs = Math.floor((Timedelta % (60 *1000))/(1000));

  return {
    days,
    hours,
    mins,
    secs
  };

};


export default function Mint(){


const[countdown, setCountdown] = useState()
  const[loading, setLoading] = useState(true)
  const[isMintingDate, setIsMintingDate] = useState(true)

  useEffect(()=> {
    const interval = setInterval (() => {
     const Timedelta = getTimedelta ()
     setCountdown(Timedelta);
     setLoading(false);
     
     if(Timedelta.secs < 0){
      setIsMintingDate(true)
     }
    },1000 )

    return ()=> clearInterval(interval)
  

    });
    
    //end countdown widget
    
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      const isPublicSale = await isPublicSaleState()
      setIsPublicSale(isPublicSale)

      setMaxMintAmount(
        isPublicSale ? config.maxMintAmount : '0'
      )
      
      
    }

    init()
  }, [])
  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
      window.location.reload(false)
    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }


  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }
  return (
    <div className='font-Kanit text-white min-h-screen w-screen flex flex-col items-center justify-start lg:px-20 px-6 relative'>

<h1 className='font-LuckiestGuy font-extrabold tracking-widest uppercase text-5xl text-center mt-6'>MINT</h1>
<h1 className='tracking-wide uppercase text-xl text-center font-LuckiestGuy'>Now Open</h1>

{/* minting engine */}
<div className='md:w-[800px] w-auto h-full flex md:flex-row flex-col items-center justify-between mt-4 filter md:backdrop-blur-md p-4 border border-white'>
<div>
<img src='/nft.gif'
className='w-[400px] h-auto'/>
</div>

<div className='flex flex-col items-center justify-start w-full md:px-6 px-2 py-3 filter backdrop-blur-md'>
<div className='md:flex justify-between w-full items-center'>
<h1 className='text-lg text-center uppercase md:mt-0 mt-4 font-LuckiestGuy'>New friends mint <br/> 02/24 11.00 - 22.30</h1>
<h1 className='text-lg text-center uppercase md:mt-0 mt-4 font-LuckiestGuy'>early access mint <br/> 02/24 11.00 - 22.30</h1>
</div>

{/* countdown */}
<div className='flex w-full justify-center font-medium mt-4 px-6'>

{loading? (
<h1 className='text-xl text-center'>Loading..</h1>

):
isMintingDate ? 
(
<h1 className='text-xl text-center'>Minting is Live!</h1> ) : 
(
<>
<h1 className='text-xl text-center mx-2'>{countdown.days}<br/>DAYS</h1>
<h1 className='text-xl text-center mx-2'>{countdown.hours}<br/>HRS</h1>
<h1 className='text-xl text-center mx-2'>{countdown.mins}<br/>MINS</h1>
<h1 className='text-xl text-center mx-2'>{countdown.secs}<br/>SECS</h1>
</>
) }

</div>

<div className='flex justify-between w-full font-medium mt-4 md:px-4'>
<h1 className='md:text-lg text-center'>Mint Price<br/>.125 ETH</h1>
<h1 className='md:text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='md:text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div>
{/* mobile section */}

{/* <div className='flex justify-between w-full font-medium mt-4 px-4'>
<h1 className='text-lg text-center'>Mint Price<br/>.25 ETH</h1>
<h1 className='text-lg text-center'>Total Supply<br/>8,000</h1>
<h1 className='text-lg text-center'>Reveal Time<br/>FEB 2023</h1>

</div> */}

<button className='md:px-16 px-6 py-3 bg-black rounded-lg mt-6 hover:bg-white hover:text-black'
onClick={connectWalletHandler}>Connect Wallet</button>

</div>

<div className="font-Kanit max-w-screen-sm">
              {status && (
              <div
                className={`border ${
                  status.success ? 'border-green-500 text-white' : 'border-red-600 text-white'
                } rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-5"`}
              >
                <p className="flex flex-col space-y-2 text-sm md:text-base break-words ...">
                  {status.message}
                </p>
              </div>
            )}
            </div> 
</div>

</div>

  )
}

