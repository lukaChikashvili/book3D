import React from 'react'

const Catalog = () => {
    const images = [
        {
            id: 1,
            img: "https://pictures.abebooks.com/isbn/9780676977110-uk.jpg",
            title: "Never let me go",
            author: "Kazuo Ishiguro"
        },

        {
            id: 2,
            img: "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
            title: "Atomic Habits",
            author: "James Clear"
        },

        {
            id: 3,
            img: "https://i.ebayimg.com/images/g/yHoAAOSwSoVf~n7w/s-l960.webp",
            title: "Ikigai",
            author: "Ichigo Ichie"
        },

        {
            id: 4,
            img: "https://i.ebayimg.com/images/g/bkYAAOSwOnpnJIC1/s-l1600.webp",
            title: "The Power of Letting Go",
            author: "John Purkiss"
        },


        {
            id: 5,
            img: "https://i.ebayimg.com/images/g/qAwAAOSwwxFnJPnq/s-l1600.webp",
            title: "9 Habits of Happy Retirees",
            author: "Sarah Barry"
        },

        {
            id: 6,
            img: "https://i.ebayimg.com/images/g/vQoAAOSwP09nANxd/s-l960.webp",
            title: "Zero To One",
            author: "Peter Thiel"
        },



    ]
  return (
    <div className='w-full flex items-center justify-center h-screen overflow-y-auto '>
     <input type='text' placeholder='Search book...' className='absolute top-[7rem] right-12 w-[25rem] outline-none py-1 shadow-lg rounded-md px-12 '/>

      <div className='grid grid-cols-5 gap-12 mt-[20rem]'>
        {images.map((value) => (
            <div key={value.id}>
               <img src = {value.img} className='w-[14rem] h-[20rem] rounded-md shadow-lg shadow-gray-700 ' />
              
            </div>
        ))}
      </div>
    </div>
  )
}

export default Catalog
