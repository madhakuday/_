// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Skeleton from 'react-loading-skeleton'
// import "../stylesheet/product.css"

// import { usercontext } from '../App'

// function Product() {
//     const { id } = useParams()
//     const [product, setproduct] = useState([])
//     const [loding, setloding] = useState(false)
//     const [state, dispatch] = useContext(usercontext)

//     useEffect(() => {
//         const getProduct = async () => {
//             setloding(true)

//             const result = await fetch(`https://fakestoreapi.com/products/${id}`)
//             setproduct(await result.json())
//             setloding(false)
//         }
//         getProduct()
//     }, [])

//     const LodingData = () => {
//         return (
//             <>
//                 <div className='container mt-3'>
//                     <section class="text-gray-100 ">
//                         <div class="container bg-gray-300 px-5 py-20 mx-auto">
//                             <div class="lg:w-4/5 mx-auto flex flex-wrap">
//                                 <div class="lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded">
//                                     <Skeleton height={350} />
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </>
//         )
//     }

//     const Loding = () => {
//         return (
//             <>
//                 <LodingData />
//                 <LodingData />
//                 <LodingData />
//                 <LodingData />
//                 <LodingData />
//                 <LodingData />
//             </>
//         )
//     }

//     const ShowProduct = () => {
//         return (
//             <>
//                 <div className='container'>
//                     <section class="text-gray-600 body-font overflow-hidden">
//                         <div class="container px-5 py-20 mx-auto">
//                             <div class="lg:w-4/5 mx-auto flex flex-wrap">
//                                 <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded" src={product.image} />


//                                 <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                                     <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//                                     <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

//                                     <div class="flex mb-4">
//                                         <span class="flex items-center">

//                                             <p className='fw-bold'>Rating : {
//                                                 product.rating && product.rating.rate
//                                             }
//                                             </p>
//                                         </span>
//                                         <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//                                             <a class="text-gray-500">
//                                                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
//                                                 </svg>
//                                             </a>
//                                             <a class="text-gray-500">
//                                                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
//                                                 </svg>
//                                             </a>
//                                             <a class="text-gray-500">
//                                                 <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                                     <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                                                 </svg>
//                                             </a>
//                                         </span>
//                                     </div>

//                                     <p class="leading-relaxed">{product.description}</p>



//                                     <div class="flex">

//                                         <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>
//                                         <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

//                                         <button class="hovbut rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                                             <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
//                                                 <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//                                             </svg>
//                                         </button>

//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </>
//         )
//     }

//     return (
//         <>
//             {
//                 loding ? <Loding /> : <ShowProduct />
//             }
//         </>
//     )
// }

// export default Product


import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "../stylesheet/product.css"

function Product() {
    const { id } = useParams()
    const [product, setproduct] = useState([])
    const [loding, setloding] = useState(false)


    useEffect(() => {
        const getProduct = async () => {
            setloding(true)

            const result = await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await result.json())
            setloding(false)
        }
        getProduct()
    }, [])

    const LodingData = () => {
        return (
            <>
                <div className='container mt-3'>
                    <section class="text-gray-100 ">
                        <div class="container bg-gray-300 px-5 py-20 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <div class="lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded">
                                    <Skeleton height={350} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }

    const Loding = () => {
        return (
            <>
                <LodingData />
                <LodingData />
                <LodingData />
                <LodingData />
                <LodingData />
                <LodingData />
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='container'>
                    <section class="text-gray-600 body-font overflow-hidden">
                        <div class="container px-5 py-20 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded" src={product.image} />


                                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

                                    <div class="flex mb-4">
                                        <span class="flex items-center">

                                            <p className='fw-bold'>Rating : {
                                                product.rating && product.rating.rate
                                            }
                                            </p>
                                        </span>
                                        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                            <a class="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                </svg>
                                            </a>
                                            <a class="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                </svg>
                                            </a>
                                            <a class="text-gray-500">
                                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>
                                            </a>
                                        </span>
                                    </div>

                                    <p class="leading-relaxed">{product.description}</p>



                                    <div class="flex">

                                        <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>

                                        <button class="hovbut rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                            </svg>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }

    return (
        <>
            {
                loding ? <Loding /> : <ShowProduct />
            }
        </>
    )
}

export default Product