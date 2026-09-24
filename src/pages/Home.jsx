
import React, { useState } from "react";
import {
  ShoppingBag,
  Upload,
  Sparkles,
  X,
  ArrowRight,
  Shirt,
  Cpu,
  Image as ImageIcon,
  Truck,
  RefreshCcw,
} from "lucide-react";

const Home = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [cartCount, setCartCount] = useState(0);

  const [showTryOn, setShowTryOn] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [step, setStep] = useState(1);

  const productImage =
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85";

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    if (preview) URL.revokeObjectURL(preview);

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
    setStep(2);
  };

  const removePhoto = () => {
    if (preview) URL.revokeObjectURL(preview);

    setPhoto(null);
    setPreview(null);
    setStep(1);
  };

  return (
    <main className="bg-[#F7F5F1] text-[#191919] min-h-screen">

      {/* PRODUCT AND VIRTUAL TRY-ON */}

      <section className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* PRODUCT IMAGE */}

          <div className="lg:col-span-4">

            <div className="relative overflow-hidden bg-[#E5D6C1]">

              <img
                src={productImage}
                alt="AMANI Label Classic Abaya"
                className="w-full h-[500px] md:h-[650px] object-cover object-top"
              />

              <span className="absolute top-4 left-4 bg-white px-4 py-2 text-xs tracking-widest">
                NEW COLLECTION
              </span>

            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">

              {[1, 2, 3, 4].map((item) => (
                <button key={item} className="border border-stone-300">
                  <img
                    src={productImage}
                    alt={`Abaya view ${item}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}

            </div>

          </div>

          {/* PRODUCT DETAILS */}

          <div className="lg:col-span-3 py-2">

            <p className="text-xs tracking-[3px] text-stone-500 mb-3">
              AMANI COLLECTION
            </p>

            <h1 className="font-serif text-3xl">
              Classic Abaya
            </h1>

            <p className="text-2xl mt-4 font-serif">
              ₹3,499
            </p>

            <p className="text-sm text-stone-500 leading-7 mt-5">
              Timeless elegance in every detail. Our Classic
              Abaya is crafted from premium crepe fabric,
              offering a graceful flow and all-day comfort.
            </p>

            {/* COLORS */}

            <div className="mt-6">

              <p className="text-sm mb-3">
                Color: {selectedColor}
              </p>

              <div className="flex gap-3">

                {[
                  { name: "Black", color: "#171717" },
                  { name: "Taupe", color: "#8B8177" },
                  { name: "Beige", color: "#DCCBB6" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedColor(item.name)}
                    aria-label={item.name}
                    className={`w-9 h-9 rounded-full border-2 ${
                      selectedColor === item.name
                        ? "border-black ring-2 ring-white ring-offset-2"
                        : "border-stone-300"
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                ))}

              </div>

            </div>

            {/* SIZES */}

            <div className="mt-6">

              <p className="text-sm mb-3">Size</p>

              <div className="flex gap-2">

                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 border text-sm ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-stone-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}

              </div>

            </div>

            {/* ADD TO CART */}

            <button
              onClick={() => setCartCount((prev) => prev + 1)}
              className="w-full mt-7 bg-black text-white py-4 flex justify-center items-center gap-3 hover:bg-stone-700 transition"
            >
              <ShoppingBag size={18} />
              Add to Cart ({cartCount})
            </button>

            {/* VIRTUAL TRY-ON */}

            <button
              onClick={() => setShowTryOn(true)}
              className="w-full mt-3 border border-black py-4 flex justify-center items-center gap-3 hover:bg-black hover:text-white transition"
            >
              <Sparkles size={19} />
              Virtual Try-On

              <span className="bg-red-700 text-white text-[9px] px-2 py-1">
                NEW
              </span>
            </button>

            {/* PRODUCT FEATURES */}

            <div className="grid grid-cols-3 gap-3 border-t border-stone-200 mt-7 pt-6">

              <div className="text-center">
                <Sparkles size={20} className="mx-auto mb-2" />
                <p className="text-xs">Premium Fabric</p>
              </div>

              <div className="text-center border-x border-stone-200">
                <Truck size={20} className="mx-auto mb-2" />
                <p className="text-xs">Free Shipping</p>
                <p className="text-[10px] text-stone-500 mt-1">
                  Above ₹2,000
                </p>
              </div>

              <div className="text-center">
                <RefreshCcw size={20} className="mx-auto mb-2" />
                <p className="text-xs">Easy Returns</p>
              </div>

            </div>

          </div>

          {/* VIRTUAL TRY-ON PANEL */}

          <div className="lg:col-span-5">

            {showTryOn ? (

              <div className="bg-white border border-stone-300 rounded-xl shadow-lg overflow-hidden">

                <div className="flex items-center justify-between px-5 py-5 border-b border-stone-200">

                  <h2 className="font-serif text-xl">
                    Virtual Try-On
                  </h2>

                  <button
                    onClick={() => setShowTryOn(false)}
                    aria-label="Close try-on"
                  >
                    <X size={21} />
                  </button>

                </div>

                {/* PROGRESS STEPS */}

                <div className="flex items-center justify-between px-5 py-5 border-b border-stone-200">

                  {["Upload Photo", "Try On", "Result"].map(
                    (label, index) => (
                      <React.Fragment key={label}>

                        <div className="flex items-center gap-2">

                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                              step >= index + 1
                                ? "bg-black text-white"
                                : "bg-stone-100 text-stone-500"
                            }`}
                          >
                            {index + 1}
                          </span>

                          <span className="text-xs hidden sm:block">
                            {label}
                          </span>

                        </div>

                        {index < 2 && (
                          <div className="flex-1 mx-2 h-px bg-stone-200" />
                        )}

                      </React.Fragment>
                    )
                  )}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">

                  {/* UPLOAD PHOTO */}

                  <div>

                    <h3 className="font-medium text-sm">
                      1. Upload your photo
                    </h3>

                    <p className="text-xs text-stone-500 mt-2 leading-5">
                      Upload a clear, full-length photo to preview
                      your outfit.
                    </p>

                    <label className="mt-5 h-44 border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-stone-50 transition">

                      <Upload size={27} strokeWidth={1.5} />

                      <p className="text-sm mt-4">
                        Click to upload
                      </p>

                      <p className="text-xs text-stone-500 mt-2">
                        JPG, PNG (Max 5MB)
                      </p>

                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />

                    </label>

                    {preview && (
                      <div className="relative mt-4 w-24 h-28">

                        <img
                          src={preview}
                          alt="Your uploaded photo"
                          className="w-full h-full object-cover rounded"
                        />

                        <button
                          onClick={removePhoto}
                          className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1"
                          aria-label="Remove photo"
                        >
                          <X size={12} />
                        </button>

                      </div>
                    )}

                    <button
                      disabled={!photo}
                      onClick={() => setStep(3)}
                      className="w-full mt-6 py-3 bg-black text-white text-sm flex items-center justify-center gap-2 disabled:bg-stone-300"
                    >
                      Next <ArrowRight size={17} />
                    </button>

                  </div>

                  {/* PREVIEW */}

                  <div>

                    <h3 className="font-medium text-sm">
                      {step === 3 ? "3. Your Result" : "2. Outfit Preview"}
                    </h3>

                    <p className="text-xs text-stone-500 mt-2">
                      Preview your selected abaya.
                    </p>

                    <div className="mt-5 bg-[#E5D6C1] rounded overflow-hidden h-[350px]">

                      <img
                        src={step === 3 && preview ? preview : productImage}
                        alt="Abaya preview"
                        className="w-full h-full object-cover object-top"
                      />

                    </div>

                    {step === 3 && (
                      <p className="text-xs text-stone-500 mt-3 text-center">
                        Connect an AI try-on API to generate
                        your personalized outfit image.
                      </p>
                    )}

                  </div>

                </div>

              </div>

            ) : (

              <button
                onClick={() => setShowTryOn(true)}
                className="w-full border border-stone-300 bg-white p-6 flex items-center justify-center gap-3"
              >
                <Sparkles size={20} />
                Open Virtual Try-On
              </button>

            )}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-[#F1EAE1] py-16 px-6 md:px-10">

        <div className="max-w-[1600px] mx-auto">

          <h2 className="font-serif text-3xl md:text-4xl">
            How It Works
          </h2>

          <p className="text-stone-600 mt-3 mb-12">
            See how easy it is to try on your favorite outfits.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                icon: Shirt,
                title: "1. Choose Product",
                desc: "Select the outfit you love from our collection.",
              },
              {
                icon: Upload,
                title: "2. Upload Your Photo",
                desc: "Add a clear photo of yourself.",
              },
              {
                icon: Cpu,
                title: "3. AI Processes",
                desc: "AI technology generates your virtual outfit preview.",
              },
              {
                icon: ImageIcon,
                title: "4. View Result",
                desc: "View your personalized try-on result.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index}>

                  <div className="w-20 h-20 rounded-full bg-[#E7DED4] flex items-center justify-center mb-6">
                    <Icon size={30} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-medium text-sm">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-500 leading-6 mt-3">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;