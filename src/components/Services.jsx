//imports

export default function Services() {
  return (
    <div>
        <h3 className="text-3xl py-1">Services I Offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda similique quasi, sit rem <span className="text-teal-500">voluptatibus</span> nemo illum exercitationem <span className="text-teal-500">explicabo</span> sint eos ab enim laboriosam eum.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores 
        </p>
        <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <img className="mx-auto" src="../public/design.png" alt="design" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <img className="mx-auto" src="../public/code.png" alt="code" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <img className="mx-auto" src="../public/consulting.png" alt="consulting" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
                <p className="py-2">Creating elegant designs suited for your needs</p>
                <h4 className="py-4 text-teal-600">Design tools I use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
            </div>
        </div>

    </div>
    
  )
}
